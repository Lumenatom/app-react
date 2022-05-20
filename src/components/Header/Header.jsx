import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';


const Header = (props) => {
  return (
    <header className={classes.header} >
      <img className={classes.logo} src="https://cdn.logo.com/hotlink-ok/logo-social-sq.png" ></img>
      <div className={classes.loginBlock}>
        {props.isAuth ? props.login
          : <NavLink className={classes.nav} to={'/login'}>Login</NavLink>}
      </div>
    </header>
  );
}






export default Header;
