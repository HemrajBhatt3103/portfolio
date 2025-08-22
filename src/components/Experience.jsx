import React from 'react';
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Chip,
  Avatar,
} from '@mui/material';
import {
  Work,
  School,
  EmojiEvents,
  Security,
  Code,
  Business,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [

    {
      id: 2,
      type: 'internship',
      title: 'Ethical Hacking Intern',
      company: 'HUMAN INITIALS',
      period: 'August 2025 - Present (Ongoing)',
      location: 'New Delhi',
      description: 'Currently pursuing intensive cybersecurity internship program focused on ethical hacking, vulnerability analysis, and real-world threat detection with industry-grade certification.',
      achievements: [
        'Currently enrolled in 50-55 Day Cybersecurity Internship Program',
        'Learning and mastering ethical hacking tools: Kali Linux, Burp Suite, Nmap, Metasploit, Wireshark',
        'Gaining hands-on experience in vulnerability identification and exploitation techniques',
        'Conducting reconnaissance and footprinting of networks and web applications',
        'Building ethical hacking portfolios with vulnerability reports and documentation',
        'Participating in bug bounty programs and vulnerability reporting',
        'Engaging in live-scenario based labs and red team practice',
        'Working towards globally verifiable certification with unique verification ID',
      ],
      technologies: ['Kali Linux', 'Burp Suite', 'Nmap', 'Metasploit', 'Wireshark', 'OWASP Top 10', 'CVSS', 'Penetration Testing'],
      icon: <Security />,
      color: '#ff6b35',
      },
    {
      id: 3,
      type: 'internship',
      title: 'Cybersecurity Intern',
      company: 'NIIT (Cisco Partnership)',
      period: 'June - July 2024 (4 weeks)',
      location: 'Remote',
      description: 'Completed Cisco Cybersecurity Essentials program with hands-on experience in network security, threat analysis, and security best practices.',
      achievements: [
        'Completed Cisco Cybersecurity Essentials certification',
        'Performed network vulnerability assessments',
        'Analyzed security threats and mitigation strategies',
        'Implemented security monitoring solutions',
        'Documented security procedures and policies',
      ],
      technologies: ['Cisco Security', 'Network Security', 'Threat Analysis', 'SIEM'],
      icon: <Security />,
      color: '#00ff88',
    },
    {
      id: 4,
      type: 'internship',
      title: 'Advanced Cybersecurity Intern',
      company: 'IIT Kharagpur & Ediglobe',
      period: '2025 - Present',
      location: 'Remote',
      description: 'Currently pursuing advanced cybersecurity training focusing on penetration testing, vulnerability assessment, and ethical hacking methodologies.',
      achievements: [
        'Mastering penetration testing techniques',
        'Conducting VAPT on web applications',
        'Learning advanced ethical hacking methods',
        'Performing security audits and assessments',
        'Creating detailed security reports',
      ],
      technologies: ['Penetration Testing', 'VAPT', 'Ethical Hacking', 'Security Auditing'],
      icon: <School />,
      color: '#ff6b6b',
    },
    {
      id: 5,
      type: 'hackathon',
      title: 'Hackathon Participant',
      company: 'Hack-Nation Global AI Hackathon',
      period: '2025',
      location: 'MIT Sloan AI Club',
      description: 'Participated in global AI hackathon focusing on innovative solutions using artificial intelligence and machine learning technologies.',
      achievements: [
        'Developed AI-powered security solution',
        'Collaborated with international team',
        'Presented innovative project concept',
        'Gained exposure to cutting-edge AI technologies',
        'Networked with industry professionals',
      ],
      technologies: ['AI/ML', 'Python', 'TensorFlow', 'Data Science', 'Innovation'],
      icon: <EmojiEvents />,
      color: '#ffd93d',
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Technology',
      field: 'Information Technology',
      institution: 'University Name',
      period: '2023 - 2026',
      gpa: '7.90/10',
      highlights: [
        'Strong foundation in Information Technology and Software Development',
        'Relevant coursework: Network Security, Database Management, Web Development',
        'Focus on cybersecurity and AI integration',
        'Led multiple technical projects',
      ],
    },
  ];

  const certifications = [
    {
      name: 'Cisco Cybersecurity Essentials',
      issuer: 'Cisco Networking Academy',
      date: '2025',
      credentialId: 'CSE-2024-001',
    },
    {
      name: 'Introduction to Cybersecurity',
      issuer: 'Cisco Networking Academy',
      date: '2025',
      credentialId: 'ITC-2024-002',
    },
    {
      name: 'IBM Cybersecurity Essentials',
      issuer: 'IBM SkillsBuild',
      date: '2025',
      credentialId: 'IBM-CSE-2024',
    },
    {
      name: 'Cyber Security Virtual Experience',
      issuer: 'Deloitte Australia on Forage',
      date: '2025',
      credentialId: 'DEL-CYBER-2024',
    },
  ];

  return (
    <Box
      id="experience"
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
            Experience & Education
          </Typography>
          <Typography
            variant="h6"
            align="center"
            sx={{ color: '#b3b3b3', mb: 8, maxWidth: '600px', mx: 'auto' }}
          >
            My professional journey in cybersecurity and software development
          </Typography>
        </motion.div>

        {/* Experience Timeline */}
        <Box sx={{ position: 'relative', mb: 8 }}>
          {/* Timeline Line */}
          <Box
            sx={{
              position: 'absolute',
              left: { xs: '20px', md: '50%' },
              top: 0,
              bottom: 0,
              width: '3px',
              background: 'linear-gradient(45deg, #00d4ff, #00ff88)',
              transform: { md: 'translateX(-50%)' },
              zIndex: 1,
            }}
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: { xs: 'flex-start', md: index % 2 === 0 ? 'flex-end' : 'flex-start' },
                  mb: 6,
                  position: 'relative',
                }}
              >
                {/* Timeline Dot */}
                <Box
                  sx={{
                    position: 'absolute',
                    left: { xs: '8px', md: '50%' },
                    top: '20px',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    bgcolor: exp.color,
                    transform: { md: 'translateX(-50%)' },
                    zIndex: 2,
                    boxShadow: `0 0 20px ${exp.color}50`,
                  }}
                />

                <Card
                  sx={{
                    width: { xs: 'calc(100% - 60px)', md: '45%' },
                    ml: { xs: '50px', md: 0 },
                    background: 'linear-gradient(145deg, #1a1a1a, #2a2a2a)',
                    border: '1px solid #333',
                    borderRadius: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: `0 15px 35px ${exp.color}20`,
                      border: `1px solid ${exp.color}`,
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Avatar
                        sx={{
                          bgcolor: `${exp.color}20`,
                          color: exp.color,
                          mr: 2,
                          width: 50,
                          height: 50,
                        }}
                      >
                        {exp.icon}
                      </Avatar>
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{ fontWeight: 600, color: '#fff', mb: 0.5 }}
                        >
                          {exp.title}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          sx={{ color: exp.color, fontWeight: 500 }}
                        >
                          {exp.company}
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                      <Chip
                        label={exp.period}
                        size="small"
                        sx={{
                          bgcolor: `${exp.color}20`,
                          color: exp.color,
                        }}
                      />
                      <Chip
                        label={exp.location}
                        size="small"
                        sx={{
                          bgcolor: 'rgba(255, 255, 255, 0.1)',
                          color: '#b3b3b3',
                        }}
                      />
                    </Box>

                    <Typography
                      variant="body2"
                      sx={{ color: '#e0e0e0', mb: 3, lineHeight: 1.6 }}
                    >
                      {exp.description}
                    </Typography>

                    <Typography
                      variant="subtitle2"
                      sx={{ color: '#fff', mb: 2, fontWeight: 600 }}
                    >
                      Key Achievements:
                    </Typography>
                    <Box component="ul" sx={{ pl: 2, mb: 3 }}>
                      {exp.achievements.map((achievement, idx) => (
                        <Typography
                          key={idx}
                          component="li"
                          variant="body2"
                          sx={{ color: '#b3b3b3', mb: 0.5, lineHeight: 1.5 }}
                        >
                          {achievement}
                        </Typography>
                      ))}
                    </Box>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {exp.technologies.map((tech) => (
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
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </motion.div>
          ))}
        </Box>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h4"
            align="center"
            sx={{ color: '#fff', mb: 4, fontWeight: 600 }}
          >
            Education
          </Typography>

          {education.map((edu, index) => (
            <Card
              key={index}
              sx={{
                mb: 4,
                background: 'linear-gradient(145deg, #1a1a1a, #2a2a2a)',
                border: '1px solid #333',
                borderRadius: 3,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 15px 35px rgba(0, 212, 255, 0.2)',
                  border: '1px solid #00d4ff',
                },
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Avatar
                    sx={{
                      bgcolor: 'rgba(0, 255, 136, 0.2)',
                      color: '#00ff88',
                      mr: 3,
                      width: 60,
                      height: 60,
                    }}
                  >
                    <School sx={{ fontSize: 30 }} />
                  </Avatar>
                  <Box>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: 600, color: '#fff', mb: 1 }}
                    >
                      {edu.degree}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ color: '#00ff88', fontWeight: 500, mb: 0.5 }}
                    >
                      {edu.field}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ color: '#b3b3b3' }}
                    >
                      {edu.institution} • {edu.period}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
                  <Chip
                    label={`GPA: ${edu.gpa}`}
                    sx={{
                      bgcolor: 'rgba(0, 255, 136, 0.2)',
                      color: '#00ff88',
                    }}
                  />
                </Box>

                <Box component="ul" sx={{ pl: 2 }}>
                  {edu.highlights.map((highlight, idx) => (
                    <Typography
                      key={idx}
                      component="li"
                      variant="body2"
                      sx={{ color: '#e0e0e0', mb: 0.5, lineHeight: 1.6 }}
                    >
                      {highlight}
                    </Typography>
                  ))}
                </Box>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h4"
            align="center"
            sx={{ color: '#fff', mb: 4, fontWeight: 600 }}
          >
            Certifications
          </Typography>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    background: 'linear-gradient(145deg, #1a1a1a, #2a2a2a)',
                    border: '1px solid #333',
                    borderRadius: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 10px 25px rgba(255, 215, 61, 0.2)',
                      border: '1px solid #ffd93d',
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Avatar
                        sx={{
                          bgcolor: 'rgba(255, 215, 61, 0.2)',
                          color: '#ffd93d',
                          mr: 2,
                          width: 40,
                          height: 40,
                        }}
                      >
                        <EmojiEvents />
                      </Avatar>
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{ fontWeight: 600, color: '#fff', mb: 0.5 }}
                        >
                          {cert.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: '#ffd93d' }}
                        >
                          {cert.issuer}
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <Chip
                        label={cert.date}
                        size="small"
                        sx={{
                          bgcolor: 'rgba(255, 215, 61, 0.2)',
                          color: '#ffd93d',
                        }}
                      />
                      <Chip
                        label={cert.credentialId}
                        size="small"
                        sx={{
                          bgcolor: 'rgba(255, 255, 255, 0.1)',
                          color: '#b3b3b3',
                        }}
                      />
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Experience;