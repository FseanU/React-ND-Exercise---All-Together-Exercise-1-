import React from 'react'

class User extends React.Component {
  render() {
    const {user} = this.props;
    return (
      <p>{user.username} played {user.numOfGamePlayed} {user.numOfGamePlayed > 1 ? "games" : "game"}</p>
    )
  }
}

export default User