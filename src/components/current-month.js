import React, { Component } from 'react';

import '../styles/current-month.css';

class CurrentMonth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      month: props.month
    }
  }

  render() {
    return(
      <div className="current-month">
        <table className="current-month__table">
          <tbody>
            <tr>
              <td className="current-month__table-cell current-month__table-cell--title">
                <h3 className="">{this.state.month}</h3>
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
          </tbody>
        </table>
      </div>
    );
  };
}

export default CurrentMonth;