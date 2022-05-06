import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/message-reducer';
import Messages from './Messages';


let mapStateProps = (state) => {
  return {
    dialogsElement: state.messagePage.dialogsData,
    messagePage: state.messagePage.messagesData,
    newMessageBody: state.newMessageBody
    
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageCreator());
      
    },
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body))
    }
  }
}

const MessagesContainer = connect(mapStateProps, mapDispatchToProps)(Messages);

export default MessagesContainer;
 