import React from 'react';

import PreviousMonth from './previous-month.js';

import '../styles/previous-month.css';

  const PreviousMonths = props => {
    const PreviousMonthsList = props.previousMonths.map(previousMonth => {
    return (
      <PreviousMonth 
        key={previousMonth.month} 
        previousMonth={previousMonth}
      />
    );
  });

  return (
    <div className="previous-months-container__box">
      {PreviousMonthsList}
    </div>
  );
};

export default PreviousMonths;