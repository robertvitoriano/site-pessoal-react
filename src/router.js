import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from 'react'
import Home from './pages/Home';
import Header from './components/Header'

export default function Routes() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/about" component={Home} />
        <Route path="/"  exact component={Home} />
      </Switch>
    </Router>)

}