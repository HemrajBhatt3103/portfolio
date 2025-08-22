import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import {
  Email,
  LinkedIn,
  GitHub,
  Phone,
  LocationOn,
  Security,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Email />,
      title: 'Email',
      value: 'hemrajb7899@gmail.com',
      link: 'mailto:hemrajb7899@gmail.com',
      color: '#00d4ff',
    },
    {
      icon: <LinkedIn />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/hemraj-bhatt-b36870214',
      link: 'https://www.linkedin.com/in/hemraj-bhatt-b36870214/',
      color: '#0077b5',
    },
    {
      icon: <GitHub />,
      title: 'GitHub',
      value: 'github.com/HemrajBhatt3103',
      link: 'https://github.com/HemrajBhatt3103',
      color: '#333',
    },
    {
      icon: <Phone />,
      title: 'Phone',
      value: '+91 9687370700',
      link: 'tel:+919687370700',
      color: '#00ff88',
    },
  ];
  
  return (
    <Box
      id="contact"
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
            Get In Touch
          </Typography>
          <Typography
            variant="h6"
            align="center"
            sx={{ color: '#b3b3b3', mb: 8, maxWidth: '600px', mx: 'auto' }}
          >
            Ready to collaborate on your next cybersecurity or development project? 
            Let's discuss how we can work together.
          </Typography>
        </motion.div>
        
        <Grid container justifyContent="center">
          <Grid item xs={12} md={8}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h4"
                sx={{ color: '#fff', mb: 4, fontWeight: 600, textAlign: 'center' }}
              >
                Let's Connect
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: '#b3b3b3', mb: 6, lineHeight: 1.7, textAlign: 'center' }}
              >
                I'm always interested in discussing new opportunities, 
                collaborating on exciting projects, or simply connecting 
                with fellow professionals in cybersecurity and development.
              </Typography>
              
              <Box sx={{ mb: 6 }}>
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card
                      sx={{
                        mb: 3,
                        background: 'linear-gradient(145deg, #1a1a1a, #2a2a2a)',
                        border: '1px solid #333',
                        borderRadius: 2,
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        '&:hover': {
                          transform: 'translateX(10px)',
                          border: `1px solid ${info.color}`,
                          boxShadow: `0 5px 20px ${info.color}20`,
                        },
                      }}
                      onClick={() => window.open(info.link, '_blank')}
                    >
                      <CardContent sx={{ p: 3 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: 50,
                              height: 50,
                              borderRadius: '50%',
                              bgcolor: `${info.color}20`,
                              color: info.color,
                              mr: 3,
                            }}
                          >
                            {info.icon}
                          </Box>
                          <Box>
                            <Typography
                              variant="h6"
                              sx={{ color: '#fff', fontWeight: 600, mb: 0.5 }}
                            >
                              {info.title}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{ color: '#b3b3b3' }}
                            >
                              {info.value}
                            </Typography>
                          </Box>
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </Box>
              
              {/* Security Notice */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    p: 3,
                    borderRadius: 2,
                    background: 'linear-gradient(145deg, rgba(0, 212, 255, 0.1), rgba(0, 255, 136, 0.1))',
                    border: '1px solid rgba(0, 212, 255, 0.3)',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                    <Security sx={{ color: '#00d4ff', mr: 2 }} />
                    <Typography
                      variant="h6"
                      sx={{ color: '#00d4ff', fontWeight: 600 }}
                    >
                      Secure Communication
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{ color: '#b3b3b3', lineHeight: 1.6, textAlign: 'center' }}
                  >
                    All communications are handled with the highest security standards. 
                    Your information is encrypted and never shared with third parties.
                  </Typography>
                </Box>
              </motion.div>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;