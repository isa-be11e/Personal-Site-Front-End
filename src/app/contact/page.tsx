"use client"
import * as React from 'react';
import { useState } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import UnderConstruction from '../../components/UnderConstruction';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import axios from 'axios';

export default function Page() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const sendMail = () => {
    axios.get("http://localhost:4000/", { params: { name, email, message }})
    .then(() => {
      console.log("success");
    })
    .catch(() => {
      console.log("failure");
    });
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <Typography sx={{ p: {xs: 5, md: 10}, justifyContent: 'center', fontFamily: 'monospace', fontWeight: 700, color: "rgb(0,50,50)", fontSize: {xs: 20, md: 30} }}>
        Let's get in touch.
        <FavoriteBorderIcon sx={{ mt: -0.5, ml: 0.5, fontSize: {xs: 20, md: 30} }}/>
      </Typography>
      <Box justifyContent="center" display="flex">
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{
            fontFamily: 'monospace',
            fontWeight: 550,
            bgcolor: "OldLace",
            p: {xs: 1, md: 5},
            border: 2,
            borderRadius: 2,
            borderColor: 'rgb(0,50,50)',
            maxWidth: 1
          }}
        >
          <Stack spacing={2} sx={{ maxWidth: 1, width: { md: 500 }}}>
          <Typography sx={{ fontFamily: 'monospace', fontWeight: 700, color: "rgb(0,50,50)", fontSize: {xs: 15, md: 20} }}>
            Send me an email!
          </Typography>
          <TextField id="name" label="Name" variant="outlined" onChange={(e) => setName(e.target.value)}/>
          <TextField id="email" label="Email" variant="outlined" onChange={(e) => setEmail(e.target.value)}/>
          <TextField id="message" label="Message" variant="outlined" multiline rows={4} onChange={(e) => setMessage(e.target.value)}/>
          <Box justifyContent="center" display="flex">
            <Button justifyContent="center" variant="outlined" sx={{ maxWidth: 0.9, width: { md: 200 }, bgcolor: 'rgb(220, 200, 170)', fontFamily: 'monospace', fontWeight: 700, color: "rgb(0,50,50)"}} onClick={sendMail}>Send</Button>
          </Box>
          </Stack>
        </Box>
      </Box>
    </React.Fragment>
  );
}