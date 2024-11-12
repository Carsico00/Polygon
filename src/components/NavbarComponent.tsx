import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import React, { useState } from 'react';
import '../styles/NavBar.css';

const NavbarComponent: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerList = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      className="drawer-list"
    >
      <List className="drawer-list-items">
        <ListItemButton className="drawer-list-item">
          <ListItemText primary="Link 1" />
        </ListItemButton>
        <ListItemButton className="drawer-list-item">
          <ListItemText primary="Link 2" />
        </ListItemButton>
        <ListItemButton className="drawer-list-item">
          <ListItemText primary="Botón 1" />
        </ListItemButton>
        <ListItemButton className="drawer-list-item">
          <ListItemText primary="Botón 2" />
        </ListItemButton>
      </List>
    </Box>
  );

  return (
    <AppBar position="static" className="app-bar">
      <Toolbar className="toolbar">
        <img src={require("../assets/logo.png")} alt="Logo" className="logo" />
        <Box sx={{ display: { xs: 'none', md: 'flex' } }} className="links-box">
          <div  color="inherit" className="home-button">
            <img src={require("../assets/home.png")} alt="Home" style={{ marginRight: 10, width: 18, height: 'auto' }} />
            <span className='link' onClick={() => window.location.href = '/'}>Home</span>
          </div>
          <a color="inherit" className="link">Descubrir</a>
          <a color="inherit" className="link">Favoritos</a>
          <div  color="inherit" className="upload-button">
            <span className='link upload' onClick={() => window.location.href = '/'}>Subir Obra</span>
          </div>
          <Avatar alt="User Avatar"  src={require("../assets/2695d2047697a4485bb33170b65a0bf9.png")}  className="avatar" />
        </Box>
        <IconButton edge="end" color="inherit" aria-label="menu" sx={{ display: { xs: 'block', md: 'none' } }} onClick={toggleDrawer(true)} className="menu-button">
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)} className="drawer">
        {drawerList()}
      </Drawer>
    </AppBar>
  );
};

export default NavbarComponent;