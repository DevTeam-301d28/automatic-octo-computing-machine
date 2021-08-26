/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { motion } from 'framer-motion';
import { Container } from 'react-bootstrap';
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
      content: false,
      showModal: false,
      myTeam: [],
      showTeam: false,
      myTeamPlayers: [],
      showPlayers: false,
      events: [],
      showEvents: false,
      leaguesData: [],
      allTeamsData: [],
      nickname: '',
      favouriteleague: '',
      favTeamName: '',
      favTeamId: 0,
      selectedSport: '',
    };
  }

  componentDidMount = () => {
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
              this.setState( {
                userInfo: response.data,
              } );
              console.log( 'this One', this.state.userInfo );
              this.checkdata();
            } )
            .catch( ( error ) => console.log( error.message ) );
        } )
        .catch( ( error ) => console.log( error.message ) );
    }
  };

  checkdata() {
    console.log( 'checkdata', this.state.userInfo );
    if ( this.state.userInfo.selectedSport === 'NA' ) {
      this.setState( {
        isNew: true,
      } );
    } else {
      this.setState( {
        isNew: false,
        content: true,
      } );
      this.getTeamDetails();
    }
  }

  getTeamDetails = async () => {
    try {
      let axiosResponse = await axios.get(
        `${process.env.REACT_APP_AUTH0_BASEURL}/lookupByName/${this.state.userInfo.favTeamName}`,
      );
      this.setState( {
        myTeam: axiosResponse.data,
        showTeam: true,
      } );
    } catch ( error ) {
      console.log( error );
    }
    this.getPlayersDetails();
  };
  getPlayersDetails = async () => {
    try {
      let axiosResponse = await axios.get(
        `${
          process.env.REACT_APP_AUTH0_BASEURL
        }/players/${this.state.userInfo.favTeamName.toLowerCase()}`,
      );
      this.setState( {
        myTeamPlayers: axiosResponse.data,
        showPlayers: true,
      } );
      console.log( this.state.myTeamPlayers );
    } catch ( error ) {
      console.log( error );
    }
    this.getEventsDetails();
  };

  getEventsDetails() {
    let userInfo = JSON.parse( localStorage.getItem( 'userInfo' ) );
    console.log( userInfo );
    let config = {
      method: 'get',
      baseURL: process.env.REACT_APP_AUTH0_BASEURL,
      url: `/teamEvents/${userInfo.favTeamId}`,
    };
    axios( config )
      .then( ( response ) => {
        console.log( response.data );
        this.setState( {
          events: response.data,
          showEvents: true,
        } );
        console.log( response.data );
      } )
      .catch( ( error ) => console.log( error.message ) );
  }

  render() {
    return (
      <Container
        fluid
        className='c-HeroSection flex flex-center flex-space-btw'
      >
        {this.state.isNew && <SportModal userInfo={this.state.userInfo} />}
        {this.state.content && (
          <>
            {this.state.showTeam && <Team myTeam={this.state.myTeam} />}
            {this.state.showPlayers && (
              <Players myTeamPlayers={this.state.myTeamPlayers} />
            )}
            {this.state.showEvents && (
              <>
                <Events myTeamEvents={this.state.events} />
                <Explore />
              </>
            )}
          </>
        )}
      </Container>
    );
  }
}

export default withAuth0( Welcome );
