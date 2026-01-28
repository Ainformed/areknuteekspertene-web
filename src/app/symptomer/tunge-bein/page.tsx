import { Metadata } from "next";
import Link from "next/link";
import { Header, Footer, CTASection, Breadcrumbs, PhoneIcon, ArrowRightIcon, CheckIcon } from "@/components/shared";

export const metadata: Metadata = {
  title: "Tunge ben - Symptom på åreknuter | Åreknuteekspertene",
  description: "Tunge, trette ben kan være et tegn på åreknuter og venøs insuffisiens. Les om årsaker og behandlingsmuligheter.",
  keywords: ["tunge ben", "trette ben", "tyngdefølelse i bena", "slitne ben", "åreknuter symptomer"],
  openGraph: {
    title: "Tunge ben - Symptom på åreknuter | Åreknuteekspertene",
    description: "Tunge og trette ben kan skyldes åreknuter. Les om årsaker og behandling.",
  },
};

export default function TungeBeinPage() {
  return (
    <div className="min-h-screen">
      <div className="grain-overlay" />
      <Header />

      {/* Hero */}
      <section className="bg-gradient-hero pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-wide">
          <Breadcrumbs items={[
            { label: "Symptomer", href: "/#symptomer" },
            { label: "Tunge ben" }
          ]} />

          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[var(--color-charcoal)] mb-6">
              Tunge, trette ben
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-charcoal-light)] mb-8 max-w-2xl">
              Føler du at bena er tunge og trette, spesielt mot slutten av dagen?
              Tyngdefølelse i bena er et klassisk symptom på venøs insuffisiens og åreknuter.
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

      {/* Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl mb-6">Hvorfor føles bena tunge?</h2>
              <p className="text-[var(--color-charcoal-light)] mb-6">
                <strong>Tunge ben</strong> og <strong>trette ben</strong> oppstår når blodsirkulasjonen
                i bena ikke fungerer optimalt. Ved venøs insuffisiens klarer ikke venene å
                transportere blodet effektivt tilbake til hjertet.
              </p>
              <p className="text-[var(--color-charcoal-light)] mb-6">
                Når blodet stagnerer i bena, må musklene jobbe hardere. Dette gir en følelse
                av tyngde og tretthet, selv uten fysisk anstrengelse.
              </p>
              <p className="text-[var(--color-charcoal-light)]">
                Mange beskriver at bena føles som "bly" eller at de "drør på bena".
                Symptomene er typisk verre etter langvarig ståen eller sitting.
              </p>
            </div>
            <div className="card p-8">
              <h3 className="text-xl mb-6">Typiske kjennetegn</h3>
              <ul className="space-y-4">
                {[
                  "Tyngdefølelse som øker utover dagen",
                  "Bedre etter hvile med bena hevet",
                  "Verre ved varme og om sommeren",
                  "Forverres ved langvarig ståen",
                  "Ofte kombinert med hovne ankler",
                  "Kan føles som å dra på bena",
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

      {/* Self help */}
      <section className="py-16 md:py-24 bg-[var(--color-cream)]">
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl text-center mb-12">Hva kan du gjøre selv?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Bevegelse",
                items: ["Gå turer regelmessig", "Tåhev-øvelser", "Unngå langvarig ståen", "Ta pauser ved stillesitting"]
              },
              {
                title: "Kompresjonsstrømper",
                items: ["Støtter venene", "Reduserer hevelse", "Lindrer tyngdefølelse", "Bruk hele dagen"]
              },
              {
                title: "Livsstil",
                items: ["Hold normal vekt", "Hev bena ved hvile", "Unngå varme bad", "Drikk nok væske"]
              },
            ].map((category, index) => (
              <div key={index} className="card">
                <h3 className="text-lg font-medium mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="text-sm text-[var(--color-charcoal-light)]">• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl mb-6">Når bør du søke behandling?</h2>
            <p className="text-[var(--color-charcoal-light)] mb-8">
              Hvis tunge ben skyldes åreknuter, kan behandling gi varig lindring.
              Mange opplever at symptomene forsvinner helt etter behandling.
            </p>
            <div className="card p-8 text-left">
              <h3 className="text-xl mb-4">Søk vurdering hvis du opplever:</h3>
              <ul className="space-y-3">
                {[
                  "Daglig tyngdefølelse som påvirker livskvaliteten",
                  "Synlige åreknuter i tillegg til tunge ben",
                  "Symptomer som ikke bedres med egenbehandling",
                  "Hevelse eller misfarging av huden",
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

      {/* Related */}
      <section className="py-16 md:py-24 bg-[var(--color-cream)]">
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl text-center mb-12">Relaterte symptomer</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <Link href="/symptomer/hovne-bein" className="card hover:border-[var(--color-forest)] transition-colors">
              <h3 className="text-lg font-medium mb-2">Hovne bein</h3>
              <p className="text-sm text-[var(--color-charcoal-light)]">Hevelse i bena</p>
            </Link>
            <Link href="/symptomer/kramper-i-bena" className="card hover:border-[var(--color-forest)] transition-colors">
              <h3 className="text-lg font-medium mb-2">Kramper i bena</h3>
              <p className="text-sm text-[var(--color-charcoal-light)]">Nattlige kramper</p>
            </Link>
            <Link href="/symptomer/synlige-blodarer" className="card hover:border-[var(--color-forest)] transition-colors">
              <h3 className="text-lg font-medium mb-2">Synlige blodårer</h3>
              <p className="text-sm text-[var(--color-charcoal-light)]">Åreknuter</p>
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}
