import React, { Component } from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/message-reducer';
import StoreContext from '../../StoreContext';
import Messages from './Messages';











const MessagesContainer = (props) => {

  return <StoreContext.Consumer>{
    (store) => {
      let onNewMessageChange = (body) => {
        store.dispatch(updateNewMessageBodyCreator(body))
      }

      let onSendMessageClick = () => {
        store.dispatch(sendMessageCreator())
      }

      let state = store.getState().messagePage;

      let dialogsElement = store.getState().messagePage.dialogsData;
      let messageElement = store.getState().messagePage.messagesData;

      return <Messages updateNewMessageBody={onNewMessageChange}
        sendMessage={onSendMessageClick}
        messagePage={state}
        dialogsElement={dialogsElement}
        messageElement={messageElement} />
    }
  }
  </StoreContext.Consumer>


}

export default MessagesContainer;
