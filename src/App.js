import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Main from './pages/Main';
import Search from './pages/Search'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/mma-fihgter-finder" component={Main} exact={true}/>
        <Route path="/mma-fighter-finder/about" component={About} />
        <Route path="/mma-fighter-finder/search" component={Search}/>
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default App;