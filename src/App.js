import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import SignInContainer from './containers/signin';
import SignUpContainer from './containers/signup';
import HomeContainer from './containers/home'
import BoardContainer from './containers/board'
import LocalStorageItem from './core/constants/localStorageItems'

import './App.css';

function AuthorizedRoute({...props}) {
  const token = localStorage.getItem(LocalStorageItem.TOKEN)

  if (token) {
    return <Route {...props} />
  }

  return (
    <Redirect to='/sign-in'/>
  )
}

function UnauthorizedRoute({...props}) {
  const token = localStorage.getItem(LocalStorageItem.TOKEN)

  if (!token) {
    return <Route {...props} />
  }

  return (
    <Redirect to='/'/>
  )
}

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <AuthorizedRoute path='/board/:id' component={BoardContainer} />
          <AuthorizedRoute exact path='/' component={HomeContainer} />
          <UnauthorizedRoute exact path='/sign-in' component={SignInContainer} />
          <UnauthorizedRoute exact path='/sign-up' component={SignUpContainer} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
