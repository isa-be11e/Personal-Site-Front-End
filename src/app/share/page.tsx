import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import UnderConstruction from '../../components/UnderConstruction';
import MyAccordion from '../../components/MyAccordion'
import FoodBankIcon from '@mui/icons-material/FoodBank';
import GroupsIcon from '@mui/icons-material/Groups';

const sxIcon = { ml: 1, mt: 0.2, fontSize: {md: 40} };

const topics= [
  {
    summary: 'Food Bank',
    icon: <FoodBankIcon sx={sxIcon}/>,
    details: 'Text to be replaced.'
  },
  {
    summary: 'Meetups',
    icon: <GroupsIcon sx={sxIcon}/>,
    details: 'Text to be replaced.'
  },
  {
    summary: 'Other',
    icon: <GroupsIcon sx={sxIcon}/>,
    details: 'Text to be replaced.'
  },
  {
    summary: 'Other',
    icon: <GroupsIcon sx={sxIcon}/>,
    details: 'Text to be replaced.'
  },
];

export default function Page() {
  return (
    <MyAccordion
      topics={topics}
      title='Find out more about my community involvement.'
    />
  );
}