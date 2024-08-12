import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import UnderConstruction from '../../components/UnderConstruction';
import MyAccordion from '../../components/MyAccordion'
import CheckroomIcon from '@mui/icons-material/Checkroom';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import GestureIcon from '@mui/icons-material/Gesture';

const topics= [
  {
    summary: 'Crochet',
    icon: <GestureIcon sx={{ ml: 1, fontSize: {md: 40} }}/>,
    details: 'Text to be replaced.'
  },
  {
    summary: 'Sew',
    icon: <CheckroomIcon sx={{ ml: 1, fontSize: {md: 40} }}/>,
    details: 'Text to be replaced.'
  },
  {
    summary: 'Other',
    icon: <ColorLensIcon sx={{ ml: 1, fontSize: {md: 40} }}/>,
    details: 'Text to be replaced.'
  },
  {
    summary: 'Other',
    icon: <ColorLensIcon sx={{ ml: 1, fontSize: {md: 40} }}/>,
    details: 'Text to be replaced.'
  },
];

export default function Page() {
  return (
    <MyAccordion
      topics={topics}
      title='See how I get creative.'
    />
  );
}