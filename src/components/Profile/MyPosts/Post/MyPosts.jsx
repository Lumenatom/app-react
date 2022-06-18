import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import classes from './MyPosts.module.css';
import Post from './Post/Post';




const MyPosts = (props) => {

  let postElement = props.postsData.map((post) => {
    return (
      <Post message={post.message} likeCount={post.likeCount} />
    )
  })


  let addPost = (values) => {
    props.addPost(values.newPostText);
  }


  return (
    <div className={classes.content_post}>
      <p className={classes.p} >My posts</p>
      <AddNewPostForm onSubmit={addPost} />
      {postElement}
    </div>
  );
}

const AddNewPostForm = (props) => {
  return (
    <form className={classes.post_send} onSubmit={props.handleSubmit}>
      <Field component="input" name="newPostText" />
      <button className={classes.post_btn}>Send</button>
      {/* <button className={classes.post_btn}>Remove</button> */}
    </form>
  )
}

AddNewPostForm = reduxForm({
  form: "ProfileAddNewPostForm"
})(AddNewPostForm)



export default MyPosts;
