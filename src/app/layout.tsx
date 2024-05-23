import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const IBMPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex",
});

export const metadata: Metadata = {
  title: "Imagina AI",
  description: "AI-powered image generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      variables:{colorPrimary: '#624cf5'}
    }}>
      <html lang="en">
        <body className={cn("font-IBMPlex antialiased relative", IBMPlex.variable)}>
          
         
          {children}
          <div className="absolute bottom-2 left-20">
          <SignedOut>
            <div className="sidebar-nav_element p-2 px-4 border-2 border-purple-500">
            <SignInButton />
            </div>
          </SignedOut>
          <SignedIn>
            <div className="sidebar-nav_element p-1  border-purple-500 mr-2 gap-2">
            <UserButton />
            LOG OUT
            </div>
           
          </SignedIn>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
