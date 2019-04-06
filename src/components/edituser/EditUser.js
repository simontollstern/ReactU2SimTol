import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './EditUser.module.css';

// Component containing the form for adding and removing users
class EditUser extends Component{
  constructor(props){
    super(props);
    this.state = {
      inputValue: ''
    }
  }

  // Updates the state with the value from the input field
  updateInputValue = (e) => {
    this.setState({ inputValue: e.target.value });
  }

  // Sends an event (with the input from state) to the Dashboard component to add a new user
  addUser = (e) => {
    e.preventDefault();
    if(this.state.inputValue !== ''){
      this.props.onAddUser(this.state.inputValue);
      this.setState({ inputValue: '' });
    }
  }

  // Sends and event to the Dashboard component to remove a user
  removeUser = () => {
    this.props.onRemoveUser();
  }

  render(){
    return(
      <div className={style.edituser}>
        <form onSubmit={e => this.addUser(e)}>
          <input value={this.state.inputValue} onChange={e => this.updateInputValue(e)} />
        </form>
        <button onClick={e => this.addUser(e)}>Add user</button>
        <button onClick={this.removeUser}>Remove user</button>
      </div>
    );
  }
}

EditUser.propTypes = {
  onAddUser: PropTypes.func.isRequired,
  onRemoveUser: PropTypes.func.isRequired
}

export default EditUser;
