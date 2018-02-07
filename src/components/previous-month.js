import React from 'react';

//import PreviousMonthRow from './previous-month-row.js';

import '../styles/previous-month.css';

const PreviousMonth = ({previousMonth}) => {
  const PreviousMonthRow = props => {
    const PreviousMonthsList = props.previousMonths.map(previousMonth => {
    return (
      <PreviousMonthRow 
        key={previousMonth.wydatki} 
        wydatki={previousMonth.wydatki}
      />
    );
  })

  return (
    <div className="previous-month">
      <table className="previous-month__table">
        <tr>
          <td className="previous-month__table-cell previous-month__table-cell--title">
            <h3 className="">{previousMonth.month}</h3>
          </td>
        </tr>
        <PreviousMonthRow wydatki={previousMonth.wydatki} />
      </table>
    </div>
  );
  }
}

export default PreviousMonth;