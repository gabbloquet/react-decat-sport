import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import '@decathlon/design-system/css/styles.css';
import '@decathlon/design-system/icons/dkt-icons.css';
import Topbar from "./components/topbar";
import Homepage from "./views/homepage";
import Sports from "./views/sports";
import RecommendedSports from "./views/recommended-sports";
import IntelligentSearch from "./views/intelligent-search";
import Groups from "./views/groups";


const App = () => {
  return (
    <Router>
      <Topbar/>
      <Switch>
        <Route path ='/' component={Homepage} exact={true}/>
        <Route path ='/sports' component={Sports}/>
        <Route path ='/recommended-sports' component={RecommendedSports}/>
        <Route path ='/intelligent-search' component={IntelligentSearch}/>
        <Route path ='/groups' component={Groups}/>
      </Switch>
    </Router>
  )
};

export default App;
