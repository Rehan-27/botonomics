import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Feature from './Components/Feature';
import Download from './Components/Download';
import Contact from './Components/Contact';
import About from './Components/About';
import Footer from './Components/Footer';

// Router Setup 
import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/feature">
            <Feature />
          </Route>
          <Route exact path="/download">
            <Download />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
