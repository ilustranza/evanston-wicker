import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Home from './views/home'
import WhatWeDo from './views/what-we-do'
import OurPractice from './views/our-practice'
import KeyDifferentiators from './views/differentiators'
import BusinessSimulation from './views/business-simulation'
import LabBoard from './views/lab'
import Contact from './views/contact'
import Us from './views/us'

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column'}}>
      <Router>
        <Header />
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route exact path="/what-we-do"><WhatWeDo /></Route>
            <Route exact path="/our-practice"><OurPractice /></Route>
            <Route exact path="/key-differentiators"><KeyDifferentiators /></Route>
            <Route exact path="/business-simulation"><BusinessSimulation /></Route>
            <Route exact path="/lab-board"><LabBoard /></Route>
            <Route exact path="/contact"><Contact /></Route>
            <Route exact path="/us"><Us /></Route>
          </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
