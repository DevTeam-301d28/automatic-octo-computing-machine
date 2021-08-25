import React from 'react';
import { Element } from 'react-scroll';
import './ProfileView.css';
import ScrollOnView from 'components/common/ScrollOnView';
import { withAuth0 } from '@auth0/auth0-react';
import { Card, Container, Row } from 'reactstrap';
import Loading from 'components/common/Loading/Loading';

class TheClub extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }

  render() {
    // eslint-disable-next-line no-unused-vars
    const { user, isLoading, stateData } = this.props.auth0;
    const { TeamName, TeamLogo, noOfFans } = this.props;
    if ( isLoading ) {
      return <Loading />;
    } else {
      return (
        <>
          <Element name='scrollToProfile' />
          <section className='c-ProfileSection'>
            <ScrollOnView reverse>
              <Container>
                <Row>
                  <Card
                    className='card-profile shadow mt--300 px-8'
                    style={{ width: '100%' }}
                  >
                    <Row>
                      <div class='container-fluid'>
                        <div class='row'>
                          <div class='col-md-12'>
                            <div class='page-header'>
                              <h1>{TeamName}</h1>
                            </div>
                            <div class='row'>
                              <div class='col-md-4'>
                                <img
                                  alt='Bootstrap Preview'
                                  src={TeamLogo}
                                  className='rounded-circle'
                                />
                              </div>
                              <div class='col-md-4'>
                                <ul class='nav nav-pills'>
                                  <li class='nav-item'>
                                    <span class='badge badge-light'>
                                      {noOfFans}
                                    </span>
                                  </li>
                                  <li class='nav-item'>
                                    <a
                                      class='nav-link'
                                      href='#card-element-945835'
                                    >
                                      More{' '}
                                      <span class='badge badge-secondary'>
                                        16
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                                <div class='progress'>
                                  <div class='progress-bar w-75 progress-bar-striped progress-bar-animated'></div>
                                </div>

                                <p>
                                  Donec id elit non mi porta gravida at eget
                                  metus. Fusce dapibus, tellus ac cursus
                                  commodo, tortor mauris condimentum nibh, ut
                                  fermentum massa justo sit amet risus. Etiam
                                  porta sem malesuada magna mollis euismod.
                                  Donec sed odio dui.
                                </p>
                              </div>
                            </div>
                            <div class='page-header'>
                              <h1>Suggestions!</h1>
                            </div>
                            <div class='media'>
                              <img
                                class='mr-3'
                                alt='Bootstrap Media Preview'
                                src='https://www.layoutit.com/img/sports-q-c-64-64-8.jpg'
                              />
                              <div class='media-body'>
                                <h5 class='mt-0'>Nested media heading</h5> Cras
                                sit amet nibh libero, in gravida nulla. Nulla
                                vel metus scelerisque ante sollicitudin commodo.
                                Cras purus odio, vestibulum in vulputate at,
                                tempus viverra turpis.
                                <div class='media mt-3'>
                                  <a class='pr-3' href='#card-element-945835'>
                                    <img
                                      alt='Bootstrap Media Another Preview'
                                      src='https://www.layoutit.com/img/sports-q-c-64-64-2.jpg'
                                    />
                                  </a>
                                  <div class='media-body'>
                                    <h5 class='mt-0'>Nested media heading</h5>{' '}
                                    Cras sit amet nibh libero, in gravida nulla.
                                    Nulla vel metus scelerisque ante
                                    sollicitudin commodo. Cras purus odio,
                                    vestibulum in vulputate at, tempus viverra
                                    turpis.
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class='media'>
                              <img
                                class='mr-3'
                                alt='Bootstrap Media Preview'
                                src='https://www.layoutit.com/img/sports-q-c-64-64-8.jpg'
                              />

                              <div class='media mt-3'>
                                <a class='pr-3' href='#card-element-945835'>
                                  <img
                                    alt='Bootstrap Media Another Preview'
                                    src='https://www.layoutit.com/img/sports-q-c-64-64-2.jpg'
                                  />
                                </a>
                                <div class='media-body'>
                                  <h5 class='mt-0'>Nested media heading</h5>{' '}
                                  Cras sit amet nibh libero, in gravida nulla.
                                  Nulla vel metus scelerisque ante sollicitudin
                                  commodo. Cras purus odio, vestibulum in
                                  vulputate at, tempus viverra turpis.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class='media'>
                            <img
                              class='mr-3'
                              alt='Bootstrap Media Preview'
                              src='https://www.layoutit.com/img/sports-q-c-64-64-8.jpg'
                            />
                            <div class='media-body'>
                              <h5 class='mt-0'>Nested media heading</h5> Cras
                              sit amet nibh libero, in gravida nulla. Nulla vel
                              metus scelerisque ante sollicitudin commodo. Cras
                              purus odio, vestibulum in vulputate at, tempus
                              viverra turpis.
                              <div class='media mt-3'>
                                <a class='pr-3' href='#card-element-945835'>
                                  <img
                                    alt='Bootstrap Media Another Preview'
                                    src='https://www.layoutit.com/img/sports-q-c-64-64-2.jpg'
                                  />
                                </a>
                                <div class='media-body'>
                                  <h5 class='mt-0'>Nested media heading</h5>{' '}
                                  Cras sit amet nibh libero, in gravida nulla.
                                  Nulla vel metus scelerisque ante sollicitudin
                                  commodo. Cras purus odio, vestibulum in
                                  vulputate at, tempus viverra turpis.
                                </div>
                              </div>
                            </div>
                          </div>

                          <nav>
                            <ul class='pagination'>
                              <li class='page-item'>
                                <a
                                  class='page-link'
                                  href='#card-element-945835'
                                >
                                  Previous
                                </a>
                              </li>
                              <li class='page-item'>
                                <a
                                  class='page-link'
                                  href='#card-element-945835'
                                >
                                  1
                                </a>
                              </li>
                              <li class='page-item'>
                                <a
                                  class='page-link'
                                  href='#card-element-945835'
                                >
                                  2
                                </a>
                              </li>
                              <li class='page-item'>
                                <a
                                  class='page-link'
                                  href='#card-element-945835'
                                >
                                  3
                                </a>
                              </li>
                              <li class='page-item'>
                                <a
                                  class='page-link'
                                  href='#card-element-945835'
                                >
                                  4
                                </a>
                              </li>
                              <li class='page-item'>
                                <a
                                  class='page-link'
                                  href='#card-element-945835'
                                >
                                  5
                                </a>
                              </li>
                              <li class='page-item'>
                                <a
                                  class='page-link'
                                  href='#card-element-945835'
                                >
                                  Next
                                </a>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </Row>
                  </Card>
                </Row>
              </Container>
            </ScrollOnView>
          </section>
        </>
      );
    }
  }
}
export default withAuth0( TheClub );
