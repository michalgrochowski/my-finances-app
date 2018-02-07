import React from 'react';

import PreviousMonthRow from './previous-month-row.js'

import '../styles/previous-month.css';

const PreviousMonth = ({previousMonth}) => {
    const PreviousMonthRows = previousMonth.wydatki.map((wydatek, index) => {
      return (
        <PreviousMonthRow 
          key={index} 
          wydatki={wydatek}
        />
      );
    })

    return (
      <div className="previous-month">
        <table className="previous-month__table">
          <tbody className="previous-month__table-body">
            <tr>
              <td className="previous-month__table-cell previous-month__table-cell--title">
                <h3 className="previous-month__title-month">{previousMonth.month}</h3>
              </td>
            </tr>
            {PreviousMonthRows}
          </tbody>
        </table>
      </div>
    );
};

export default PreviousMonth;