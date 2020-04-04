import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => (
  <div className='container-fluid'>
    <Route exact path='/' component={HomePage}></Route>
    <Route path='/about' component={AboutPage}></Route>
  </div>
);

export default App;