import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  IconButton,
  Divider,
} from '@mui/material';
import {
  LinkedIn,
  GitHub,
  Email,
  Twitter,
  Security,
  Code,
  Favorite,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    {
      icon: <LinkedIn />,
      url: 'https://www.linkedin.com/in/hemraj-bhatt-b36870214',
      color: '#0077b5',
      label: 'LinkedIn',
    },
    {
      icon: <GitHub />,
      url: 'https://github.com/HemrajBhatt3103',
      color: '#333',
      label: 'GitHub',
    },
    {
      icon: <Email />,
      url: 'mailto:hemrajb7899@gmail.com',
      color: '#00d4ff',
      label: 'Email',
    },
  ];

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#0a0a0a',
        borderTop: '1px solid #333',
        pt: 6,
        pb: 3,
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Brand Section */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 700,
                    background: 'linear-gradient(45deg, #00d4ff, #00ff88)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    mb: 2,
                  }}
                >
                  Hemraj Bhatt
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#b3b3b3',
                    lineHeight: 1.6,
                    mb: 3,
                  }}
                >
                  Cybersecurity Analyst | IAM Developer | Full-Stack Enthusiast
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#888',
                    lineHeight: 1.6,
                  }}
                >
                  Securing systems, building solutions, and bridging the gap 
                  between development and cybersecurity.
                </Typography>
              </Box>

              {/* Social Links */}
              <Box sx={{ display: 'flex', gap: 1 }}>
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={social.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <IconButton
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: '#b3b3b3',
                        bgcolor: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid #333',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          color: social.color,
                          bgcolor: `${social.color}20`,
                          border: `1px solid ${social.color}`,
                          transform: 'translateY(-3px)',
                          boxShadow: `0 5px 15px ${social.color}30`,
                        },
                      }}
                      className="social-icon"
                    >
                      {social.icon}
                    </IconButton>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: '#fff',
                  fontWeight: 600,
                  mb: 3,
                }}
              >
                Quick Links
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {quickLinks.map((link) => (
                  <Typography
                    key={link.label}
                    variant="body2"
                    sx={{
                      color: '#b3b3b3',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        color: '#00d4ff',
                        transform: 'translateX(5px)',
                      },
                    }}
                    onClick={() => scrollToSection(link.href)}
                  >
                    {link.label}
                  </Typography>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Skills Highlight */}
          <Grid item xs={12} sm={6} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: '#fff',
                  fontWeight: 600,
                  mb: 3,
                }}
              >
                Core Expertise
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Security sx={{ color: '#00d4ff', fontSize: 20 }} />
                  <Typography variant="body2" sx={{ color: '#b3b3b3' }}>
                    Cybersecurity & VAPT
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Code sx={{ color: '#00ff88', fontSize: 20 }} />
                  <Typography variant="body2" sx={{ color: '#b3b3b3' }}>
                    Full-Stack Development
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Security sx={{ color: '#ff6b6b', fontSize: 20 }} />
                  <Typography variant="body2" sx={{ color: '#b3b3b3' }}>
                    IAM Solutions
                  </Typography>
                </Box>
              </Box>

              {/* Contact Info */}
              <Box sx={{ mt: 4 }}>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#888',
                    mb: 1,
                  }}
                >
                  Available for freelance work
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#00d4ff',
                    fontWeight: 500,
                  }}
                >
                  hemrajb7899@gmail.com
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, bgcolor: '#333' }} />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: '#888',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              © {new Date().getFullYear()} Hemraj Bhatt. Made with{' '}
              <Favorite sx={{ color: '#ff6b6b', fontSize: 16 }} /> and React
            </Typography>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                color: '#888',
              }}
            >
              <Typography variant="body2">
                🔒 Secured with best practices
              </Typography>
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  bgcolor: '#00ff88',
                  animation: 'pulse 2s infinite',
                  '@keyframes pulse': {
                    '0%': {
                      boxShadow: '0 0 0 0 rgba(0, 255, 136, 0.7)',
                    },
                    '70%': {
                      boxShadow: '0 0 0 10px rgba(0, 255, 136, 0)',
                    },
                    '100%': {
                      boxShadow: '0 0 0 0 rgba(0, 255, 136, 0)',
                    },
                  },
                }}
              />
            </Box>
          </Box>
        </motion.div>

        {/* Scroll to Top Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            zIndex: 1000,
          }}
        >
          <IconButton
            onClick={() => scrollToSection('#home')}
            sx={{
              bgcolor: 'rgba(0, 212, 255, 0.1)',
              border: '1px solid #00d4ff',
              color: '#00d4ff',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s ease',
              '&:hover': {
                bgcolor: '#00d4ff',
                color: '#000',
                transform: 'translateY(-3px)',
                boxShadow: '0 10px 30px rgba(0, 212, 255, 0.4)',
              },
            }}
          >
            ↑
          </IconButton>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Footer;