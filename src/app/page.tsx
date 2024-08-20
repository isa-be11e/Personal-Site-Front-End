import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import Grid from "@mui/material/Grid";
import pic1 from "../../public/IMG_0230.JPG";
import pic2 from "../../public/IMG_0232.JPG";
import pic3 from "../../public/IMG_0233.JPG";
import pic4 from "../../public/IMG_0234.JPG";
import Image from "next/image";
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { pageTitle } from '../themes/typography';
import { fontSize } from '../themes/global';

const pics = [pic1, pic2, pic3, pic4];


export default function Page() {
  return (
    <React.Fragment>
    <CssBaseline />
      <Grid container spacing={4} columns={{ xs: 4, md: 8 }}>
        <Grid item xs={2} md={2} sx={{ display: {xs: 'none', md: 'block'}}}>
          <Image src={pic1} alt='Isabelle wearing a lemon shirt in front of a blue door'/>
        </Grid>
        <Grid item xs={2} md={2}>
          <Image src={pic2} alt='Isabelle wearing a lemon shirt in front of a blue door'/>
        </Grid>
        <Grid item xs={2} md={2} sx={{ display: {xs: 'none', md: 'block'}}}>
          <Image src={pic3} alt='Isabelle wearing a lemon shirt in front of a blue door'/>
        </Grid>
        <Grid item xs={2} md={2}>
          <Image src={pic4} alt='Isabelle wearing a lemon shirt in front of a blue door'/>
        </Grid>
      </Grid>
      <Typography sx={pageTitle}>
        Hello! <br />
        Welcome to  my website where you can find out more about me.
        Feel free to check out my different interests and book some time with me or send me an email to chat.
        <FavoriteBorderIcon sx={{ mt: -0.5, ml: 0.5, fontSize: fontSize.responsive.large }}/>
      </Typography>
    </React.Fragment>
  );
}
