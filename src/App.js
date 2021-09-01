import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import { Component } from 'react';
import CommentDetails from './components/comments/CommentDetails';
import LoginForm from './components/frontacc/login';
import SignUpForm from './components/frontacc/register';
import CreateComment from './components/comments/CreateComment';
import Map from './components/menu/Map'
import Statistics from './components/menu/Statistics'
import News from './components/menu/News'




class App extends Component {
  render() {
  return(
   
  <BrowserRouter> 
  <NavBar/>
  <Switch>
    <Route exact path='/' component={Dashboard} />
    <Route path='/comment/:id' component={CommentDetails} />
    <Route path='/login' component={LoginForm}/>
    <Route path='/register' component={SignUpForm}/>
    <Route path='/create' component={CreateComment}/>
    <Route path='/map' component={Map}/>
    <Route path='/stats' component={Statistics}/>
    <Route path='/news' component={News}/>


  </Switch>
  
  </BrowserRouter>

  
  
  );

  }

}



export default App;
