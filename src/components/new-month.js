import React, { Component } from 'react';

import NewMonthInpoutGroup from './new-month__input-group.js'

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
          <legend className="new-month__legend"><h2 className="new-month__legend-title">{this.props.month}</h2></legend>
          <NewMonthInpoutGroup />
        </fieldset>
      </form>
    );
  };
}

export default NewMonth;