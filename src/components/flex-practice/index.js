import React from 'react';
import Layout from '../layout';
import "./index.css";

const foo = () => {
  return (
    <Layout>
      <nav className="container">
        <div>Home</div>
        <div>Search</div>
        <div>Logout</div>
      </nav>
    </Layout>
  )
}

export default foo;
  