import React from 'react';

import Header from '@/components/layout/header';

interface Props {
  children: React.ReactNode;
}

export default function BoardLayout({ children }: Props) {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <Header />
      <main>{children}</main>
    </div>
  );
}
