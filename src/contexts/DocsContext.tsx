import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { type DocsConfig, defaultDocsConfig } from '../config/docs.config';

interface DocsContextValue {
  config: DocsConfig;
  setConfig: (config: DocsConfig) => void;
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  searchOpen: boolean;
  setSearchOpen: (open: boolean) => void;
}

const DocsContext = createContext<DocsContextValue | undefined>(undefined);

export function DocsProvider({ 
  children, 
  config: initialConfig = defaultDocsConfig 
}: { 
  children: ReactNode; 
  config?: DocsConfig;
}) {
  const [config, setConfig] = useState<DocsConfig>(initialConfig);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('docs-theme');
      if (stored === 'dark' || stored === 'light') return stored;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('docs-theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(prev => !prev);
      }
      if (e.key === 'Escape') {
        setSearchOpen(false);
        setSidebarOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <DocsContext.Provider value={{
      config,
      setConfig,
      theme,
      setTheme,
      sidebarOpen,
      setSidebarOpen,
      searchOpen,
      setSearchOpen,
    }}>
      {children}
    </DocsContext.Provider>
  );
}

export function useDocs() {
  const context = useContext(DocsContext);
  if (!context) {
    throw new Error('useDocs must be used within a DocsProvider');
  }
  return context;
}
