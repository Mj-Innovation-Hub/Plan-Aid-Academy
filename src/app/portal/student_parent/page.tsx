'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function StudentParentUnderscoreRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/portal/student');
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-[60vh] text-slate-500 text-sm font-medium">
      Redirecting to Student & Parent portal...
    </div>
  );
}
