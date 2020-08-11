import React from 'react'

class User extends React.Component {
  render() {
    const {user} = this.props;
    return (
      <p>{user.username} played {user.game} {user.game > 1 ? "games" : "game"}</p>
    )
  }
}

export default User