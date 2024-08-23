import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { darkSubtitle, darkBody } from '../themes/typography';
import Divider from '@mui/material/Divider';

export default function MyAccordionDetails(props) {
  return (
    <>
      {props.sections.map((section, index) => (
        <Box key={index}>
          <Divider sx={ index ===0 ? {mb: 2} : {my: 2} } />
          <Typography sx={{ mb: 1, ...darkSubtitle}}>{section.title}</Typography>
          <Typography sx={darkBody}>{section.body}</Typography>
          {section.extras}
        </Box>
      ))}
    </>
  );
}