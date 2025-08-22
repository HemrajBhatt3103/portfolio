import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  const drawer = (
    <Box sx={{ width: 250, height: '100%', bgcolor: '#1a1a1a' }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
        <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.label}
            button
            onClick={() => scrollToSection(item.href)}
            sx={{
              '&:hover': {
                bgcolor: 'rgba(0, 212, 255, 0.1)',
                borderLeft: '3px solid #00d4ff',
              },
            }}
          >
            <ListItemText
              primary={item.label}
              sx={{
                color: 'white',
                '& .MuiTypography-root': {
                  fontWeight: 500,
                },
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: scrolled ? 'rgba(10, 10, 10, 0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          boxShadow: scrolled ? '0 4px 20px rgba(0, 212, 255, 0.1)' : 'none',
          transition: 'all 0.3s ease',
          border: scrolled ? '1px solid rgba(0, 212, 255, 0.2)' : 'none',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 4 } }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 700,
                background: 'linear-gradient(45deg, #00d4ff, #00ff88)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                cursor: 'pointer',
              }}
              onClick={() => scrollToSection('#home')}
            >
              Hemraj Bhatt
            </Typography>
          </motion.div>

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ color: '#00d4ff' }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 1 }}>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Button
                    onClick={() => scrollToSection(item.href)}
                    sx={{
                      color: 'white',
                      fontWeight: 500,
                      px: 2,
                      py: 1,
                      borderRadius: 2,
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      overflow: 'hidden',
                      '&:hover': {
                        color: '#00d4ff',
                        bgcolor: 'rgba(0, 212, 255, 0.1)',
                        transform: 'translateY(-2px)',
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        width: 0,
                        height: '2px',
                        bgcolor: '#00d4ff',
                        transition: 'all 0.3s ease',
                        transform: 'translateX(-50%)',
                      },
                      '&:hover::before': {
                        width: '80%',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                </motion.div>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            bgcolor: '#1a1a1a',
            border: '1px solid #333',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;