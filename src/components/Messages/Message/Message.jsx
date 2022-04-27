import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './../Messages.module.css';



const Message = (props) => {
  return (
    <div className={classes.message}>{props.message}</div>
  )
}


export default Message;
