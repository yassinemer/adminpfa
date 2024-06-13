"use client";

import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useContext, useState } from "react";

import Link from 'next/link'
import axios from 'axios';
import { useAppContext } from "@/contexts/UserContext";
// import usePersistedState from "@/Persistence";
import Router, { useRouter } from "next/navigation";
import { ToastAction } from "../ui/toast";
import { useToast } from "../ui/use-toast";






export function LoginTemplate() {
  // const { user, setUser } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // const [userData, setUserData] =  usePersistedState('userData', null);
  const [userDataContxt, setUserDataContxt] = useAppContext();
  const router = useRouter();
  const { toast } = useToast();

  const login = async () => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API}user/api/signin/`, {
        username,
        password,
      }, { withCredentials: true });

      console.log(response.data);
      // setUserData(response.data.user);
      setUserDataContxt(response.data.user);
      toast({
        title: "Loggin successfully!",
        action: <ToastAction altText="ok">ok</ToastAction>,
      })
      
      router.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md mx-4">
        <CardHeader>
          <CardTitle className="text-4xl text-center">Login</CardTitle>
          <CardDescription className="text-center text-xl  ">Welcome back</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 px-4 py-6">
          <div className="space-y-2">
            {/* <Label htmlFor="username" className=" text-gray-500" >Username</Label> */}
            <Input id="username" placeholder="Username..." required type="text" 
            onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="space-y-2">
            {/* <Label htmlFor="password">Password</Label> */}
            <Input id="password"  placeholder="Password..." required type="password"
             onChange={(e) => setPassword(e.target.value)} />
          </div>
        </CardContent>
        <CardFooter className="p-4 flex-col ">
          <Button className="w-full" onClick={login} >Log In</Button>
          <div className="p-4 " >
        <p className="font-light" >or you don&apos;t have an account? <Link href="/signup" ><span className="font-bold cursor-pointer hover:underline " >Sign Up</span></Link>  </p> 
        </div>
  
        </CardFooter>
        
        
      </Card>
    </div>
  )
}
