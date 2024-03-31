import React from 'react';

import Header from '@/components/layout/header';
import Navigation from '@/components/layout/navigation';

interface Props {
  children: React.ReactNode;
}

export default function BoardLayout({ children }: Props) {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 items-start md:grid md:grid-cols-[260px_minmax(0,1fr)]">
        <Navigation />
        <div>{children}</div>
      </main>
    </div>
  );
}
