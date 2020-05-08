import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/pages/Home';
import View from './components/pages/View';
import Edit from './components/pages/Edit';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            component={Home}
          />
          <Route
            path="/view/:id"
            component={View}
          />
          <Route
            path="/view"
            render={() => <Redirect to="/"/>}
          />
          <Route
            path="/edit"
            component={Edit}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;