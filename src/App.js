import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Color from "./components/Color/Color";
import AboutScreen from "./views/About/About";
import ExperienceScreen from "./views/Experience/Experience";
import ProjectsScreen from "./views/Projects/Projects";
import FeelingLuckyScreen from "./views/FeelingLucky/FeelingLucky";
import FeelingZanyScreen from "./views/FeelingZany/FeelingZany";

import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Color children={
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          minHeight: "100vh",
          minWidth: 800,
          alignItems: "center",
        }}
      >
        <Router>
          <Navbar />
          <Switch>
            <Route path="/experience" component={ExperienceScreen} />
            <Route path="/projects" component={ProjectsScreen} />
            <Route path="/feeling-lucky" component={FeelingLuckyScreen} />
            <Route path="/feeling-zany" component={FeelingZanyScreen} />
            <Route path={["/about", "/"]} component={AboutScreen} />
          </Switch>
        </Router>
      </div>
    } />
  );
}

export default App;
