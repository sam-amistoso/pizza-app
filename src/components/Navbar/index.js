import React from 'react';
import { Pizza, Nav, NavIcon, NavLink } from './NavbarElements';
import { GlobalSytle } from '../../GlobalStyles';

const Navbar = ({ toggle }) => {
  return (
    <>
      <GlobalSytle />
      <Nav>
        <NavLink to='/'>Pizza</NavLink>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <Pizza />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
