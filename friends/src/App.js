import React, { Component } from "react";

import "./App.css";
import Friends from "./components/Friends";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      name: ``,
      age: ``,
      email: ``
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

  addFriendHandler = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000", {
        name: this.state.name,
        age: this.state.age,
        email: this.state.email
      })
      .then(res =>
        this.setState(prevState => {
          return {
            friends: [...prevState.friends, res.data]
          };
        })
      )
      .catch(err => console.log(err, `add friend hiccup`));
  }
  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  render() {
    return (
      <div className="App">
        <Friends
          addFriend={this.addFriendHandler}
          friends={this.state.friends}
          changer={this.changeHandler}
          age={this.state.age}
          name={this.state.name}
          email={this.state.email}
        />
      </div>
    );
  }
}

export default App;
