import React, { Component } from 'react';

import '../styles/current-month.css';

class CurrentMonth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialInputs: 4
    }
  }

  render() {
    return(
      <div className="current-month">
        <table className="current-month__table">
          <tr>
            <td className="current-month__table-cell current-month__table-cell--title">
              <h3 className="">{this.props.month}</h3>
            </td>
          </tr>
          <tr>
            <td className="current-month__table-cell">
              
            </td>
          </tr>
          <tr>
            <td className="current-month__table-cell">
              
            </td>
          </tr>
          <tr>
            <td className="current-month__table-cell">
              
            </td>
          </tr>
          <tr>
            <td className="current-month__table-cell">
              
            </td>
          </tr>
        </table>
      </div>
    );
  };
}

export default CurrentMonth;