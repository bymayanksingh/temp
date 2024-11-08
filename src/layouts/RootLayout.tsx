import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { ThemeCustomizer } from '../components/layout/ThemeCustomizer';

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <Header />
      <main>
        <Outlet />
      </main>
      <ThemeCustomizer />
    </div>
  );
}