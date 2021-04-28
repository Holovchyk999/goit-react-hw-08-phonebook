import React, { Component, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import Container from './components/Container';
import AppBar from './components/AppBar';
import { authOperations } from './redux/auth';
import { connect } from 'react-redux';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView'));
class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }
  render() {
    return (
      <Container>
        <AppBar />
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <PublicRoute exact path="/" component={HomeView} />
            <PublicRoute
              restricted
              redirectTo="/contacts"
              path="/register"
              component={RegisterView}
            />
            <PublicRoute
              restricted
              redirectTo="/contacts"
              path="/login"
              component={LoginView}
            />
            <PrivateRoute
              path="/contacts"
              component={ContactsView}
              redirectTo="/login"
            />
          </Switch>
        </Suspense>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
