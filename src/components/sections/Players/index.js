import React, { Component } from 'react';
import { Element } from 'react-scroll';
import './TeamSection.css';
import ScrollOnView from '../../common/ScrollOnView';
import { withAuth0 } from '@auth0/auth0-react';

import { Container, Row, Card, Col } from 'react-bootstrap';
class Players extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      playersData: null,
      exists: false,
    };
  }


  checkImageUrl( url ){
  // create an XHR object
    const xhr = new XMLHttpRequest();

    // listen for `onload` event
    xhr.onload = () => {
      if ( xhr.status === 200 ) {
        return url;
      } else {
        return 'https://store.juventus.com/data/store/product/4/47060/product.jpg';
      }
    };

    // create a `HEAD` request
    xhr.open( 'HEAD', url );

    // send request
    xhr.send();
  }

  render() {
    const { myTeamPlayers } = this.props;
    console.log( 'players' , myTeamPlayers[0].players );
    return (
      <>
        <Element name='scrollToLatestPlayers' />
        <section className='c-TeamSection'>
          <ScrollOnView reverse>
            <Container fluid>
              <Row>
                {
                  myTeamPlayers[0].players.map( ( player, index ) => (
                    <Col>
                      <Card
                        className='shadow rounded m-1'
                        style={{ width: '100%' }}
                        key={index}
                      >
                        <Card.Body style={{ padding: '0px', margin: '0px' }}>
                          <Card.Img
                            variant='top'
                            src={player.player_image}
                            // onError={}
                            alt={'no photo'}
                          />
                          <Card.Text> {player.player_name} </Card.Text>
                          <Card.Text>{player.player_number}</Card.Text>
                          <Card.Text>{player.player_type}</Card.Text>
                          <Card.Text></Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ) )}
              </Row>
            </Container>
          </ScrollOnView>
        </section>
      </>
    );
  }
}

export default withAuth0( Players );
