import React, { Component } from 'react';

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      month: props.monthName
    }
  }
  render() {
    return(
      <nav className="main-nav">
        <h2 className="main-nav__title">Witaj Michał</h2>
        <ul className="main-nav__list">
          <li className="main-nav__list-item">
            Dodaj nowy
          </li>
          <li className="main-nav__list-item">
            Aktualny miesiąc
          </li>
          <li className="main-nav__list-item">
            Archiwum
          </li>
          <li className="main-nav__list-item">
            Ustawienia
          </li>
          <li className="main-nav__list-item main-nav__list-item--log-out">
            Wyloguj
          </li>
        </ul>
      </nav>
    )
  }
}


export default Nav;