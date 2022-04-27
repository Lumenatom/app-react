import React, { Component } from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';




const MyPosts = (props) => {

  let postElement = props.postsData.map((post) => {
    return (
      <Post message={post.message} likeCount={post.likeCount} />
    )
  })

  let newPostElement = React.createRef();

  let adddPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = '';

  }

  return (
    <div className={classes.content_post}>
      <p className={classes.p} >My posts</p>
      <div className={classes.post_send}>
        <input ref={newPostElement} placeholder='your news...' />
        <button onClick={adddPost} className={classes.post_btn}>Send</button>
        <button className={classes.post_btn}>Remove</button>
      </div>
      {postElement}
    </div>
  );
}






export default MyPosts;
