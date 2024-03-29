import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/parts/Navbar";
import { cookies } from 'next/headers'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kanban Board App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const cookieJar = cookies()
  const token = cookieJar.get('token')
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar token={token} />
        {children}
      </body>
    </html>
  );
}
