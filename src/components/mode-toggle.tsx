'use client';

import { useTheme } from 'next-themes';

import DarkTheme from '@/assets/icon-dark-theme.svg';
import LightTheme from '@/assets/icon-light-theme.svg';

import { Switch } from './ui/switch';

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center justify-center gap-6 rounded-md bg-background py-3.5">
      <LightTheme />
      <Switch
        checked={theme === 'dark'}
        onCheckedChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      />
      <DarkTheme />
    </div>
  );
}
