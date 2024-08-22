"use client"
import React from "react";
import Link from '@mui/material/Link';
import Box from "@mui/material/Box";
import Image from "next/image";
import Typography from '@mui/material/Typography';
import { pageTitle, darkBody } from '../themes/typography';
import { colours } from '../themes/global';
import Carousel from "react-multi-carousel";
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

const typographyStyle = {
  bottom: 0,
  left: 0,
  position: 'absolute',
  bgcolor: colours.darkBeige,
  p: {xs: 0.5, md: 1},
  m: {xs: 1, md: 2},
  border: 2,
  borderRadius: 2,
  borderColor: colours.darkTeal,
  ...darkBody
};

const imageBorder = { border: `2px solid ${colours.darkTeal}` };

const image = pic => {
  return (<Image src={pic.source} alt={pic.alt} style={imageBorder}/>);
};

export default function MyCarousel(props) {
  return (
    <Carousel
      draggable={false}
      responsive={responsive}
      infinite={true}
      //autoPlay={true}
      autoPlaySpeed={3000}
      transitionDuration={1000}
      centerMode={true}
    >
      {props.pics.map((pic, index) => (
        <Box sx={imagePadding} key={index}>
          {!!pic.route
            ? <Link href={`/${pic.route}`}>
                {image(pic)}
                <Typography sx={typographyStyle}>{pic.text}</Typography>
              </Link>
            : image(pic)
          }
        </Box>
      ))}
    </Carousel>
  );
}
