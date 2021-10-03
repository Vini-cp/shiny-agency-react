import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home/index';
import Survey from './pages/Survey/index';
import Header from './components/Header';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/survey/:questionNumber">
        <Survey />
      </Route>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
