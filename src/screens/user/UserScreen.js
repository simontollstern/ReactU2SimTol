import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../../components/card/Card';

class UserScreen extends Component{
  render(){

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
