import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Sidebar from "./containers/topbar";
import Homepage from "./containers/homepage";
import RecommendedSportsResearch from "./containers/recommended-sports-research";
import SportPlaces from "./containers/sportplaces";

const App = () => {
  return (
    <Router>
      <Sidebar/>
      <Switch>
        <Route path ='/' component={Homepage} exact={true}/>
        <Route path ='/recommended-sports-research' component={RecommendedSportsResearch}/>
        <Route path ='/sport-places' component={SportPlaces}/>
      </Switch>
    </Router>
  )
};

export default App;
