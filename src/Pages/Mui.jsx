import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import BuildIcon from '@mui/icons-material/Build';
import PersonIcon from '@mui/icons-material/Person';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import CodeIcon from '@mui/icons-material/Code';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { FaBars } from 'react-icons/fa';

export default function Mui() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(open);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {[
          { text: 'Home', icon: <HomeIcon />, link: '#home' },
          { text: 'Service', icon: <BuildIcon />, link: '#service' },
          { text: 'About', icon: <PersonIcon />, link: '#about' },
          { text: 'Resume', icon: <FolderSpecialIcon />, link: '#resume' },
          { text: 'Skills', icon: <CodeIcon />, link: '#skills' },
          { text: 'Contact', icon: <ContactMailIcon />, link: '#contact' },
        ].map(({ text, icon, link }, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton component="a" href={link}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}><FaBars /></Button>
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
      >
        {list()}
      </Drawer>
    </div>
  );
}
