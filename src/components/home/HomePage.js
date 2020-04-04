import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = ()=>(
  <div className='jumbotron'>
    <h1>Administrations</h1>
     <p>Oops, React app with router and Redux</p>
     <Link to='about' className="btn btn-primary btn-lg">
       About Us
      </Link> 
  </div>
);

export default HomePage;