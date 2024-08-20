import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import UnderConstruction from '../../components/UnderConstruction';
import MyAccordion from '../../components/MyAccordion'
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import GroupIcon from '@mui/icons-material/Group';
import { accordionIcon } from '../../themes/icon';

const topics= [
  {
    summary: 'Acro Yoga',
    icon: <GroupIcon sx={accordionIcon}/>,
    details: 'Text to be replaced.'
  },
  {
    summary: 'Yoga',
    icon: <SelfImprovementIcon sx={accordionIcon}/>,
    details: 'Text to be replaced.'
  },
  {
    summary: 'Gym',
    icon: <FitnessCenterIcon sx={accordionIcon}/>,
    details: 'Text to be replaced.'
  },
  {
    summary: 'Other',
    icon: <FitnessCenterIcon sx={accordionIcon}/>,
    details: 'Text to be replaced.'
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