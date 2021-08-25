import React from 'react';
import { Element } from 'react-scroll';
import './ProfileView.css';
import ScrollOnView from 'components/common/ScrollOnView';
import { withAuth0 } from '@auth0/auth0-react';
import { Container } from 'reactstrap';
import Loading from 'components/common/Loading/Loading';
import UpdateData from './UpdateData';
class Settings extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }

  formatUserName( username ) {
    let formatedName = username;
    if ( username.indexOf( '@' ) !== -1 ) {
      formatedName = username
        .substr( 0, username.indexOf( '@' ) )
        .replace( /[^\w\s]/gi, ' ' )
        .replace( /[0-9]/g, '' )
        .toUpperCase();
    } else {
      formatedName = username
        .replace( /[^\w\s/0-9]/gi, ' ' )
        .replace( /[0-9]/g, '' )
        .toUpperCase();
    }
    return formatedName;
  }
  render() {
    // eslint-disable-next-line no-unused-vars
    const { user, isLoading } = this.props.auth0;

    if ( isLoading ) {
      return <Loading />;
    } else {
      return (
        <>
          <Element name='scrollToProfile' />
          <section className='c-ProfileSection'>
            <ScrollOnView reverse>
              <Container>
                <UpdateData />
              </Container>
            </ScrollOnView>
          </section>
        </>
      );
    }
  }
}
export default withAuth0( Settings );
