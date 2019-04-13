import React from 'react';

const Message = ({ message }) => {
  return (
    <div>
      <p>{message.message}</p>
      <p>{message.username} <span>{message.timestamp}</span> </p>
    </div>
  )
}

export default Message;