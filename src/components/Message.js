import React from 'react';
import Proptypes from 'prop-types';
import { getTime } from '../dataHandlers';

const Message = ({ message, focus, userColor }) => {
  return (
    <div className={` message-body ${focus}`}>
      <p>{message.message}</p>
      <p className={`${userColor} large-bold`}>
        {message.username} 
        <span className="dark small-bold">
          <i className="far fa-clock" /> {' '}
          {getTime(message.timestamp)}
        </span>
      </p>
    </div>
  )
}

Message.propTypes = {
  message: Proptypes.shape({
    message: Proptypes.string.isRequired,
    username: Proptypes.string.isRequired,
    timestamp: Proptypes.string.isRequired,
  }).isRequired,
  focus: Proptypes.string.isRequired,
  userColor: Proptypes.string.isRequired
};

export default Message;