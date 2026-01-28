import { Metadata } from "next";
import Link from "next/link";
import { Header, Footer, CTASection, Breadcrumbs, PhoneIcon, EmailIcon, ClockIcon, MapPinIcon, ArrowRightIcon, CheckIcon } from "@/components/shared";

export const metadata: Metadata = {
  title: "Åreknutebehandling Oslo | Majorstuen | Åreknuteekspertene",
  description: "Spesialistklinikk for åreknuter på Majorstuen i Oslo. Laserbehandling (EVLA), skumbehandling og mikroflebektomi. Erfaren karkirurg. Forundersøkelse 1 200 kr.",
  keywords: ["åreknutebehandling Oslo", "åreknuter Oslo", "karkirurg Oslo", "laserbehandling åreknuter Oslo", "Majorstuen"],
  openGraph: {
    title: "Åreknutebehandling Oslo | Åreknuteekspertene",
    description: "Spesialistklinikk for åreknuter på Majorstuen i Oslo. Moderne laserbehandling.",
  },
};

export default function OsloPage() {
  return (
    <div className="min-h-screen">
      <div className="grain-overlay" />
      <Header />

      {/* Hero */}
      <section className="bg-gradient-hero pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-wide">
          <Breadcrumbs items={[{ label: "Oslo" }]} />

          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-[var(--color-sage-light)] text-[var(--color-forest)] text-sm font-medium rounded-full mb-6">
              Majorstuen, Oslo
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[var(--color-charcoal)] mb-6">
              Åreknutebehandling i Oslo
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-charcoal-light)] mb-8 max-w-2xl">
              Vår klinikk på Majorstuen tilbyr moderne behandling av åreknuter med laserbehandling (EVLA),
              skumbehandling og mikroflebektomi. Sentralt plassert med god tilgjengelighet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://www.telefontime.com/pasient/areknuteekspertene/#/selvbetjent/booking" className="btn-primary">
                Bestill time i Oslo
                <ArrowRightIcon />
              </a>
              <a href="tel:40044600" className="btn-secondary">
                <PhoneIcon />
                400 44 600
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Location Details */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl mb-6">Finn oss på Majorstuen</h2>
              <p className="text-[var(--color-charcoal-light)] mb-8">
                Vår Oslo-klinikk ligger sentralt på Majorstuen, kun få minutters gange fra T-banen.
                Vi har behandlet pasienter med åreknuter siden 2009 og er spesialister på moderne,
                skånsomme behandlingsmetoder.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[var(--color-sage-light)] rounded-full flex items-center justify-center text-[var(--color-forest)]">
                    <MapPinIcon />
                  </div>
                  <div>
                    <h3 className="font-medium">Adresse</h3>
                    <p className="text-[var(--color-charcoal-light)]">Sørkedalsveien 10A, 0369 Oslo</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[var(--color-sage-light)] rounded-full flex items-center justify-center text-[var(--color-forest)]">
                    <ClockIcon />
                  </div>
                  <div>
                    <h3 className="font-medium">Åpningstider</h3>
                    <p className="text-[var(--color-charcoal-light)]">Mandag - Fredag: 08:00 - 16:00</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[var(--color-sage-light)] rounded-full flex items-center justify-center text-[var(--color-forest)]">
                    <PhoneIcon />
                  </div>
                  <div>
                    <h3 className="font-medium">Kontakt</h3>
                    <p className="text-[var(--color-charcoal-light)]">Telefon: 400 44 600</p>
                    <p className="text-[var(--color-charcoal-light)]">E-post: post@areknuteekspertene.no</p>
                  </div>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=Sørkedalsveien+10A,+0369+Oslo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[var(--color-forest)] font-medium hover:underline"
              >
                Åpne i Google Maps →
              </a>
            </div>

            <div className="card card-forest p-8">
              <h3 className="text-2xl text-white mb-4">Behandlinger i Oslo</h3>
              <p className="text-white/80 mb-6">
                Vi tilbyr alle våre behandlinger ved Oslo-klinikken:
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  { name: "Laserbehandling (EVLA)", href: "/behandlinger/laserbehandling" },
                  { name: "Skumbehandling", href: "/behandlinger/skumbehandling" },
                  { name: "Mikroflebektomi", href: "/behandlinger/mikroflebektomi" },
                ].map((item, index) => (
                  <li key={index}>
                    <Link href={item.href} className="flex items-center gap-3 text-white hover:text-white/80 transition-colors">
                      <CheckIcon />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="bg-white/10 rounded-lg p-4 mb-6">
                <div className="text-white/60 text-sm mb-1">Forundersøkelse</div>
                <div className="text-2xl font-serif text-white">1 200 kr</div>
                <div className="text-white/60 text-sm">Trekkes fra ved behandling</div>
              </div>
              <a
                href="https://www.telefontime.com/pasient/areknuteekspertene/#/selvbetjent/booking"
                className="block w-full bg-white text-[var(--color-forest)] font-medium py-3 px-6 rounded text-center hover:bg-[var(--color-cream)] transition-colors"
              >
                Bestill forundersøkelse
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Oslo */}
      <section className="py-16 md:py-24 bg-[var(--color-cream)]">
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl text-center mb-12">Hvorfor velge oss i Oslo?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Erfaren karkirurg",
                description: "Dr. Thomas Hayes har utført tusenvis av åreknutebehandlinger og var blant de første i Norge til å ta i bruk moderne laserbehandling."
              },
              {
                title: "Sentral beliggenhet",
                description: "Vår klinikk på Majorstuen er lett tilgjengelig med kollektivtransport. Kun få minutters gange fra Majorstuen T-banestasjon."
              },
              {
                title: "Samme dag behandling",
                description: "De fleste pasienter kan gå hjem samme dag etter behandling og gjenoppta normale aktiviteter umiddelbart."
              },
            ].map((item, index) => (
              <div key={index} className="card">
                <h3 className="text-xl mb-3">{item.title}</h3>
                <p className="text-[var(--color-charcoal-light)]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl text-center mb-12">Relaterte sider</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Link href="/behandlinger/laserbehandling" className="card hover:border-[var(--color-forest)] transition-colors">
              <h3 className="text-lg font-medium mb-2">Laserbehandling</h3>
              <p className="text-sm text-[var(--color-charcoal-light)]">EVLA-behandling for åreknuter</p>
            </Link>
            <Link href="/tilstander/hovne-bein" className="card hover:border-[var(--color-forest)] transition-colors">
              <h3 className="text-lg font-medium mb-2">Hovne bein</h3>
              <p className="text-sm text-[var(--color-charcoal-light)]">Årsaker og behandling</p>
            </Link>
            <Link href="/tilstander/blodpropp-i-bena" className="card hover:border-[var(--color-forest)] transition-colors">
              <h3 className="text-lg font-medium mb-2">Blodpropp i bena</h3>
              <p className="text-sm text-[var(--color-charcoal-light)]">DVT og tromboflebitt</p>
            </Link>
            <Link href="/tromso" className="card hover:border-[var(--color-forest)] transition-colors">
              <h3 className="text-lg font-medium mb-2">Tromsø-klinikken</h3>
              <p className="text-sm text-[var(--color-charcoal-light)]">Vår klinikk i Nord-Norge</p>
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}
