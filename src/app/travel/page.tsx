import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import UnderConstruction from '../../components/UnderConstruction';
import MyAccordion from '../../components/MyAccordion'
import PublicIcon from '@mui/icons-material/Public';

const sxIcon = { ml: 1, mt: 0.2, fontSize: {md: 40} };

const topics= [
  {
    summary: 'South East Asia',
    icon: <PublicIcon sx={sxIcon}/>,
    details: 'Text to be replaced.'
  },
  {
    summary: 'South West USA',
    icon: <PublicIcon sx={sxIcon}/>,
    details: 'Text to be replaced.'
  },
  {
    summary: 'Europe',
    icon: <PublicIcon sx={sxIcon}/>,
    details: 'Text to be replaced.'
  },
  {
    summary: 'Other',
    icon: <PublicIcon sx={sxIcon}/>,
    details: 'Text to be replaced.'
  },
];

export default function Page() {
  return (
    <MyAccordion
      topics={topics}
      title='All about my travels.'
    />
  );
}