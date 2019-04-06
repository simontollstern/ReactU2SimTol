import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../../components/card/Card';
import style from './LoginScreen.module.css';

class LoginScreen extends Component{
  redirect = (e) => {
    e.preventDefault();
    this.props.history.push('/');
  }

  render(){
    return(
      <Card info="Enter a username and log in">
        <div className={style.loginScreen}>
          <form onSubmit={this.redirect}>
            <input type="text" />
            <input type="submit" value="Log in" />
          </form>
        </div>
      </Card>
    );
  }
}

LoginScreen.propTypes = {
  history: PropTypes.object.isRequired
}

export default LoginScreen;
