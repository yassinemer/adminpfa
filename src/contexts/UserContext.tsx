"use client";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { createContext, use, useContext, useEffect, useState } from 'react'

// Initialize the context with null
const AppContext = createContext(null);

export function AppWrapper({ children } : {
    children: React. ReactNode;
    }) {
    //  const initialUserData = JSON.parse(localStorage.getItem('userData')) || {};
    let [userDataContxt, setUserDataContxt] = useState({})
    const router = useRouter();


    useEffect(() => {
      const fetchUser = async () => {
          try {
              const response = await axios.get(`${process.env.NEXT_PUBLIC_API}user/api/authenticated/`, {
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
  }, []);

    return (
    <AppContext.Provider value={[userDataContxt, setUserDataContxt]}>
    {children}
    </AppContext.Provider >
    )
}

export function useAppContext() {
    const context = useContext(AppContext);
    if (context === undefined) {
      throw new Error('useAppContext must be used within a AppWrapper');
    }
    return context;
}