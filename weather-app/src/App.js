import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Weather from './components/weather'

function App() {



  return (
    <Router>
      <div className="App">
          <Switch>
            <Route path='/weather'>
              <Weather/>
            </Route>
            <Route exact path='/'>
              <h4>Go to weather app (this is for testing)</h4>
              <a href='weather'>Here</a>
            </Route>

          </Switch>
      </div>
    </Router>
  );
}

export default App;
