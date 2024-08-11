import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import Link from "next/link";
import Typography from '@mui/material/Typography';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

export default function IsabelleIcon(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Typography
        href="/"
        variant="h6"
        sx={{ ...props.sxProps }}
      >
        <Link href="/">
          ISA<NotificationsNoneIcon sx={{ mt: -0.5, mr: -0.5, ml: -0.2 }}/>
        </Link>
      </Typography>
    </React.Fragment>
  );
}