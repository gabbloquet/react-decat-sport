import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Homepage from "./containers/homepage";
import Sidebar from "./containers/topbar";

const App = () => {
  return (
    <Router>
      <Sidebar/>
      <Switch>
        <Route path ='/' component={Homepage} exact={true}/>
      </Switch>
    </Router>
  )
};

export default App;
