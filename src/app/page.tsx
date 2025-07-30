'use client';

import React from 'react';
import { Box, Typography, Paper, Button, Alert, TextField, Grid } from '@mui/material';
import NavBar from '@/components/NavBar';
import BottomNav from '@/components/BottomNav';

const services = [
  {
    title: 'Professional Translation',
    description:
      'Certified translations in legal, technical, commercial, and personal documents with guaranteed accuracy.',
  },
  {
    title: 'Real Estate Sales & Rentals',
    description: 'Wide range of residential and commercial properties for sale and rent.',
  },
  {
    title: 'Vehicle Sales & Leasing',
    description:
      'Offering various car models for sale and rental tailored to your transportation needs.',
  },
  {
    title: 'European Transport Services',
    description:
      'Safe and reliable moving and transportation services across Europe, on time and hassle-free.',
  },
  {
    title: 'Government Paperwork Assistance',
    description:
      'Expert help with legal documents, work permits, residency papers, and official paperwork processing.',
  },
];

export default function HomePage() {
  return (
    <Box sx={{ minHeight: '100vh', pb: '70px' }}>
      <NavBar />

      <Box
        component="main"
        sx={{
          maxWidth: 900,
          mx: 'auto',
          mt: 8,
          px: 2,
          textAlign: 'center',
        }}
      >
        {/* رسالة "قيد التطوير" */}
        <Alert severity="info" sx={{ mb: 4, fontWeight: 'bold', fontSize: '1.1rem' }}>
          🚧 This page is currently under processing. We are working hard to improve your experience!
        </Alert>

        <Typography variant="h3" gutterBottom color="primary" sx={{ fontWeight: 'bold' }}>
          Welcome to Deutsche Alpha Al Almaniah s.r.o.
        </Typography>
        <Typography variant="h6" color="text.secondary" mb={6}>
          Your trusted partner for translation, real estate, vehicle leasing, transportation, and government paperwork services across Europe.
        </Typography>

        {/* خدمات */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 4,
            mb: 8,
          }}
        >
          {services.map(({ title, description }, idx) => (
            <Paper
              key={idx}
              elevation={3}
              sx={{
                flex: '1 1 280px',
                minWidth: 280,
                maxWidth: 320,
                height: 220,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                p: 3,
                borderRadius: 2,
              }}
            >
              <Typography variant="h6" gutterBottom>
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
                {description}
              </Typography>
              <Button variant="contained" sx={{ mt: 2, alignSelf: 'flex-start' }}>
                Learn More
              </Button>
            </Paper>
          ))}
        </Box>

        {/* قسم التواصل */}
        <Typography variant="h4" gutterBottom color="primary" sx={{ mb: 3 }}>
          Contact Us
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {/* نموذج الاتصال */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
              <form>
                <TextField label="Name" fullWidth margin="normal" required />
                <TextField label="Email" type="email" fullWidth margin="normal" required />
                <TextField
                  label="Message"
                  fullWidth
                  margin="normal"
                  multiline
                  rows={4}
                  required
                />
                <Button variant="contained" type="submit" sx={{ mt: 2 }}>
                  Send Message
                </Button>
              </form>
            </Paper>
          </Grid>

          {/* خريطة الموقع */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{ borderRadius: 2, height: '100%', overflow: 'hidden' }}
            >
              <iframe
                title="Company Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.0018688022147!2d14.417204115241872!3d50.08804017942978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94f85571be53%3A0x33a0131774a3f788!2sRybn%C3%A1%20716%2F24%2C%20110%2000%20Praha%2C%20Czechia!5e0!3m2!1sen!2sus!4v1690599603248!5m2!1sen!2sus"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Paper>
          </Grid>
        </Grid>
      </Box>

      <BottomNav />
    </Box>
  );
}
