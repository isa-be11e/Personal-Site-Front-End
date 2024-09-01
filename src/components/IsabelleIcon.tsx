import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

export default function IsabelleIcon(props) {
  return (
    <Link href="/" underline="none" sx={{ ...props.sxProps }} >
      ISA<NotificationsNoneIcon sx={{ mb: -0.8, mr: -0.5, ml: -0.2 }}/>
    </Link>
  );
}