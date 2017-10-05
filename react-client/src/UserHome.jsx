import React, { Component } from 'react';
import ShowListUser from './components/ShowListUser.jsx';
import Navbar from './components/Navbar.jsx';
import { Container, Header, Icon, Message } from 'semantic-ui-react'

class UserHome extends Component {
  constructor(props) {
  	super(props)
  }

  render () {
    return (<Container fluid>

      <Navbar loggedIn='true'/>
      <Header as='h3' textAlign='center'>
        <Icon name='film'/> Welcome back, name!
      </Header>
      <Message>
        <Message.Header>
          No TV show added yet
        </Message.Header>
        <p>
          Find a TV show to add to your calendar!
        </p>
      </Message>
      <ShowListUser />

    </Container>);
  }
}

export default UserHome;