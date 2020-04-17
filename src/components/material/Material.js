import React from 'react';
import {Paper, Box, Grid } from '@material-ui/core';

const MaterialComponent = () => {
  return(
    <Paper>
      <Box padding={2}>
        <Grid>First Grid</Grid>
        <Grid>2nd Grid</Grid>
      </Box>
    </Paper>
  );
}

export default MaterialComponent;
