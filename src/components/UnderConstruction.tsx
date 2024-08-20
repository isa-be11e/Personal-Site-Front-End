import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import ConstructionIcon from '@mui/icons-material/Construction';

export default function UnderConstruction() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <ConstructionIcon sx={{ fontSize: 50 }}/>
      Under Construction
      <ConstructionIcon sx={{ fontSize: 50 }}/>
    </Box>
  );
}