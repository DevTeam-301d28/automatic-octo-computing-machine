import React, { Component } from 'react';
import { Element } from 'react-scroll';
import './HeroSection.css';
import ScrollOnView from '../../common/ScrollOnView';
import { withAuth0 } from '@auth0/auth0-react';
import { Container, Row, Col, Card } from 'react-bootstrap';

import axios from 'axios';
// import { GiDrippingSword } from 'react-icons/gi';

class Events extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      events: '',
    };
  }
  getEvents( data ) {
    let config = {
      method: 'get',
      baseURL: process.env.REACT_APP_AUTH0_BASEURL,
      url: `/teamEvents/${data.favTeamId}`,
    };
    let eventsarr = [];
    axios( config )
      .then( ( response ) => {
        console.log( response.data );
        eventsarr = response.data;
      } )
      .catch( ( error ) => console.log( error.message ) );
    return(
      <>
        {eventsarr.map( ( element, index ) => (

          <Card className='shadow rounded ' key={index} style={{ minWidth: '20rem' }}>
            <Card.Body>
              <Card.Title>{element.strFilename}</Card.Title>
              <Card.Text> Event season : {element.strSeason}</Card.Text>
              <Card.Text>Event league :{element.strLeague}</Card.Text>
              <Card.Text>Event league :{element.strLeague}</Card.Text>
              <Card.Text>Event league :{element.strLeague}</Card.Text>
              <Card.Text>Event league :{element.strLeague}</Card.Text>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        ) )}
      </>
    );
  }
  render() {
    return (
      <>
        <Element name='scrollToEvents' />

        <section className='c-TeamSection'>
          <ScrollOnView reverse>
            <Container>
              <Row>
                <Col>
                  <h1 className='c-HeroSection__title'>
                    <Row style={{ padding: '0px' }}>
                      {this.getEvents( this.props.stateData )}
                    </Row>
                  </h1>
                </Col>
              </Row>
            </Container>
          </ScrollOnView>
        </section>
      </>
    );
  }
}


export default withAuth0( Events );
