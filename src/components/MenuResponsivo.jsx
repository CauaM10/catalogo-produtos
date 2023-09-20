import { AppBar, Container, Toolbar, Typography, Box, MenuItem, IconButton, Button, Avatar, Menu, Tooltip, Link } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import Logo from './img/adidas-logo-branco.png'




const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function MenuResponsivo() {

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };



  return (

    <div >



      <AppBar >
        <Container maxWidth="1px">
          <Toolbar disableGutters>
            <Typography variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                height: '100px'

              }}
            >
              <img className='Logo-adidas' src={Logo}  />
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              

                  <Link href="/" color="#fff" sx={{ my: 2, ml: 22, color: 'white', display: 'block' }}>Produtos</Link>
                  
                
                <Link href="/cadastro" color="#fff" sx={{ my: 2, ml: 34, color: 'white', display: 'block' }}>Cadastro usuarios</Link>

                <Link href="/CadastroCamiseta" color="#fff" sx={{ my: 2, ml: 30, color: 'white', display: 'block' }}>Cadastro produtos</Link>
              
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton href='/login' onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>

        </Container>
      </AppBar>

    </div>
  )
}

export default MenuResponsivo;