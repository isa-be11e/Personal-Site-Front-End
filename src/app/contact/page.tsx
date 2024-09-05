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
import { pageTitle, pageSubtitle } from '../../themes/typography';
import { fontSize, colours, fontFamily } from '../../themes/global';
import axios from 'axios';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function Page() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [open, setOpen] = React.useState(false);
  const [status, setStatus] = React.useState('error');

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };


  const sendMail = () => {
    axios.get("http://localhost:4000/", { params: { name, email, message }})
    .then(() => {
      setStatus('success');
    })
    .catch(() => {
      setStatus('error');
    })
    .finally(() => {
      setOpen(true);
    });
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <Typography sx={{display: 'flex', ...pageTitle}}>
        Let's get in touch.
        <FavoriteBorderIcon sx={{ mt: 0.5, fontSize: fontSize.responsive.large }}/>
      </Typography>
      <Box justifyContent="center" display="flex">
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{
            bgcolor: colours.secondaryBackground,
            p: {xs: 1, md: 5},
            border: 2,
            borderRadius: 2,
            borderColor: colours.outline,
            maxWidth: 1,
          }}
        >
          <Stack
            spacing={2}
            sx={{
              maxWidth: 1,
              width: { xs: 300, md: 500 },
              '.MuiInputLabel-root': { fontFamily, color: colours.grey, fontSize: fontSize.responsive.small },
              '.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: colours.appBar },
              '.MuiInputBase-root': { fontFamily, color: colours.primaryText, fontSize: fontSize.responsive.small },
            }}
          >
          <Typography sx={pageSubtitle}>
            Send me an email!
          </Typography>
          <TextField id="name" label="Name" variant="outlined" onChange={(e) => setName(e.target.value)}/>
          <TextField id="email" label="Email" variant="outlined" onChange={(e) => setEmail(e.target.value)}/>
          <TextField id="message" label="Message" variant="outlined" multiline rows={4} onChange={(e) => setMessage(e.target.value)}/>
          <Box justifyContent="center" display="flex">
            <Button
              sx={{ border: 2, borderColor: colours.outline, maxWidth: 0.9, width: { md: 200 }, bgcolor: colours.buttonColour, ...pageSubtitle}}
              onClick={sendMail}
            >
              Send
            </Button>
          </Box>
          </Stack>
        </Box>
      </Box>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert
          severity={status}
          onClose={handleClose}
          sx={{
            bgcolor: colours.alert[status].primary,
            color: colours.alert[status].secondary,
            border: 2,
            '.MuiAlert-icon': {color:  colours.alert[status].secondary}
          }}
        >
          <Typography sx={{fontFamily, fontSize: 15}}>
            {status === 'success' ? 'Email Send Successfully!' : 'Email Send Failed.'}
          </Typography>
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
}