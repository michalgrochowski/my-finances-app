import React from 'react';

import '../styles/new-month.css';

const NewMonthInputGroup = (props) => {
  return(
    <div className="new-month__input-group">
      <label className="new-month__label" for="">Wydatek:</label>
      <input className="new-month__input" type="text"/>
      <label className="new-month__label" for="">Kwota:</label>
      <input className="new-month__input" type="text"/>
    </div>
  )
}

export default NewMonthInputGroup;