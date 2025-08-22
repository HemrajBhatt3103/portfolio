import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  IconButton,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
} from '@mui/material';
import {
  Launch,
  GitHub,
  Security,
  Web,
  Code,
  Close,
  VideoCall,
  Shield,
  Storage,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Skill Catalyst App',
      category: 'Full-Stack Development',
      description: 'Peer-to-peer skill exchange platform with real-time communication features',
      longDescription: 'A comprehensive platform enabling users to exchange skills through video calls, screen sharing, and secure messaging. Features include 2-step verification, real-time chat, and integrated payment system.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Firebase', 'WebRTC', 'Jitsi', 'Material-UI', '2FA'],
      features: [
        'Real-time video/voice calls',
        'Screen sharing capabilities',
        'Secure messaging system',
        '2-step verification',
        'Skill matching algorithm',
        'Payment integration',
      ],
      github: 'https://github.com/HemrajBhatt3103/skill-catalyst',
      demo: null,
      icon: <VideoCall />,
      color: '#00d4ff',
    },
    {
      id: 2,
      title: 'AI-Based Threat Detection System',
      category: 'AI & Cybersecurity',
      description: 'Machine learning-powered threat detection and analysis system',
      longDescription: 'Advanced AI system that uses machine learning algorithms to detect, analyze, and respond to cybersecurity threats in real-time. Features behavioral analysis, anomaly detection, and automated response mechanisms.',
      image: '/api/placeholder/400/250',
      technologies: ['Python', 'TensorFlow', 'Scikit-learn', 'Flask', 'MongoDB', 'Docker'],
      features: [
        'Real-time threat detection',
        'Behavioral analysis algorithms',
        'Anomaly detection using ML',
        'Automated threat response',
        'Dashboard for threat visualization',
        'Integration with SIEM systems',
      ],
      github: 'hhttps://github.com/HemrajBhatt3103/AI-Based-Threat-Detection-System',
      demo: null,
      icon: <Security />,
      color: '#00ff88',
    },
    {
      id: 3,
      title: 'Fin-DOC-GPT',
      category: 'AI & Finance',
      description: 'AI-based document analysis and investment strategy planner with stock market analysis',
      longDescription: 'Advanced AI-powered financial document analyzer that processes financial reports, market data, and investment documents to provide intelligent investment strategies and stock market analysis using GPT technology.',
      image: '/api/placeholder/400/250',
      technologies: ['Python', 'OpenAI GPT', 'Pandas', 'NumPy', 'Streamlit', 'yfinance', 'NLP'],
      features: [
        'Financial document analysis',
        'Investment strategy planning',
        'Stock market trend analysis',
        'Risk assessment algorithms',
        'Portfolio optimization',
        'Real-time market data integration',
      ],
      github: 'https://github.com/HemrajBhatt3103/FinDocGPT.git',
      demo: null,
      icon: <Code />,
      color: '#9c27b0',
    },
    {
    id: 4,
    title: 'Phishing Detection Platform',
    category: 'Cybersecurity & AI',
    description: 'Advanced phishing email detection and security awareness platform with real-time threat analysis',
    longDescription: 'Comprehensive phishing detection and security awareness platform that provides intelligent email analysis, URL reputation checking, and threat identification using advanced rule-based algorithms and multiple threat intelligence APIs.',
    image: '/api/placeholder/400/250',
    technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Tailwind CSS', 'Socket.IO', 'shadcn/ui', 'Prisma'],
    features: [
      'Real-time phishing email analysis',
      'URL reputation checking with multiple APIs',
      'Sender verification and impersonation detection',
      'Security dashboard with 30-day analytics',
      'Risk scoring and categorization',
      'Memory database fallback for high availability',
    ],
    github: 'https://github.com/HemrajBhatt3103/Phishing-Detection-Platform.git',
    demo: null,
    icon: <Shield />,
    color: '#e12421ff',
  }

  ];

  const categories = ['All', 'AI & Cybersecurity', 'AI & Finance', 'Web Development', 'Security Education'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseDialog = () => {
    setSelectedProject(null);
  };

  return (
    <Box
      id="projects"
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
            Featured Projects
          </Typography>
          <Typography
            variant="h6"
            align="center"
            sx={{ color: '#b3b3b3', mb: 6, maxWidth: '600px', mx: 'auto' }}
          >
            A showcase of my work in cybersecurity, full-stack development, and secure applications
          </Typography>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6, flexWrap: 'wrap', gap: 1 }}>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'contained' : 'outlined'}
                onClick={() => setSelectedCategory(category)}
                sx={{
                  borderRadius: 3,
                  px: 3,
                  py: 1,
                  fontWeight: 600,
                  borderColor: '#00d4ff',
                  color: selectedCategory === category ? '#000' : '#00d4ff',
                  bgcolor: selectedCategory === category ? '#00d4ff' : 'transparent',
                  '&:hover': {
                    bgcolor: selectedCategory === category ? '#4de6ff' : 'rgba(0, 212, 255, 0.1)',
                    borderColor: '#4de6ff',
                  },
                }}
              >
                {category}
              </Button>
            ))}
          </Box>
        </motion.div>

        {/* Projects Grid */}
        <Grid container spacing={4}>
          {filteredProjects.map((project, index) => (
            <Grid item xs={12} md={6} lg={4} key={project.id}>
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
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: `0 20px 40px ${project.color}20`,
                      border: `1px solid ${project.color}`,
                    },
                  }}
                  className="project-card"
                  onClick={() => handleProjectClick(project)}
                >
                  <CardMedia
                    sx={{
                      height: 200,
                      bgcolor: '#333',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        height: '100%',
                        background: `linear-gradient(45deg, ${project.color}20, ${project.color}10)`,
                      }}
                    >
                      <Box
                        sx={{
                          color: project.color,
                          fontSize: '4rem',
                        }}
                      >
                        {project.icon}
                      </Box>
                    </Box>
                  </CardMedia>

                  <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ mb: 2 }}>
                      <Chip
                        label={project.category}
                        size="small"
                        sx={{
                          bgcolor: `${project.color}20`,
                          color: project.color,
                          fontWeight: 500,
                          mb: 2,
                        }}
                      />
                    </Box>

                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        mb: 2,
                        color: '#fff',
                      }}
                    >
                      {project.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: '#b3b3b3',
                        mb: 3,
                        flexGrow: 1,
                        lineHeight: 1.6,
                      }}
                    >
                      {project.description}
                    </Typography>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 3 }}>
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{
                            bgcolor: 'rgba(0, 212, 255, 0.1)',
                            color: '#00d4ff',
                            fontSize: '0.75rem',
                          }}
                        />
                      ))}
                      {project.technologies.length > 3 && (
                        <Chip
                          label={`+${project.technologies.length - 3}`}
                          size="small"
                          sx={{
                            bgcolor: 'rgba(0, 212, 255, 0.1)',
                            color: '#00d4ff',
                            fontSize: '0.75rem',
                          }}
                        />
                      )}
                    </Box>

                    <Box sx={{ display: 'flex', gap: 1 }}>
                      {project.github && (
                        <IconButton
                          size="small"
                          sx={{
                            color: '#b3b3b3',
                            '&:hover': {
                              color: '#fff',
                              transform: 'scale(1.1)',
                            },
                          }}
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.github, '_blank');
                          }}
                        >
                          <GitHub />
                        </IconButton>
                      )}
                      {project.demo && (
                        <IconButton
                          size="small"
                          sx={{
                            color: '#b3b3b3',
                            '&:hover': {
                              color: project.color,
                              transform: 'scale(1.1)',
                            },
                          }}
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.demo, '_blank');
                          }}
                        >
                          <Launch />
                        </IconButton>
                      )}
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Project Detail Dialog */}
        <Dialog
          open={!!selectedProject}
          onClose={handleCloseDialog}
          maxWidth="md"
          fullWidth
          PaperProps={{
            sx: {
              bgcolor: '#1a1a1a',
              border: '1px solid #333',
              borderRadius: 3,
            },
          }}
        >
          {selectedProject && (
            <>
              <DialogTitle
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  color: '#fff',
                  borderBottom: '1px solid #333',
                }}
              >
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                    {selectedProject.title}
                  </Typography>
                  <Chip
                    label={selectedProject.category}
                    sx={{
                      bgcolor: `${selectedProject.color}20`,
                      color: selectedProject.color,
                    }}
                  />
                </Box>
                <IconButton onClick={handleCloseDialog} sx={{ color: '#b3b3b3' }}>
                  <Close />
                </IconButton>
              </DialogTitle>

              <DialogContent sx={{ p: 4 }}>
                <Typography
                  variant="body1"
                  sx={{ color: '#e0e0e0', mb: 4, lineHeight: 1.7 }}
                >
                  {selectedProject.longDescription}
                </Typography>

                <Typography variant="h6" sx={{ color: '#fff', mb: 2 }}>
                  Key Features
                </Typography>
                <Grid container spacing={2} sx={{ mb: 4 }}>
                  {selectedProject.features.map((feature, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Box
                          sx={{
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            bgcolor: selectedProject.color,
                            mr: 2,
                          }}
                        />
                        <Typography variant="body2" sx={{ color: '#b3b3b3' }}>
                          {feature}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>

                <Typography variant="h6" sx={{ color: '#fff', mb: 2 }}>
                  Technologies Used
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {selectedProject.technologies.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      sx={{
                        bgcolor: 'rgba(0, 212, 255, 0.1)',
                        color: '#00d4ff',
                        border: '1px solid rgba(0, 212, 255, 0.3)',
                      }}
                    />
                  ))}
                </Box>
              </DialogContent>

              <DialogActions sx={{ p: 3, borderTop: '1px solid #333' }}>
                {selectedProject.github && (
                  <Button
                    startIcon={<GitHub />}
                    onClick={() => window.open(selectedProject.github, '_blank')}
                    sx={{
                      color: '#b3b3b3',
                      borderColor: '#b3b3b3',
                      '&:hover': {
                        color: '#fff',
                        borderColor: '#fff',
                      },
                    }}
                    variant="outlined"
                  >
                    View Code
                  </Button>
                )}
                {selectedProject.demo && (
                  <Button
                    startIcon={<Launch />}
                    onClick={() => window.open(selectedProject.demo, '_blank')}
                    sx={{
                      background: `linear-gradient(45deg, ${selectedProject.color}, ${selectedProject.color}cc)`,
                      color: '#000',
                      fontWeight: 600,
                      '&:hover': {
                        background: `linear-gradient(45deg, ${selectedProject.color}cc, ${selectedProject.color}aa)`,
                      },
                    }}
                    variant="contained"
                  >
                    Live Demo
                  </Button>
                )}
              </DialogActions>
            </>
          )}
        </Dialog>
      </Container>
    </Box>
  );
};

export default Projects;