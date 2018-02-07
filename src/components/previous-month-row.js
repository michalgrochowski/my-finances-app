import React from 'react';

import '../styles/previous-month.css';

const PreviousMonthRow = ({wydatki}) => {
  const wydatekKey = Object.keys(wydatki);
  const wydatekValue = Object.values(wydatki);
  return (
    <tr className="previous-month__row">
    <td className="previous-month__table-cell previous-month__table-cell--bordered">
        {wydatekKey}
      </td>
      <td className="previous-month__table-cell previous-month__table-cell--bordered">
        {wydatekValue}
      </td>
    </tr>
  );
};

export default PreviousMonthRow;