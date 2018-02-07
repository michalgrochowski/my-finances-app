import React from 'react';

import '../styles/previous-month.css';

const PreviousMonthRow = ({expense}) => {
  const expenseKey = Object.keys(expense);
  const expenseValue = Object.values(expense);
  return (
    <tr className="previous-month__row">
    <td className="previous-month__table-cell previous-month__table-cell--bordered">
        {expenseKey}
      </td>
      <td className="previous-month__table-cell previous-month__table-cell--bordered">
        {expenseValue}
      </td>
    </tr>
  );
};

export default PreviousMonthRow;