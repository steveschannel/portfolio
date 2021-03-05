import React from "react";
import { About } from "./pages/About Page/about";
import { Work } from "./pages/Work Pages/work";
import "./App.css";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
  NavLink,
} from "react-router-dom";
import { AiFillMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

function App() {
  return (
    <Router>
      <div>
        <h1 className="my-5 ml-5 font-extrabold text-3xl inline-block">
          <span style={{ color: "#235789" }}>STEPHEN</span> CHAN
        </h1>
        <a
          className="inline-block ml-5 text-2xl"
          href="mailto:stephen.albaran.chan@gmail.com"
        >
          <AiFillMail />
        </a>
        <a
          className="inline-block ml-5 text-2xl"
          href="https://github.com/steveschannel/"
        >
          <AiFillGithub />
        </a>
        <a
          className="inline-block ml-5 text-2xl"
          href="https://www.linkedin.com/in/stephen-chan-50074413b/"
        >
          <AiFillLinkedin />
        </a>
      </div>
      <NavLink
        className="ml-5 font-light"
        activeStyle={{
          color: "#235789",
          fontWeight: "bolder",
        }}
        to="/about"
      >
        ABOUT
      </NavLink>
      <NavLink
        className="ml-5 font-light"
        activeStyle={{
          color: "#235789",
          fontWeight: "bolder",
        }}
        to="/work"
      >
        WORK
      </NavLink>
      <Switch>
        <Redirect exact from="/" to="/about" />

        <Route path="/about">
          <About />
        </Route>

        <Route path="/work">
          <Work />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
