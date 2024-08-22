"use client"
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import Link from '@mui/material/Link';
import pic1 from "../../public/IMG_0230.JPG";
import pic2 from "../../public/IMG_0232.JPG";
import pic3 from "../../public/IMG_0233.JPG";
import pic4 from "../../public/IMG_0234.JPG";
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { pageTitle } from '../themes/typography';
import { fontSize } from '../themes/global';
import "react-multi-carousel/lib/styles.css";
import MyCarousel from '../components/MyCarousel';

const pics = [
  {source: pic1, alt: 'alt', route:'tech', text: 'Tech'},
  {source: pic2, alt: 'alt'},
  {source: pic3, alt: 'alt'},
  {source: pic4, alt: 'alt'},
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 600 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  }
};

const imagePadding = { padding: '5px'};

export default function Page() {
  return (
    <React.Fragment>
    <CssBaseline />
      <MyCarousel pics={pics} ></MyCarousel>
      <Typography sx={pageTitle}>
        Hello! <br />
        Welcome to  my website where you can find out more about me.
        Feel free to check out my different interests and book some time with me or send me an email to chat.
        <FavoriteBorderIcon sx={{ mt: -0.5, ml: 0.5, fontSize: fontSize.responsive.large }}/>
      </Typography>
    </React.Fragment>
  );
}
