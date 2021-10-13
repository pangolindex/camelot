import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from 'screens/Home';
import Tokens from 'screens/Tokens';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/tokens" component={Tokens} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
