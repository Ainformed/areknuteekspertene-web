import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Åreknuteekspertene | Norges ledende spesialistklinikk for åreknuter",
  description:
    "Skånsom og effektiv behandling av åreknuter med over 9.000 vellykkede behandlinger siden 2009. Klinikker i Oslo og Tromsø. Book forundersøkelse i dag.",
  keywords: "åreknuter, åreknutebehandling, venebehandling, Oslo, Tromsø, spesialistklinikk",
  openGraph: {
    title: "Åreknuteekspertene | Spesialistklinikk for åreknuter",
    description: "Skånsom og effektiv behandling av åreknuter. Over 9.000 vellykkede behandlinger.",
    locale: "nb_NO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
