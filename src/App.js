import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Menu from './components/Menu';
import Page from './components/Page';


function App() {

  const [info, setInfo] = useState([])



  return (
    <Router>
      <Navigation />

      <Switch>

        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/:topic" exact>
          <Menu info={info} setInfo={setInfo} />
        </Route>
          
        <Route path="/:topic/:id">
          <Page info={info} setInfo={setInfo} />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
