import React from 'react';

class AddUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {      
      firstName: '',
      lastName: '',
      username: '',
      
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // const {firstName, lastName, username} = this.state;
    // users.push({firstName, lastName, username, game: 0 });
    console.log(this.state)
  }

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
      
    })
  }

  isDisabled = () => {
    const {firstName, lastName, username} = this.state;
    return firstName === '' || lastName === '' || username === ''
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
            value={this.state.firstName} 
            onChange={this.handleChange}
          />
          <input 
            type="text" 
            placeholder="last name" 
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <input 
            type="text" 
            placeholder="username" 
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          {/* <input type="submit" value="Add"/> */}
          <button disabled={this.isDisabled()}>Add</button>
        </form>
      </div>
    )
  }
}

export default AddUser;