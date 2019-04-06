import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../../components/card/Card';

// Page showing a single user (/user/:name)
// The router redirects to /login if no param is passed
class UserScreen extends Component{
  render(){

    // Logic for rendering either a user or an error message if no params are passed
    let message;
    if(this.props.match.params.name){
      message = <p>User: {this.props.match.params.name}</p>;
    }else{
      message = <p>No user is shown because no params were sent</p>
    }

    return(
      <Card>
        {message}
      </Card>
    );
  }
}

UserScreen.propTypes = {
  match: PropTypes.object.isRequired
}

export default UserScreen;
