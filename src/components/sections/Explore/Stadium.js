import React, { Component } from 'react';
import './Team.css';
import { ListGroup, Card, Container, Col, Row } from 'react-bootstrap';
export class Stadium extends Component {
  render() {
    const {
      intStadiumCapacity,

      strStadiumThumb,
      strCountry,
      strStadiumLocation,
      strStadiumDescription,
    } = this.props;
    return (
      <Container>
        <Row>
          <Col>
            <Card className='card m-4' style={{ width: '100%' }}>
              <label>
              </label>
              <Card.Img
                variant='top'
                className='img pt-2'
                src={strStadiumThumb}
                alt={'strStadium'}
                style={{

                  width: '100%',
                  objectFit: 'cover',
                }}
              />
              <Card.Body style={{ width: '100%' }}>
                <ListGroup className='profile-social-links'>
                  <br></br>
                  <label>

                  </label>
                  <br></br>
                  <ListGroup.Item>Country :{strCountry}</ListGroup.Item>{' '}
                  <br></br>
                  <br></br>
                  <label>

                  </label>
                  <br></br>
                  <ListGroup.Item>
                    Stadium Location    :{strStadiumLocation}
                  </ListGroup.Item>
                  <br></br>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className='card m-4' style={{ width: '100%' }}>
              <Card.Body>
                <ListGroup className='profile-social-links'>
                  <label>
                    <h2 className='h'> About team stadium </h2>
                  </label>
                  <br></br>
                  <br></br>
                  <ListGroup.Item className='text-justify' >
                    Stadium Description    {strStadiumDescription}
                  </ListGroup.Item>
                  <br></br>
                  <label>
                  </label>
                  <br></br>
                  <ListGroup.Item>
                    Stadium Capacity   {intStadiumCapacity}
                  </ListGroup.Item>
                  <br></br>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Stadium;
