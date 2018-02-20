import React, { Component } from 'react';

import MainHeader from './MainHeader.js';
import CurrentMonth from './CurrentMonth.js';
import NewMonth from './NewMonth.js';
import PreviousMonths from './PreviousMonths.js';
import MainFooter from './MainFooter.js';

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
          earned: "2000",
          expenses: [
            {Siłka: 150},
            {Jedzenie: 500},
            {Telefon: 90},
            {Liquidy: 240},
            {Oszczedność: 400}
          ],
          left: ""
        },
        {
          month: "Listopad",
          earned: "1800",
          expenses: [
            {Siłka: 120},
            {Jedzenie: 300},
            {Telefon: 70},
            {Liquidy: 70},
            {Oszczedność: 200}
          ],
          left: ""
        },
        {
          month: "Grudzień",
          earned: "2100",
          expenses: [
            {Siłka: 50},
            {Jedzenie: 200},
            {Telefon: 75},
            {Liquidy: 200},
            {Oszczedność: 300}
          ],
          left: ""
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