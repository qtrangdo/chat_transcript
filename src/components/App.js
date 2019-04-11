import React, {Component} from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      messages : [],
      conversationDate: '',
    }
  }

  componentDidMount() {
    fetch('https://api.myjson.com/bins/1geede')
      .then(res => res.json())
      .then(res => console.log(res.data))
      .catch(err => {
        throw Error('fail to fetch data')
      })
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