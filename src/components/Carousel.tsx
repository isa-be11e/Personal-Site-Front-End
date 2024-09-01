"use client"
import React from "react";
import Link from '@mui/material/Link';
import Box from "@mui/material/Box";
import Image from "next/image";
import Typography from '@mui/material/Typography';
import { pageTitle, darkBody, darkLabel } from '../themes/typography';
import { colours } from '../themes/global';
import ReactCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 600 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
  }
};

const imagePadding = { padding: '5px'};

const buttonStyle = {
  bottom: 0,
  left: 0,
  position: 'absolute',
  bgcolor: colours.buttonColour,
  p: {xs: 0.5, md: 1},
  ml: {xs: 1, md: 3},
  mb: {xs: 2, md: 4},
  border: 2,
  borderRadius: 2,
  borderColor: colours.outline,
  ...darkBody
};

const labelStyle = {
  bottom: 0,
  left: 0,
  position: 'absolute',
  bgcolor: 'rgba(140,210,210,0.6)',
  p: {xs: 0.2, md: 0.5},
  ml: {xs: 1, md: 3},
  mb: {xs: 2, md: 4},
  ...darkLabel
};

const image = pic => {
  return (<Image src={pic.source} alt={pic.alt} style={{width: '100%', height: 'auto', border: `2px solid ${colours.outline}`}}/>);
};

export default function Carousel(props) {
  return (
    <ReactCarousel
      draggable={false}
      responsive={responsive}
      infinite={true}
      //autoPlay={true}
      autoPlaySpeed={3000}
      centerMode={true}
    >
      {props.pics.map((pic, index) => (
        <Box sx={imagePadding} key={index}>
          {!!pic.route
            ? <Link href={`/${pic.route}`}>
                {image(pic)}
                <Typography sx={buttonStyle}>{pic.text}</Typography>
              </Link>
            : !!pic.text
              ? <Box>{image(pic)}<Typography sx={labelStyle}>{pic.text}</Typography></Box>
              : image(pic)
          }
        </Box>
      ))}
    </ReactCarousel>
  );
}
