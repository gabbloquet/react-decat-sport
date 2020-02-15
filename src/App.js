import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Homepage from "./containers/homepage";
import Sidebar from "./containers/topbar";
import SecondPage from "./containers/secondpage";

const App = () => {
  return (
    <Router>
      <Sidebar/>
      <Switch>
        <Route path ='/' component={Homepage} exact={true}/>
        <Route path ='/second' component={SecondPage} exact={true}/>
      </Switch>
    </Router>
  )
};

export default App;
