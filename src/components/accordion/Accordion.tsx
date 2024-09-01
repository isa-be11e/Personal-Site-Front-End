import * as React from 'react';
import MUIAccordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Divider from '@mui/material/Divider';
import { pageTitle, darkTitle } from '../../themes/typography';
import { fontSize, colours, fontFamily } from '../../themes/global';
import UnderConstruction from '../UnderConstruction'

export default function Accordion(props) {
  return (
    <Box>
      <Typography sx={pageTitle}>
        {props.title}
        <FavoriteBorderIcon sx={{ mt: -0.5, ml: 0.5, fontSize: fontSize.responsive.large }}/>
      </Typography>
      {props.topics.map((topic, index) => (
        <MUIAccordion
          key={index}
          sx={{ mx: {xs: 0, md:10},
            mb: {xs: 1, md: 5},
            ...darkTitle,
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{ bgcolor: colours.accordion[index],
              height: {xs: 100, md: 150},
              ...darkTitle,
            }}
          >
            {topic.summary}
            {topic.icon}
          </AccordionSummary>
          { !!topic.details
            ? <AccordionDetails sx={{ bgcolor: colours.accordion[index] }}>
              {topic.details}
            </AccordionDetails>
            : <AccordionDetails sx={{ bgcolor: colours.accordion[index], fontSize: fontSize.responsive.med }}>
              <Divider sx={{ mb:2 }}/>
              <UnderConstruction />
            </AccordionDetails>
          }
        </MUIAccordion>
      ))}
    </Box>
  );
}