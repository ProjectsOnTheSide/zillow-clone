import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import HomeView from './views/HomeView.jsx';

const App = (props) => (
  <Router history={browserHistory}>
    <Route path='/' component={HomeView} />
  </Router>
)

export default App;
