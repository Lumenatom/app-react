import React from 'react';
import { Field, reduxForm } from 'redux-form';
import classes from './MyPosts.module.css';
import Post from './Post/Post';




const MyPosts = (props) => {
  let addPost = (values) => {
    props.addPost(values.newPostText);
  }
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  let postElement = props.postsData.map((post) => {
    return (
      <Post message={post.message} likeCount={post.likeCount} />
    )
  })

  let newPostElement = React.createRef();




  return (
    <div className={classes.content_post}>
      <p className={classes.p} >My posts</p>
      <div className={classes.post_send}>
        <AddNewPostFormData onSubmit={addPost} />
      </div>
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

const AddNewPostFormData = reduxForm({
  form: "ProfileAddNewPostForm"
})(AddNewPostForm)


export default MyPosts;
