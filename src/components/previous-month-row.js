import React from 'react';

import '../styles/previous-month.css';

const PreviousMonthRow = ({wydatki}) => {
  return (
    <tr className="previous-month__row">
      <td className="previous-month__table-cell">
        {wydatki}
      </td>
    </tr>
  );
};

export default PreviousMonthRow;