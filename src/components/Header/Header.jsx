import React, { Component } from 'react';
import classes from './Header.module.css';


const Header = () => {
  return (
      <header className={classes.header} >
        <img className={classes.logo} src="https://cdn.logo.com/hotlink-ok/logo-social-sq.png" ></img>
      </header>
  );
}






export default Header;
