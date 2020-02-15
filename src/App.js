import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Topbar from "./components/topbar";
import Homepage from "./containers/homepage";
import RecommendedSports from "./containers/recommended-sports";
import SportPlaces from "./containers/sport-places";
import IntelligentSearch from "./containers/intelligent-search";

const App = () => {
  return (
    <Router>
      <Topbar/>
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
