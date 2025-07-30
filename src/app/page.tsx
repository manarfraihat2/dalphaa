'use client';

import React from 'react';

export default function Home() {
  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(to right, #0d47a1, #1976d2)',
        color: 'white',
        textAlign: 'center',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>
        🚧 Dalphaa.com
      </h1>
      <p style={{ fontSize: '1.5rem', maxWidth: '600px' }}>
        Our website is <strong>under construction</strong> 🔧 <br />
        We’re working hard to bring you something amazing soon.
      </p>
      <a
        href="mailto:info@dalphaa.com"
        style={{
          marginTop: '40px',
          padding: '12px 24px',
          background: '#ffffff',
          color: '#0d47a1',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontSize: '1rem',
          boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
        }}
      >
        Contact Us
      </a>
    </main>
  );
}
