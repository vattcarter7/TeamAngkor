import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Routes from './components/routing/Routes';

// Redux
import { Provider } from 'react-redux';
import store from './store';

import './App.css';
import setAuthToken from './utils/setAuthToken';

const App = () => {
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      //store.dispatch(loadUser());
    }
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>Hello</Fragment>
      </Router>
    </Provider>
  );
};

export default App;
