import { Metadata } from "next";
import Link from "next/link";
import { Header, Footer, CTASection, Breadcrumbs, PhoneIcon, ArrowRightIcon, CheckIcon } from "@/components/shared";

export const metadata: Metadata = {
  title: "Hovne bein - Årsaker og behandling | Åreknuteekspertene",
  description: "Hovne bein kan skyldes åreknuter, venøs insuffisiens eller andre tilstander. Lær om årsaker, symptomer og effektiv behandling av hevelse i bena.",
  keywords: ["hovne bein", "hevelse i bena", "hovne ankler", "tunge ben", "trette ben", "venøs insuffisiens"],
  openGraph: {
    title: "Hovne bein - Årsaker og behandling | Åreknuteekspertene",
    description: "Alt du trenger å vite om hovne bein og behandlingsmuligheter.",
  },
};

export default function HovneBeinPage() {
  return (
    <div className="min-h-screen">
      <div className="grain-overlay" />
      <Header />

      {/* Hero */}
      <section className="bg-gradient-hero pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-wide">
          <Breadcrumbs items={[
            { label: "Tilstander", href: "/#symptomer" },
            { label: "Hovne bein" }
          ]} />

          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[var(--color-charcoal)] mb-6">
              Hovne bein
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-charcoal-light)] mb-8 max-w-2xl">
              Opplever du hevelse i bena som forverres utover dagen? Hovne bein, tunge ben og
              trette ben er vanlige symptomer på venøs insuffisiens - ofte forårsaket av åreknuter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://www.telefontime.com/pasient/areknuteekspertene/#/selvbetjent/booking" className="btn-primary">
                Bestill utredning
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

      {/* Causes */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl mb-6">Hvorfor blir bena hovne?</h2>
              <p className="text-[var(--color-charcoal-light)] mb-6">
                Hevelse i bena oppstår når væske samler seg i vevet, ofte på grunn av problemer
                med blodårene. Ved <strong>venøs insuffisiens</strong> fungerer ikke veneklaffene
                som de skal, og blodet strømmer tilbake og samler seg i bena.
              </p>
              <p className="text-[var(--color-charcoal-light)] mb-6">
                <strong>Åreknuter</strong> er et synlig tegn på venøs insuffisiens. Mange med
                hovne bein har underliggende åreknuter som ikke alltid er synlige på overflaten.
              </p>
              <p className="text-[var(--color-charcoal-light)]">
                Typisk forverres hevelsen utover dagen, spesielt ved langvarig ståen eller sitting.
                Bena føles tunge og trette, og du kan oppleve at sko og sokker strammer.
              </p>
            </div>
            <div className="card p-8">
              <h3 className="text-xl mb-6">Vanlige årsaker til hovne bein</h3>
              <ul className="space-y-4">
                {[
                  "Åreknuter og venøs insuffisiens",
                  "Langvarig ståen eller sitting",
                  "Graviditet",
                  "Overvekt",
                  "Hjertesvikt",
                  "Medisiner (blodtrykksmedisiner)",
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

      {/* Symptoms */}
      <section className="py-16 md:py-24 bg-[var(--color-cream)]">
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl text-center mb-12">Symptomer på venøs insuffisiens</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Hovne ankler", desc: "Hevelse rundt anklene som forverres utover dagen" },
              { title: "Tunge ben", desc: "Følelse av tyngde, spesielt etter langvarig ståen" },
              { title: "Trette ben", desc: "Bena føles slitne og utmattet uten god grunn" },
              { title: "Kramper", desc: "Nattlige kramper i leggene, spesielt vanlig ved åreknuter" },
            ].map((item, index) => (
              <div key={index} className="card text-center">
                <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--color-charcoal-light)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl text-center mb-8">Behandling av hovne bein</h2>
            <p className="text-[var(--color-charcoal-light)] mb-6 text-center">
              Behandlingen avhenger av årsaken. Hvis hovne bein skyldes åreknuter, kan behandling
              av disse ofte løse problemet permanent.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="card">
                <h3 className="text-xl mb-4">Konservativ behandling</h3>
                <ul className="space-y-2 text-[var(--color-charcoal-light)]">
                  <li>• Kompresjonsstrømper</li>
                  <li>• Elevasjon av bena</li>
                  <li>• Regelmessig bevegelse</li>
                  <li>• Vektnedgang om nødvendig</li>
                </ul>
              </div>
              <div className="card card-forest">
                <h3 className="text-xl mb-4 text-white">Åreknutebehandling</h3>
                <ul className="space-y-2 text-white/80">
                  <li>• <Link href="/behandlinger/laserbehandling" className="underline">Laserbehandling (EVLA)</Link></li>
                  <li>• <Link href="/behandlinger/skumbehandling" className="underline">Skumbehandling</Link></li>
                  <li>• <Link href="/behandlinger/mikroflebektomi" className="underline">Mikroflebektomi</Link></li>
                </ul>
                <p className="text-white/60 text-sm mt-4">
                  Behandler årsaken, ikke bare symptomene
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When to seek help */}
      <section className="py-16 md:py-24 bg-[var(--color-cream)]">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl text-center mb-8">Når bør du søke hjelp?</h2>
            <div className="card">
              <p className="text-[var(--color-charcoal-light)] mb-6">
                Du bør vurdere en undersøkelse hvis du opplever:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Daglig hevelse i bena som går ned om natten",
                  "Synlige åreknuter i tillegg til hevelse",
                  "Tyngdefølelse og trette ben uten annen forklaring",
                  "Misfarging av huden ved anklene",
                  "Sårdannelse på leggen som ikke gror",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="text-[var(--color-forest)] mt-0.5"><CheckIcon /></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-[var(--color-charcoal-light)]">
                <strong>Viktig:</strong> Plutselig hevelse i kun ett ben kan være tegn på blodpropp
                og krever rask medisinsk vurdering. <Link href="/tilstander/blodpropp-i-bena" className="text-[var(--color-forest)] underline">Les mer om blodpropp</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl text-center mb-12">Relaterte sider</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <Link href="/symptomer/kramper-i-bena" className="card hover:border-[var(--color-forest)] transition-colors">
              <h3 className="text-lg font-medium mb-2">Kramper i bena</h3>
              <p className="text-sm text-[var(--color-charcoal-light)]">Årsaker og behandling</p>
            </Link>
            <Link href="/tilstander/blodpropp-i-bena" className="card hover:border-[var(--color-forest)] transition-colors">
              <h3 className="text-lg font-medium mb-2">Blodpropp i bena</h3>
              <p className="text-sm text-[var(--color-charcoal-light)]">Symptomer og risiko</p>
            </Link>
            <Link href="/behandlinger/laserbehandling" className="card hover:border-[var(--color-forest)] transition-colors">
              <h3 className="text-lg font-medium mb-2">Laserbehandling</h3>
              <p className="text-sm text-[var(--color-charcoal-light)]">Effektiv åreknutebehandling</p>
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}
