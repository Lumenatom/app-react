import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/message-reducer';
import Messages from './Messages';


let mapStateToProps = (state) => {
  return {
    dialogsElement: state.messagePage.dialogsData,
    messagePage: state.messagePage.messagesData,
    newMessageBody: state.newMessageBody,
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


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect)
  (Messages);
