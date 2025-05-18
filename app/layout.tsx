import './globals.css';
import React from 'react';

export const metadata = {
  title: 'NextGenAds Dashboard',
  description: 'Ad Automation and Analytics Platform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}