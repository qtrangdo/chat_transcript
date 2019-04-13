import React, { Component } from 'react';
import Header from './Header';
import Message from './Message';

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
    const { conversationDate, messages, firstUser } = this.state;
    return (
      <div className="main-container">
        {!!conversationDate && <Header chatDate={conversationDate} />}
        <hr/>
        {messages.map((message, i) => {
          let position ='', focus = '';
          if (message.username === firstUser) {
            position = 'left';
            //image links from API are broken, using placeholder img
            message.image = 'http://lorempixel.com/150/150/people/9'
          } else {
            position = 'right';
            message.image = 'http://lorempixel.com/150/151/people/7'
          };

          if (message.focused) focus = 'focus';

          return (
            <div className={position} key={i}>
              <img src={message.image}></img>
              <Message message={message} focus={focus}/>
            </div>
          )
        })}
      </div>
    )
  };
}

export default DisplayTranscript;