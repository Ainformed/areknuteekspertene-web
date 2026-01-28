import { Metadata } from "next";
import Link from "next/link";
import { Header, Footer, CTASection, Breadcrumbs, PhoneIcon, ArrowRightIcon, CheckIcon } from "@/components/shared";

export const metadata: Metadata = {
  title: "Blodpropp i bena (DVT) - Symptomer og behandling | Åreknuteekspertene",
  description: "Blodpropp i leggen (DVT) og tromboflebitt kan være alvorlig. Lær om symptomer, risikofaktorer og behandling. Vi utreder og behandler venetrombose.",
  keywords: ["blodpropp", "blodpropp i leggen", "DVT", "dyp venetrombose", "tromboflebitt", "blodpropp symptomer", "venetrombose"],
  openGraph: {
    title: "Blodpropp i bena (DVT) | Åreknuteekspertene",
    description: "Alt du trenger å vite om blodpropp i bena, symptomer og behandling.",
  },
};

export default function BlodproppPage() {
  return (
    <div className="min-h-screen">
      <div className="grain-overlay" />
      <Header />

      {/* Hero */}
      <section className="bg-gradient-hero pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-wide">
          <Breadcrumbs items={[
            { label: "Tilstander", href: "/#symptomer" },
            { label: "Blodpropp i bena" }
          ]} />

          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-red-100 text-red-700 text-sm font-medium rounded-full mb-6">
              Viktig helseinformasjon
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[var(--color-charcoal)] mb-6">
              Blodpropp i bena
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-charcoal-light)] mb-8 max-w-2xl">
              Blodpropp i bena, også kalt dyp venetrombose (DVT), oppstår når en blodpropp dannes
              i de dype venene. Det er viktig å kjenne symptomene og søke hjelp raskt.
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

      {/* Warning */}
      <section className="py-8 bg-red-50">
        <div className="container-wide">
          <div className="flex items-start gap-4 text-red-800">
            <div className="text-2xl">⚠️</div>
            <div>
              <h2 className="font-semibold mb-1">Når bør du søke akutt hjelp?</h2>
              <p className="text-sm">
                Ved plutselig hevelse i ett ben kombinert med smerte, varme og rødhet - kontakt lege samme dag.
                Ved brystsmerter eller pustevansker - ring 113 umiddelbart.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is DVT */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl mb-6">Hva er blodpropp i bena?</h2>
              <p className="text-[var(--color-charcoal-light)] mb-6">
                <strong>Dyp venetrombose (DVT)</strong> er en tilstand der det dannes en blodpropp
                i de dype venene, vanligvis i leggen eller låret. Blodproppen kan blokkere
                blodstrømmen og forårsake hevelse, smerte og andre symptomer.
              </p>
              <p className="text-[var(--color-charcoal-light)] mb-6">
                <strong>Tromboflebitt</strong> er betennelse i en overflatisk vene, ofte i forbindelse
                med en blodpropp. Dette ses ofte ved åreknuter og gir smerte, rødhet og en hard streng
                under huden.
              </p>
              <p className="text-[var(--color-charcoal-light)]">
                Begge tilstander krever medisinsk vurdering. Ved DVT er det risiko for at blodproppen
                kan løsne og føre til lungeemboli, som er en alvorlig tilstand.
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-4">Vanlige symptomer på blodpropp</h3>
              <ul className="space-y-3">
                {[
                  "Hevelse i ett ben (ikke begge)",
                  "Smerte eller ømhet i leggen",
                  "Varme i det berørte området",
                  "Rødlig eller blålig misfarging",
                  "Synlige overflatiske vener",
                  "Krampe i leggen som ikke gir seg",
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

      {/* Risk factors */}
      <section className="py-16 md:py-24 bg-[var(--color-cream)]">
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl text-center mb-12">Risikofaktorer for blodpropp</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Immobilisering",
                items: ["Lange flyreiser", "Sengeleie etter operasjon", "Gips på benet", "Langvarig stillesitting"]
              },
              {
                title: "Medisinske faktorer",
                items: ["Tidligere blodpropp", "Kreft", "Arvelig trombofili", "Hjertesykdom"]
              },
              {
                title: "Livsstilsfaktorer",
                items: ["Røyking", "Overvekt", "P-piller/hormonbehandling", "Graviditet"]
              },
            ].map((category, index) => (
              <div key={index} className="card">
                <h3 className="text-xl mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="text-[var(--color-charcoal-light)] text-sm">• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connection to varicose veins */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl text-center mb-8">Sammenhengen mellom åreknuter og blodpropp</h2>
            <p className="text-[var(--color-charcoal-light)] mb-6">
              Åreknuter i seg selv gir ikke dyp venetrombose, men overflatisk tromboflebitt kan
              oppstå i åreknuter. Dette gir en smertefull, hard streng under huden og krever behandling.
            </p>
            <p className="text-[var(--color-charcoal-light)] mb-6">
              Ubehandlede åreknuter kan over tid føre til kronisk venøs insuffisiens, som gir
              symptomer som ligner på blodpropp: hovne bein, tyngdefølelse og misfarging av huden.
            </p>
            <p className="text-[var(--color-charcoal-light)]">
              Hos oss kan du få en grundig ultralydundersøkelse som avklarer om symptomene skyldes
              åreknuter, blodpropp eller andre tilstander.
            </p>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 md:py-24 bg-[var(--color-cream)]">
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl text-center mb-12">Relaterte tilstander</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <Link href="/tilstander/hovne-bein" className="card hover:border-[var(--color-forest)] transition-colors">
              <h3 className="text-lg font-medium mb-2">Hovne bein</h3>
              <p className="text-sm text-[var(--color-charcoal-light)]">Årsaker og behandling</p>
            </Link>
            <Link href="/symptomer/kramper-i-bena" className="card hover:border-[var(--color-forest)] transition-colors">
              <h3 className="text-lg font-medium mb-2">Kramper i bena</h3>
              <p className="text-sm text-[var(--color-charcoal-light)]">Symptomer og årsaker</p>
            </Link>
            <Link href="/behandlinger/laserbehandling" className="card hover:border-[var(--color-forest)] transition-colors">
              <h3 className="text-lg font-medium mb-2">Behandling av åreknuter</h3>
              <p className="text-sm text-[var(--color-charcoal-light)]">Moderne laserbehandling</p>
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}
