import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/message-reducer';
import Messages from './Messages';











// const MessagesContainer = (props) => {

//   return <StoreContext.Consumer>{
//     (store) => {
//       let onNewMessageChange = (body) => {
//         store.dispatch(updateNewMessageBodyCreator(body))
//       }

//       let onSendMessageClick = () => {
//         store.dispatch(sendMessageCreator())
//       }

//       let state = store.getState().messagePage;

//       let dialogsElement = store.getState().messagePage.dialogsData;
//       let messageElement = store.getState().messagePage.messagesData;

//       return <Messages updateNewMessageBody={onNewMessageChange}
//         sendMessage={onSendMessageClick}
//         messagePage={state}
//         dialogsElement={dialogsElement}
//       }

// }

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
 