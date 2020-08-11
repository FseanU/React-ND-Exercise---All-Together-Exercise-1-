import React from 'react'
import User from './User';

class UserList extends React.Component {
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
        {this.props.users.map((user)=>(
          <User key={user.username} user={user}/>
        ))}
        <button onClick={this.toggleGameDisplay}>{this.state.display? 'Hide':'Show'}</button>
      </div>
    )
  }
}

export default UserList