'use client';

import '@/styles/globals.css';
import { ReactNode } from 'react';
import { Cairo } from 'next/font/google';
import { Box, Toolbar } from '@mui/material';
import ThemeRegistry from '@/components/themeRegistry';
import NavBar from '@/components/NavBar';
import BottomNav from '@/components/BottomNav';

const cairo = Cairo({ subsets: ['arabic'], weight: ['400', '700'] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <body className={`${cairo.className} bg-pink-50 text-left`}>
        <ThemeRegistry>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100vh',
              bgcolor: '#fdfdfd',
              maxWidth: 1400,
              mx: 'auto',
            }}
          >
            <NavBar />
            <Box
              component="main"
              sx={{
                flex: 1,
                width: '100%',
                px: 2,
                py: 3,
                pb: 10,
              }}
            >
              <Toolbar /> {/* Spacer to avoid content under AppBar */}
              {children}
            </Box>
            <BottomNav />
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
