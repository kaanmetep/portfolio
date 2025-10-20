import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"] as const,
});

export const metadata: Metadata = {
  title: "Kaan P. | Software Engineer",
  description: "Kaan P. | Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} text-gray-900 bg-stone-50 dark:bg-black`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
