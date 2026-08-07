'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SuperAdminUnderscoreRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/portal/super-admin');
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-[60vh] text-slate-500 text-sm font-medium">
      Redirecting to Super Admin dashboard...
    </div>
  );
}
