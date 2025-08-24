import { DM_Sans } from "next/font/google";
import "./globals.css";

import Navbar from "./_components/Navbar";
import Banner from "./_components/Banner";
import ClientWrapper from "./ClientWrapper";
import ReduxProviderWrapper from "./_components/ReduxProviderWrapper";

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

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable}  antialiased`}>
        <ReduxProviderWrapper>
          <Navbar />
          <ClientWrapper />
          {children}
        </ReduxProviderWrapper>
      </body>
    </html>
  );
}
