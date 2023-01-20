import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import NavBar  from "./components/layout/Navbar";
import Social from "./components/layout/Social";
import { About } from "./pages/About";
import { Activities } from "./pages/Activities";
import { Articles } from "./pages/Articles";
import Contact from "./pages/Contact";
import Home from "./pages/Home.js";

const App = () =>  {
  
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

export default App;
