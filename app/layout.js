import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata = {
  title: "Binhind-homepage",
  description: "Binhind consultant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable}  antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
