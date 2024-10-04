import localFont from "next/font/local";
import { Inter, IBM_Plex_Sans } from "next/font/google";
import { clsx } from "clsx";
import type { Metadata } from "next";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const geistSans = localFont({
  src: "../../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Blusalt",
  description: "Software Engineering Challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.variable,
          geistSans.variable,
          geistMono.variable,
          ibmPlexSans.variable,
          "antialiased",
        )}
      >
        {children}
      </body>
    </html>
  );
}
