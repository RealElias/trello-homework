import React from 'react';
import './App.css';
import SignInContainer from './containers/signin';
import SignUpContainer from './containers/signup';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' render={() => 'Hello World!'}/>
        <Route exact path='/sign-in' component={SignInContainer}/>
        <Route exact path='/sign-up' component={SignUpContainer}/>
      </Switch>
    </div>
  );
}

export default App;
