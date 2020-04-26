import React from 'react';
import Layout from '../layout';
import "./index.css";

const foo = () => {
  return (
    <Layout>
      <nav className="container">
        <div className='btn btn-small btn-primary item1'>Home</div>
        <input className='item2' type='text' placeholder='search item'/>
        <div className='btn btn-small btn-primary item3'>Logout</div>
      </nav>
    </Layout>
  )
}

export default foo;
  