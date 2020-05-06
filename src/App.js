import React, { useState, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import GithubState from './context/github/GithubState';

const App = () => {
  const [alert, setAlert] = useState(null);

  //Set alert
  const showAlert = (msg, type) => {
    setAlert({ msg, type });

    setTimeout(() => setAlert(null), 5000);
  };

  const NavBarTitle = 'GitHub Finder';
  return (
    <GithubState>
      <Router>
        <div className='App'>
          <Navbar title={NavBarTitle} icon='fab fa-github' />
          <div className='container'>
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path='/'
                render={(props) => (
                  <Fragment>
                    <Search showAlert={showAlert} />
                    <Users />
                  </Fragment>
                )}
              />
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' component={User} />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
