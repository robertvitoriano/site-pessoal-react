import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from 'react'
import Home from './pages/Home';
import Portifolio from './pages/Portifolio'


export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Portifolio" component={Portifolio} />
      </Switch>
    </Router>)

}