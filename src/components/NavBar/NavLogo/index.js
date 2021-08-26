import React, { useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import './NavLogo.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth0, withAuth0 } from '@auth0/auth0-react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from 'reactstrap';
import swal from 'sweetalert';
const NavLogo = ( { linkClicked, profileClicked, homeClicked } ) => {
  // eslint-disable-next-line no-unused-vars
  const [isProfileOpen, setProfileOpen] = useState( false );
  // eslint-disable-next-line no-unused-vars
  const [isHomeOpen, setHomeOpen] = useState( false );
  const [isShowOverlay, setisShowOverlay] = useState( true );
  const scrollToTop = () => {
    linkClicked();
    scroll.scrollToTop();
    if ( window.location.pathname === '/profile' ) {
      setProfileOpen( true );
    }
    if ( window.location.pathname === '/' ) {
      setHomeOpen( true );
    }
    setisShowOverlay( false );
  };

  const { logout } = useAuth0();
  return (
    <UncontrolledDropdown nav>
      <DropdownToggle nav>
        <OverlayTrigger
          show={isShowOverlay}
          delay={{ show: 250, hide: 400 }}
          key={'1'}
          placement={'left'}
          overlay={<Tooltip id={'tooltip-left'}> Menu </Tooltip>}
        >
          <span className='c-NavLogo' onClick={() => scrollToTop()}>
            my<span className='c-NavLogo__accent'>Club </span>
          </span>
        </OverlayTrigger>
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem to='/' tag={Link} onClick={() => homeClicked()}>
          Home
        </DropdownItem>
        <DropdownItem to='/profile' onClick={() => profileClicked()} tag={Link}>
          Profile
        </DropdownItem>
        <DropdownItem
          to='/settings'
          tag={Link}
          onClick={() => profileClicked()}
        >
          Settings
        </DropdownItem>
        <DropdownItem to='/' tag={Link} onClick={() => swal( 'Comming Soon!.' )}>
          FansClub
        </DropdownItem>
        <DropdownItem
          onClick={() => logout( { returnTo: window.location.origin } )}
        >
          logout
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};
export default withAuth0( NavLogo );
