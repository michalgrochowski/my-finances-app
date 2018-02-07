import React, { Component } from 'react';

import NewMonthInputGroup from './new-month__input-group.js'

import '../styles/new-month.css';

class NewMonth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialInputs: 4
    }
  }

  render() {
    return(
      <form className="new-month">
        <fieldset className="new-month__fieldset">
          <legend className="new-month__legend"><h2 className="new-month__legend-title">Dodaj nowy</h2></legend>
          <NewMonthInputGroup />
          <NewMonthInputGroup />
          <NewMonthInputGroup />
          <NewMonthInputGroup />
        </fieldset>
      </form>
    );
  };
}

export default NewMonth;