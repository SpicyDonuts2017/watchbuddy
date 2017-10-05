import React, { Component } from 'react';
import ShowList from './components/ShowList.jsx';
import Navbar from './components/Navbar.jsx';
import { Container, Header, Icon } from 'semantic-ui-react';
import $ from 'jquery';


class Home extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // $.ajax({
    //   url: '/recommend',
    //   method: 'GET',
    //   contentType: 'application/json',
    //   success: data => console.log(data)
    // });
  }

  render () {
    return (<Container fluid>

      <Navbar changeView={this.props.changeView}/>
      <Header as='h3' textAlign='center'>
        <Icon name='film'/> Recommended
      </Header>
      <ShowList />

    </Container>);
  }
}

export default Home;