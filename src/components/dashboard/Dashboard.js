import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from '../card/Card';
import UserList from '../userlist/UserList';
import User from '../user/User';
import EditUser from '../edituser/EditUser';
import style from './Dashboard.module.css';

// Wrapper for everything and handles logic for users
class Dashboard extends Component{
  constructor(props){
    super(props);
    this.state = {
      users: [
        {id: 1, name: 'Mimmi', isActive: true},
        {id: 2, name: 'Kalle', isActive: false},
        {id: 3, name: 'Klara', isActive: true},
        {id: 4, name: 'John', isActive: true},
        {id: 5, name: 'Stina', isActive: false}
      ],
      usersToggled: true,
      colorToggled: false
    }
  }

  toggleUsers = () => {
    this.setState({ usersToggled: !this.state.usersToggled });
  }

  // Toggle between 2 colors (true/false)
  toggleColor = () => {
    this.setState({ colorToggled: !this.state.colorToggled });
  }

  // Adds a new user to the user array with data from parameter
  // This method of creating an unique id feels bad, there are probably better ways
  addUser = (input) => {
    let largestID = 0;
    for(let user of this.state.users){
      if(user.id > largestID){
        largestID = user.id;
      }
    }
    this.setState({ users: this.state.users.concat({id: largestID + 1, name: input, isActive: true})});
  }

  // Removes the last user from the array
  removeUser = () => {
    this.setState({ users: this.state.users.slice(0, this.state.users.length - 1)})
  }

  render(){
    return(
      <div className={style.dashboard}>
        <Card>
          <UserList onToggleUsers={this.toggleUsers} onToggleColor={this.toggleColor} usersToggled={this.state.usersToggled}>
            {this.state.users.map((user, key) => {
              if(user.isActive === this.state.usersToggled){
                return <Link key={key} to={`/user/${user.name}`}><User id={user.id} name={user.name} usersToggled={this.state.usersToggled} colorToggled={this.state.colorToggled} />
              }
            })}
          </UserList>
        </Card>
        <Card>
          <EditUser onAddUser={this.addUser} onRemoveUser={this.removeUser} />
        </Card>
      </div>
    );
  }
}

export default Dashboard;
