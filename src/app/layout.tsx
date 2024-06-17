import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { AppWrapper } from "@/contexts/UserContext";
import { Toaster } from "@/components/ui/toaster";
import ProtectedRoute from "@/contexts/protectedRoutes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blitz Shop Admin",
  description: "Blitz Shop Admin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Blitz Shop Admin</title>
      </head>
      <body className={inter.className}>
        <AppWrapper>
          <ProtectedRoute>
            <Navbar />
            {children}
            <Footer />
            <Toaster />
          </ProtectedRoute>
        </AppWrapper>
      </body>
    </html>
  );
}
