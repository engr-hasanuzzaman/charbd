import React from 'react';
import {Paper, Box, Grid } from '@material-ui/core';
import Header from './Header';

const style = {
  Paper: {
    padding: '5px',
  }
}

class LayoutComponet extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <Paper container style={style.Paper}>
        <Header />
        <h1>THis is layout header</h1>
      </Paper>
    );
  }
}

export default LayoutComponet;