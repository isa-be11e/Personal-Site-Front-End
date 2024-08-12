import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import UnderConstruction from '../../components/UnderConstruction';
import MyAccordion from '../../components/MyAccordion'
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LiquorIcon from '@mui/icons-material/Liquor';

const topics= [
  {
    summary: 'Cooking Class',
    icon: <RestaurantIcon sx={{ ml: 1, fontSize: {md: 40} }}/>,
    details: 'Text to be replaced.'
  },
  {
    summary: 'Fermentation',
    icon: <LiquorIcon sx={{ ml: 1, fontSize: {md: 40} }}/>,
    details: 'Text to be replaced.'
  },
  {
    summary: 'Other',
    icon: <RestaurantIcon sx={{ ml: 1, fontSize: {md: 40} }}/>,
    details: 'Text to be replaced.'
  },
  {
    summary: 'Other',
    icon: <RestaurantIcon sx={{ ml: 1, fontSize: {md: 40} }}/>,
    details: 'Text to be replaced.'
  },
];

export default function Page() {
  return (
    <MyAccordion
      topics={topics}
      title='This is how I like to have fun with food.'
    />
  );
}