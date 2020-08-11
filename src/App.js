import React, { Component } from 'react';
import AddUser from './AddUser';
import logo from './logo.svg';
import './App.css';

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

const users = [
  {firstName: "Enrique", lastName: "Bruen", username: "Bart", game: 0},
  {firstName: "Delilah", lastName: "Keebler", username: "Linnie", game: 3},
  {firstName: "Chelsie", lastName: "Leannon", username: "Lexus", game: 14},
  {firstName: "Charlie", lastName: "Langworth", username: "Miguel", game: 8},
]

class UserList extends Component {
  state = {
    display: true
  }
  toggleGameDisplay = () => {
    this.setState((currState)=>({
      display: !currState.display
    }))
  }

  render() {
    return (
      <div>
        {users.map((user)=>(
          <User key={user.username} user={user}/>
        ))}
        <button onClick={this.toggleGameDisplay}>{this.state.display? 'Hide':'Show'}</button>
      </div>
    )
  }
}

class User extends Component {
  render() {
    const {user} = this.props;
    return (
      <p>{user.username} played {user.game} {user.game > 1 ? "games" : "game"}</p>
    )
  }
}



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <UserList />
        <AddUser />
      </div>
    );
  }
}

export default App;
