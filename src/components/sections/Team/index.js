import React, { Component } from 'react';
import { Element } from 'react-scroll';
import './TeamSection.css';

import { motion } from 'framer-motion';
import ScrollOnView from '../../common/ScrollOnView';

import { withAuth0 } from '@auth0/auth0-react';
import { Row, Col, Card,Container } from 'react-bootstrap';

const variants = {
  hidden: { opacity: 0, y: -200 },
  visible: { opacity: 1, y: 0 },
};

class Team extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      myTeam: [],
    };
  }
  checklogo( teamName,logo ){
    if ( teamName.toLowerCase() === 'juventus' ){
      return 'https://creativereview.imgix.net/content/uploads/2017/01/Juve-sq.jpg';
    }else{
      return logo;
    }
  }
  render() {
    const { myTeam } = this.props;
    console.log( 'myTeam', myTeam );
    return(
      <>
        <Element name='scrollToTeam' />
        <section className='c-TeamSection c-TeamSection__background'>
          <ScrollOnView reverse>
            <motion.div
              className='c-HeroSection__content flex flex-col'
              initial='hidden'
              animate='visible'
              variants={variants}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Container>
                <Row>
                  <Col>
                    {
                      <Card
                        className='card-profile shadow mt--300 px-8'

                        key={'1'}

                      >
                        <Row className='justify-content-center'>
                          <Col className='order-lg-2 '>
                            <Card.Img
                              variant='top'
                              alt='...'
                              className='mt-0'
                              src={this.checklogo( myTeam[0].strTeamName , myTeam[0].strTeamLogo ) }
                              width="50%"
                            />
                          </Col>
                        </Row>
                        <div className='text-center mt-5'>
                          <h3>{myTeam[0].strTeamName}</h3>
                          <div className='h6 font-weight-300'>
                            <i className='ni location_pin mr-2' />
                            {myTeam[0].strFormedYear}
                          </div>
                          <div className='h6 mt-4'>
                            <i className='ni business_briefcase-24 mr-2' />
                            {myTeam[0].strLeagueName}
                          </div>

                          <Card.Text className='mb-4' >
                            {myTeam[0].strStadiumInfo[0]}
                          </Card.Text>
                          <Card.Text className='mb-4' >
                            {myTeam[0].strTeamCountry}
                          </Card.Text>
                        </div>
                      </Card>
                    }
                  </Col>
                  <Col>
                    {
                      <Card
                        className='card-profile shadow mt--300 px-8'

                        key={'1'}

                      >
                        <Row className='justify-content-center'>
                          <Card.Img

                            variant='top'
                            alt='...'
                            className='mt-4'
                            src={myTeam[0].strTeamJersey}
                            width="50%"
                          />

                        </Row>
                        <div className='text-center mt-5'>
                          <h3>{myTeam[0].currentSeason}</h3>

                        </div>
                      </Card>
                    }
                  </Col>
                </Row>
              </Container>

            </motion.div>
          </ScrollOnView>
        </section>
      </>
    );
  }
}

export default withAuth0( Team );
