import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children, params }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header lang={params.lang} />
        {children}
      </body>
    </html>
  );
}
