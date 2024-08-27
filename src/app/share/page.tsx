import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import UnderConstruction from '../../components/UnderConstruction';
import MyAccordion from '../../components/MyAccordion'
import FoodBankIcon from '@mui/icons-material/FoodBank';
import GroupsIcon from '@mui/icons-material/Groups';
import { accordionIcon } from '../../themes/icon';

const topics= [
  {
    summary: 'Food Bank',
    icon: <FoodBankIcon sx={accordionIcon}/>,
  },
  {
    summary: 'Meetups',
    icon: <GroupsIcon sx={accordionIcon}/>,
  },
  {
    summary: 'Other',
    icon: <GroupsIcon sx={accordionIcon}/>,
  },
  {
    summary: 'Other',
    icon: <GroupsIcon sx={accordionIcon}/>,
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