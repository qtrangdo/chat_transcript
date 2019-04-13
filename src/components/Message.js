import React from 'react';

const Message = ({ message, focus }) => {
  return (
    <div className={focus}>
      <p>{message.message}</p>
      <p>{message.username} <span>{message.timestamp}</span> </p>
    </div>
  )
}

export default Message;