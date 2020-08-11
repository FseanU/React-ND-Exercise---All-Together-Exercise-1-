import React from 'react';

class AddUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      user: {
        firstName: '',
        lastName: '',
        username: '',
      },
      userExist: false
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const newUser = this.state.user;
    const userExist = this.userExist(this.state.user)
    // const {firstName, lastName, username} = this.state;
    // users.push({firstName, lastName, username, game: 0 });
    console.log(this.userExist(this.state.user))
    if (!this.userExist(this.state.user)) {
      this.props.onAddUser(newUser);
    } 

    this.setState({
      userExist
    })
  }

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState(currState => ({
      user: {
        ...currState.user,
        [name]: value
      }
    }))
  }

  isDisabled = () => {
    const {firstName, lastName, username} = this.state.user;
    return firstName === '' || lastName === '' || username === ''
  }

  userExist = (newUser) => {
    const users = this.props.users;
    for (let user of users) {
      if (user.username === newUser.username) {
        console.log('user exist');
        return true
      } 
    }
    console.log('user not exist')
    return false
  }

  render() {
    return (
      <div>
        <h1>Add New User</h1>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            placeholder="first name" 
            name="firstName"
            value={this.state.user.firstName} 
            onChange={this.handleChange}
          />
          <input 
            type="text" 
            placeholder="last name" 
            name="lastName"
            value={this.state.user.lastName}
            onChange={this.handleChange}
          />
          <input 
            type="text" 
            placeholder="username" 
            name="username"
            value={this.state.user.username}
            onChange={this.handleChange}
          />
          {/* <input type="submit" value="Add"/> */}
          <button disabled={this.isDisabled()}>Add</button>
          <p className='error'>
            {this.state.userExist? 'The username is already used by other user': ''}
          </p>
        </form>
      </div>
    )
  }
}

export default AddUser;