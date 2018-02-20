import React from 'react';

import PreviousMonthRow from './PreviousMonthRow.js'

const PreviousMonth = ({previousMonth}) => {
    const PreviousMonthRows = previousMonth.expenses.map((expense, index) => {
      return (
        <PreviousMonthRow 
          key={index} 
          expense={expense}
        />
      );
    })

    return (
      <div className="previous-month">
        <table className="previous-month__table">
          <tbody className="previous-month__table-body">
            <tr className="previous-month__row">
              <td className="previous-month__table-cell previous-month__table-cell--big">
                <h3 className="previous-month__title-month">{previousMonth.month}</h3>
              </td>
            </tr>
            <tr className="previous-month__row">
              <td className="previous-month__table-cell previous-month__table-cell--big">
                <p className="previous-month__subtitle">Zarobiłem: {previousMonth.earned}</p>
              </td>
            </tr>
            {PreviousMonthRows}
            <tr className="previous-month__row previous-month__row--end">
              <td className="previous-month__table-cell previous-month__table-cell--big">
                <p className="previous-month__subtitle">Zostało:</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
};

export default PreviousMonth;