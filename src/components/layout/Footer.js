import React from 'react';
import { Box, Typography } from '@material-ui/core';

const Footer = () => {
  return (
    <Box display='flex' flexDirection='column' justifyContent='center' color='text.primary' style={{ backgroundColor: '#f5f5f5', opacity: 0.5, height: '50px' }}>
      <Typography align='center'>
          All the right are reserved by <b>@CharBd</b>
        </Typography>
    </Box>
  );
}

export default Footer;