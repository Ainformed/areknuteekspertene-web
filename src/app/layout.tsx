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
  icons: {
    icon: "https://areknuteekspertene.no/wp-content/uploads/2023/01/areknute-logo.png",
    apple: "https://areknuteekspertene.no/wp-content/uploads/2023/01/areknute-logo.png",
  },
  title: {
    default: "Åreknuteekspertene | Spesialistklinikk for åreknuter i Oslo og Tromsø",
    template: "%s | Åreknuteekspertene",
  },
  description:
    "Åreknuteekspertene er en spesialistklinikk for behandling av åreknuter, etablert i 2009. Vi tilbyr laserbehandling (EVLA) og skumbehandling. Klinikker i Oslo (Majorstuen) og Tromsø. Forundersøkelse 1 200 kr.",
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
    title: "Åreknuteekspertene | Spesialistklinikk for åreknuter",
    description:
      "Spesialistklinikk for åreknuter i Oslo og Tromsø. Laserbehandling og skumbehandling. Etablert 2009.",
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
    title: "Åreknuteekspertene | Spesialistklinikk for åreknuter",
    description:
      "Spesialistklinikk for åreknuter i Oslo og Tromsø. Laserbehandling og skumbehandling.",
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
        "Spesialistklinikk for behandling av åreknuter, etablert i 2009. Tilbyr laserbehandling (EVLA), skumbehandling og mikroflebektomi. Klinikker i Oslo og Tromsø.",
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
    {
      "@type": "FAQPage",
      "@id": "https://areknuteekspertene-web.vercel.app/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Hva er åreknuter og hvorfor oppstår de?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Åreknuter er utvidede, synlige blodårer som oftest oppstår i bena. De skyldes svekket funksjon i veneklaffene som normalt hindrer blodet i å strømme tilbake. Når klaffene ikke fungerer, samler blodet seg opp og venene utvides. Arvelige faktorer, graviditet, overvekt, alder og stående arbeid øker risikoen for å utvikle åreknuter.",
          },
        },
        {
          "@type": "Question",
          name: "Hvilke symptomer gir åreknuter?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Vanlige symptomer på åreknuter inkluderer: synlige, slyngede blodårer under huden, tyngdefølelse i bena, hevelse rundt anklene, kløe og irritasjon rundt åreknutene, kramper om natten, ømhet og verking, samt misfarging av huden. Symptomene forverres ofte utover dagen og ved varme.",
          },
        },
        {
          "@type": "Question",
          name: "Gjør behandlingen vondt?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Moderne behandlingsmetoder er skånsomme og utføres med lokalbedøvelse. De fleste pasienter opplever kun et lite stikk ved bedøvelsen. Selve behandlingen er tilnærmet smertefri. Etter behandlingen kan du oppleve lett ømhet og stramhet som varer noen dager.",
          },
        },
        {
          "@type": "Question",
          name: "Hva er forskjellen på laserbehandling og skumbehandling?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Laserbehandling (EVLA) er gullstandarden for behandling av større åreknuter. Et laserfiber føres inn i venen og lukker den med varme. Skumbehandling brukes for mindre og mellomstore åreknuter - et skum injiseres som irriterer veneveggen slik at den lukkes. Ofte kombineres metodene for best resultat.",
          },
        },
        {
          "@type": "Question",
          name: "Hvor lang er restitusjonstiden?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Du kan gå hjem samme dag og de fleste kan gjenoppta normale aktiviteter umiddelbart. Det er vanligvis ikke behov for sykemelding. Vi anbefaler å unngå hard trening og tunge løft i 1-2 uker. Du bør bruke kompresjonsstrømper i 1-2 uker etter behandling. Full effekt av behandlingen sees etter 4-6 uker.",
          },
        },
        {
          "@type": "Question",
          name: "Dekkes behandlingen av forsikring?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, de fleste helseforsikringer dekker åreknutebehandling når det er medisinsk indisert. Vi behandler pasienter fra bl.a. Tryg, If, Storebrand, Sparebank 1, Hjelp 24 og Vertikal. Vi hjelper deg med nødvendig dokumentasjon til forsikringsselskapet.",
          },
        },
        {
          "@type": "Question",
          name: "Hva koster en forundersøkelse?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Forundersøkelsen koster kr 1.200,-. Dette beløpet trekkes fra totalprisen dersom du velger å gjennomføre behandling hos oss. Under forundersøkelsen får du en grundig ultralydundersøkelse av erfaren karkirurg og en personlig behandlingsplan.",
          },
        },
        {
          "@type": "Question",
          name: "Kan åreknuter komme tilbake etter behandling?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Moderne laserbehandling har svært lav tilbakefallsrate - rundt 5%, som er vesentlig lavere enn ved tradisjonell stripping. Det er viktig med grundig behandling første gang. Oppfølging etter 12 måneder er inkludert i prisen for å sikre best mulig resultat.",
          },
        },
        {
          "@type": "Question",
          name: "Må jeg ha henvisning fra fastlege?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nei, du trenger ikke henvisning for å bestille time hos oss. Du kan booke forundersøkelse direkte. Ved forundersøkelsen vurderer vår karkirurg om behandling er nødvendig og hvilken metode som passer best for deg.",
          },
        },
        {
          "@type": "Question",
          name: "Hva er forskjellen på åreknuter og sprengte blodkar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Åreknuter er utvidede vener som ofte er synlige som slyngede, blålige årer under huden. Sprengte blodkar (telangiektasier) er små, tynne røde eller blå årer nær hudoverflaten. Begge tilstander kan behandles hos oss - sprengte blodkar behandles vanligvis med sklerosering.",
          },
        },
      ],
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
