import React, { Component } from 'react';
import { Element } from 'react-scroll';
import './HeroSection.css';
import ScrollOnView from '../../common/ScrollOnView';
import { withAuth0 } from '@auth0/auth0-react';
import { Container, Row, Card } from 'react-bootstrap';

class Events extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      events: false,
      eventsDetails: [],
      userData: null,
    };
  }

  componentDidMount() {
    if ( this.props.stateEvents ) {
      this.setState( {
        events: true,
        stateData: this.props.stateData,
      } );
    }
  }

  renderCards() {
    let topFiveEvents = [];
    if ( this.props.stateEvents.length > 5 ) {
      topFiveEvents = this.props.stateEvents.length.splice( 0, 4 );
    } else {
      topFiveEvents = this.props.stateEvents;
    }
    return topFiveEvents.map( ( event, index ) => (
      <Card
        className='shadow rounded m-1'
        style={{ width: '18rem' }}
        key={index}
      >
        <Card.Body>
          <Card.Title className='text-center'> | {event.eventDate} </Card.Title>
          season : {event.season}
          <Card.Text>{event.eventName}</Card.Text>
          <Card.Text>
            {event.homeTeamScore} vs {event.awayTeamScore}
          </Card.Text>
          <Card.Text>{event.league}</Card.Text>
          <Card.Text></Card.Text>
        </Card.Body>
      </Card>
    ) );
  }

  render() {
    return (
      <>
        <Element name='scrollToEvents' />
        <section className='c-HeroSection'>
          <ScrollOnView reverse>
            <Container className='c-HeroSection__background'>
              <Row>{this.renderCards()}</Row>
            </Container>
          </ScrollOnView>
        </section>
      </>
    );
  }
}
export default withAuth0( Events );
