import React, { Component } from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/state';
import Dialog from './Diaolog/Dialog';
import Message from './Message/Message';
import classes from './Messages.module.css';











const Messages = (props) => {

  let dialogsElement = props.dialogsData.map(dialog => {
    return (
      <Dialog name={dialog.name} id={dialog.id} />
    )
  })

  let messageElement = props.messagesData.map((message) => {
    return (
      <Message message={message.message} />

    )
  })


  
let onSendMessageClick = () => {
props.store.dispatch(sendMessageCreator())
}
let onNewMessageClick = (e) => {
let body = e.target.value;
props.store.dispatch(updateNewMessageBodyCreator(body))
}
  let newMessageBody = props.state.newMessageBody;

  let state = props.store.getState().messagePage;
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
          <textarea value={newMessageBody}onChange={onNewMessageClick} ></textarea>
        </div>
        <div>
          <button onClick={onSendMessageClick} > Отправить новое сообщение</button>
        </div>
      </div>
    </div>
  );
}






export default Messages;
