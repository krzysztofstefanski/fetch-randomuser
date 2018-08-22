import React, { Component } from 'react';

import './App.css';

class App extends Component {
  
  state = {
    data : null
  }

  componentWillMount(){
    fetch("https://randomuser.me/api?results=10")
    .then(response =>response.json())
    .then(data => this.setState({
      randomUserData:data.results
    })
  )
  
  }
  
  render() {
    return (
      <div>
        {this.state.randomUserData &&
          this.state.randomUserData.map(user => (
            <div key={user.login.uuid}>
              <img src={user.picture.medium } alt="" />
              <br />
              {user.name.first + " "}
              {user.name.last + " "}
              <br /> {user.email}
              <hr />
            </div>
          ))}
      </div>
    );
  }
}

export default App;
