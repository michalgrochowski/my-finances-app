import React, { Component } from 'react';

import MainHeader from './main-header.js';
import MainFooter from './main-footer.js';
import NewMonth from './new-month.js';
import PreviousMonth from './previous-month.js';

import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      month: "Maj"
    }
  }

  render() {
    return (
      <div className="App">
        <MainHeader />

        <NewMonth month={this.state.month} />
        <div class="previous-months-container">
          <PreviousMonth month={this.state.month} />
          <PreviousMonth month={this.state.month} />
          <PreviousMonth month={this.state.month} />
        </div>
        <MainFooter />
      </div>
    );
  }
}

export default App;
