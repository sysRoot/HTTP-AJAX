import React, { Component } from "react";
import axios from "axios";

class Friends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      name: ``,
      age: null,
      email: ``,

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
      .post("http://localhost:5000/friends", {
        name: this.state.name,
        age: parseInt(this.state.age),
        email: this.state.email,
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
    this.setState({ name: ``, age: null, email: `` });
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
    this.setState({ name: ``, age: null, email: `` });
  };

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  editHandler = (event) => {

  };

  render() {
    const view = {};
    const edit = {};
    
    return (
      <>
        <h2>Friends List</h2>
        <form action="submit" onSubmit={this.addFriendHandler}>
          <input
            type="text"
            name="name"
            onChange={this.changeHandler}
            value={this.props.name}
            placeholder="Name"
          />
          <input
            type="number"
            name="age"
            onChange={this.changeHandler}
            value={this.props.age}
            placeholder="Age"
          />
          <input
            type="email"
            name="email"
            onChange={this.changeHandler}
            value={this.props.email}
            placeholder="E-Mail"
          />
          <button type="submit">Add Friend</button>
        </form>
        {this.state.friends.map(cur => {
          return (
            <>
              <div
                key={cur.id}
                onDoubleClick={this.editHandler}
                style={view}
              >
                <p>{cur.name}</p>
                <p>{cur.age}</p>
                <p>{cur.email}</p>
              </div>
              <form action="submit" style={edit} onDoubleClick={this.editHandler}>
                <input
                  type="text"
                  onChange={this.changeHandler}
                  placeholder={cur.name}
                  value={this.props.name}
                />
                <input
                  type="age"
                  onChange={this.changeHandler}
                  placeholder={cur.age}
                  value={this.props.age}
                />
                <input
                  onDoubleClick={this.editHandler}
                  type="email"
                  onChange={this.changeHandler}
                  placeholder={cur.email}
                  value={this.props.email}
                />
              </form>
            </>
          );
        })}
      </>
    );
  }
}

export default Friends;
