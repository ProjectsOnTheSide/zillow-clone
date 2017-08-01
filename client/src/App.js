import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import HomeView from './views/HomeView.jsx';
import BuyView from './views/BuyView.jsx';
import RentView from './views/RentView.jsx';
import SellView from './views/SellView.jsx';
import MortgagesView from './views/MortgagesView.jsx';
import AgentFinderView from './views/AgentFinderView.jsx';
import HomeDesignView from './views/HomeDesignView.jsx';
import MoreView from './views/MoreView.jsx';

const App = (props) => (
  <Router history={browserHistory}>
    <Route path='/' component={HomeView} />
    <Route path='/buy' component={BuyView} />
    <Route path='/rent' component={RentView} />
    <Route path='/sell' component={SellView} />
    <Route path='/mortgages' component={MortgagesView} />
    <Route path='/agentfinder' component={AgentFinderView} />
    <Route path='/homedesign' component={HomeDesignView} />
    <Route path='/more' component={MoreView} />
  </Router>
)

export default App;
