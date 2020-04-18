import React from 'react';
import {Paper, Box, Grid } from '@material-ui/core';
import Layout from '../layout';

const MaterialComponent = () => {
  return(
    <Layout>
      <Grid>First Grid</Grid>
        <Grid>2nd Grid</Grid>
    </Layout>
  );
}

export default MaterialComponent;
