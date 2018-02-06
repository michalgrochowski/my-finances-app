import React, { Component } from 'react';

import '../styles/new-month.css';

const NewMonthInpoutGroup = (props) => {
  return(
    <div className="new-month__input-group">
      <label className="new-month__label" for="">Wydatek:</label>
      <input className="new-month__input" type="text"/>
      <label className="new-month__label" for="">Kwota:</label>
      <input className="new-month__input" type="text"/>
    </div>
  )
}

export default NewMonthInpoutGroup;