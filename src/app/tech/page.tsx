import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import UnderConstruction from '../../components/UnderConstruction';
import MyAccordion from '../../components/MyAccordion'
import ComputerIcon from '@mui/icons-material/Computer';
import StorageIcon from '@mui/icons-material/Storage';
import { accordionIcon } from '../../themes/icon';

const topics= [
  {
    summary: 'Website - Front End',
    icon: <ComputerIcon sx={accordionIcon}/>,
    details: 'Text to be replaced.'
  },
  {
    summary: 'Website - Back End',
    icon: <StorageIcon sx={accordionIcon}/>,
    details: 'Text to be replaced.'
  },
  {
    summary: 'Hackathons',
    icon: <ComputerIcon sx={accordionIcon}/>,
    details: 'Text to be replaced.'
  },
  {
    summary: 'Other',
    icon: <ComputerIcon sx={accordionIcon}/>,
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