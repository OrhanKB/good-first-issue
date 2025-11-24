import React from "react";
import "../app/globals.css";
 import  Navbar  from "@/components/ui/shadcn-io/navbar-01/navbar";

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return(
    <html lang="en">
      <body className="font-sans bg-background text-foreground">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
  
}