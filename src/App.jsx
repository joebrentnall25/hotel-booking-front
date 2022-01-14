import './App.scss';
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Routing from './components/Router/Routing';
import Nav from './components/Nav/Nav';
import "./assets/styles/base/variables.scss";

function App() {
  return (
    <div className="app">
      <Router>
        <Nav className="app__nav"/>
        <Routing className="app__router"/>
      </Router>
    </div>
  );
}

export default App;
