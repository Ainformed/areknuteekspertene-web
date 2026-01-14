import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Åreknuteekspertene - Spesialistklinikk for åreknuter",
  description:
    "Forundersøkelse og behandling av åreknuter. Over 9.000 behandlinger siden 2009. Oslo og Tromsø.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
