import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import LogInPage from './pages/LoginPage';
import AdminHomePage from './pages/AdminHomePage';
import Form from './forms/SignInForm';

import NotFoundPage from './pages/NotFoundPage';
// import ServerErrorPage from './pages/ServerErrorPage'
// import InternetDisconnectedPage from './pages/InternetDisconnectedPage'

import Auth from './containers/Auth';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={LogInPage} />
    <Route path="login" component={LogInPage} />
    <Route path="form" component={Form} />
    <Route component={Auth} __useAuth={true}>
      {<Route path="home" component={AdminHomePage} />}
    </Route>
    {/* <Route path="serverError" component={ServerErrorPage} /> */}
    {/* <Route path="noInternet" component={InternetDisconnectedPage} /> */}
    <Route path="*" component={NotFoundPage} />
  </Route>
);

export default routes;
