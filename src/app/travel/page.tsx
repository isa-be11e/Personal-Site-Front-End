import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import UnderConstruction from '../../components/UnderConstruction';
import MyAccordion from '../../components/accordion/Accordion'
import PublicIcon from '@mui/icons-material/Public';
import { accordionIcon } from '../../themes/icon';
import SEAsiaSections from './SEAsia';
import MyAccordionDetails from '../../components/accordion/AccordionDetails';

const topics= [
  {
    summary: 'South East Asia',
    icon: <PublicIcon sx={accordionIcon}/>,
    details: <MyAccordionDetails sections={SEAsiaSections}/>
  },
  {
    summary: 'South West USA',
    icon: <PublicIcon sx={accordionIcon}/>,
  },
  {
    summary: 'Europe',
    icon: <PublicIcon sx={accordionIcon}/>,
  },
  {
    summary: 'Other',
    icon: <PublicIcon sx={accordionIcon}/>,
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