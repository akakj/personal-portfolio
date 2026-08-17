import type { Metadata } from "next";
import { Fleur_De_Leah, Lora } from "next/font/google";
import "./globals.css";

import ThemeProvider from "../app/components/ThemeProvider";

const fleurDeLeah = Fleur_De_Leah({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-fleur",
});

const lora = Lora({
  subsets: ["latin"],
  style: ["italic"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: "Anna Kandyba | Portfolio",
  description: "Software developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fleurDeLeah.variable} ${lora.variable}`}
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}