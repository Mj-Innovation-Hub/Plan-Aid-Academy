'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/authContext';

export default function PortalIndexPage() {
  const router = useRouter();
  const { role } = useAuth();

  useEffect(() => {
    let target = '/portal/admin';
    if (role === 'super_admin') target = '/portal/super-admin';
    else if (role === 'admin') target = '/portal/admin';
    else if (role === 'teacher') target = '/portal/teacher';
    else if (role === 'student_parent') target = '/portal/student';
    
    router.replace(target);
  }, [role, router]);

  return (
    <div className="flex items-center justify-center min-h-[60vh] text-slate-500 text-sm">
      Redirecting to portal dashboard...
    </div>
  );
}
