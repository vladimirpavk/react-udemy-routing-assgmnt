import React, { Component } from 'react';
import { BrowserRouter, NavLink, Route, Switch, Redirect } from 'react-router-dom';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import ErrorComponent from './components/ErrorComponent/ErrorComponent';

import './App.css';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
      <div>       
        <nav>
          <ul>
            <NavLink to='/users' activeClassName="selected"><li>Users</li></NavLink>
            <NavLink to='/courses' activeClassName="selected"><li>Courses</li></NavLink>
          </ul>
        </nav>
        <Switch>
          <Route path='/courses' component={Courses} /> 
          <Route path='/users' component={Users} />  
          <Redirect from='/all-courses' to='/courses' />          
          <Route path='/' component={ErrorComponent} />
        </Switch>        
      </div>     
      </BrowserRouter>
    );
  }
}

export default App;
