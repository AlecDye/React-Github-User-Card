import React from 'react';
import axios from 'axios';
import './App.css';

//! Use Class Components only! NO useEffect

class App extends React.Component {
  // initializing state
  constructor() {
    console.log("Constructor firing")
    super();
  }

  componentDidMount() {
    console.log("CDM firing")
    axios
      .get("https://api.github.com/users/alecdye")
      .then(res => {
        console.log(res.data)
        // res.data
        this.setState({
          users: res.data
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    console.log("Rendering...")
    return (
      <div className="App">
        <header className="App-header">
          GitHub Users!
      </header>
      </div>
    );
  }
}

export default App;
