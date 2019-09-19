import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SplashPage from './Components/SplashPage';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import RejectPage from './Components/RejectPage';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={SplashPage} />
      <Route path='/signup' component={SignUp} />
      <Route path='/login' component={Login} />
      <Route path='/reject' component={RejectPage} />
      <Route path='/Dashboard' component={Dashboard} />
    </Switch>
  );
}

export default App;
