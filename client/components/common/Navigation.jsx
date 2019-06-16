import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav
    className="navigation"
    role="navigation"
    aria-label="primary"
  >
    <div className="container">
      <ul role="menubar">
        <li role="menuitem">
          <NavLink to="/">Example PAge</NavLink>
        </li>
        <li role="menuitem">
          <NavLink exact to="/some-route">Page on this route doesn`t exist!</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navigation;
