import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import firebase from 'firebase';

import firebaseConfig from '../firebaseConfig.js';

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
  constructor (props) {
    super(props);

    this.login = this.login.bind(this);
  }

  componentWillMount() {
    firebase.initializeApp(firebaseConfig);
    firebase.auth().signInAnonymously().catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  }

  login() {
    this.props.fetchAllMonths();
  }

  render() {
    if (this.props.data === undefined) {
      return (
        <button onClick={this.login}>Login</button>
      )
    } else if (this.props.data !== undefined) {
      return (
        <main className="main-container">
          <Nav user="user"/>
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
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchAllMonths }, dispatch);
}

function mapStateToProps({ data }) {
  return { data };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))