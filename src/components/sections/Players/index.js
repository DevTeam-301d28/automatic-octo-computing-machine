import React, { Component } from 'react';
import { Element } from 'react-scroll';
import './TeamSection.css';
import ScrollOnView from '../../common/ScrollOnView';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

import { Container, Row, Card } from 'react-bootstrap';

class Players extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      playersData: null,
      exists: false,
    };
  }

  componentDidMount = async () => {
    let userInfo = JSON.parse( localStorage.getItem( 'userInfo' ) );
    console.log( userInfo );
    try {
      let axiosResponse = await axios.get(
        `${
          process.env.REACT_APP_AUTH0_BASEURL
        }/${userInfo.favTeamName.toLowerCase()}`,
      );
      console.log( axiosResponse );
      this.setState( {
        playersData: axiosResponse.data[0],
        exists: true,
      } );
    } catch ( error ) {
      console.log( error );
    }
  };

  // renderPlayersData() {
  //   console.clear();
  //   let topPlayers = this.state.playersData;
  //   console.log( 'theFunction', topPlayers );
  //   console.log( 'theFunction', topPlayers.players );
  //   return topPlayers;
  // }

  render() {
    return (
      <>
        <Element name='scrollToLatestPlayers' />
        <section className='c-TeamSection'>
          <ScrollOnView reverse>
            <Container>
              <Row>
                <h1 className='c-HeroSection__title'> </h1>
                <Row>
                  {this.state.exists &&
                    this.state.playersData.players.map( ( player, index ) => (
                      <Card
                        className='shadow rounded m-1'
                        style={{ width: '100%' }}
                        key={index}
                      >
                        <Card.Body style={{ padding: '0px', margin: '0px' }}>
                          <Card.Img
                            variant='top'
                            src={player.player_image}
                            alt='no data'
                          />

                          <Card.Text> {player.player_name} </Card.Text>
                          <Card.Text>{player.player_number}</Card.Text>
                          <Card.Text>{player.player_type}</Card.Text>
                          <Card.Text></Card.Text>
                        </Card.Body>
                      </Card>
                    ) )}
                </Row>
              </Row>
            </Container>
          </ScrollOnView>
        </section>
      </>
    );
  }
}

export default withAuth0( Players );
