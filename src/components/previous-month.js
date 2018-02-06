import React, { Component } from 'react';

import '../styles/previous-month.css';

class PreviousMonth extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <div className="previous-month">
        <table className="previous-month__table">
          <tr>
            <td className="previous-month__table-cell previous-month__table-cell--title">
              <h3 className="">{this.props.month}</h3>
            </td>
          </tr>
          <tr>
            <td className="previous-month__table-cell">
              
            </td>
          </tr>
          <tr>
            <td className="previous-month__table-cell">
              
            </td>
          </tr>
          <tr>
            <td className="previous-month__table-cell">
              
            </td>
          </tr>
          <tr>
            <td className="previous-month__table-cell">
              
            </td>
          </tr>
        </table>
      </div>
    );
  };
}

export default PreviousMonth;