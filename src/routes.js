import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import GamePage from './pages/GamePage';
import DivBoardPage from './pages/DivBoardPage';
import NotFoundPage from './pages/NotFoundPage';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={GamePage} />
    <Route path="game" component={GamePage} />
    <Route path="divBoard" component={DivBoardPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);

export default routes;
