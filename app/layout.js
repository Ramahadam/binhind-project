import { DM_Sans } from "next/font/google";
import "./globals.css";

import Navbar from "./_components/Navbar";
import Banner from "./_components/Banner";
import RenderBanner from "./RenderBanner";
import ReduxProviderWrapper from "./_components/ReduxProviderWrapper";
import ClientWrapper from "./ClientWrapper";

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
  // const { lang } = await params;

  return (
    <html>
      <body className={`${dmSans.variable}  antialiased`}>
        <ReduxProviderWrapper>
          <ClientWrapper>
            <Navbar />
            <RenderBanner />
            {children}
          </ClientWrapper>
        </ReduxProviderWrapper>
      </body>
    </html>
  );
}
