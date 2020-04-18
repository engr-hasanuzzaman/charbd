import React from 'react';
import {Paper, Box } from '@material-ui/core';
import Header from './Header';
import PropTypes from 'prop-types';

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
    const { children } = this.props;

    return (
      <Paper container style={style.Paper}>
        <Header />
        <Box>
          {children}
        </Box>
      </Paper>
    );
  }
}

LayoutComponet.propTypes = {
  children: PropTypes.object
}

export default LayoutComponet;