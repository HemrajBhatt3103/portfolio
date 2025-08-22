import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Avatar,
  Chip,
} from '@mui/material';
import {
  Security,
  Code,
  EmojiEvents,
  School,
  WorkOutline,
  TrendingUp,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const About = () => {
  const highlights = [
    {
      icon: <Security />,
      title: 'Cybersecurity Expert',
      description: 'Specialized in IAM, VAPT, and penetration testing with hands-on experience in security assessments.',
    },
    {
      icon: <Code />,
      title: 'Full-Stack Developer',
      description: 'Proficient in React, Java, Flask, and modern web technologies with a security-first approach.',
    },
    {
      icon: <EmojiEvents />,
      title: 'Hackathon Participant',
      description: 'Active participant in Hack-Nation Global AI Hackathon with MIT Sloan AI Club.',
    },
    {
      icon: <WorkOutline />,
      title: 'Industry Experience',
      description: 'Completed multiple cybersecurity internships and developed AI-based security solutions.',
    },
  ];

  const certifications = [
    'Cisco Cybersecurity Essentials',
    'Introduction to Cybersecurity',
    'IBM Cybersecurity Essentials',
    'Deloitte Cyber Security (Forage)',
  ];

  return (
    <Box
      id="about"
      sx={{
        py: 10,
        bgcolor: '#0f0f0f',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            align="center"
            sx={{
              mb: 2,
              background: 'linear-gradient(45deg, #00d4ff, #00ff88)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            About Me
          </Typography>
          <Typography
            variant="h6"
            align="center"
            sx={{ color: '#b3b3b3', mb: 6, maxWidth: '600px', mx: 'auto' }}
          >
            Passionate about bridging the gap between cybersecurity and development
          </Typography>
        </motion.div>

        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Box sx={{ position: 'relative', mb: 4 }}>
                <Avatar
                  sx={{
                    width: 200,
                    height: 200,
                    mx: 'auto',
                    mb: 3,
                    border: '3px solid #00d4ff',
                    boxShadow: '0 0 30px rgba(0, 212, 255, 0.3)',
                    background: 'linear-gradient(45deg, #1a1a1a, #2a2a2a)',
                    fontSize: '3rem',
                    fontWeight: 'bold',
                    color: '#00d4ff',
                  }}
                >
                  HB
                </Avatar>
                
                {/* Floating certifications */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    bgcolor: '#00ff88',
                    color: '#000',
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    transform: 'rotate(15deg)',
                  }}
                >
                  Certified
                </Box>
              </Box>

              <Typography
                variant="body1"
                sx={{
                  color: '#e0e0e0',
                  lineHeight: 1.8,
                  mb: 3,
                  fontSize: '1.1rem',
                }}
              >
                I'm a passionate cybersecurity enthusiast with a growing expertise in 
                security and full-stack development skills. My journey includes 
                conducting vulnerability assessments, penetration testing, and 
                building secure, scalable web applications with AI integration.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: '#e0e0e0',
                  lineHeight: 1.8,
                  mb: 4,
                  fontSize: '1.1rem',
                }}
              >
                With hands-on experience in VAPT, AI-based security solutions, and modern web 
                technologies, I bring a security-first mindset to every project. 
                I believe in creating innovative solutions that leverage AI for enhanced 
                security and functionality.
              </Typography>

              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Chip
                      label={cert}
                      sx={{
                        bgcolor: 'rgba(0, 212, 255, 0.1)',
                        color: '#00d4ff',
                        border: '1px solid rgba(0, 212, 255, 0.3)',
                        '&:hover': {
                          bgcolor: 'rgba(0, 212, 255, 0.2)',
                          transform: 'scale(1.05)',
                        },
                      }}
                    />
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              {highlights.map((highlight, index) => (
                <Grid item xs={12} sm={6} key={highlight.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card
                      sx={{
                        height: '100%',
                        background: 'linear-gradient(145deg, #1a1a1a, #2a2a2a)',
                        border: '1px solid #333',
                        borderRadius: 3,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-10px)',
                          boxShadow: '0 20px 40px rgba(0, 212, 255, 0.2)',
                          border: '1px solid #00d4ff',
                        },
                      }}
                      className="skill-card"
                    >
                      <CardContent sx={{ p: 3, textAlign: 'center' }}>
                        <Box
                          sx={{
                            display: 'inline-flex',
                            p: 2,
                            borderRadius: '50%',
                            bgcolor: 'rgba(0, 212, 255, 0.1)',
                            color: '#00d4ff',
                            mb: 2,
                          }}
                        >
                          {highlight.icon}
                        </Box>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 600,
                            mb: 1,
                            color: '#fff',
                          }}
                        >
                          {highlight.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: '#b3b3b3',
                            lineHeight: 1.6,
                          }}
                        >
                          {highlight.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box sx={{ mt: 8 }}>
            <Grid container spacing={4}>
              {[
                { number: '3+', label: 'Months Experience', icon: <TrendingUp /> },
                { number: '5+', label: 'Projects Completed', icon: <Code /> },
                { number: '4+', label: 'Certifications', icon: <School /> },
                { number: '100%', label: 'Client Satisfaction', icon: <EmojiEvents /> },
              ].map((stat, index) => (
                <Grid item xs={6} md={3} key={stat.label}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Box
                      sx={{
                        textAlign: 'center',
                        p: 3,
                        borderRadius: 3,
                        background: 'linear-gradient(145deg, #1a1a1a, #2a2a2a)',
                        border: '1px solid #333',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          border: '1px solid #00d4ff',
                          boxShadow: '0 10px 30px rgba(0, 212, 255, 0.2)',
                        },
                      }}
                    >
                      <Box
                        sx={{
                          color: '#00d4ff',
                          mb: 1,
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                      >
                        {stat.icon}
                      </Box>
                      <Typography
                        variant="h4"
                        sx={{
                          fontWeight: 700,
                          color: '#00ff88',
                          mb: 1,
                        }}
                      >
                        {stat.number}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#b3b3b3',
                          fontWeight: 500,
                        }}
                      >
                        {stat.label}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;