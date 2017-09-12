import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Link, Route } from 'react-router-dom';

import Transition from './components/Transition';
import CSSAnimation from './components/CSSAnimation';
import StateChangeBasedAnimation from './components/StateChangeBasedAnimation';
import FadeInItems from './components/FadeInItems';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">

          <nav>
            <Link to="/">Home</Link>
            <Link to="/transition">Transition</Link>
            <Link to="/cssanimation">CSS Animation</Link>
            <Link to="/statechangebasedanimation">State Change-Based Animation</Link>
            <Link to="/fadeinitems">Fade In Items</Link>
          </nav>

          <Route path="/transition" component={Transition} />
          <Route path="/cssanimation" component={CSSAnimation} />
          <Route path="/statechangebasedanimation" component={StateChangeBasedAnimation} />
          <Route path="/fadeinitems" component={FadeInItems} />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
