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
      .post("http://localhost:5000/friends", {
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
    this.setState({ editing: false, name: ``, age: null, email: `` });
  };

  setEditHandler = (event, ids) => {
    this.setState({ editing: true, id: ids, name: "", age: "", email: "" });
  };

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  editHandler = (event, ids) => {
    this.setState({ editing: true, id: ids, name: "", age: "", email: "" });
  };

  render() {
    return (
      <>
        <h1>Friends List</h1>
        <h4>Double-click a friend to edit</h4>
        {!this.state.editing && (
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
        )}
        {this.state.editing && (
          <form action="submit" onSubmit={this.updateFriendHandler}>
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
            <button type="submit">Update</button>
          </form>
        )}
        {this.state.friends &&
          this.state.friends.map(cur => {
            return (
              <div
                key={cur.id}
                onDoubleClick={event => this.editHandler(event, cur.id)}
              >
                <p>{cur.name}</p>
                <p>{cur.age}</p>
                <p>{cur.email}</p>
              </div>
            );
          })}
      </>
    );
  }
}

export default Friends;
