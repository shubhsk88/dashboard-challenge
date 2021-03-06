import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Settings from './pages/Settings';
import UpdateInformation from './pages/UpdateInformation';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Settings />
          </Route>
          <Route exact path="/update">
            <UpdateInformation />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
