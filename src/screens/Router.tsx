import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Projects from 'screens/Projects';
import Skills from 'screens/Skills';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/skills" component={Skills} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
