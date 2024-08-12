"use client";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Link from "next/link";
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import IsabelleIcon from './IsabelleIcon'
import Icon from '@mui/material/Icon';
import ComputerIcon from '@mui/icons-material/Computer';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import GroupsIcon from '@mui/icons-material/Groups';
import SendIcon from '@mui/icons-material/Send';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';

const drawerWidth = 200;
const navItems = [
  { name: 'Tech', icon: <ComputerIcon sx={{ mr: 1 }}/>, route: 'tech', iconName: 'ComputerIcon' },
  { name: 'Move', icon: <DirectionsRunIcon sx={{ mr: 1 }}/>, route: 'move' },
  { name: 'Craft', icon: <ColorLensIcon sx={{ mr: 1 }}/>, route: 'craft' },
  { name: 'Cook', icon: <RestaurantIcon sx={{ mr: 1 }}/>, route: 'cook' },
  { name: 'Share', icon: <GroupsIcon sx={{ mr: 1 }}/>, route: 'share' },
  { name: 'Travel', icon: <FlightTakeoffIcon sx={{ mr: 1 }}/>, route: 'travel' },
  { name: 'Contact', icon: <SendIcon sx={{ mr: 1 }}/>, route: 'contact' },
];

export default function MyAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <IsabelleIcon
        sxProps={{ my: 2, fontFamily: 'monospace', fontWeight: 700 }}
      />
      <Divider />
      <List>
        {navItems.map(({name, icon, route}) => (
          <ListItem key={name} disablePadding>
            <ListItemButton sx={{ justifyContent: 'center', fontFamily: 'monospace', fontWeight: 700 }}>
              <Link href={`/${route}`}>
                {icon}{name}
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar position="sticky" component="nav" sx={{ bgcolor: "Teal" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { lg: 'none' } }}
          >
            <MenuIcon sxProps={{color: "OldLace"}}/>
          </IconButton>
          <IsabelleIcon
            sxProps={{display: 'block', fontFamily: 'monospace', fontWeight: 550, color: "OldLace"}}
          />
          <Box sx={{ display: { xs: 'none', lg: 'flex' }}}>
            {navItems.map(({name, icon, route}) => (
              <Typography variant="h6" sx={{ m: 2, fontFamily: 'monospace', fontWeight: 550, color: "OldLace" }} key={name}>
                <Link href={`/${route}`}>
                  {icon}{name}
                </Link>
              </Typography>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { md: 'block', lg: 'none'},
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
