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

const topics= [
  {
    summary: 'Cooking Class',
    icon: <RestaurantIcon sx={accordionIcon}/>,
    details: 'Text to be replaced.'
  },
  {
    summary: 'Crochet',
    icon: <GestureIcon sx={accordionIcon}/>,
    details: 'Text to be replaced.'
  },
  {
    summary: 'Fermentation',
    icon: <LiquorIcon sx={accordionIcon}/>,
    details: 'Text to be replaced.'
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