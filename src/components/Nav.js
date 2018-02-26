import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: props.user
    }
  }
  render() {
    return(
      <nav className="main-nav">
        <h2 className="main-nav__title">Witaj {this.state.user}</h2>
        <ul className="main-nav__list">
          <li className="main-nav__list-item">
            <Link to='/aktualny' className="main-nav__link">Aktualny miesiąc</Link>
          </li>
          <li className="main-nav__list-item">
            <Link to='/nowy' className="main-nav__link">Dodaj nowy</Link>
          </li>
          <li className="main-nav__list-item">
            <Link to='/archiwum' className="main-nav__link">Archiwum</Link>
          </li>
          <li className="main-nav__list-item">
            <Link to='/ustawienia' className="main-nav__link">Ustawienia</Link>
          </li>
          <li className="main-nav__list-item main-nav__list-item--log-out">
            <Link to='/wyloguj' className="main-nav__link">Wyloguj</Link>
          </li>
        </ul>
      </nav>
    )
  }
}


export default Nav;