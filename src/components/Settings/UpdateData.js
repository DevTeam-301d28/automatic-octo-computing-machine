import React, { Component } from 'react';
import { Form, Button, Row, Col, Card,Alert } from 'react-bootstrap';
import DropdownList from 'react-widgets/DropdownList';
import { FormGroup } from 'reactstrap';
import countriesdata from '../sections/Hero/Modal/res/countries.json';
import './ProfileView.css';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
export class UpdateData extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      nickname: '',
      selectedSport: '',
      leaguesData: [],
      allTeamsData: [],
      favTeamName: '',
      favouriteleague: '',
      favTeamId: '',
      userInfo:'',
      patchMsg:'',
      showlert:false
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
            method: 'get',
            baseURL: process.env.REACT_APP_AUTH0_BASEURL,
            url: '/checkJwt',
          };
          axios( config )
            .then( ( response ) => {
              console.log( 'inside didmount', response.data );
              console.log( response.data.selectedSport );
              if ( response.data.selectedSport === 'NA' ) {
                this.setState( { isNew: true } );
              }
              console.log( response.data );
              this.setState( {
                userInfo: response.data,
              } );
              localStorage.setItem(
                'userInfo',
                JSON.stringify( this.state.userInfo ),
              );
            } )
            .catch( ( error ) => console.log( error.message ) );
        } )
        .catch( ( error ) => console.log( error.message ) );
    }
  };
  nameHandler = async ( e ) => {
    let name = e.target.value;
    this.setState( { nickname: name } );
  };
  sportSelected = async ( value ) => {
    await this.setState( {
      selectedSport: value,
    } );
    console.log( this.state.selectedSport );
    console.log( this.state.userInfo );

    // this._next();
  };

  getLeaguesData = async ( value ) => {
    console.log( value.name );
    if ( this.props.auth0.isAuthenticated ) {
      this.props.auth0
        .getIdTokenClaims()
        .then( ( token ) => {
          const jwt = token.__raw;
          const config = {
            headers: { Authorization: `Bearer ${jwt}` },
            method: 'get',
            baseURL: process.env.REACT_APP_AUTH0_BASEURL,
            url: `/leagues/${value.name}`,
          };
          axios( config )
            .then( ( response ) => {
              this.setState( {
                leaguesData: response.data,
                favouriteleague: value,
              } );
              console.log( this.state.leaguesData );
            } )
            .catch( ( err ) => console.error( err ) );
        } )
        .catch( ( err ) => console.error( err ) );
    }
  };
  getTeamsData = async ( value ) => {
    if ( this.props.auth0.isAuthenticated ) {
      this.props.auth0
        .getIdTokenClaims()
        .then( ( token ) => {
          const jwt = token.__raw;
          const config = {
            headers: { Authorization: `Bearer ${jwt}` },
            method: 'get',
            baseURL: process.env.REACT_APP_AUTH0_BASEURL,
            url: `/teams/${value.leagueId}`,
          };
          axios( config )
            .then( ( response ) => {
              this.setState( {
                favouriteleague: value.leagueId,
                allTeamsData: response.data,
              } );
            } )
            .catch( ( err ) => console.error( err ) );
        } )
        .catch( ( err ) => console.error( err ) );
    }
  };
  getOneTeamData = async ( value ) => {
    await this.setState( {
      favTeamName: value.teamNameDetails,
      favTeamId: value.strAllteamId,
    } );
    console.log( this.state.allTeamsData );
    console.log(
      this.state.favTeamName,
      this.state.favouriteleague,
      this.state.favTeamId,
    );
    console.log( this.state );
    // this._next();
  };
  handleSubmit = ( e ) => {
    e.preventDefault();
    const { nickname, favouriteleague, favTeamId, favTeamName, selectedSport } =
      this.state;
    console.log( this.state );
    axios
      .patch(
        `https://myclub-1.herokuapp.com/updateUser/${this.state.userInfo._id}`,
        {
          favTeamId,
          favTeamName,
          nickname,
          favouriteleague,
          selectedSport,
        },
      )
      .then( ( resp ) => {
        this.setState( {patchMsg: resp.data.message,showlert:true} );
        console.log( resp.data );
      } );
    setTimeout( () => {
      this.setState( {showlert:false} ); }, 3000 );
  };
  render() {
    return (
      <div className='formDiv'>
        <Card
          className='card-profile shadow mt--300 px-8'
          style={{ width: '100%' }}
        >
          <Card.Title>
            <h2 className='c-ProfileSection__title'>
              Select Your Favourite Sport
            </h2>
          </Card.Title>
          <div className='mt-5 py-5 border-top text-center'>
            <Row className='justify-content-center'>
              <Form>
                <FormGroup>
                  <Row>
                    <div className='w-100'>
                      <br />
                    </div>
                    <Col>
                      <img
                        onClick={( e ) => this.sportSelected( 'basket' )}
                        src='https://static.toiimg.com/thumb/msid-70661134,imgsize-761205,width-800,height-600,resizemode-75/70661134.jpg'
                        width='50%'
                        alt='sports'
                      />
                    </Col>
                    <Col>
                      <img
                        onClick={( e ) => this.sportSelected( 'soccer' )}
                        src='https://cdn.britannica.com/51/190751-050-147B93F7/soccer-ball-goal.jpg'
                        width='50%'
                        alt='sports'
                      />
                    </Col>
                    <div className='w-100'>
                      <br />
                    </div>
                  </Row>
                </FormGroup>

                <Form.Group className='mb-3' controlId='formBasicPassword'>
                  <Form.Label className='labels'>
                    select your preferences
                  </Form.Label>
                  <DropdownList
                    data={countriesdata}
                    dataKey='id'
                    textField='name'
                    defaultValue={'select country'}
                    as='button'
                    onChange={( e ) => this.getLeaguesData( e )}
                  />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                  <DropdownList
                    data={this.state.leaguesData}
                    dataKey='leagueId'
                    textField='leagueName'
                    defaultValue={'Select League'}
                    as='button'
                    onChange={( e ) => this.getTeamsData( e )}
                  />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                  <DropdownList
                    data={this.state.allTeamsData}
                    dataKey='strAllteamId'
                    textField='teamNameDetails'
                    defaultValue={'Select Team'}
                    as='button'
                    onChange={( e ) => this.getOneTeamData( e )}
                    disabled={['', ' ']}
                  />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicEmail'>
                  <Form.Label className='labels'>Update Your Data</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter nickName'
                    onChange={( e ) => {
                      this.nameHandler( e );
                    }}
                  />
                </Form.Group>
                <Button
                  variant='primary'
                  type='submit'
                  onClick={( e ) => this.handleSubmit( e )}
                >
                  Submit
                </Button>
                {
                  this.state.showlert &&
                <Alert className="alert" variant="success" style={{margin:'10px'}}>
                  User {this.state.patchMsg}.
                </Alert>
                }
              </Form>
            </Row>
          </div>
        </Card>
      </div>
    );
  }
}

export default withAuth0( UpdateData );
