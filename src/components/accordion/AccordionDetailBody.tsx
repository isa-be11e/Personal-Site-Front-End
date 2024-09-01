import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { fontSize, colours } from '../../themes/global';
import Image from "next/image";
import Link from '@mui/material/Link';
import Carousel from '../Carousel';
import AccordionLink from './AccordionLink';
import AccordionBody from './AccordionBody';

const image = pic => {
  return (<Image src={pic.source} alt={pic.alt} style={{maxWidth: '400px', width: '100%', height: 'auto', border: `2px solid ${colours.outline}`}}/>);
};

const onePicGrid = (children, pics) => (
  <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 1, md: 4 }}>
    <Grid item sx={{display:{xs: 'none', md: 'flex'}, alignItems: 'center'}} xs={1}>
      {image(pics[0])}
    </Grid>
    <Grid item xs={1} md={3} sx={{ display: 'flex', alignItems: 'center'}}>
      <AccordionBody>{children}</AccordionBody>
    </Grid>
    <Grid item sx={{display:{xs: 'flex', md: 'none'}, alignItems: 'center', justifyContent: 'center'}} xs={1}>
      {image(pics[0])}
    </Grid>
  </Grid>
);

const twoPicGrid = (children, pics) => (
  <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 2, md: 4 }}>
    <Grid item sx={{display:{xs: 'none', md: 'flex'}, alignItems: 'center'}} md={1}>
      {image(pics[0])}
    </Grid>
    <Grid item xs={2} md={2} sx={{ display: 'flex', alignItems: 'center'}}>
      <AccordionBody>{children}</AccordionBody>
    </Grid>
    <Grid item sx={{display:{xs: 'flex', md: 'none'}, alignItems: 'center'}} xs={1}>
      {image(pics[0])}
    </Grid>
    <Grid item sx={{display:'flex', alignItems: 'center'}} xs={1}>
      {image(pics[1])}
    </Grid>
  </Grid>
);

export default function AccordionDetailBody(props) {
  return (
    <>
    {!props.pics || props.pics.length === 0
      ? <AccordionBody>{props.children}</AccordionBody>
      : props.pics.length === 1
        ? onePicGrid(props.children, props.pics)
        : props.pics.length === 2
          ? twoPicGrid(props.children, props.pics)
          : <><AccordionBody>{props.children}</AccordionBody><Carousel pics={props.pics}/></>
    }
    {!!props.resources && props.resources.map((resource, index) => (
      <React.Fragment key={index}>
        <AccordionLink href={resource.href} alt={resource.alt} resource={true}>{resource.text}</AccordionLink>
        <br/>
      </React.Fragment>
    ))}
  </>
  );
}