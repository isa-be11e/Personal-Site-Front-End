import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Divider from '@mui/material/Divider';

const bgcolors= ['rgb(250, 245, 230)', 'rgb(240, 230, 210)', 'rgb(230, 215, 190)','rgb(220, 200, 170)'];

export default function MyAccordion(props) {
  return (
    <Box>
      <Typography sx={{ p: {xs: 5, md: 10}, justifyContent: 'center', fontFamily: 'monospace', fontWeight: 700, color: "rgb(0,50,50)", fontSize: {xs: 20, md: 30} }}>
        {props.title}
        <FavoriteBorderIcon sx={{ mt: -0.5, ml: 0.5, fontSize: {xs: 20, md: 30} }}/>
      </Typography>
      {props.topics.map((topic, index) => (
        <Accordion
          key={index}
          sx={{ mx: {xs: 0, md:10},
            mb: {xs: 1, md: 5},
            fontFamily: 'monospace',
            color: "rgb(0,50,50)",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{ bgcolor: bgcolors[index],
              fontWeight: 700,
              fontSize: {xs: 20, md: 30},
              height: {xs: 100, md: 150}
            }}
          >
            {topic.summary}
            {topic.icon}
          </AccordionSummary>
          <AccordionDetails sx={{ bgcolor: bgcolors[index], fontSize: {xs: 15, md: 20 }}}>
            <Divider />
            {topic.details}<br />
            {topic.details}<br />
            {topic.details}<br />
            {topic.details}<br />
            {topic.details}<br />
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}