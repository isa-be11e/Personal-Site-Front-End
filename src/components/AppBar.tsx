"use client";
import * as React from 'react';
import MUIAppBar from '@mui/material/AppBar';
import Link from '@mui/material/Link';
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
import GroupsIcon from '@mui/icons-material/Groups';
import SendIcon from '@mui/icons-material/Send';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import PsychologyIcon from '@mui/icons-material/Psychology';
import { lightTitle, darkTitle } from '../themes/typography';
import { colours } from '../themes/global';

const drawerWidth = 180;
const iconSx = { mr: 1, mb: -1 };
const navItems = [
  { name: 'Tech', icon: <ComputerIcon sx={iconSx}/>, route: 'tech' },
  { name: 'Move', icon: <DirectionsRunIcon sx={iconSx}/>, route: 'move' },
  { name: 'Create', icon: <PsychologyIcon sx={iconSx}/>, route: 'create' },
  { name: 'Share', icon: <GroupsIcon sx={iconSx}/>, route: 'share' },
  { name: 'Travel', icon: <FlightTakeoffIcon sx={iconSx}/>, route: 'travel' },
  { name: 'Contact', icon: <SendIcon sx={iconSx}/>, route: 'contact' },
];

const contact = navItems[navItems.length-1];

const navItem = (name, icon, route) => { return (
  <Link href={`/${route}`} underline="none" key={name} sx={{m: 2, ...lightTitle}}>
    {icon}{name}
  </Link>);
};

export default function AppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', height: 1, bgcolor: colours.secondaryBackground}}>
      <IsabelleIcon sxProps={{my: 5, ...darkTitle, fontSize: 25}} />
      <Divider />
      <List>
        {navItems.map(({name, icon, route}) => (
          <ListItem key={name} disablePadding>
            <ListItemButton>
              <Link href={`/${route}`} underline="none" sx={darkTitle} >
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
      <MUIAppBar position="sticky" component="nav" sx={{ bgcolor: colours.appBar }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { lg: 'none' } }}
          >
            <MenuIcon sx={{color: colours.secondaryText}}/>
          </IconButton>
          <IsabelleIcon sxProps={{ flexGrow: {xs: 1, lg: 0}, fontSize: 25, ...lightTitle}} />
          <Divider orientation="vertical" sx={{ml: 3, mr: 1, display: { xs: 'none', lg: 'flex' }}}/>
          <Box sx={{ display: { xs: 'none', lg: 'flex' }, flexGrow: 1}}>
            {navItems.slice(0,-1).map(({name, icon, route}) => (
              navItem(name, icon, route)
            ))}
          </Box>
          <Box sx={{ display: { xs: 'none', lg: 'flex'}, color: colours.secondaryText }}>
            {navItem(contact.name, contact.icon, contact.route)}
          </Box>
          <Link href={'/contact'}>
            <SendIcon sx={{ display: { xs: 'flex', lg: 'none'}, color: colours.secondaryText }} />
          </Link>
        </Toolbar>
      </MUIAppBar>
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
            display: { xs: 'block', lg: 'none'},
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
