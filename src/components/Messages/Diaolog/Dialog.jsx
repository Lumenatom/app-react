import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './../Messages.module.css';



const Dialog = (props) => {
  let path = "/messages/" + props.id;
  return (
    <div className={classes.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

export default Dialog;