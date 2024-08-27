import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { darkSubtitle, darkBody } from '../themes/typography';
import { fontSize, colours } from '../themes/global';
import Image from "next/image";
import Link from '@mui/material/Link';
import MyCarousel from './MyCarousel';
import AccordionLink from './AccordionLink';

const onePicGrid = (children, pics) => (
  <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 1, md: 4 }}>
    <Grid item sx={{display:{xs: 'none', md: 'flex'}, alignItems: 'center'}} xs={1}>
      <Image src={pics[0].source} alt={pics[0].alt} style={{ width: '100%', height: 'auto', border: `2px solid ${colours.darkTeal}`}}/>
    </Grid>
    <Grid item xs={1} md={3} sx={{ display: 'flex', alignItems: 'center', ...darkBody}}>
      <Typography sx={darkBody}>{children}</Typography>
    </Grid>
    <Grid item sx={{display:{xs: 'flex', md: 'none'}, alignItems: 'center'}} xs={1}>
      <Image src={pics[0].source} alt={pics[0].alt} style={{ width: '100%', height: 'auto', border: `2px solid ${colours.darkTeal}`}}/>
    </Grid>
  </Grid>
);

const twoPicGrid = (children, pics) => (
  <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 2, md: 4 }}>
    <Grid item sx={{display:{xs: 'none', md: 'flex'}, alignItems: 'center'}} md={1}>
      <Image src={pics[0].source} alt={pics[0].alt} style={{ width: '100%', height: 'auto', border: `2px solid ${colours.darkTeal}`}}/>
    </Grid>
    <Grid item xs={2} md={2} sx={{ display: 'flex', alignItems: 'center', ...darkBody}}>
      <Typography sx={darkBody}>{children}</Typography>
    </Grid>
    <Grid item sx={{display:{xs: 'flex', md: 'none'}, alignItems: 'center'}} xs={1}>
      <Image src={pics[0].source} alt={pics[0].alt} style={{width: '100%', height: 'auto', border: `2px solid ${colours.darkTeal}`}}/>
    </Grid>
    <Grid item sx={{display:'flex', alignItems: 'center'}} xs={1}>
      <Image src={pics[1].source} alt={pics[1].alt} style={{width: '100%', height: 'auto', border: `2px solid ${colours.darkTeal}`}}/>
    </Grid>
  </Grid>
);

export default function AccordionDetailBody(props) {
  return (
    <>
    {!props.pics || props.pics.length === 0
      ? <Typography sx={darkBody}>{props.children}</Typography>
      : props.pics.length === 1
        ? onePicGrid(props.children, props.pics)
        : props.pics.length === 2
          ? twoPicGrid(props.children, props.pics)
          : <>
            <Typography sx={darkBody}>{props.children}</Typography>
            <MyCarousel pics={props.pics}/>
          </>
    }
    {!!props.resources && props.resources.map((resource, index) => (
      <Box key={`resource_${index}`}>
        <AccordionLink href={resource.href} alt={resource.alt} resource={true}>{resource.text}</AccordionLink>
        <br/>
      </Box>
    ))}
  </>
  );
}