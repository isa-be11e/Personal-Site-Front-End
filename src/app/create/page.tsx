import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import UnderConstruction from '../../components/UnderConstruction';
import MyAccordion from '../../components/MyAccordion'
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LiquorIcon from '@mui/icons-material/Liquor';
import GestureIcon from '@mui/icons-material/Gesture';
import PsychologyIcon from '@mui/icons-material/Psychology';
import { accordionIcon } from '../../themes/icon';
import cooking from './cooking';
import MyAccordionDetails from '../../components/MyAccordionDetails';

const topics= [
  {
    summary: 'Cooking Classes',
    icon: <RestaurantIcon sx={accordionIcon}/>,
    details: <MyAccordionDetails sections={cooking}/>
  },
  {
    summary: 'Crochet',
    icon: <GestureIcon sx={accordionIcon}/>,
  },
  {
    summary: 'Fermentation',
    icon: <LiquorIcon sx={accordionIcon}/>,
  },
  {
    summary: 'Other',
    icon: <PsychologyIcon sx={accordionIcon}/>,
  },
];

export default function Page() {
  return (
    <MyAccordion
      topics={topics}
      title='See what gets my creative juices flowing.'
    />
  );
}