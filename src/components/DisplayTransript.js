import React, { Component } from 'react';
import Header from './Header';

class DisplayTranscript extends Component {
  constructor() {
    super();
    this.state = {
      conversationDate: '',
      messages: [],
      firstUser: '',
      secondUser: '',
    }
  }

  componentDidMount() {
    fetch('https://api.myjson.com/bins/1geede')
      .then(res => res.json())
      .then(res => this.setData(res.data))
      .catch(err => {
        throw Error('fail to fetch data')
      })
  }

  setData(data) {
    const { conversationDate, messages } = data;
    const [firstUser, secondUser] = this.getUsers(messages);
    this.setState({ conversationDate, messages, firstUser, secondUser });
  }

  getUsers(messages) {
    let firstUser = messages[0].username;
    let secondUser = '';
    for (let i = 1; i < messages.length; i++) {
      if (secondUser) break;
      if (messages[i].username !== firstUser) {
        secondUser = messages[i].username;
      };
    };
    return [firstUser, secondUser];
  }

  render() {
    const { conversationDate, messages } = this.state;
    return (
      <div>
        {!conversationDate && <Header chatDate={conversationDate} />}
        {messages.map((message, i) => (
          <div key={i}>
            <p>{message.message}</p>
            <p>{message.username} <span>{message.timestamp}</span> </p>
          </div>
        ))}
      </div>
    )
  };
}

export default DisplayTranscript;