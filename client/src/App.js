import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import Projects from "./components/Projects"
import HomePage from "./components/HomePage"
import MainMenu from "./components/MainMenu"
import Bio from "./components/Bio"
class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/MainMenu" component={MainMenu} />  
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/bio" component={Bio} />
        </Switch>
        </div>
        </Router>
    );
  }
}



export default App