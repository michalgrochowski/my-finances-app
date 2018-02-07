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
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const months = ["Styczeń", "Luty", "Marzec", "kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];
    const monthName = months[currentMonth];
    const nextMonth = months[currentMonth + 1];

    this.state = {
      month: monthName,
      nextMonth: nextMonth,
      previousMonths: [
        {
          month: "Październik",
          wydatki: [
            {Siłka: 150},
            {Pająk: 500},
            {Telefon:  90},
            {Liquidy: 240}
          ]
        },
        {
          month: "Listopad",
          wydatki: [
            {Siłka: 120},
            {Pająk: 300},
            {Telefon:  70},
            {Liquidy: 70}
          ]
        },
        {
          month: "Grudzień",
          wydatki: [
            {Siłka: 50},
            {Pająk: 200},
            {Telefon:  75},
            {Liquidy: 200}
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
          <NewMonth month={this.state.nextMonth} />
        </main>
        <aside className="previous-months-container">
          <h3 className="previous-months-container__title">Poprzednie miesiące:</h3>
          <PreviousMonths previousMonths={this.state.previousMonths} />
        </aside>
        <MainFooter />
      </React.Fragment>
    );
  }
}

export default App;
