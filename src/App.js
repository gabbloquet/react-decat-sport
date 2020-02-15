import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Sidebar from "./containers/topbar";
import Homepage from "./containers/homepage";
import Sports from "./containers/sports";
import SportPlaces from "./containers/sportplaces";

const App = () => {
  return (
    <Router>
      <Sidebar/>
      <Switch>
        <Route path ='/' component={Homepage} exact={true}/>
        <Route path ='/sports' component={Sports}/>
        <Route path ='/sportplaces' component={SportPlaces}/>
      </Switch>
    </Router>
  )
};

export default App;
