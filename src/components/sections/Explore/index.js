import React, { Component } from 'react';
import { Element } from 'react-scroll';
import './HeroSection.css';
import { motion } from 'framer-motion';
import ScrollOnView from '../../common/ScrollOnView';
import { withAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,
  InputGroup,
  Container,
  Col,
  Row,
  FormControl,
  Form,} from 'react-bootstrap';
import axios from 'axios';
import Team from './Team';

const variants = {
  hidden: { opacity: 0, y: -200 },
  visible: { opacity: 1, y: 0 },
};
class Explore extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      teamsData: [],
      strTeam: '',
    };
  }

  getTeamsData = ( e ) => {
    e.preventDefault();
    console.log( 'here' );
    let TeamsUrl = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${e.target.search.value}`;
    axios.get( TeamsUrl ).then( ( response ) => {
      console.log( response );
      this.setState( {
        teamsData: response.data.teams,
      } );
      console.log( this.state.teamsData );
    } );
  };



  render() {
    return (
      <>
        <Element name="scrollToExplore" />
        <section className="c-TeamSection">
          <ScrollOnView reverse>
            <Container>
              <motion.div
                className='c-HeroSection__content flex flex-col'
                initial='hidden'
                animate='visible'
                variants={variants}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <Row>
                  <Col>
                    <Form onSubmit={( e ) => this.getTeamsData( e )}>
                      <InputGroup className='input'>
                        <FormControl
                          placeholder="Search About Your Team"
                          aria-label="Recipient's username"
                          aria-describedby='basic-addon2'
                          name='search'
                        />
                        <Button
                          type='submit'
                          variant='outline-secondary'
                          id='button-addon2'
                        >
                    Button
                        </Button>
                      </InputGroup>
                    </Form>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    {this.state.teamsData.length > 0 &&
                this.state.teamsData
                  .splice( 0, 1 )
                  .map( ( element, index ) => (
                    <Team
                      key={index}
                      teamId={element.idTeam}
                      teamName={element.strTeam}
                      teamImage={element.strTeamBadge}
                      strLeague={element.strLeague}
                      idLeague={element.idLeague}
                      strStadium={element.strStadium}
                      strStadiumThumb={element.strStadiumThumb}
                      strStadiumDescription={element.strStadiumDescription}
                      strStadiumLocation={element.strStadiumLocation}
                      intStadiumCapacity={element.intStadiumCapacity}
                      strWebsite={element.strWebsite}
                      strFacebook={element.strFacebook}
                      strTwitter={element.strTwitter}
                      strYoutube={element.strYoutube}
                      strInstagram={element.strInstagram}
                      strCountry={element.strCountry}
                      description={element.strDescriptionEN}
                    />
                  ) )}
                  </Col>
                </Row>
              </motion.div>
            </Container>
          </ScrollOnView>
        </section>
      </>
    );
  }
}

export default withAuth0( Explore );
