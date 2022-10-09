import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home.js";
import { About } from "./pages/About";
import Contact from "./pages/Contact";
import { Activities } from "./pages/Activities";
import { Articles } from "./pages/Articles";
import { Modal } from "./components/layout/Modal";
import NavBar  from "./components/layout/Navbar";
import Social from "./components/layout/Social";


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar/>
        <Social/>
        <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/activities" component={Activities} />
              <Route path="/articles" component={Articles} />
            </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
