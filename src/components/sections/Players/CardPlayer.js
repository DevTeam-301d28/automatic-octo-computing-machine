import React, { Component } from 'react';
import { Col, Row, Card,ListGroup } from 'react-bootstrap';

export class CardPlayer extends Component {
  render() {
    const {
      playerName,
      playerType,
      playerAge,
      playerImage,
      playerNumber,
    } = this.props;
    return (
      <Card>
        <Row>
          <Col>
            <Card className='card' style={{ width: '100%' }}>
              <label>
                <h2 className='h'>{playerImage}</h2>
              </label>
              <Card.Img
                className='img'
                src={playerImage}
                alt={playerName}
                style={{
                  height: '50%',
                  width: '100%',
                  objectFit: 'contain',
                }}
              />

              <Card.Body>
                <ListGroup className='card-text'>
                  <br></br>
                  <ListGroup.Item
                    style={{
                      height: '25%',
                      width: '100%',
                    }}
                  >
                    Player Name {'          '} :{playerName}
                  </ListGroup.Item>
                  <br></br>
                  <ListGroup.Item
                    style={{
                      height: '25%',
                      width: '100%',
                    }}
                  >
                    {' '}
                    Player Number {'          '} : {playerNumber}
                  </ListGroup.Item>
                  <br></br>
                  <ListGroup.Item
                    style={{
                      height: '25%',
                      width: '100%',
                    }}
                  >
                    Position : {playerType}
                  </ListGroup.Item>
                  <br></br>{' '}
                  <ListGroup.Item
                    style={{
                      height: '25%',
                      width: '100%',
                    }}
                  >
                    {' '}
                    Player Age {'          '} : {playerAge}
                  </ListGroup.Item>
                  <br></br>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Card>
    );
  }
}

export default CardPlayer;
