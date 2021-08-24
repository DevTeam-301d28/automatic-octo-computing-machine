import React, { Component } from 'react';
import './Team.css';
import Stadium from './Stadium';

import ScrollOnView from '../../common/ScrollOnView';
import { Col, Row, Container, ListGroup, Card } from 'react-bootstrap';
export class Team extends Component {
  render() {
    const {
      strInstagram,
      strYoutube,
      strWebsite,
      teamName,
      strFacebook,
      strTwitter,
      description,
      teamImage,
      strLeague,
    } = this.props;
    return (
      <>
        <section className='c-TeamSection'>
          <ScrollOnView reverse>
            <Container>
              <Row>
                <Col>
                  <h1 className='c-HeroSection__title'>
                    <Container>
                      <Row>
                        <Col>
                          <Card
                            className='profile-card'
                            style={{ width: '100%' }}
                          >
                            <Card.Img
                              className='img'
                              src={teamImage}
                              alt={teamName}
                              style={{
                                height: '50%',
                                width: '100%',
                                objectFit: 'contain',
                              }}
                            />

                            <Card.Body>
                              <ListGroup className='profile-social-links'>
                                <ListGroup.Item
                                  style={{
                                    height: '25%',
                                    width: '100%',
                                  }}
                                >
                                  Team Name {'          '} :{teamName}
                                </ListGroup.Item>
                                <ListGroup.Item
                                  style={{
                                    height: '25%',
                                    width: '100%',
                                  }}
                                >
                                  {' '}
                                  League {'          '} : {strLeague}
                                </ListGroup.Item>
                                <br></br>
                              </ListGroup>
                            </Card.Body>
                          </Card>
                        </Col>
                        <Col>
                          <Card
                            className='profile-card'
                            style={{ width: '100%' }}
                          >
                            <Card.Body>
                              <ListGroup className='profile-social-links'>
                                <ListGroup.Item className='fa'>
                                  {' '}
                                  <a href={strInstagram}>Instagram</a>
                                </ListGroup.Item>{' '}
                                <br></br>
                                <ListGroup.Item className='fa'>
                                  {' '}
                                  <a href={strYoutube}>Youtube</a>
                                </ListGroup.Item>
                                <br></br>
                                <ListGroup.Item className='fa'>
                                  {' '}
                                  <a href={strTwitter}>Twitter</a>
                                </ListGroup.Item>
                                <br></br>
                                <ListGroup.Item className='fa'>
                                  {' '}
                                  <a href={strFacebook}>Facebook</a>
                                </ListGroup.Item>
                                <br></br>
                                <ListGroup.Item className='fa'>
                                  {' '}
                                  <a href={strWebsite}>Website</a>
                                </ListGroup.Item>
                                <br></br>
                              </ListGroup>
                            </Card.Body>
                          </Card>
                        </Col>
                      </Row>
                      <Row>
                        <Card
                          className='profile-card'
                          style={{ width: '100%' }}
                        >
                          <Card.Body>
                            <ListGroup className='profile-social-links'>
                              <ListGroup.Item className='profile-bio'>
                                {description}
                              </ListGroup.Item>
                            </ListGroup>
                          </Card.Body>
                        </Card>
                      </Row>
                    </Container>
                    <Stadium
                      intStadiumCapacity={this.props.intStadiumCapacity}
                      strStadium={this.props.strStadium}
                      strStadiumThumb={this.props.strStadiumThumb}
                      strCountry={this.props.strCountry}
                      strStadiumLocation={this.props.strStadiumLocation}
                      strStadiumDescription={this.props.strStadiumDescription}
                    />
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
export default Team;
