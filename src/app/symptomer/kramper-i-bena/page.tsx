import { Metadata } from "next";
import Link from "next/link";
import { Header, Footer, CTASection, Breadcrumbs, PhoneIcon, ArrowRightIcon, CheckIcon } from "@/components/shared";

export const metadata: Metadata = {
  title: "Kramper i bena - Årsaker og behandling | Åreknuteekspertene",
  description: "Krampe i leggen, spesielt om natten, kan være et symptom på åreknuter. Lær om årsaker til kramper i bena og når du bør søke behandling.",
  keywords: ["kramper i bena", "krampe i leggen", "nattlige kramper", "leggramper", "kramper åreknuter", "muskelkramper ben"],
  openGraph: {
    title: "Kramper i bena | Åreknuteekspertene",
    description: "Årsaker til kramper i bena og sammenheng med åreknuter.",
  },
};

export default function KramperPage() {
  return (
    <div className="min-h-screen">
      <div className="grain-overlay" />
      <Header />

      {/* Hero */}
      <section className="bg-gradient-hero pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-wide">
          <Breadcrumbs items={[
            { label: "Symptomer", href: "/#symptomer" },
            { label: "Kramper i bena" }
          ]} />

          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[var(--color-charcoal)] mb-6">
              Kramper i bena
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-charcoal-light)] mb-8 max-w-2xl">
              Opplever du krampe i leggen, spesielt om natten? Nattlige kramper i bena er
              et vanlig symptom hos personer med åreknuter og venøs insuffisiens.
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

      {/* What causes cramps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl mb-6">Hvorfor får du kramper i bena?</h2>
              <p className="text-[var(--color-charcoal-light)] mb-6">
                <strong>Krampe i leggen</strong> oppstår når muskelen plutselig trekker seg sammen
                ufrivillig. Ved åreknuter og venøs insuffisiens samles blodet i bena, noe som kan
                påvirke musklene og utløse kramper.
              </p>
              <p className="text-[var(--color-charcoal-light)] mb-6">
                Nattlige kramper er spesielt vanlige fordi væskeopphopningen i bena er størst
                om kvelden etter en dag med aktivitet. Når du legger deg flatt, redistribueres
                væsken og kan utløse muskelkramper.
              </p>
              <p className="text-[var(--color-charcoal-light)]">
                Mange opplever at krampene blir bedre eller forsvinner helt etter behandling
                av underliggende åreknuter.
              </p>
            </div>
            <div className="card p-6 md:p-8">
              <h3 className="text-xl mb-6">Vanlige årsaker til kramper</h3>
              <ul className="space-y-4">
                {[
                  "Åreknuter og venøs insuffisiens",
                  "Dehydrering",
                  "Elektrolyttforstyrrelser (magnesium, kalium)",
                  "Overanstrengelse av musklene",
                  "Langvarig ståen eller sitting",
                  "Visse medisiner",
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

      {/* Connection to varicose veins */}
      <section className="py-16 md:py-24 bg-[var(--color-cream)]">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl text-center mb-8">Sammenhengen med åreknuter</h2>
            <p className="text-[var(--color-charcoal-light)] mb-6">
              Studier viser at nattlige leggramper er vanligere hos personer med åreknuter.
              Når veneklaffene ikke fungerer som de skal, stagnerer blodet i bena og kan føre til:
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {[
                { title: "Dårlig sirkulasjon", desc: "Redusert blodtilførsel til musklene" },
                { title: "Væskeopphopning", desc: "Ødem som påvirker muskelfunksjonen" },
                { title: "Avfallsstoffer", desc: "Opphopning av metabolske avfallsstoffer" },
              ].map((item, index) => (
                <div key={index} className="card text-center">
                  <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                  <p className="text-sm text-[var(--color-charcoal-light)]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Self-help */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl text-center mb-12">Hva kan du gjøre selv?</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card">
              <h3 className="text-xl mb-4">Ved akutt krampe</h3>
              <ul className="space-y-2 text-[var(--color-charcoal-light)]">
                <li>• Strekk muskelen forsiktig</li>
                <li>• Gå litt rundt</li>
                <li>• Masser det berørte området</li>
                <li>• Bruk varme (varmepute eller varmt bad)</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="text-xl mb-4">Forebygging</h3>
              <ul className="space-y-2 text-[var(--color-charcoal-light)]">
                <li>• Drikk nok væske</li>
                <li>• Tøy ut før leggetid</li>
                <li>• Unngå langvarig ståen</li>
                <li>• Vurder kompresjonsstrømper</li>
                <li>• Behandle underliggende åreknuter</li>
              </ul>
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
                Vurder en undersøkelse hos oss hvis du opplever:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Hyppige nattlige kramper som forstyrrer søvnen",
                  "Kramper kombinert med synlige åreknuter",
                  "Kramper sammen med hovne eller tunge ben",
                  "Kramper som ikke bedres med egenbehandling",
                  "Smerter i bena som varer utover krampen",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="text-[var(--color-forest)] mt-0.5"><CheckIcon /></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-[var(--color-charcoal-light)]">
                En ultralydundersøkelse kan avklare om krampene skyldes åreknuter og om behandling vil hjelpe.
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
            <Link href="/tilstander/hovne-bein" className="card hover:border-[var(--color-forest)] transition-colors">
              <h3 className="text-lg font-medium mb-2">Hovne bein</h3>
              <p className="text-sm text-[var(--color-charcoal-light)]">Symptomer og behandling</p>
            </Link>
            <Link href="/tilstander/blodpropp-i-bena" className="card hover:border-[var(--color-forest)] transition-colors">
              <h3 className="text-lg font-medium mb-2">Blodpropp i bena</h3>
              <p className="text-sm text-[var(--color-charcoal-light)]">Viktig informasjon</p>
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
