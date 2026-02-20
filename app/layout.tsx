import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";

const spartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-spartan",
});

export const metadata: Metadata = {
  title: "Wega - Play and Win Crypto",
  description: "Crypto gaming platform - Play Dice, Coin Flip, and Slots to win crypto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spartan.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
