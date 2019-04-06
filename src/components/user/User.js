import React from 'react';
import PropTypes from 'prop-types';
import style from './User.module.css';

// The list items containing the user's names
// This may be an overcomplicated solution, but I couldn't get it to work with
// CSS Modules any other way (I suppose come conditional could be used)
function User(props){
  if(props.colorToggled){
    return <li className={`${style.user} ${style.green}`}>{props.id} {props.name}<span>{props.usersToggled ? 'active' : 'inactive'}</span></li>
  }
  return <li className={`${style.user} ${style.red}`}>{props.id} {props.name}<span>{props.usersToggled ? 'active' : 'inactive'}</span></li>
}

User.propTypes = {
  colorToggled: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  usersToggled: PropTypes.bool.isRequired
}

export default User;
