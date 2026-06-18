'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Sun, Moon, Settings2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-10 h-10 mx-2 lg:mx-4" />;

  const isDark = theme === 'dark' || theme === 'system';

  return (
    <div className="mx-2 lg:mx-4 relative group">
      <button
        onClick={() => setTheme(isDark ? 'light' : 'dark')}
        className="relative w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden transition-colors duration-500 hover:border-[#0055A4] dark:hover:border-[#0055A4]"
        aria-label="Toggle Theme"
      >
        <AnimatePresence mode="wait">
          {isDark ? (
            <motion.div
              key="dark"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-[#0055A4]"
            >
              <Moon className="w-5 h-5" />
            </motion.div>
          ) : (
            <motion.div
              key="light"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-[#0ea5e9]"
            >
              <Sun className="w-5 h-5" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Subtle hover glow ring */}
        <div className="absolute inset-0 rounded-full shadow-[0_0_10px_rgba(0,85,164,0)] group-hover:shadow-[0_0_10px_rgba(0,85,164,0.3)] transition-shadow duration-500" />
      </button>

      {/* Tooltip */}
      <div className="absolute top-14 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-zinc-900 text-white text-[10px] font-mono tracking-widest uppercase px-3 py-1.5 rounded border border-zinc-800 whitespace-nowrap">
          {isDark ? 'Switch to Day Shift' : 'Switch to Night Shift'}
        </div>
      </div>
    </div>
  );
}
