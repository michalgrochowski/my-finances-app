import React from 'react';

import CurrentMonthBox from './CurrentMonthBox.js';

const CurrentMonth = (props) => {
  return(
    <section className="main-content">
      <h2 className="main-content__title">Aktualny miesiąc</h2>
      <CurrentMonthBox data={props}/>
    </section>
  )
}

export default CurrentMonth;