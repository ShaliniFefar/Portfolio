import React, {Component} from 'react';
import {Route, NavLink, HashRouter} from 'react-router-dom';

import Home from './Components/Home';
import Resume from './Components/Resume';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
      <HashRouter>
      <div className="App">
        <h1 id="name">Shalini Fefar</h1>
        <ul className="header">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/resume">Resume</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
        </ul>

        <div className="content">
          <Route exact path="/" component = {Home}/>
          <Route path="/resume" component = {Resume}/>
          <Route path="/projects" component = {Projects}/>        
        </div>
      </div>
      </HashRouter>

      <Footer/>
      </div>
    );
  }
  
}

export default App;
