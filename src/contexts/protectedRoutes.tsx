"use client";
import { useAppContext } from '../contexts/UserContext';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { userDataContxt } = useAppContext();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!userDataContxt && pathname !== '/login') {
      router.push('/login');
    }
  }, [userDataContxt, pathname, router]);

  if (!userDataContxt && pathname !== '/login') {
    return null; // or a loading spinner, or something else while redirecting
  }

  return <>{children}</>;
};

export default ProtectedRoute;
