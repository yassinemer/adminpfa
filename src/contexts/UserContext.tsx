"use client";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { createContext, useContext, useEffect, useState } from 'react';

// Initialize the context with null
const AppContext = createContext(null);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  let [userDataContxt, setUserDataContxt] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`localhost:8000/user/api/authenticated/`, {
          withCredentials: true, // send cookies with the request
        });
        if (response.status === 200) {
          setUserDataContxt(response.data.user);
        } else {
          setUserDataContxt(null);
          router.push('/login');
        }
      } catch (error) {
        console.error('Failed to fetch user:', error);
        setUserDataContxt(null);
        router.push('/login');
      }
    };

    fetchUser();
  }, [router]);

  return (
    <AppContext.Provider value={{ userDataContxt, setUserDataContxt }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useAppContext must be used within a AppWrapper');
    }
    return context;
}
