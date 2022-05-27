import React from 'react';
import { Navigate } from 'react-router-dom';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import classes from './Messages.module.css';


const Messages = (props) => {

  let onNewMessageClick = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  }

  let onSendMessageClick = () => {
    props.sendMessage();
  }

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
        <div>
          <textarea onChange={onNewMessageClick} value={newMessageBody} ></textarea>
        </div>
        <div>
          <button onClick={onSendMessageClick} > Отправить новое сообщение</button>
        </div>
      </div>
    </div>
  );
}






export default Messages;
