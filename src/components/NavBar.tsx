'use client';

import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <AppBar position="fixed" color="primary">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton color="inherit" edge="start" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ cursor: 'pointer' }}>
            Deutsche Alpha Al Almaniah
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton color="inherit" aria-label="favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="cart">
            <ShoppingCartIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="account">
            <AccountCircle />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
