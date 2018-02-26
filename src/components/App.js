import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Nav from './Nav.js';

// Routes
import CurrentMonth from './CurrentMonth.js';
import AddNewMonth from './AddNewMonth.js';
import Archive from './Archive.js';
import Settings from './Settings.js';

class App extends Component {
  constructor(props) {
    super(props);

    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const months = ["Styczeń", "Luty", "Marzec", "kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];
    const monthName = months[currentMonth];
    const nextMonth = months[currentMonth + 1];

    this.state = {
      user: "Michał",
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
        <main className="main-container">
          <Nav user={this.state.user}/>
          <Switch>
            <Route exact path='/' component={CurrentMonth}/>
            <Route path='/aktualny' component={CurrentMonth}/>
            <Route path='/nowy' component={AddNewMonth}/>
            <Route path='/archiwum' component={Archive}/>
            <Route path='/ustawienia' component={Settings}/>
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;