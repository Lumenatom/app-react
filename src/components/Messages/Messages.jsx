import React, { Component } from 'react';
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

  let sendMessage = React.createRef();

  let addMessage = () => {
    let message = sendMessage.current.value;
    props.addMessage(message);
    sendMessage.current.value = '';
  }


  return (

    <div className={classes.dialogs}>

      <div className={classes.dialogs_item}>
        {dialogsElement}
      </div>
      <div className={classes.messages_item}>
        {messageElement}
        <textarea ref={sendMessage} ></textarea>
        <button onClick={addMessage} > Отправить новое сообщение</button>
      </div>
    </div>
  );
}






export default Messages;
