import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';


const Navbar = () => {
  return (
    <nav className={classes.nav}>
      
    <NavLink to='/profile' className={navData => navData.isActive ? classes.active : classes.nav}  >Profile</NavLink>
    <NavLink to='/messages' className={navData => navData.isActive ? classes.active : classes.nav} >Messages</NavLink>
    <NavLink to='/news' className={navData => navData.isActive ? classes.active : classes.nav}>News</NavLink>
    <NavLink to='/music' className={navData => navData.isActive ? classes.active : classes.nav} >Music</NavLink>
    <NavLink to='/settings' className={navData => navData.isActive ? classes.active : classes.nav}>Settings</NavLink>
    <NavLink to='/users' className={navData => navData.isActive ? classes.active : classes.nav}>Find users</NavLink>
  </nav>
  );
}






export default Navbar;
