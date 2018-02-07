import React, { Component } from 'react';

import NewMonthInputGroup from './new-month__input-group.js'

import '../styles/new-month.css';

class NewMonth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      month: props.monthName
    }
  }

  render() {
    return(
      <React.Fragment>
        <form className="new-month">
          <fieldset className="new-month__fieldset">
            <legend className="new-month__legend"><h2 className="new-month__legend-title">{this.props.month}</h2></legend>
            <div className="new-month__input-group new-month__input-group--big">
              <label className="new-month__label" htmlFor="">Zarobiłem:</label>
              <input className="new-month__input" type="text"/>
            </div>
            <NewMonthInputGroup />
            <NewMonthInputGroup />
            <NewMonthInputGroup />
            <NewMonthInputGroup />
          </fieldset>
          <button className="new-month__add-button">Dodaj</button>
        </form>
      </React.Fragment>
    );
  };
}

export default NewMonth;