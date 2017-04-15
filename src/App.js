import React, { Component } from 'react';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

import './styles/App.css';

import rootSaga from './sagas';
import configureStore from './store';

import Home from './components/Home';
import Products from './containers/Products';
import Product from './containers/Product';

const { store } = configureStore(
    window.__INITIAL_STATE__,
    rootSaga,
);

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/" component={Products} />
                <Route exact path="/product/:id" component={Product}/>
            </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
