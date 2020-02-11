import React from 'react';
import axios from 'axios';
import './App.css';

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
    // fetching API
    console.log("CDM firing")
    axios
      .get("https://api.github.com/users/alecdye")
      .then(res => {
        // res.data
        this.setState({
          userList: res.data
        })
        // console.log(res.data)
      })
      .catch(err => console.log("User error", err))

    axios
      .get("https://api.github.com/users/alecdye/followers")
      .then(res => {
        this.setState({
          followerList: res.data
        })
      })
      .catch(err => console.log("Follower error", err))
  }

  render() {
    // rendering components
    console.log("Rendering...")
    return (
      <div className="App">
        <header className="App-header">
          GitHub Users!
          {/* UserCard component this.state.userList
              Follower Card component this.state.followerList */}
        </header>
        <div className="users">
        </div>
      </div>
    );
  }
}

export default App;
