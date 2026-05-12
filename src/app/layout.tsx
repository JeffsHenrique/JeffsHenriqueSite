import type { Metadata } from "next";
import { Space_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const jetbrainsMono = JetBrains_Mono({subsets:['latin'],variable:'--font-mono'});

const space_mono = Space_Mono({
  subsets: ['latin'],
  weight: ["400", "700"]
})

export const metadata: Metadata = {
  title: "<JeffsHenrique />",
  description: "My website!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-mono", jetbrainsMono.variable)}>
      <body className={space_mono.className}>{children}</body>
    </html>
  );
}
