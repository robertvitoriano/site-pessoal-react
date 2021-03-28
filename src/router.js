import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from 'react'
import Home from './pages/Home';
import Portifolio from './pages/Portifolio'
import Header from './components/Header'

export default function Routes() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/about" exact component={Home} />
        <Route path="/portifolio" component={Portifolio} />
      </Switch>
    </Router>)

}