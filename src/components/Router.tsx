import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from 'screens/Home';
import Skills from 'screens/Skills';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/skills" component={Skills} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
