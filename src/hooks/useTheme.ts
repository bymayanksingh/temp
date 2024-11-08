import { useState, useEffect } from 'react';

interface ThemeConfig {
  primaryColor: string;
  secondaryColor: string;
  fontFamily: string;
}

const defaultConfig: ThemeConfig = {
  primaryColor: 'blue',
  secondaryColor: 'purple',
  fontFamily: 'Inter',
};

export function useTheme() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark';
  });

  const [config, setConfig] = useState<ThemeConfig>(() => {
    const saved = localStorage.getItem('themeConfig');
    return saved ? JSON.parse(saved) : defaultConfig;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  useEffect(() => {
    localStorage.setItem('themeConfig', JSON.stringify(config));
    const root = document.documentElement;
    root.style.setProperty('--primary-color', config.primaryColor);
    root.style.setProperty('--secondary-color', config.secondaryColor);
    root.style.setProperty('--font-family', config.fontFamily);
  }, [config]);

  const toggleTheme = () => setIsDark(!isDark);
  const updateConfig = (newConfig: Partial<ThemeConfig>) => {
    setConfig(prev => ({ ...prev, ...newConfig }));
  };

  return { isDark, toggleTheme, config, updateConfig };
}