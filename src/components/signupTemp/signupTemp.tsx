"use client";

import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from 'next/link';
import axios from 'axios';
import { useToast } from "../ui/use-toast";
import { ToastAction } from "../ui/toast";
import { useRouter } from "next/navigation";

export function SignupTemplate() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { toast } = useToast();
  const router = useRouter();

  const signup = async () => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API}user/api/signup/`, {
        username,
        email,
        password,
      }, { withCredentials: true });

      console.log(response.data);
      toast({
        title: "Account created successfully!",
        action: <ToastAction altText="ok">ok</ToastAction>,
      })
      router.push('/login');

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md mx-4">
        <CardHeader>
          <CardTitle className="text-4xl text-center">Sign Up</CardTitle>
          <CardDescription className="text-center text-xl">Create a new account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 px-4 py-6">
          <div className="space-y-2">
            <Input id="username" placeholder="Username..." required type="text" 
            onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Input id="email" placeholder="Email..." required type="email" 
            onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Input id="password" placeholder="Password..." required type="password" 
            onChange={(e) => setPassword(e.target.value)} />
          </div>
        </CardContent>
        <CardFooter className="p-4 flex-col">
          <Button className="w-full" onClick={signup}>Sign Up</Button>
          <div className="p-4">
            <p className="font-light">Already have an account? <Link href="/login"><span className="font-bold cursor-pointer hover:underline">Log In</span></Link></p>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
