import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { history } from './store';
import App from './components/App';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Auth from './components/Auth/Auth';
import About from './components/About';

function checkAuth(nextState, replace, store) {
  const state = store.getState();
  // const auth = process.env.NODE_ENV === 'production';
  const auth = true;
  if (!state.login && auth) {
    replace({
      pathname: '/auth',
      state: { nextPathname: nextState.location.pathname },
    });
  }
}

// build the router
const router = store => (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Route path="/" component={App}>
      <IndexRoute
        component={Home}
        onEnter={(nextState, replace) => checkAuth(nextState, replace, store)}
      />
      <Route path="about" component={About} onEnter={(nextState, replace) => checkAuth(nextState, replace, store)} />
      <Route path="auth" component={Auth} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default router;

