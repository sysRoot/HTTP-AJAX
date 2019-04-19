import React, { Component } from "react";

import "./App.css";
import Friends from "./components/Friends";
// import axios from "axios";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     friends: [],
  //     name: ``,
  //     age: 0,
  //     email: ``,
  //     editing: false
  //   };
  // }

  // componentDidMount() {
  //   axios
  //     .get(`http://localhost:5000/friends`)
  //     .then(res => {
  //       console.log(res.data, `RESPONSE`);
  //       this.setState({ friends: res.data });
  //     })
  //     .catch(err => console.log(err));
  // }

  // addFriendHandler = event => {
  //   event.preventDefault();
  //   axios
  //     .post("http://localhost:5000/friends", {
  //       name: this.state.name,
  //       age: parseInt(this.state.age),
  //       email: this.state.email
  //     })
  //     .then(res =>
  //       this.setState(prevState => {
  //         return {
  //           friends: res.data
  //         };
  //       })
  //     )
  //     .catch(err => console.log(err, `add friend hiccup`));
  //   //Blank state for next input
  //   this.setState({ name: ``, age: 0, email: `` });
  // };

  // changeHandler = event => {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   });
  // };


  render() {
    return (
      <div className="App">
        <Friends
          // addFriend={this.addFriendHandler}
          // friends={this.state.friends}
          // changer={this.changeHandler}
          // age={this.state.age}
          // name={this.state.name}
          // email={this.state.email}
          // editing={this.state.editing}
          // edit={this.editHandler}
        />
      </div>
    );
  }
}

export default App;
