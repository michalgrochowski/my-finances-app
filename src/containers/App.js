import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions
import { fetchAllMonths } from "../actions/index";

// Static components
import Nav from '../components/Nav.js';

// Routes
import CurrentMonth from '../components/CurrentMonth.js';
import AddNewMonth from '../components/AddNewMonth.js';
import Archive from '../components/Archive.js';
import Settings from '../components/Settings.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: ''
    }
    this.loadData = this.loadData.bind(this);
  }

  loadData() {
    const user = this.props.fetchAllMonths().then((data) => {
      this.setState({
        user: data.payload.data
      })
      console.log(user);
    });
  }

  render() {
    return (
        <main className="main-container">
          <Nav user={this.state.user}/>
          <button onClick={this.loadData}>Załaduj</button>
          <Switch>
            <Route exact path='/' component={CurrentMonth}/>
            <Route path='/aktualny' component={CurrentMonth}/>
            <Route path='/nowy' component={AddNewMonth}/>
            <Route path='/archiwum' component={Archive}/>
            <Route path='/ustawienia' component={Settings}/>
          </Switch>
        </main>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchAllMonths }, dispatch);
}

function mapStateToProps({ data }) {
  return { data };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))