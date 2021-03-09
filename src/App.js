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
        <Route path="/" component={Main} exact={true} />
        <Route path="/about" component={About} />
        <Route path="/search" component={Search} exact={true} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default App;