import { Metadata } from "next";
import Link from "next/link";
import { Header, Footer, CTASection, Breadcrumbs, PhoneIcon, ArrowRightIcon, CheckIcon, ScalpelIcon } from "@/components/shared";

export const metadata: Metadata = {
  title: "Mikroflebektomi - Fjerning av åreknuter | Åreknuteekspertene",
  description: "Mikroflebektomi er en skånsom metode for å fjerne synlige åreknuter gjennom små innstikk. Godt kosmetisk resultat uten arr. Klinikker i Oslo og Tromsø.",
  keywords: ["mikroflebektomi", "fjerning av åreknuter", "åreknuteoperasjon", "fjerne synlige åreknuter", "heklenålsteknikk"],
  openGraph: {
    title: "Mikroflebektomi - Fjerning av åreknuter | Åreknuteekspertene",
    description: "Skånsom fjerning av synlige åreknuter med minimale arr.",
  },
};

export default function MikroflebektomiPage() {
  return (
    <div className="min-h-screen">
      <div className="grain-overlay" />
      <Header />

      {/* Hero */}
      <section className="bg-gradient-hero pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-wide">
          <Breadcrumbs items={[
            { label: "Behandlinger", href: "/#behandlinger" },
            { label: "Mikroflebektomi" }
          ]} />

          <div className="max-w-3xl">
            <div className="w-16 h-16 bg-[var(--color-sage-light)] rounded-2xl flex items-center justify-center mb-6">
              <ScalpelIcon />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[var(--color-charcoal)] mb-6">
              Mikroflebektomi
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-charcoal-light)] mb-8 max-w-2xl">
              Mikroflebektomi er en minimal-invasiv teknikk for å fjerne synlige åreknuter gjennom
              små innstikk (0,8 mm). Gir utmerket kosmetisk resultat uten synlige arr.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://www.telefontime.com/pasient/areknuteekspertene/#/selvbetjent/booking" className="btn-primary">
                Bestill forundersøkelse
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

      {/* What is Microphlebectomy */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl mb-6">Hva er mikroflebektomi?</h2>
              <p className="text-[var(--color-charcoal-light)] mb-6">
                Mikroflebektomi, også kalt ambulatorisk flebektomi eller heklenålsteknikk, er en
                metode der synlige åreknuter fjernes gjennom svært små innstikk i huden. Innstikkene
                er så små (under 1 mm) at de ikke krever sting og gror uten synlige arr.
              </p>
              <p className="text-[var(--color-charcoal-light)] mb-6">
                Teknikken brukes for å fjerne de slyngede, synlige åreknutene som ligger rett under
                huden. Behandlingen utføres med lokalbedøvelse og kombineres ofte med laserbehandling
                (EVLA) for et komplett resultat.
              </p>
              <p className="text-[var(--color-charcoal-light)]">
                Etter behandlingen er benet glatt uten de karakteristiske blå, slyngede årene.
                De fleste pasienter er svært fornøyde med det kosmetiske resultatet.
              </p>
            </div>
            <div className="card p-8">
              <h3 className="text-xl mb-6">Fordeler med mikroflebektomi</h3>
              <ul className="space-y-4">
                {[
                  "Minimale innstikk (under 1 mm)",
                  "Ingen sting nødvendig",
                  "Utmerket kosmetisk resultat",
                  "Utføres med lokalbedøvelse",
                  "Gå hjem samme dag",
                  "Permanent fjerning av synlige årer",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="text-[var(--color-forest)] mt-0.5"><CheckIcon /></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 bg-[var(--color-cream)]">
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl text-center mb-12">Hvordan utføres mikroflebektomi?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Markering",
                description: "De synlige åreknutene markeres nøyaktig på huden mens du står, slik at alle synlige årer kartlegges."
              },
              {
                step: "2",
                title: "Lokalbedøvelse",
                description: "Området bedøves lokalt langs de markerte årene. Du er våken under hele behandlingen."
              },
              {
                step: "3",
                title: "Fjerning",
                description: "Gjennom små innstikk (0,8 mm) løftes åreknutene ut med et spesialinstrument. Tar 30-45 minutter."
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-[var(--color-forest)] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-medium">
                  {item.step}
                </div>
                <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--color-charcoal-light)]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl text-center mb-12">Priser</h2>
            <div className="space-y-4">
              {[
                { name: "Forundersøkelse med ultralyd", price: "1 200 kr", note: "Trekkes fra ved behandling" },
                { name: "Åreknutebehandling - ett ben", price: "fra 5 000 kr", note: "Laser + mikroflebektomi" },
                { name: "Åreknutebehandling - begge ben", price: "fra 10 000 kr", note: "Samme dag" },
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center py-4 border-b border-[var(--color-sage-light)]">
                  <div>
                    <span className="font-medium">{item.name}</span>
                    {item.note && <span className="block text-sm text-[var(--color-charcoal-light)]">{item.note}</span>}
                  </div>
                  <span className="font-semibold">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 md:py-24 bg-[var(--color-cream)]">
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl text-center mb-12">Andre behandlinger</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <Link href="/behandlinger/laserbehandling" className="card hover:border-[var(--color-forest)] transition-colors">
              <h3 className="text-xl font-medium mb-2">Laserbehandling</h3>
              <p className="text-[var(--color-charcoal-light)]">
                EVLA-behandling for de underliggende hovedårene.
              </p>
            </Link>
            <Link href="/behandlinger/skumbehandling" className="card hover:border-[var(--color-forest)] transition-colors">
              <h3 className="text-xl font-medium mb-2">Skumbehandling</h3>
              <p className="text-[var(--color-charcoal-light)]">
                For mindre åreknuter og sprengte blodkar.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}
