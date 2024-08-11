import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import pic1 from "../../public/IMG_0230.JPG";
import pic2 from "../../public/IMG_0232.JPG";
import pic3 from "../../public/IMG_0233.JPG";
import pic4 from "../../public/IMG_0234.JPG";
import Image from "next/image";
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const pics = [pic1, pic2, pic3, pic4];

export default function Page() {
  return (
    <React.Fragment>
    <CssBaseline />
    <Container maxWidth ="xl">
    <Box sx={{ bgcolor: 'rgb(120,218,218)', height: '100vh',  mt: 8}}>
      <Grid container spacing={4} columns={{ xs: 4, md: 8 }}>
        <Grid item xs={2} md={2} sx={{ display: {xs: 'none', md: 'block'}}}>
          <Image src={pic1} />
        </Grid>
        <Grid item xs={2} md={2}>
          <Image src={pic2} />
        </Grid>
        <Grid item xs={2} md={2} sx={{ display: {xs: 'none', md: 'block'}}}>
          <Image src={pic3} />
        </Grid>
        <Grid item xs={2} md={2}>
          <Image src={pic4} />
        </Grid>
      </Grid>
      <Typography sx={{ m: {xs: 5, md: 10}, justifyContent: 'center', fontFamily: 'monospace', fontWeight: 700, color: "rgb(0,50,50)", fontSize: {xs: 20, md: 30} }}>
        Hello! <br />
        Welcome to  my website where you can find out more about me. Feel free to check out my different interests and book some time with me or send me an email to chat
        <FavoriteBorderIcon sx={{ mt: -0.5, ml: 0.5, fontSize: {xs: 20, md: 30} }}/>
      </Typography>
    </Box>
    </Container>
    </React.Fragment>
  );
}
