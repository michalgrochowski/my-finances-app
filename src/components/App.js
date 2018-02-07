import React, { Component } from 'react';

import MainHeader from './main-header.js';
import MainFooter from './main-footer.js';
import NewMonth from './new-month.js';
import CurrentMonth from './current-month.js';
import PreviousMonths from './previous-months.js';

import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      previousMonths: [
        {
          month: "Październik",
          wydatki: [
            {Siłka: 123},
            {Pająk: 100},
            {Telefon: 90},
            {Liquidy: 180}
          ]
        },
        {
          month: "Listopad",
          wydatki: [
            {Siłka: 150},
            {Pająk: 500},
            {Telefon: 90},
            {Liquidy: 240}
          ]
        },
        {
          month: "Grudzień",
          wydatki: [
            {Siłka: 100},
            {Pająk: 200},
            {Telefon: 75},
            {Liquidy: 140}
          ]
        }
      ]
    }
  }

  render() {
    return (
      <React.Fragment>
        <MainHeader />
        <main className="main-container">
          <CurrentMonth month={this.state.month} />
          <NewMonth month={this.state.month} />
        </main>
        <aside class="previous-months-container">
          <h3 className="previous-months-container__title">Poprzednie miesiące:</h3>
          <PreviousMonths previousMonths={this.state.previousMonths} />
        </aside>
        <MainFooter />
      </React.Fragment>
    );
  }
}

export default App;
