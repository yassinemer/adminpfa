"use client";

import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from 'next/link';
import axios from 'axios';
import { useAppContext } from "@/contexts/UserContext";
import { useRouter } from "next/navigation";
import { ToastAction } from "../ui/toast";
import { useToast } from "../ui/use-toast";

export function LoginTemplate() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { userDataContxt, setUserDataContxt } = useAppContext();
  const router = useRouter();
  const { toast } = useToast();

  const login = async () => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API}user/api/signin/`, {
        username,
        password,
      }, { withCredentials: true });

      console.log(response.data);
      setUserDataContxt(response.data.user);
      toast({
        title: "Logged in successfully!",
        action: <ToastAction altText="ok">ok</ToastAction>,
      });
      
      router.push('/dashboard');
    } catch (error) {
      console.error(error);
      toast({
        title: "Login failed",
        description: "Please check your username and password and try again.",
        action: <ToastAction altText="ok">ok</ToastAction>,
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md mx-4">
        <CardHeader>
          <CardTitle className="text-4xl text-center">Login</CardTitle>
          <CardDescription className="text-center text-xl">Welcome back</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 px-4 py-6">
          <div className="space-y-2">
            <Input id="username" placeholder="Username..." required type="text" 
              onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Input id="password" placeholder="Password..." required type="password"
              onChange={(e) => setPassword(e.target.value)} />
          </div>
        </CardContent>
        <CardFooter className="p-4 flex-col">
          <Button className="w-full" onClick={login}>Log In</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
