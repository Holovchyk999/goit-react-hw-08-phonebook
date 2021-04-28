import React from 'react';
import { NavLink } from 'react-router-dom';

const AuthNav = () => (
  <div>
    <NavLink
      className="NavLink"
      activeClassName="NavLinkActive"
      to="/register"
      exact
      // style={styles.link}
      // activeStyle={styles.activeLink}
    >
      Registration
    </NavLink>
    <NavLink
      className="NavLink"
      activeClassName="NavLinkActive"
      to="/login"
      exact
      // style={styles.link}
      // activeStyle={styles.activeLink}
    >
      Login
    </NavLink>
  </div>
);

export default AuthNav;
