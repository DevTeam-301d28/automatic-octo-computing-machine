import React, { Component } from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';
import { getConfig } from 'configs/config';
import axios from 'axios';
import './HeroSection.css';
import SportModal from './Modal/SportModal';
import Team from 'components/sections/Team';
import Players from 'components/sections/Players';
import Events from 'components/sections/Events';
import Explore from 'components/sections/Explore';
const variants = {
  hidden: { opacity: 0, y: -200 },
  visible: { opacity: 1, y: 0 },
};

class Welcome extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      userInfo: '',
      isNew: false,
      currentStep: 1,
      leaguesData: [],
      allTeamsData: [],
      nickname: '',
      favouriteleague: '',
      favTeamName: '',
      favTeamId: 0,
      showModal: true,
      selectedSport: '',
      user: this.props.userdata,
    };

  }

  componentDidMount = async () => {
    if ( this.props.auth0.isAuthenticated ) {
      this.props.auth0
        .getIdTokenClaims()
        .then( ( res ) => {
          let jwt = res.__raw;
          let config = {
            headers: { Authorization: 'Bearer ' + jwt },
            audience: getConfig.audience,
            method: 'get',
            baseURL: process.env.REACT_APP_AUTH0_BASEURL,
            url: '/checkJwt',
          };
          axios( config )
            .then( ( response ) => {
              console.log( 'inside didmount', response.data );
              console.log( response.data.selectedSport );
              if ( response.data.selectedSport === 'NA' ) {
                this.setState( {isNew: true} );
              }
              console.log( response.data );
              this.setState( {
                userInfo: response.data,
              } );
            }

            )
            .catch( ( error ) => console.log( error.message ) );
        } )
        .catch( ( error ) => console.log( error.message ) );
    }
  };

  prepareRequiredData = () => {};

  render() {
    return (
      <Container
        fluid
        className='c-HeroSection flex flex-center flex-space-btw'
      >
        {this.state.isNew && ( <SportModal stateData={this.state.userInfo} /> )}
        <Row>
          <Col></Col>
          <Col>
            <section>
              <motion.div
                className='c-HeroSection__content flex flex-col'
                initial='hidden'
                animate='visible'
                variants={variants}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <p className='c-HeroSection__paragraph'></p>
              </motion.div>
            </section>
          </Col>
        </Row>
        <Team />
        <Players />
        <Events stateData={this.state.userInfo}/>
        <Explore />
      </Container>
    );
  }
}

export default withAuth0( Welcome );
