import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import firebase from 'firebase';

import firebaseConfig from '../firebaseConfig.js';

// Actions
import { fetchAllMonths, fetchSomeMonths } from "../actions/index";

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
    firebase
      .auth()
      .signInAnonymously()
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  }

  login() {
    this.props.fetchAllMonths();
  }

  render() {
    if (Object.keys(this.props.data).length === 0) {
      return (
        <button onClick={this.login}>Login</button>
      )
    } else if (Object.keys(this.props.data).length !== 0) {
      return (
        <main className="main-container">
          <Nav user={this.props.data.data}/>
          <Switch>
            <Route exact path='/' render={(props) => ( 
              <CurrentMonth data={this.props.data.data.data.months}/> )} 
            />
            <Route path='/aktualny' render={(props) => ( 
              <CurrentMonth data={this.props.data}/> )} 
            />
            <Route path='/nowy' component={AddNewMonth}/>
            <Route path='/archiwum' component={Archive}/>
            <Route path='/ustawienia' component={Settings}/>
          </Switch>
        </main>
    );
    }
  }
}

/*function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchAllMonths }, dispatch);
}*/

function mapStateToProps({ data }) {
  return { data };
}

export default withRouter(
  connect(mapStateToProps, {
    fetchAllMonths,
    fetchSomeMonths
  })(App)
);