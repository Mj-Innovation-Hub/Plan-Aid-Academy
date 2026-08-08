'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { PortalSidebar } from '@/components/layout/PortalSidebar';
import { PortalHeader } from '@/components/layout/PortalHeader';
import { useAuth } from '@/lib/authContext';

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { isLoggedIn, role } = useAuth();
  const [mobileSidebarOpen, setMobileSidebarOpen] = React.useState(false);
  const isLoginPage = pathname === '/portal/login';

  if (isLoginPage) {
    return <main className="min-h-screen bg-slate-900 flex items-center justify-center p-4">{children}</main>;
  }

  return (
    <div className="flex min-h-screen bg-slate-100 font-sans">
      <PortalSidebar
        mobileOpen={mobileSidebarOpen}
        onCloseMobile={() => setMobileSidebarOpen(false)}
      />
      <div className="flex-1 flex flex-col min-w-0">
        <PortalHeader
          onToggleMobileSidebar={() => setMobileSidebarOpen(prev => !prev)}
        />
        <main className="flex-1 p-3 sm:p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
