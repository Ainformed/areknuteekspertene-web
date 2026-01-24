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
  metadataBase: new URL("https://areknuteekspertene-web.vercel.app"),
  title: {
    default: "Åreknutebehandling Oslo & Tromsø | 9000+ behandlinger | Åreknuteekspertene",
    template: "%s | Åreknuteekspertene",
  },
  description:
    "Norges ledende spesialistklinikk for åreknuter. Skånsom laserbehandling og skumbehandling med over 9.000 vellykkede behandlinger siden 2009. Dr. Thomas Hayes - karkirurgen med lengst erfaring i Norge. Klinikker på Majorstuen i Oslo og i Tromsø. Book forundersøkelse fra kr 1.200,-",
  keywords: [
    "åreknuter",
    "åreknutebehandling",
    "åreknutebehandling Oslo",
    "åreknutebehandling Tromsø",
    "laserbehandling åreknuter",
    "skumbehandling åreknuter",
    "fjerne åreknuter",
    "karkirurg Oslo",
    "venebehandling",
    "åreknuter behandling pris",
    "åreknuter operasjon",
    "sprengte blodkar",
    "Dr. Thomas Hayes",
  ],
  authors: [{ name: "Åreknuteekspertene" }],
  creator: "Åreknuteekspertene",
  publisher: "Åreknuteekspertene",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Åreknutebehandling Oslo & Tromsø | Åreknuteekspertene",
    description:
      "Norges ledende spesialistklinikk for åreknuter. Over 9.000 vellykkede behandlinger siden 2009. Book forundersøkelse i dag!",
    url: "https://areknuteekspertene-web.vercel.app",
    siteName: "Åreknuteekspertene",
    locale: "nb_NO",
    type: "website",
    images: [
      {
        url: "https://areknuteekspertene.no/wp-content/uploads/2023/01/areknute-logo.png",
        width: 1200,
        height: 630,
        alt: "Åreknuteekspertene - Spesialistklinikk for åreknuter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Åreknutebehandling Oslo & Tromsø | Åreknuteekspertene",
    description:
      "Norges ledende spesialistklinikk for åreknuter. Over 9.000 vellykkede behandlinger.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://areknuteekspertene-web.vercel.app",
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      "@id": "https://areknuteekspertene-web.vercel.app/#organization",
      name: "Åreknuteekspertene",
      alternateName: "Åreknuteekspertene AS",
      url: "https://areknuteekspertene-web.vercel.app",
      logo: "https://areknuteekspertene.no/wp-content/uploads/2023/01/areknute-logo.png",
      image: "https://areknuteekspertene.no/wp-content/uploads/2023/01/areknute-logo.png",
      description:
        "Norges første helspesialiserte åreknuteklinikk siden 2009. Over 9.000 vellykkede behandlinger med moderne laserbehandling og skumbehandling.",
      telephone: "+47 400 44 600",
      email: "post@areknuteekspertene.no",
      foundingDate: "2009",
      priceRange: "$$",
      currenciesAccepted: "NOK",
      paymentAccepted: "Cash, Credit Card, Debit Card, Invoice",
      areaServed: [
        {
          "@type": "City",
          name: "Oslo",
        },
        {
          "@type": "City",
          name: "Tromsø",
        },
      ],
      medicalSpecialty: [
        "Vascular Surgery",
        "Phlebology",
      ],
      availableService: [
        {
          "@type": "MedicalProcedure",
          name: "Laserbehandling av åreknuter (EVLA)",
          description: "Endovenøs laserablasjon for behandling av åreknuter",
        },
        {
          "@type": "MedicalProcedure",
          name: "Skumbehandling",
          description: "Skumsklerosering for behandling av åreknuter",
        },
        {
          "@type": "MedicalProcedure",
          name: "Mikroflebektomi",
          description: "Minimal-invasiv fjerning av synlige åreknuter",
        },
      ],
      sameAs: [
        "https://areknuteekspertene.no",
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "500",
        bestRating: "5",
        worstRating: "1",
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://areknuteekspertene-web.vercel.app/#oslo",
      name: "Åreknuteekspertene Oslo",
      parentOrganization: {
        "@id": "https://areknuteekspertene-web.vercel.app/#organization",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Sørkedalsveien 10A",
        addressLocality: "Oslo",
        postalCode: "0369",
        addressCountry: "NO",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "59.9291",
        longitude: "10.7135",
      },
      telephone: "+47 400 44 600",
      email: "post@areknuteekspertene.no",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "16:00",
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://areknuteekspertene-web.vercel.app/#tromso",
      name: "Åreknuteekspertene Tromsø",
      parentOrganization: {
        "@id": "https://areknuteekspertene-web.vercel.app/#organization",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Storgata 94",
        addressLocality: "Tromsø",
        postalCode: "9008",
        addressCountry: "NO",
      },
      telephone: "+47 400 44 600",
      email: "post@areknuteekspertene.no",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "16:00",
      },
    },
    {
      "@type": "Person",
      "@id": "https://areknuteekspertene-web.vercel.app/#dr-hayes",
      name: "Dr. Thomas Hayes",
      jobTitle: "Karkirurg og daglig leder",
      worksFor: {
        "@id": "https://areknuteekspertene-web.vercel.app/#organization",
      },
      description:
        "Karkirurgen i Norge med flest åreknutebehandlinger med moderne metoder. En av de første i Norge til å ta i bruk EndoVenøs Laser (EVL). Også overlege ved karkirurgisk avdeling, Sykehuset i Vestfold.",
      medicalSpecialty: "Vascular Surgery",
    },
    {
      "@type": "WebSite",
      "@id": "https://areknuteekspertene-web.vercel.app/#website",
      url: "https://areknuteekspertene-web.vercel.app",
      name: "Åreknuteekspertene",
      publisher: {
        "@id": "https://areknuteekspertene-web.vercel.app/#organization",
      },
      inLanguage: "nb-NO",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no" className={`${cormorant.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
