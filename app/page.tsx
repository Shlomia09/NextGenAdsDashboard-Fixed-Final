import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import AnalyticsSection from './components/AnalyticsSection';

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-4">
        <Header />
        <AnalyticsSection />
      </div>
    </div>
  );
}