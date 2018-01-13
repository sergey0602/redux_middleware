import React, { Component } from 'react';
import First from './components/First';
import Second from './components/Second';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <First />
        <Second />
      </div>
    );
  }
}

export default App;
