import { Metadata } from "next";
import Link from "next/link";
import { Header, Footer, CTASection, Breadcrumbs, PhoneIcon, EmailIcon, ClockIcon, MapPinIcon, ArrowRightIcon, CheckIcon } from "@/components/shared";

export const metadata: Metadata = {
  title: "Åreknutebehandling Tromsø | Storgata | Åreknuteekspertene",
  description: "Spesialistklinikk for åreknuter i Tromsø sentrum. Laserbehandling (EVLA), skumbehandling og mikroflebektomi. Erfaren karkirurg. Forundersøkelse 1 200 kr.",
  keywords: ["åreknutebehandling Tromsø", "åreknuter Tromsø", "karkirurg Tromsø", "laserbehandling åreknuter Tromsø", "Nord-Norge"],
  openGraph: {
    title: "Åreknutebehandling Tromsø | Åreknuteekspertene",
    description: "Spesialistklinikk for åreknuter i Tromsø sentrum. Moderne laserbehandling.",
  },
};

export default function TromsoPage() {
  return (
    <div className="min-h-screen">
      <div className="grain-overlay" />
      <Header />

      {/* Hero */}
      <section className="bg-gradient-hero pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-wide">
          <Breadcrumbs items={[{ label: "Tromsø" }]} />

          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-[var(--color-sage-light)] text-[var(--color-forest)] text-sm font-medium rounded-full mb-6">
              Tromsø sentrum
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[var(--color-charcoal)] mb-6">
              Åreknutebehandling i Tromsø
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-charcoal-light)] mb-8 max-w-2xl">
              Vår klinikk i Tromsø tilbyr spesialistbehandling av åreknuter for hele Nord-Norge.
              Moderne laserbehandling, skumbehandling og mikroflebektomi i sentrum av Tromsø.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://www.telefontime.com/pasient/areknuteekspertene/#/selvbetjent/booking" className="btn-primary">
                Bestill time i Tromsø
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
              <h2 className="text-3xl md:text-4xl mb-6">Finn oss i Tromsø sentrum</h2>
              <p className="text-[var(--color-charcoal-light)] mb-8">
                Vår Tromsø-klinikk ligger sentralt i Storgata, midt i sentrum. Vi betjener pasienter
                fra hele Nord-Norge og tilbyr samme høye kvalitet på behandling som ved vår klinikk i Oslo.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[var(--color-sage-light)] rounded-full flex items-center justify-center text-[var(--color-forest)]">
                    <MapPinIcon />
                  </div>
                  <div>
                    <h3 className="font-medium">Adresse</h3>
                    <p className="text-[var(--color-charcoal-light)]">Storgata 94, 9008 Tromsø</p>
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
                href="https://maps.google.com/?q=Storgata+94,+9008+Tromsø"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[var(--color-forest)] font-medium hover:underline"
              >
                Åpne i Google Maps →
              </a>
            </div>

            <div className="card card-forest p-8">
              <h3 className="text-2xl text-white mb-4">Behandlinger i Tromsø</h3>
              <p className="text-white/80 mb-6">
                Vi tilbyr alle våre behandlinger ved Tromsø-klinikken:
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

      {/* Why Choose Tromsø */}
      <section className="py-16 md:py-24 bg-[var(--color-cream)]">
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl text-center mb-12">Åreknutebehandling i Nord-Norge</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "For hele Nord-Norge",
                description: "Vi betjener pasienter fra hele landsdelen. Slipper lang reise til Oslo for spesialistbehandling av åreknuter."
              },
              {
                title: "Samme kvalitet",
                description: "Identisk behandlingstilbud og kvalitet som ved vår klinikk i Oslo. Erfarne spesialister og moderne utstyr."
              },
              {
                title: "Kort ventetid",
                description: "Vi tilbyr korte ventetider for både forundersøkelse og behandling. Du får svar innen 24 timer."
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
            <Link href="/symptomer/kramper-i-bena" className="card hover:border-[var(--color-forest)] transition-colors">
              <h3 className="text-lg font-medium mb-2">Kramper i bena</h3>
              <p className="text-sm text-[var(--color-charcoal-light)]">Symptomer og løsninger</p>
            </Link>
            <Link href="/oslo" className="card hover:border-[var(--color-forest)] transition-colors">
              <h3 className="text-lg font-medium mb-2">Oslo-klinikken</h3>
              <p className="text-sm text-[var(--color-charcoal-light)]">Vår klinikk på Majorstuen</p>
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}
