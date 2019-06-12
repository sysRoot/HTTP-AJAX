import React, { Component } from 'react';
import axios from 'axios';

class Friends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      name: ``,
      age: null,
      email: ``,
      id: null,
      editing: false
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/friends`)
      .then(res => {
        console.log(res.data, `RESPONSE`);
        this.setState({ friends: res.data });
      })
      .catch(err => console.log(err));
  }

  addFriendHandler = event => {
    event.preventDefault();
    axios
      .post('http://localhost:5000/friends', {
        name: this.state.name,
        age: parseInt(this.state.age),
        email: this.state.email
      })
      .then(res =>
        this.setState(prevState => {
          return {
            friends: res.data
          };
        })
      )
      .catch(err => console.log(err, `add friend hiccup`));
    //Blank state for next input
    this.setState({ name: ``, age: 0, email: `` });
  };

  updateFriendHandler = event => {
    axios
      .put(`http://localhost:5000/friends/${this.state.id}`, {
        name: this.state.name,
        age: parseInt(this.state.age),
        email: this.state.email
      })
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => console.log(err));
    this.setState({ editing: false, name: ``, age: 0, email: `` });
  };

  setEditHandler = (event, ids) => {
    event.preventDefault();
    this.setState({ editing: true, id: ids, name: ``, age: 0, email: `""` });
  };

  removeFriendHandler = (event, ids) => {
    event.preventDefault();
    this.setState({ id: ids });
    axios
      .delete(`http://localhost:5000/friends/${ids}`)
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => console.log(err));
  };

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <>
        <h1>Friends List</h1>
        <h4>Double-click a friend to edit</h4>
        {!this.state.editing && (
          <form action='submit' onSubmit={this.addFriendHandler}>
            <input
              type='text'
              name='name'
              onChange={this.changeHandler}
              value={this.state.name}
              placeholder='Name'
            />
            <input
              type='number'
              name='age'
              onChange={this.changeHandler}
              value={this.state.age}
              placeholder='Age'
            />
            <input
              type='email'
              name='email'
              onChange={this.changeHandler}
              value={this.state.email}
              placeholder='E-Mail'
            />
            <button type='submit'>Add Friend</button>
          </form>
        )}
        {this.state.editing && (
          <form action='submit' onSubmit={this.updateFriendHandler}>
            <input
              type='text'
              name='name'
              onChange={this.changeHandler}
              value={this.props.name}
              placeholder='Name'
            />
            <input
              type='number'
              name='age'
              onChange={this.changeHandler}
              value={this.props.age}
              placeholder='Age'
            />
            <input
              type='email'
              name='email'
              onChange={this.changeHandler}
              value={this.props.email}
              placeholder='E-Mail'
            />
            <button type='submit'>Update</button>
          </form>
        )}
        <div className='friends-list'>
          {' '}
          {this.state.friends &&
            this.state.friends.map(cur => {
              return (
                <div className='friend-card'
                  key={cur.id}
                  onDoubleClick={event => this.editHandler(event, cur.id)}
                >
                  <p>{cur.name}</p>
                  <p>{cur.age}</p>
                  <p>{cur.email}</p>
                  <button
                    onClick={event => this.removeFriendHandler(event, cur.id)}
                  >
                    &times;
                  </button>
                </div>
              );
            })}
        </div>
      </>
    );
  }
}

export default Friends;
