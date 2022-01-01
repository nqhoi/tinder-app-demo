import { IconButton } from '@material-ui/core';
import { Forum, Person } from '@material-ui/icons';
import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <IconButton>
        <Person fontSize="large" className="header__icon" />
      </IconButton>

      <img
        className="header__logo"
        alt=""
        src="https://phongvu.vn/cong-nghe/wp-content/uploads/2018/09/tinder-logo.png"
      />

      <IconButton>
        <Forum fontSize="large" className="header__icon" />
      </IconButton>
    </div>
  );
}

export default Header;
