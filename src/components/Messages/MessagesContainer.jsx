import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/message-reducer';
import Messages from './Messages';


let mapStateProps = (state) => {
  return {
    dialogsElement: state.messagePage.dialogsData,
    messagePage: state.messagePage.messagesData,
    
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: () => {
      dispatch(sendMessageCreator())
    },
    sendMessage: (body) => {
      dispatch(updateNewMessageBodyCreator(body))
    }
  }
}

const MessagesContainer = connect(mapStateProps, mapDispatchToProps)(Messages);

export default MessagesContainer;
 