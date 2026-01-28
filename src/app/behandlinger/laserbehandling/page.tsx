import { Metadata } from "next";
import Link from "next/link";
import { Header, Footer, CTASection, Breadcrumbs, PhoneIcon, ArrowRightIcon, CheckIcon, ClockIcon, LaserIcon } from "@/components/shared";

export const metadata: Metadata = {
  title: "Laserbehandling av åreknuter (EVLA) | Åreknuteekspertene",
  description: "Laserbehandling (EVLA) er gullstandarden for behandling av åreknuter. Skånsom, effektiv og med lav tilbakefallsrate. Klinikker i Oslo og Tromsø.",
  keywords: ["laserbehandling åreknuter", "EVLA", "endovenøs laserablasjon", "åreknutebehandling laser", "fjerne åreknuter med laser"],
  openGraph: {
    title: "Laserbehandling av åreknuter (EVLA) | Åreknuteekspertene",
    description: "Moderne laserbehandling av åreknuter. Skånsom og effektiv med kort restitusjonstid.",
  },
};

export default function LaserbehandlingPage() {
  return (
    <div className="min-h-screen">
      <div className="grain-overlay" />
      <Header />

      {/* Hero */}
      <section className="bg-gradient-hero pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-wide">
          <Breadcrumbs items={[
            { label: "Behandlinger", href: "/#behandlinger" },
            { label: "Laserbehandling" }
          ]} />

          <div className="max-w-3xl">
            <div className="w-16 h-16 bg-[var(--color-sage-light)] rounded-2xl flex items-center justify-center mb-6">
              <LaserIcon />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[var(--color-charcoal)] mb-6">
              Laserbehandling av åreknuter
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-charcoal-light)] mb-8 max-w-2xl">
              Endovenøs laserablasjon (EVLA) er gullstandarden for moderne behandling av åreknuter.
              En skånsom metode som erstatter tradisjonell kirurgi med minimal restitusjonstid.
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

      {/* What is EVLA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl mb-6">Hva er EVLA laserbehandling?</h2>
              <p className="text-[var(--color-charcoal-light)] mb-6">
                EVLA (Endovenøs Laser Ablasjon) er en moderne, minimal-invasiv behandling der et tynt
                laserfiber føres inn i den syke venen gjennom et lite innstikk. Laseren varmer opp
                veneveggen innenfra, noe som får venen til å lukke seg permanent.
              </p>
              <p className="text-[var(--color-charcoal-light)] mb-6">
                Blodet finner automatisk nye veier gjennom friske vener, og den lukkede venen brytes
                gradvis ned av kroppen. Behandlingen utføres med lokalbedøvelse og du kan gå hjem samme dag.
              </p>
              <p className="text-[var(--color-charcoal-light)]">
                Dr. Thomas Hayes var en av de første karkirurgene i Norge til å ta i bruk EVLA-behandling,
                og har utført tusenvis av vellykkede inngrep siden 2009.
              </p>
            </div>
            <div className="card p-8">
              <h3 className="text-xl mb-6">Fordeler med laserbehandling</h3>
              <ul className="space-y-4">
                {[
                  "Kun lokalbedøvelse nødvendig",
                  "Ingen store snitt eller arr",
                  "Gå hjem samme dag",
                  "Tilbake til normale aktiviteter umiddelbart",
                  "Lav tilbakefallsrate (ca. 5%)",
                  "Erstatter tradisjonell kirurgi",
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
          <h2 className="text-3xl md:text-4xl text-center mb-12">Slik foregår behandlingen</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Forundersøkelse",
                description: "Grundig ultralydundersøkelse for å kartlegge åreknutene og lage en behandlingsplan."
              },
              {
                step: "2",
                title: "Lokalbedøvelse",
                description: "Området bedøves lokalt. Du er våken under hele behandlingen."
              },
              {
                step: "3",
                title: "Laserbehandling",
                description: "Laserfiber føres inn og venen lukkes med kontrollert varme. Tar ca. 1 time."
              },
              {
                step: "4",
                title: "Oppfølging",
                description: "Du går hjem samme dag. Kontroll etter 4-6 uker for å sikre godt resultat."
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
            <h2 className="text-3xl md:text-4xl text-center mb-12">Priser for laserbehandling</h2>
            <div className="space-y-4">
              {[
                { name: "Forundersøkelse med ultralyd", price: "1 200 kr", note: "Trekkes fra ved behandling" },
                { name: "EVLA Laser - ett ben", price: "fra 10 000 kr", note: "Avhengig av omfang" },
                { name: "EVLA Laser - begge ben", price: "fra 16 000 kr", note: "Samme dag" },
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
            <p className="text-sm text-[var(--color-charcoal-light)] mt-6 text-center">
              De fleste helseforsikringer dekker behandling av åreknuter. Vi hjelper deg med dokumentasjon.
            </p>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 md:py-24 bg-[var(--color-cream)]">
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl text-center mb-12">Andre behandlinger</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <Link href="/behandlinger/skumbehandling" className="card hover:border-[var(--color-forest)] transition-colors">
              <h3 className="text-xl font-medium mb-2">Skumbehandling</h3>
              <p className="text-[var(--color-charcoal-light)]">
                For mindre åreknuter og sprengte blodkar. Ofte kombinert med laser.
              </p>
            </Link>
            <Link href="/behandlinger/mikroflebektomi" className="card hover:border-[var(--color-forest)] transition-colors">
              <h3 className="text-xl font-medium mb-2">Mikroflebektomi</h3>
              <p className="text-[var(--color-charcoal-light)]">
                Fjerning av synlige åreknuter gjennom små innstikk.
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
