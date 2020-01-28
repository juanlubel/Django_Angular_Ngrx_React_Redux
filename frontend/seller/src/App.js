import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import 'jqwidgets-scripts/jqwidgets/styles/jqx.base.css';
import {Home} from "./components/Home";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
