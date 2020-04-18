import React from 'react';
import Layout from '../layout';
import Button from '@material-ui/core/Button';

const HomePage = ()=>(
  <Layout>
    <Button variant="contained" color="primary">
      Hello World
    </Button>

    <Button variant="contained" color="secondary">Default</Button>
  </Layout>
);

export default HomePage;