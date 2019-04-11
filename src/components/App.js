import React, {Component} from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      conversationDate: '',
      messages : [],
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
    this.setState({ conversationDate, messages });
  }

  render() {
    return (
      <div>
        Hello World!
      </div>
    )
  };
}

export default App;