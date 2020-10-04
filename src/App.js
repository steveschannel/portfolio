import React from 'react';
import { About } from './pages/About Page/about'
import { Work } from './pages/Work Pages/work'
import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
  NavLink
} from "react-router-dom";
import { AiFillMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai"

function App() {
  return (
    <Router>
      <div className="namehead" >
        <h1>Stephen Chan</h1>
        <span>
          <a className="icon" href="mailto:stephen.albaran.chan@gmail.com">
            <AiFillMail />
          </a>
          <a className="icon" href="https://github.com/steveschannel/">
            <AiFillGithub />
          </a>
          <a className="icon" href="https://www.linkedin.com/in/stephen-chan-50074413b/">
            <AiFillLinkedin />
          </a>
        </span>
      </div>
      <div className="navigation site-header">

        <NavLink className="link dropdown" activeStyle={{
          color: '#235789',
          borderStyle: 'none none solid none',
          fontWeight: 'bolder'
        }} to="/work">WORK
          </NavLink>

        <NavLink className="link float-right" activeStyle={{
          color: '#235789',
          borderStyle: 'none none solid none',
          fontWeight: 'bolder'
        }} to="/about">ABOUT</NavLink>

      </div>
      <Switch >
        <Redirect exact from="/" to="/about" />

        <Route path="/about">
          <About />
        </Route>

        <Route path="/work">
          <Work />
        </Route>

      </Switch>
    </Router >
  );
}

export default App;
