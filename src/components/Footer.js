import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import Logo from '../assets/images/new_logo_v2.png'

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#f3ffe6">
      <Stack gap="5px" alignItems="center" px="10px" pt="10px" mt="1px">
        <img src={Logo} alt="logo" width="300px" height="200px"/>
        <Typography variant="h6" pb="0px" mt="0px">
          Made with ❤️ by <a href="https://www.instagram.com/mclaudiuuu/" style={{textDecoration: 'none', color: " #1a3300"}}>Claudiu Mioneci</a>
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer