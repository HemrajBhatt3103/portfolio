import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  LinearProgress,
  Chip,
} from '@mui/material';
import {
  Security,
  Code,
  Cloud,
  BugReport,
  Shield,
  Storage,
  Web,
  Build,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Cybersecurity',
      icon: <Security />,
      color: '#00d4ff',
      skills: [
        { name: 'VAPT', level: 90 },
        { name: 'IAM', level: 85 },
        { name: 'Penetration Testing', level: 88 },
        { name: 'ISO 27001', level: 80 },
        { name: 'Risk Assessment', level: 85 },
      ],
    },
    {
      title: 'Security Tools',
      icon: <BugReport />,
      color: '#ff6b6b',
      skills: [
        { name: 'Burp Suite', level: 90 },
        { name: 'Nmap', level: 85 },
        { name: 'Wireshark', level: 80 },
        { name: 'OWASP ZAP', level: 85 },
        { name: 'Nessus', level: 75 },
      ],
    },
    {
      title: 'Development',
      icon: <Code />,
      color: '#00ff88',
      skills: [
        { name: 'Java', level: 85 },
        { name: 'React', level: 90 },
        { name: 'Flask', level: 80 },
        { name: 'JavaScript', level: 88 },
        { name: 'Python', level: 85 },
      ],
    },
    {
      title: 'Cloud & Platforms',
      icon: <Cloud />,
      color: '#ffd93d',
      skills: [
        { name: 'AWS', level: 75 },
        { name: 'Firebase', level: 80 },
        { name: 'Docker', level: 70 },
        { name: 'Linux', level: 85 },
        { name: 'Git', level: 90 },
      ],
    },
  ];

  const technologies = [
    'React', 'Java', 'Python', 'Flask', 'Firebase', 'Hibernate',
    'WebRTC', 'Jitsi', 'NoSQL', 'MongoDB', 'MySQL', 'Node.js',
    'Express', 'Material-UI', 'Bootstrap', 'HTML5', 'CSS3', 'JavaScript',
    'TypeScript', 'Redux', 'REST APIs', 'GraphQL', 'JWT', 'OAuth',
  ];

  return (
    <Box
      id="skills"
      sx={{
        py: 10,
        bgcolor: '#0a0a0a',
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
            Skills & Expertise
          </Typography>
          <Typography
            variant="h6"
            align="center"
            sx={{ color: '#b3b3b3', mb: 6, maxWidth: '600px', mx: 'auto' }}
          >
            A comprehensive toolkit for cybersecurity and full-stack development
          </Typography>
        </motion.div>

        {/* Skill Categories */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {skillCategories.map((category, categoryIndex) => (
            <Grid item xs={12} md={6} key={category.title}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
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
                      boxShadow: `0 20px 40px ${category.color}20`,
                      border: `1px solid ${category.color}`,
                    },
                  }}
                  className="skill-card"
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 3,
                      }}
                    >
                      <Box
                        sx={{
                          display: 'inline-flex',
                          p: 1.5,
                          borderRadius: '50%',
                          bgcolor: `${category.color}20`,
                          color: category.color,
                          mr: 2,
                        }}
                      >
                        {category.icon}
                      </Box>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 600,
                          color: '#fff',
                        }}
                      >
                        {category.title}
                      </Typography>
                    </Box>

                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.1 
                        }}
                        viewport={{ once: true }}
                      >
                        <Box sx={{ mb: 2 }}>
                          <Box
                            sx={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              mb: 1,
                            }}
                          >
                            <Typography
                              variant="body1"
                              sx={{
                                color: '#e0e0e0',
                                fontWeight: 500,
                              }}
                            >
                              {skill.name}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                color: category.color,
                                fontWeight: 600,
                              }}
                            >
                              {skill.level}%
                            </Typography>
                          </Box>
                          <LinearProgress
                            variant="determinate"
                            value={skill.level}
                            sx={{
                              height: 6,
                              borderRadius: 3,
                              bgcolor: '#333',
                              '& .MuiLinearProgress-bar': {
                                bgcolor: category.color,
                                borderRadius: 3,
                              },
                            }}
                          />
                        </Box>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Technologies Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h4"
            align="center"
            sx={{
              mb: 4,
              color: '#fff',
              fontWeight: 600,
            }}
          >
            Technologies & Tools
          </Typography>
          
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 2,
              justifyContent: 'center',
              p: 4,
              borderRadius: 3,
              background: 'linear-gradient(145deg, #1a1a1a, #2a2a2a)',
              border: '1px solid #333',
            }}
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Chip
                  label={tech}
                  sx={{
                    bgcolor: 'rgba(0, 212, 255, 0.1)',
                    color: '#00d4ff',
                    border: '1px solid rgba(0, 212, 255, 0.3)',
                    fontWeight: 500,
                    fontSize: '0.9rem',
                    py: 2,
                    px: 1,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      bgcolor: 'rgba(0, 212, 255, 0.2)',
                      transform: 'scale(1.1) translateY(-2px)',
                      boxShadow: '0 5px 15px rgba(0, 212, 255, 0.3)',
                    },
                  }}
                />
              </motion.div>
            ))}
          </Box>
        </motion.div>

        {/* Specializations */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box sx={{ mt: 8 }}>
            <Typography
              variant="h4"
              align="center"
              sx={{
                mb: 4,
                color: '#fff',
                fontWeight: 600,
              }}
            >
              Core Specializations
            </Typography>
            
            <Grid container spacing={3}>
              {[
                {
                  icon: <Shield />,
                  title: 'Security Architecture',
                  description: 'Designing secure systems and implementing defense-in-depth strategies',
                  color: '#00d4ff',
                },
                {
                  icon: <Web />,
                  title: 'Secure Development',
                  description: 'Building applications with security-first approach and best practices',
                  color: '#00ff88',
                },
                {
                  icon: <Storage />,
                  title: 'Identity Management',
                  description: 'IAM solutions, access controls, and authentication systems',
                  color: '#ff6b6b',
                },
                {
                  icon: <Build />,
                  title: 'DevSecOps',
                  description: 'Integrating security into CI/CD pipelines and development workflows',
                  color: '#ffd93d',
                },
              ].map((spec, index) => (
                <Grid item xs={12} sm={6} md={3} key={spec.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
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
                        height: '100%',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-10px)',
                          border: `1px solid ${spec.color}`,
                          boxShadow: `0 15px 35px ${spec.color}20`,
                        },
                      }}
                    >
                      <Box
                        sx={{
                          display: 'inline-flex',
                          p: 2,
                          borderRadius: '50%',
                          bgcolor: `${spec.color}20`,
                          color: spec.color,
                          mb: 2,
                        }}
                      >
                        {spec.icon}
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          mb: 2,
                          color: '#fff',
                        }}
                      >
                        {spec.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#b3b3b3',
                          lineHeight: 1.6,
                        }}
                      >
                        {spec.description}
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

export default Skills;