import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Sidebar from "./containers/topbar";
import Homepage from "./containers/homepage";
import RecommendedSports from "./containers/recommended-sports";
import SportPlaces from "./containers/sportplaces";
import IntelligentSearch from "./containers/intelligent-search";

const App = () => {
  return (
    <Router>
      <Sidebar/>
      <Switch>
        <Route path ='/' component={Homepage} exact={true}/>
        <Route path ='/recommended-sports' component={RecommendedSports}/>
        <Route path ='/intelligent-search' component={IntelligentSearch}/>
        <Route path ='/sport-places' component={SportPlaces}/>
      </Switch>
    </Router>
  )
};

export default App;
