import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Avatar,
} from '@mui/material';
import {
  KeyboardArrowDown,
  Work,
  ContactMail,
  Security,
  Code,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = [
    'Cybersecurity Analyst',
    'IAM Developer',
    'Full-Stack Enthusiast',
    'Security Researcher',
  ];

  useEffect(() => {
    const currentRole = roles[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, roles]);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
        overflow: 'hidden',
      }}
      className="animated-bg"
    >
      {/* Floating Icons */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          opacity: 0.1,
          animation: 'float 6s ease-in-out infinite',
        }}
      >
        <Security sx={{ fontSize: 80, color: '#00d4ff' }} />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: '60%',
          right: '15%',
          opacity: 0.1,
          animation: 'float 6s ease-in-out infinite 2s',
        }}
      >
        <Code sx={{ fontSize: 60, color: '#00ff88' }} />
      </Box>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={8}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: '#00d4ff',
                  fontWeight: 500,
                  mb: 2,
                  textTransform: 'uppercase',
                  letterSpacing: 2,
                }}
              >
                Hello, I'm
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 800,
                  mb: 2,
                  background: 'linear-gradient(45deg, #ffffff, #00d4ff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Hemraj Bhatt
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  color: '#00ff88',
                  minHeight: '60px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {displayText}
                <Box
                  component="span"
                  sx={{
                    display: 'inline-block',
                    width: '3px',
                    height: '40px',
                    bgcolor: '#00d4ff',
                    ml: 1,
                    animation: 'blink 1s infinite',
                  }}
                />
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: '#b3b3b3',
                  mb: 4,
                  maxWidth: '600px',
                  lineHeight: 1.6,
                }}
              >
                Securing systems, building solutions, and bridging the gap between 
                development and cybersecurity. Passionate about creating secure, 
                scalable applications and protecting digital assets.
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<Work />}
                  onClick={() => scrollToSection('#projects')}
                  sx={{
                    background: 'linear-gradient(45deg, #00d4ff, #00ff88)',
                    color: '#000',
                    fontWeight: 600,
                    px: 3,
                    py: 1.5,
                    borderRadius: 3,
                    '&:hover': {
                      background: 'linear-gradient(45deg, #4de6ff, #4dffaa)',
                      transform: 'translateY(-3px)',
                      boxShadow: '0 10px 30px rgba(0, 212, 255, 0.4)',
                    },
                  }}
                >
                  View Projects
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<ContactMail />}
                  onClick={() => scrollToSection('#contact')}
                  sx={{
                    borderColor: '#00d4ff',
                    color: '#00d4ff',
                    fontWeight: 600,
                    px: 3,
                    py: 1.5,
                    borderRadius: 3,
                    '&:hover': {
                      borderColor: '#4de6ff',
                      color: '#4de6ff',
                      bgcolor: 'rgba(0, 212, 255, 0.1)',
                      transform: 'translateY(-3px)',
                    },
                  }}
                >
                  Contact Me
                </Button>
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  position: 'relative',
                }}
              >
                <Avatar
                  sx={{
                    width: 300,
                    height: 300,
                    border: '4px solid #00d4ff',
                    boxShadow: '0 0 50px rgba(0, 212, 255, 0.3)',
                    background: 'linear-gradient(45deg, #1a1a1a, #2a2a2a)',
                    fontSize: '4rem',
                    fontWeight: 'bold',
                    color: '#00d4ff',
                  }}
                >
                  HB
                </Avatar>
                
                {/* Floating skill badges around avatar */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: '10%',
                    right: '10%',
                    bgcolor: '#00d4ff',
                    color: '#000',
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    animation: 'float 4s ease-in-out infinite',
                  }}
                >
                  IAM
                </Box>
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: '20%',
                    left: '5%',
                    bgcolor: '#00ff88',
                    color: '#000',
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    animation: 'float 4s ease-in-out infinite 1s',
                  }}
                >
                  VAPT
                </Box>
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    right: '-10%',
                    bgcolor: '#ff6b6b',
                    color: '#fff',
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    animation: 'float 4s ease-in-out infinite 2s',
                  }}
                >
                  React
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          style={{
            position: 'absolute',
            bottom: '30px',
            left: '50%',
            transform: 'translateX(-50%)',
            cursor: 'pointer',
          }}
          onClick={() => scrollToSection('#about')}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: '#00d4ff',
              animation: 'float 2s ease-in-out infinite',
            }}
          >
            <Typography variant="body2" sx={{ mb: 1 }}>
              Scroll Down
            </Typography>
            <KeyboardArrowDown sx={{ fontSize: 30 }} />
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;