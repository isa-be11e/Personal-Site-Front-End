import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import UnderConstruction from '../../components/UnderConstruction';
import MyAccordion from '../../components/MyAccordion'
import PublicIcon from '@mui/icons-material/Public';
import { accordionIcon } from '../../themes/icon';

const topics= [
  {
    summary: 'South East Asia',
    icon: <PublicIcon sx={accordionIcon}/>,
    details: 'Text to be replaced.'
  },
  {
    summary: 'South West USA',
    icon: <PublicIcon sx={accordionIcon}/>,
    details: 'Text to be replaced.'
  },
  {
    summary: 'Europe',
    icon: <PublicIcon sx={accordionIcon}/>,
    details: 'Text to be replaced.'
  },
  {
    summary: 'Other',
    icon: <PublicIcon sx={accordionIcon}/>,
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