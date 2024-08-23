import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "vlad usatii - my portfolio",
  description: "websites i've made that required great skill.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
