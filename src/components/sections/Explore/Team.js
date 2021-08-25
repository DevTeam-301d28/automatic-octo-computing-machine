import React, { Component } from 'react';
import './Team.css';
import Stadium from './Stadium';
import { Col, Row, Container, ListGroup, Card } from 'react-bootstrap';

export class Team extends Component {
  render() {
    const {
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
        <Container>
          <Row style={{ width: '100%' }}>
            <Col>
              <Card className='card m-4' style={{ width: '100%' }}>
                <Card.Img
                  className='team__img'
                  src={teamImage}
                  alt={teamName}
                  style={{
                    height: '50%',
                    width: '100%',
                    objectFit: 'contain',
                  }}
                  variant={'top'}
                />
                <Card.Body>
                  <ListGroup className='card-text'>
                    <br></br>
                    <label>
                      <h2 className='h'>Team Name</h2>
                    </label>
                    <br></br>
                    <ListGroup.Item
                      style={{
                        height: '25%',
                        width: '100%',
                      }}
                    >
                      {teamName}
                    </ListGroup.Item>
                    <br></br>
                    <label>
                      <h2 className='h'>League</h2>
                    </label>
                    <br></br>
                    <ListGroup.Item
                      style={{
                        height: '25%',
                        width: '100%',
                      }}
                    >
                      {strLeague}
                    </ListGroup.Item>
                    <br></br>
                    <ListGroup className='card-text'>
                      <br></br> <br></br> <label></label>
                      <br></br>
                      <h2 className='h'>Website</h2>
                      <ListGroup.Item className='fa'>
                        {' '}
                        <a href={strWebsite}>{strWebsite}</a>
                      </ListGroup.Item>
                      <br></br>
                    </ListGroup>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='card m-4' style={{ width: '100%' }}>
                <Card.Body>
                  <ListGroup className='card-text'>
                    <label>
                      <h2 className='h'>{teamName}</h2>
                    </label>
                    <ListGroup.Item className='text-justify'>
                      {description}
                    </ListGroup.Item>
                    <br></br>

                    <ListGroup.Item className='fa'>
                      {' '}
                      <a href={strYoutube}>Youtube</a>
                    </ListGroup.Item>
                    <br></br>

                    <label></label>

                    <ListGroup.Item className='fa'>
                      {' '}
                      <a href={strTwitter}>Twitter</a>
                    </ListGroup.Item>

                    <label></label>
                    <br></br>
                    <ListGroup.Item className='fa'>
                      <a href={strFacebook}>Facebook</a>
                    </ListGroup.Item>
                    <br></br>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
            <Row>
              <Stadium
                intStadiumCapacity={this.props.intStadiumCapacity}
                strStadiumThumb={this.props.strStadiumThumb}
                strCountry={this.props.strCountry}
                strStadiumLocation={this.props.strStadiumLocation}
                strStadiumDescription={this.props.strStadiumDescription}
              />
            </Row>

          </Row>
        </Container>
      </>
    );
  }
}
export default Team;
/*    <a href={strInstagram}>Instagram</a>
                </Navbar.Text>
                <Navbar.Text>
               <a href={strYoutube}>Youtube</a>
                </Navbar.Text> <Navbar.Text>
               <a href={strTwitter}>Twitter</a>
                </Navbar.Text> <Navbar.Text>
               <a href={strFacebook}>Facebook</a>
                </Navbar.Text> <Navbar.Text>
               <a href={strWebsite}>Website</a>*/
