// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import ReduxPromise from "redux-promise";
import ReduxThunk from 'redux-thunk';

// Reducers
import rootReducer from './reducers';

// ServiceWorker
import registerServiceWorker from './registerServiceWorker.js';

// Styles
import './styles/index.css';

// Components
import App from './containers/App.js';

const history = createHistory();

const middleware = routerMiddleware(history);

// Create store
const store = createStore(
  combineReducers({
    ...rootReducer,
    router: routerReducer
  }),
  applyMiddleware(middleware, ReduxPromise)
)

ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
), document.getElementById('root'));

//registerServiceWorker();