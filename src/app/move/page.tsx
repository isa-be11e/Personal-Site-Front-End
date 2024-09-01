import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import UnderConstruction from '../../components/UnderConstruction';
import MyAccordion from '../../components/accordion/Accordion'
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import GroupIcon from '@mui/icons-material/Group';
import { accordionIcon } from '../../themes/icon';
import acroyogaSections from './acroyoga';
import MyAccordionDetails from '../../components/accordion/AccordionDetails';

const topics= [
  {
    summary: 'Acroyoga',
    icon: <GroupIcon sx={accordionIcon}/>,
    details: <MyAccordionDetails sections={acroyogaSections}/>
  },
  {
    summary: 'Yoga',
    icon: <SelfImprovementIcon sx={accordionIcon}/>,
  },
  {
    summary: 'Gym',
    icon: <FitnessCenterIcon sx={accordionIcon}/>,
  },
  {
    summary: 'Other',
    icon: <FitnessCenterIcon sx={accordionIcon}/>,
  },
];

export default function Page() {
  return (
    <MyAccordion
      topics={topics}
      title='Get to know how I move.'
    />
  );
}