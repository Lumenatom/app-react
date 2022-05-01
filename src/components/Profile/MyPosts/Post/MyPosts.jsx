import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import classes from './MyPosts.module.css';
import Post from './Post/Post';




const MyPosts = (props) => {

  let postElement = props.postsData.map((post) => {
    return (
      <Post message={post.message} likeCount={post.likeCount} />
    )
  })

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  }
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={classes.content_post}>
      <p className={classes.p} >My posts</p>
      <div className={classes.post_send}>
        <input onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
        <button onClick={addPost} className={classes.post_btn}>Send</button>
        <button className={classes.post_btn}>Remove</button>
      </div>
      {postElement}
    </div>
  );
}






export default MyPosts;
