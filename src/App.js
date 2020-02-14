import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Homepage from "./containers/homepage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path ='/' component={Homepage}/>
      </Switch>
    </Router>
  )
};

export default App;
