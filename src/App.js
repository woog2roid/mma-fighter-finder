import React from 'react';
import { Route } from 'react-router-dom';
import About from './pages/About';
import Main from './pages/Main';

const App = () => {
  return (
    <div>
      <Route path="/" component={Main} exact={true} />
      <Route path="/about" component={About} />
    </div>
  );
};

export default App;