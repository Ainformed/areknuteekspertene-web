import { Metadata } from "next";
import Link from "next/link";
import { Header, Footer, CTASection, Breadcrumbs, PhoneIcon, ArrowRightIcon, CheckIcon, InjectionIcon } from "@/components/shared";

export const metadata: Metadata = {
  title: "Skumbehandling av åreknuter (Sklerosering) | Åreknuteekspertene",
  description: "Skumbehandling (sklerosering) er en effektiv behandling for mindre åreknuter og sprengte blodkar. Ingen bedøvelse nødvendig. Klinikker i Oslo og Tromsø.",
  keywords: ["skumbehandling åreknuter", "sklerosering", "sprengte blodkar behandling", "injeksjonsbehandling åreknuter", "skumsklerosering"],
  openGraph: {
    title: "Skumbehandling av åreknuter | Åreknuteekspertene",
    description: "Skånsom injeksjonsbehandling for mindre åreknuter og sprengte blodkar.",
  },
};

export default function SkumbehandlingPage() {
  return (
    <div className="min-h-screen">
      <div className="grain-overlay" />
      <Header />

      {/* Hero */}
      <section className="bg-gradient-hero pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-wide">
          <Breadcrumbs items={[
            { label: "Behandlinger", href: "/#behandlinger" },
            { label: "Skumbehandling" }
          ]} />

          <div className="max-w-3xl">
            <div className="w-16 h-16 bg-[var(--color-sage-light)] rounded-2xl flex items-center justify-center mb-6">
              <InjectionIcon />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[var(--color-charcoal)] mb-6">
              Skumbehandling av åreknuter
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-charcoal-light)] mb-8 max-w-2xl">
              Skumbehandling (sklerosering) er en effektiv behandling for mindre og mellomstore åreknuter,
              samt sprengte blodkar. Et skum injiseres som lukker venen permanent.
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

      {/* What is Sclerotherapy */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl mb-6">Hva er skumbehandling?</h2>
              <p className="text-[var(--color-charcoal-light)] mb-6">
                Skumbehandling, også kalt skumsklerosering, er en injeksjonsbehandling der et spesielt
                skum injiseres direkte i den syke venen. Skummet irriterer veneveggen og får den til
                å trekke seg sammen og lukke seg permanent.
              </p>
              <p className="text-[var(--color-charcoal-light)] mb-6">
                Metoden er spesielt effektiv for mindre åreknuter, sidegreiner til hovedstammene,
                og sprengte blodkar (telangiektasier). Behandlingen krever ingen bedøvelse og
                tar kun 30 minutter.
              </p>
              <p className="text-[var(--color-charcoal-light)]">
                Skumbehandling kombineres ofte med laserbehandling (EVLA) for å gi best mulig
                resultat ved mer utbredte åreknuter.
              </p>
            </div>
            <div className="card p-8">
              <h3 className="text-xl mb-6">Fordeler med skumbehandling</h3>
              <ul className="space-y-4">
                {[
                  "Ingen bedøvelse nødvendig",
                  "Rask behandling (ca. 30 min)",
                  "Umiddelbar tilbakegang til aktiviteter",
                  "Effektiv mot sprengte blodkar",
                  "Kan kombineres med laser",
                  "Kosmetisk godt resultat",
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

      {/* When to use */}
      <section className="py-16 md:py-24 bg-[var(--color-cream)]">
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl text-center mb-12">Når brukes skumbehandling?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Mindre åreknuter",
                description: "Ideell for behandling av mindre åreknuter og sidegreiner som ikke krever laserbehandling."
              },
              {
                title: "Sprengte blodkar",
                description: "Effektiv behandling av telangiektasier - de små, røde eller blå årene nær hudoverflaten."
              },
              {
                title: "Kombinasjonsbehandling",
                description: "Ofte brukt sammen med EVLA-laser for å behandle hele åreknutenettet komplett."
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

      {/* Pricing */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl text-center mb-12">Priser for skumbehandling</h2>
            <div className="space-y-4">
              {[
                { name: "Forundersøkelse med ultralyd", price: "1 200 kr", note: "Trekkes fra ved behandling" },
                { name: "Skumbehandling", price: "fra 1 500 kr", note: "Per behandling" },
                { name: "Kombinasjon med laser", price: "fra 5 000 kr", note: "Laser + skum, ett ben" },
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
          <h2 className="text-3xl md:text-4xl text-center mb-12">Relaterte sider</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <Link href="/behandlinger/laserbehandling" className="card hover:border-[var(--color-forest)] transition-colors">
              <h3 className="text-lg font-medium mb-2">Laserbehandling</h3>
              <p className="text-sm text-[var(--color-charcoal-light)]">For større åreknuter</p>
            </Link>
            <Link href="/behandlinger/mikroflebektomi" className="card hover:border-[var(--color-forest)] transition-colors">
              <h3 className="text-lg font-medium mb-2">Mikroflebektomi</h3>
              <p className="text-sm text-[var(--color-charcoal-light)]">Fjerning av synlige årer</p>
            </Link>
            <Link href="/tilstander/hovne-bein" className="card hover:border-[var(--color-forest)] transition-colors">
              <h3 className="text-lg font-medium mb-2">Hovne bein</h3>
              <p className="text-sm text-[var(--color-charcoal-light)]">Symptomer og årsaker</p>
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}
