import { Metadata } from "next";
import Link from "next/link";
import { Header, Footer, CTASection, Breadcrumbs, PhoneIcon, ArrowRightIcon, CheckIcon } from "@/components/shared";

export const metadata: Metadata = {
  title: "Synlige blodårer - Åreknuter og sprengte kar | Åreknuteekspertene",
  description: "Synlige blodårer i bena kan være åreknuter eller sprengte blodkar. Les om forskjellen og behandlingsmuligheter for synlige årer.",
  keywords: ["synlige blodårer", "åreknuter", "sprengte blodkar", "synlige årer i bena", "blå årer", "telangiektasier"],
  openGraph: {
    title: "Synlige blodårer | Åreknuteekspertene",
    description: "Alt om synlige blodårer i bena - åreknuter og sprengte kar.",
  },
};

export default function SynligeBlodarerPage() {
  return (
    <div className="min-h-screen">
      <div className="grain-overlay" />
      <Header />

      {/* Hero */}
      <section className="bg-gradient-hero pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-wide">
          <Breadcrumbs items={[
            { label: "Symptomer", href: "/#symptomer" },
            { label: "Synlige blodårer" }
          ]} />

          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[var(--color-charcoal)] mb-6">
              Synlige blodårer
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-charcoal-light)] mb-8 max-w-2xl">
              Har du synlige, slyngede blodårer i bena? Dette kan være åreknuter eller
              sprengte blodkar. Begge tilstander kan behandles effektivt hos oss.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://www.telefontime.com/pasient/areknuteekspertene/#/selvbetjent/booking" className="btn-primary">
                Bestill vurdering
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

      {/* Types */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl text-center mb-12">Typer synlige blodårer</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card p-6 md:p-8">
              <h3 className="text-xl mb-4 text-[var(--color-forest)]">Åreknuter</h3>
              <p className="text-[var(--color-charcoal-light)] mb-4">
                Større, slyngede blålige årer som buler ut under huden. Skyldes
                svekkede veneklaffer og kan gi symptomer som tunge ben og hevelse.
              </p>
              <ul className="space-y-2 text-sm">
                {[
                  "Diameter over 3 mm",
                  "Ofte slynget forløp",
                  "Kan kjennes som kuler",
                  "Kan gi ubehag og symptomer",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-[var(--color-forest)]">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link href="/behandlinger/laserbehandling" className="text-[var(--color-forest)] font-medium hover:underline">
                  Behandling med laser →
                </Link>
              </div>
            </div>
            <div className="card p-6 md:p-8">
              <h3 className="text-xl mb-4 text-[var(--color-forest)]">Sprengte blodkar</h3>
              <p className="text-[var(--color-charcoal-light)] mb-4">
                Små, tynne røde eller blå årer nær hudoverflaten. Også kalt
                telangiektasier eller edderkoppårer. Hovedsakelig et kosmetisk problem.
              </p>
              <ul className="space-y-2 text-sm">
                {[
                  "Diameter under 1 mm",
                  "Røde eller blå farge",
                  "Nettverksmønster på huden",
                  "Sjelden symptomgivende",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-[var(--color-forest)]">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link href="/behandlinger/skumbehandling" className="text-[var(--color-forest)] font-medium hover:underline">
                  Behandling med skum →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Causes */}
      <section className="py-16 md:py-24 bg-[var(--color-cream)]">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl text-center mb-8">Hvorfor får man synlige blodårer?</h2>
            <p className="text-[var(--color-charcoal-light)] mb-8 text-center">
              Synlige blodårer oppstår når venene utvides og blir synlige gjennom huden.
              Dette kan skyldes flere faktorer:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Arv", desc: "Genetisk disposisjon er den viktigste faktoren" },
                { title: "Alder", desc: "Veneveggen svekkes naturlig med alderen" },
                { title: "Graviditet", desc: "Hormoner og økt blodvolum påvirker venene" },
                { title: "Overvekt", desc: "Økt trykk på venene i bena" },
                { title: "Stående arbeid", desc: "Langvarig ståen belaster venene" },
                { title: "Hormoner", desc: "P-piller og hormonbehandling kan bidra" },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="text-[var(--color-forest)] mt-0.5"><CheckIcon /></div>
                  <div>
                    <span className="font-medium">{item.title}:</span>{" "}
                    <span className="text-[var(--color-charcoal-light)]">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Treatment overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl text-center mb-12">Behandlingsmuligheter</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Link href="/behandlinger/laserbehandling" className="card hover:border-[var(--color-forest)] transition-colors">
              <h3 className="text-lg font-medium mb-2">Laserbehandling</h3>
              <p className="text-sm text-[var(--color-charcoal-light)] mb-4">
                For større åreknuter. EVLA lukker den syke venen innenfra.
              </p>
              <span className="text-[var(--color-forest)] text-sm font-medium">Les mer →</span>
            </Link>
            <Link href="/behandlinger/skumbehandling" className="card hover:border-[var(--color-forest)] transition-colors">
              <h3 className="text-lg font-medium mb-2">Skumbehandling</h3>
              <p className="text-sm text-[var(--color-charcoal-light)] mb-4">
                For mindre åreknuter og sprengte blodkar. Injeksjon som lukker åren.
              </p>
              <span className="text-[var(--color-forest)] text-sm font-medium">Les mer →</span>
            </Link>
            <Link href="/behandlinger/mikroflebektomi" className="card hover:border-[var(--color-forest)] transition-colors">
              <h3 className="text-lg font-medium mb-2">Mikroflebektomi</h3>
              <p className="text-sm text-[var(--color-charcoal-light)] mb-4">
                Fjerning av synlige åreknuter gjennom små innstikk.
              </p>
              <span className="text-[var(--color-forest)] text-sm font-medium">Les mer →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 md:py-24 bg-[var(--color-cream)]">
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl text-center mb-12">Relaterte symptomer</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <Link href="/symptomer/hovne-bein" className="card hover:border-[var(--color-forest)] transition-colors">
              <h3 className="text-lg font-medium mb-2">Hovne bein</h3>
              <p className="text-sm text-[var(--color-charcoal-light)]">Hevelse i bena</p>
            </Link>
            <Link href="/symptomer/tunge-bein" className="card hover:border-[var(--color-forest)] transition-colors">
              <h3 className="text-lg font-medium mb-2">Tunge ben</h3>
              <p className="text-sm text-[var(--color-charcoal-light)]">Tyngdefølelse</p>
            </Link>
            <Link href="/symptomer/kramper-i-bena" className="card hover:border-[var(--color-forest)] transition-colors">
              <h3 className="text-lg font-medium mb-2">Kramper</h3>
              <p className="text-sm text-[var(--color-charcoal-light)]">Nattlige kramper</p>
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}
