import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


// Redux
import {Provider} from 'redux'
import store from './store';



import "./App.css";

const App = () => {
  return (
    <div className='App'>
      <h3>Hello World</h3>
    </div>
  );
};

export default App;
