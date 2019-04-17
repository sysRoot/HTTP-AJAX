import React, { Component } from 'react';

import './App.css';
import Friends from "./components/Friends"
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      friends: []
    }
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/friends`)
      .then(res => { console.log(res.data, `RESPONSE`)
        this.setState({ friends: res.data })})
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <Friends friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
