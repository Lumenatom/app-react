import React from 'react';
import { Navigate } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import classes from './Messages.module.css';


const Messages = (props) => {

  let state = props.messagePage;

  let dialogsElement = props.dialogsElement.map((dialog) => {
    return (
      <Dialog name={dialog.name} key={dialog.id} id={dialog.id} />
    )
  })

  let messageElement = props.messagePage.map((message) => {
    return (
      <Message message={message.message} key={message.id} />

    )
  })
  let addNewMessage = (values) => {

    props.sendMessage(values.newMessageBody);
  }

  let newMessageBody = state.newMessageBody;

  if (!props.isAuth) return <Navigate to={"/login"} />

  return (

    <div className={classes.dialogs}>

      <div className={classes.dialogs_item}>
        {dialogsElement}
      </div>
      <div className={classes.messages_item}>
        <div>
          {messageElement}
        </div>
        <AddMessageFormRedux onSubmit={addNewMessage} />
      </div>
    </div>
  );
}

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} >
      <div>
        <Field component="textarea" name="newMessageBody" placeholder="message" />
      </div>
      <div>
        <button > Отправить новое сообщение</button>
      </div>
    </form>
  )
}


const AddMessageFormRedux = reduxForm({
  form: "dialogAddMessageForm"
})(AddMessageForm)



export default Messages;
