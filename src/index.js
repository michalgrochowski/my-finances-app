// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase'
import firebase from 'firebase';

// Firebase Config
import firebaseConfig from './firebaseConfig.js'

// Reducers
import reducers from './reducers';

// ServiceWorker
import registerServiceWorker from './registerServiceWorker';

// Styles
import './styles/index.css';

// Components
import App from './components/App';


// Initialize firebase
firebase.initializeApp(firebaseConfig);

const history = createHistory()

const middleware = routerMiddleware(history)

// Create store
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(middleware)
)

ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter  history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
), document.getElementById('root'));
//registerServiceWorker();