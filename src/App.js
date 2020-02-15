import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Sidebar from "./containers/topbar";
import Homepage from "./containers/homepage";
import SportsIntelligentSearch from "./containers/sports-intelligent-search";
import SportPlaces from "./containers/sportplaces";

const App = () => {
  return (
    <Router>
      <Sidebar/>
      <Switch>
        <Route path ='/' component={Homepage} exact={true}/>
        <Route path ='/sports' component={SportsIntelligentSearch}/>
        <Route path ='/sportplaces' component={SportPlaces}/>
      </Switch>
    </Router>
  )
};

export default App;
