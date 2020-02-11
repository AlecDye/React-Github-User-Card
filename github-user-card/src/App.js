import React from 'react';
import axios from 'axios';
import './App.css';
import UserCard from "./UserCard";
import FollowerCard from './FollowerCard';

//! Use Class Components only! NO useEffect

class App extends React.Component {
  // initializing state
  constructor() {
    console.log("Constructor firing")
    super();
    this.state = {
      userList: [],
      followerList: []
    }
  }

  componentDidMount() {
    // fetching API for user's data
    console.log("CDM firing")
    axios
      .get("https://api.github.com/users/alecdye")
      .then(res => {
        // res.data
        this.setState({
          userList: res.data
        })
        console.log("User", res.data)
      })
      .catch(err => console.log("User error", err))

    // fetching API for user's followers
    axios
      .get("https://api.github.com/users/alecdye/followers")
      .then(res => {
        this.setState({
          followerList: res.data
        })
        console.log("Follower", res.data)
      })
      .catch(err => console.log("Follower error", err))
  }

  render() {
    // rendering components
    console.log("Rendering...")
    return (
      <div className="App">
        <div className="users">
          <UserCard userList={this.state.userList} />
          <FollowerCard followerList={this.state.followerList} />
        </div>
      </div>
    );
  }
}

export default App;
