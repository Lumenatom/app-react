import React, { Component } from 'react';
import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from './MyPosts/Post/MyPostsContainer';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  


  return (
    <div> 
      <ProfileInfo/>
      <MyPostsContainer />
    </div>
  );
}






export default Profile;
