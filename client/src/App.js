import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import Projects from "./components/Projects"

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Switch>
        <Route exact path="/projects" component={Projects} />
        </Switch>
        </div>
        </Router>
    );
  }
}



export default App