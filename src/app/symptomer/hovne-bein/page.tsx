import { Metadata } from "next";
import Link from "next/link";
import { Header, Footer, CTASection, Breadcrumbs, PhoneIcon, ArrowRightIcon, CheckIcon } from "@/components/shared";

export const metadata: Metadata = {
  title: "Hovne bein - Symptom på åreknuter | Åreknuteekspertene",
  description: "Hovne bein er et vanlig symptom på åreknuter og venøs insuffisiens. Lær om årsaker til hevelse i bena og når du bør søke behandling.",
  keywords: ["hovne bein", "hevelse i bena", "hovne ankler", "ødem i bena", "åreknuter symptomer"],
  openGraph: {
    title: "Hovne bein - Symptom på åreknuter | Åreknuteekspertene",
    description: "Hovne bein kan være et tegn på åreknuter. Les om årsaker og behandling.",
  },
};

export default function HovneBeinSymptomPage() {
  return (
    <div className="min-h-screen">
      <div className="grain-overlay" />
      <Header />

      {/* Hero */}
      <section className="bg-gradient-hero pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-wide">
          <Breadcrumbs items={[
            { label: "Symptomer", href: "/#symptomer" },
            { label: "Hovne bein" }
          ]} />

          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[var(--color-charcoal)] mb-6">
              Hovne bein
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-charcoal-light)] mb-8 max-w-2xl">
              Opplever du at bena hovner opp utover dagen? Hevelse i bena og hovne ankler er
              vanlige symptomer på åreknuter og venøs insuffisiens.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://psno-patient-platform-fe.svc.pasientsky.no/embedded/planner/booking?serviceProviderId=b71015c8-04a4-11ec-84e9-62713dacc91c" className="btn-primary">
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

      {/* Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl mb-6">Hvorfor hovner bena?</h2>
              <p className="text-[var(--color-charcoal-light)] mb-6">
                <strong>Hovne bein</strong> oppstår når væske samler seg i vevet. Ved åreknuter
                og venøs insuffisiens fungerer ikke veneklaffene som de skal, og blodet
                strømmer tilbake i stedet for opp mot hjertet.
              </p>
              <p className="text-[var(--color-charcoal-light)] mb-6">
                Dette fører til at trykket øker i venene, og væske presses ut i det
                omkringliggende vevet. Resultatet er <strong>hevelse i bena</strong>, spesielt
                rundt anklene.
              </p>
              <p className="text-[var(--color-charcoal-light)]">
                Typisk er hevelsen verre om kvelden etter en dag med aktivitet, og bedre
                om morgenen etter å ha ligget med bena hevet om natten.
              </p>
            </div>
            <div className="card p-6 md:p-8">
              <h3 className="text-xl mb-6">Kjennetegn på venøs hevelse</h3>
              <ul className="space-y-4">
                {[
                  "Hevelse som forverres utover dagen",
                  "Bedre etter en natts hvile",
                  "Ofte i begge ben (men kan være asymmetrisk)",
                  "Sokker og sko strammer",
                  "Avtrykk etter press mot huden",
                  "Ofte kombinert med synlige åreknuter",
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

      {/* Treatment */}
      <section className="py-16 md:py-24 bg-[var(--color-cream)]">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl mb-6">Behandling av hovne bein</h2>
            <p className="text-[var(--color-charcoal-light)] mb-8">
              Hvis hovne bein skyldes åreknuter, kan behandling av disse ofte løse problemet.
              Vi tilbyr moderne laserbehandling og skumbehandling.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/behandlinger/laserbehandling" className="card hover:border-[var(--color-forest)] transition-colors">
                <h3 className="text-lg font-medium mb-2">Laserbehandling</h3>
                <p className="text-sm text-[var(--color-charcoal-light)]">For større åreknuter</p>
              </Link>
              <Link href="/behandlinger/skumbehandling" className="card hover:border-[var(--color-forest)] transition-colors">
                <h3 className="text-lg font-medium mb-2">Skumbehandling</h3>
                <p className="text-sm text-[var(--color-charcoal-light)]">For mindre åreknuter</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl text-center mb-12">Relaterte symptomer</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <Link href="/symptomer/tunge-bein" className="card hover:border-[var(--color-forest)] transition-colors">
              <h3 className="text-lg font-medium mb-2">Tunge ben</h3>
              <p className="text-sm text-[var(--color-charcoal-light)]">Tyngdefølelse i bena</p>
            </Link>
            <Link href="/symptomer/kramper-i-bena" className="card hover:border-[var(--color-forest)] transition-colors">
              <h3 className="text-lg font-medium mb-2">Kramper i bena</h3>
              <p className="text-sm text-[var(--color-charcoal-light)]">Nattlige kramper</p>
            </Link>
            <Link href="/tilstander/blodpropp-i-bena" className="card hover:border-[var(--color-forest)] transition-colors">
              <h3 className="text-lg font-medium mb-2">Blodpropp</h3>
              <p className="text-sm text-[var(--color-charcoal-light)]">Viktig å utelukke</p>
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}
