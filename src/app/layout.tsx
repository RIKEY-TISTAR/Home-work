import type { Metadata } from "next";
import { Roboto, Oswald } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";

const roboto = Roboto({ 
  subsets: ["cyrillic"],
  weight: ['300', '400', '500', '700'],
  variable: "--font-roboto"
});

const oswald = Oswald({
  subsets: ['cyrillic'],
  weight: ['500', '600', '700'],
  variable: "--font-oswald"
})

export const metadata: Metadata = {
  title: "HMA",
  description: "Что то с планеткой на лого :)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${oswald.variable} w-full bg-zinc-950 text-white`}>
        <div className="__next">
          <Header />
        </div>
      </body>
    </html>
  );
}
