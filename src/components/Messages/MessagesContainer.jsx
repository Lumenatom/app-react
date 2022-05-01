import React, { Component } from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/message-reducer';
import Messages from './Messages';











const MessagesContainer = (props) => {

  let onNewMessageChange = (body) => {
    props.store.dispatch(updateNewMessageBodyCreator(body))
  }

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator())
  }

  let state = props.store.getState().messagePage;

  let dialogsElement = props.store.getState().messagePage.dialogsData;
  let messageElement = props.store.getState().messagePage.messagesData;



  return (
    <Messages updateNewMessageBody={onNewMessageChange}
      sendMessage={onSendMessageClick}
      messagePage={state}
      dialogsElement={dialogsElement} 
      messageElement={messageElement}/>
  );
}

export default MessagesContainer;
