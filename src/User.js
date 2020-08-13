import React from 'react'

class User extends React.Component {
  render() {
    const {user} = this.props;
    return (
      <div>
        {this.props.display ? 
        <p>{user.username} played {user.numOfGamePlayed} {user.numOfGamePlayed > 1 ? "games" : "game"}</p> 
        : <p>{user.username}</p>}
      </div>
    )
  }
}

export default User