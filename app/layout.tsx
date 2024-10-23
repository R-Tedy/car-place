import type { Metadata } from "next";
import "./globals.css";
import { Footer, NavBar } from "@/components";


export const metadata: Metadata = {
  title: "Car Place",
  description: "Find an awesome car to rent without the hustle of going to a dealer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
