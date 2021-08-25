import React, { Component } from 'react';
import { Element } from 'react-scroll';
import './TeamSection.css';

import { motion } from 'framer-motion';
import ScrollOnView from '../../common/ScrollOnView';

import { withAuth0 } from '@auth0/auth0-react';
import { Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';

const variants = {
  hidden: { opacity: 0, y: -200 },
  visible: { opacity: 1, y: 0 },
};

class Team extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      myTeam: [],
      exists: false,
    };
  }
  componentDidMount = async () => {
    let userInfo = JSON.parse( localStorage.getItem( 'userInfo' ) );
    console.log( userInfo );
    try {
      let axiosResponse = await axios.get(
        `https://myclub-1.herokuapp.com/lookupByName/${userInfo.favTeamName}`,
      );
      console.log( axiosResponse );

      this.setState( {
        myTeam: axiosResponse.data,
        exists: true,
      } );
    } catch ( error ) {
      console.log( error );
    }
  };

  render() {
    return (
      <>
        <Element name='scrollToTeam' />
        <section className='c-ProfileSection'>
          <ScrollOnView reverse>
            <motion.div
              className='c-HeroSection__content flex flex-col'
              initial='hidden'
              animate='visible'
              variants={variants}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {this.state.exists &&
                this.state.myTeam.map( ( response,index ) => (
                  <Card
                    className='card-profile shadow mt--300 px-8'
                    width='100%'
                    key={index}
                  >
                    <Row className='justify-content-center'>
                      <Col className='order-lg-2 card-profile-image'>
                        <img
                          alt='...'
                          className='rounded-circle mt-4'
                          src={response.teamImage}
                        />
                      </Col>
                    </Row>
                    <div className='text-center mt-5'>
                      <h3>{response.teamNameDetails}</h3>
                      <div className='h6 font-weight-300'>
                        <i className='ni location_pin mr-2' />
                        Amman, Jordan
                      </div>
                      <div className='h6 mt-4'>
                        <i className='ni business_briefcase-24 mr-2' />
                        {response.formedYear}
                      </div>
                      <div>
                        <i className='ni education_hat mr-2' />
                        {response.strStadiumLocation}
                      </div>
                    </div>
                    <div className='mt-5 py-5 border-top text-center'>
                      <Row className='justify-content-center'></Row>
                    </div>
                  </Card>
                ) )}
            </motion.div>
          </ScrollOnView>
        </section>
      </>
    );
  }
}

export default withAuth0( Team );
