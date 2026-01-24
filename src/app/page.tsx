"use client";

import { useState, useEffect } from "react";

// Icons as SVG components
const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M18.333 14.1v2.5a1.667 1.667 0 01-1.816 1.667 16.492 16.492 0 01-7.192-2.559 16.25 16.25 0 01-5-5 16.492 16.492 0 01-2.558-7.225A1.667 1.667 0 013.433 1.667h2.5A1.667 1.667 0 017.6 3.308c.106.8.303 1.585.584 2.342a1.667 1.667 0 01-.375 1.758L6.7 8.517a13.333 13.333 0 005 5l1.108-1.109a1.667 1.667 0 011.759-.375c.757.281 1.542.478 2.341.584a1.667 1.667 0 011.425 1.683z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const MapPinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M17.5 8.333c0 5.834-7.5 10.834-7.5 10.834s-7.5-5-7.5-10.834a7.5 7.5 0 1115 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 10.833a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="8.333" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M10 5v5l3.333 1.667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M4.167 10h11.666M10 4.167L15.833 10 10 15.833" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PlusIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="faq-icon">
    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 0l2.472 4.968L16 5.792l-4 3.872.944 5.48L8 12.656l-4.944 2.488L4 9.664 0 5.792l5.528-.824L8 0z"/>
  </svg>
);

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const EmailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M3.333 3.333h13.334c.916 0 1.666.75 1.666 1.667v10c0 .917-.75 1.667-1.666 1.667H3.333c-.916 0-1.666-.75-1.666-1.667V5c0-.917.75-1.667 1.666-1.667z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18.333 5L10 10.833 1.667 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Service Icons - Unike ikoner for hver behandling
const LaserIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[var(--color-forest)]">
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const InjectionIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[var(--color-forest)]">
    <path d="M18.5 2.5L21.5 5.5M15 6l3 3M8.5 12.5l-5 5c-.83.83-.83 2.17 0 3s2.17.83 3 0l5-5M12 8l4 4M9 11l-1.5 1.5M13.5 6.5L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ScalpelIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[var(--color-forest)]">
    <path d="M4 20L20 4M4 20l3-3M7 17l3-3M10 14l2-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 10c2-2 4-2 6-4s0-4-2-2-2 4-4 6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// FAQ Data - Utvidet for SEO
const faqData = [
  {
    question: "Hva er åreknuter og hvorfor oppstår de?",
    answer: "Åreknuter er utvidede, synlige blodårer som oftest oppstår i bena. De skyldes svekket funksjon i veneklaffene som normalt hindrer blodet i å strømme tilbake. Når klaffene ikke fungerer, samler blodet seg opp og venene utvides. Arvelige faktorer, graviditet, overvekt, alder og stående arbeid øker risikoen for å utvikle åreknuter."
  },
  {
    question: "Hvilke symptomer gir åreknuter?",
    answer: "Vanlige symptomer på åreknuter inkluderer: synlige, slyngede blodårer under huden, tyngdefølelse i bena, hevelse rundt anklene, kløe og irritasjon rundt åreknutene, kramper om natten, ømhet og verking, samt misfarging av huden. Symptomene forverres ofte utover dagen og ved varme."
  },
  {
    question: "Gjør behandlingen vondt?",
    answer: "Moderne behandlingsmetoder er skånsomme og utføres med lokalbedøvelse. De fleste pasienter opplever kun et lite stikk ved bedøvelsen. Selve behandlingen er tilnærmet smertefri. Etter behandlingen kan du oppleve lett ømhet og stramhet som varer noen dager."
  },
  {
    question: "Hva er forskjellen på laserbehandling og skumbehandling?",
    answer: "Laserbehandling (EVLA) er gullstandarden for behandling av større åreknuter. Et laserfiber føres inn i venen og lukker den med varme. Skumbehandling brukes for mindre og mellomstore åreknuter - et skum injiseres som irriterer veneveggen slik at den lukkes. Ofte kombineres metodene for best resultat."
  },
  {
    question: "Hvor lang er restitusjonstiden?",
    answer: "Du kan gå hjem samme dag og de fleste kan gjenoppta normale aktiviteter umiddelbart. Det er vanligvis ikke behov for sykemelding. Vi anbefaler å unngå hard trening og tunge løft i 1-2 uker. Du bør bruke kompresjonsstrømper i 1-2 uker etter behandling. Full effekt av behandlingen sees etter 4-6 uker."
  },
  {
    question: "Dekkes behandlingen av forsikring?",
    answer: "Ja, de fleste helseforsikringer dekker åreknutebehandling når det er medisinsk indisert. Vi behandler pasienter fra bl.a. Tryg, If, Storebrand, Sparebank 1, Hjelp 24 og Vertikal. Vi hjelper deg med nødvendig dokumentasjon til forsikringsselskapet."
  },
  {
    question: "Hva koster en forundersøkelse?",
    answer: "Forundersøkelsen koster kr 1.200,-. Dette beløpet trekkes fra totalprisen dersom du velger å gjennomføre behandling hos oss. Under forundersøkelsen får du en grundig ultralydundersøkelse av erfaren karkirurg og en personlig behandlingsplan."
  },
  {
    question: "Kan åreknuter komme tilbake etter behandling?",
    answer: "Moderne laserbehandling har svært lav tilbakefallsrate - rundt 5%, som er vesentlig lavere enn ved tradisjonell stripping. Det er viktig med grundig behandling første gang. Oppfølging etter 12 måneder er inkludert i prisen for å sikre best mulig resultat."
  },
  {
    question: "Må jeg ha henvisning fra fastlege?",
    answer: "Nei, du trenger ikke henvisning for å bestille time hos oss. Du kan booke forundersøkelse direkte. Ved forundersøkelsen vurderer vår karkirurg om behandling er nødvendig og hvilken metode som passer best for deg."
  },
  {
    question: "Hva er forskjellen på åreknuter og sprengte blodkar?",
    answer: "Åreknuter er utvidede vener som ofte er synlige som slyngede, blålige årer under huden. Sprengte blodkar (telangiektasier) er små, tynne røde eller blå årer nær hudoverflaten. Begge tilstander kan behandles hos oss - sprengte blodkar behandles vanligvis med sklerosering."
  },
];

// Testimonials Data - Generelle pasientopplevelser (ikke spesifikke resultatpåstander)
const testimonials = [
  {
    text: "Jeg satte stor pris på den grundige forundersøkelsen og at alt ble forklart tydelig. Personalet var profesjonelle og jeg følte meg godt ivaretatt gjennom hele prosessen.",
    author: "Pasient",
    location: "Oslo-klinikken",
    rating: 5
  },
  {
    text: "God oppfølging og enkel timebestilling. Legen tok seg tid til å svare på alle spørsmålene mine og forklarte hva jeg kunne forvente. Veldig fornøyd med servicen.",
    author: "Pasient",
    location: "Tromsø-klinikken",
    rating: 5
  },
  {
    text: "Fleksible timer som passet med jobben min. Profesjonelt og hyggelig personale. Fikk god informasjon om ettervern og oppfølging.",
    author: "Pasient",
    location: "Oslo-klinikken",
    rating: 5
  }
];

// Price Data (Fra areknuteekspertene.no - gjeldende priser)
const priceData = {
  konsultasjon: [
    { name: "Forundersøkelse med ultralyd", price: "1 200", note: "Trekkes fra ved behandling", highlight: true },
    { name: "Kontroll etter behandling", price: "0", note: "Inkludert i 12 måneder" },
  ],
  behandlinger: [
    { name: "Laserbehandling (EVLA) - ett ben", price: "fra 10 000", note: "Avhengig av omfang" },
    { name: "Laserbehandling (EVLA) - begge ben", price: "fra 16 000", note: "Behandle begge samme dag" },
    { name: "Åreknutebehandling - ett ben", price: "fra 5 000", note: "Kombinasjonsbehandling" },
    { name: "Åreknutebehandling - begge ben", price: "fra 10 000", note: "Kombinasjonsbehandling" },
    { name: "Skumbehandling", price: "fra 1 500", note: "Per behandling" },
  ],
  tillegg: [
    { name: "Kompresjonsstrømper", price: "450", note: "Per par" },
  ],
};

// Services Data
const services = [
  {
    title: "Endovenøs laserbehandling",
    description: "Gullstandarden for behandling av større åreknuter. Laseren lukker den syke venen innenfra.",
    duration: "45-60 min",
    recovery: "Samme dag"
  },
  {
    title: "Skumbehandling",
    description: "Effektiv metode for mellomstore åreknuter. Skummet irriterer veneveggen slik at den lukkes.",
    duration: "30 min",
    recovery: "Umiddelbart"
  },
  {
    title: "Mikroflebektomi",
    description: "Fjerner synlige åreknuter gjennom minimale snitt. Gir umiddelbart kosmetisk resultat.",
    duration: "30-45 min",
    recovery: "1-2 dager"
  }
];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [priceModalOpen, setPriceModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Grain Overlay */}
      <div className="grain-overlay" />

      {/* Header */}
      <header className={`header ${isScrolled ? "header-scrolled" : ""}`}>
        <div className="container-wide py-3 flex justify-between items-center">
          <a href="#" className="flex items-center">
            <img
              src="https://areknuteekspertene.no/wp-content/uploads/2023/01/areknute-logo.png"
              alt="Åreknuteekspertene"
              className="h-12 md:h-16 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <a href="#behandlinger" className="nav-link">Behandlinger</a>
            <a href="#om-oss" className="nav-link">Om oss</a>
            <a href="#faq" className="nav-link">FAQ</a>
            <button
              onClick={() => setPriceModalOpen(true)}
              className="nav-link cursor-pointer"
            >
              Priser
            </button>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:40044600" className="text-sm text-[var(--color-charcoal-light)] hover:text-[var(--color-forest)] transition-colors">
              400 44 600
            </a>
            <a
              href="https://www.telefontime.com/pasient/areknuteekspertene/#/selvbetjent/booking"
              className="group flex items-center gap-2 px-5 py-2.5 border border-[var(--color-forest)] text-[var(--color-forest)] text-sm font-medium rounded-full hover:bg-[var(--color-forest)] hover:text-white transition-all duration-200"
            >
              <span>Bestill time</span>
              <svg width="14" height="14" viewBox="0 0 20 20" fill="none" className="transition-transform group-hover:translate-x-0.5">
                <path d="M4.167 10h11.666M10 4.167L15.833 10 10 15.833" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[var(--color-charcoal)]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-[var(--color-sage-light)] animate-fade-in">
            <nav className="container-wide py-4 flex flex-col gap-2">
              <a href="#behandlinger" className="py-2" onClick={() => setMobileMenuOpen(false)}>Behandlinger</a>
              <a href="#om-oss" className="py-2" onClick={() => setMobileMenuOpen(false)}>Om oss</a>
              <a href="#faq" className="py-2" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
              <button
                onClick={() => { setMobileMenuOpen(false); setPriceModalOpen(true); }}
                className="py-2 text-left text-[var(--color-forest)] font-medium"
              >
                Priser
              </button>
              <div className="pt-3 mt-2 border-t border-[var(--color-sage-light)] flex items-center justify-between">
                <a href="tel:40044600" className="text-sm text-[var(--color-charcoal-light)]">
                  400 44 600
                </a>
                <a
                  href="https://www.telefontime.com/pasient/areknuteekspertene/#/selvbetjent/booking"
                  className="px-4 py-2 bg-[var(--color-forest)] text-white text-sm font-medium rounded"
                >
                  Bestill time
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-hero min-h-[90vh] md:min-h-screen flex items-center pt-24 md:pt-20 pb-12 md:pb-16 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="organic-shape w-[300px] md:w-[600px] h-[300px] md:h-[600px] -top-20 md:-top-40 -right-20 md:-right-40 opacity-40 md:opacity-60" />
        <div className="organic-shape w-[200px] md:w-[400px] h-[200px] md:h-[400px] bottom-10 md:bottom-20 -left-10 md:-left-20 opacity-30 md:opacity-40" style={{ animationDelay: "2s" }} />

        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <div className="animate-fade-in-up">
              <span className="inline-block px-3 md:px-4 py-1.5 md:py-2 bg-[var(--color-sage-light)] text-[var(--color-forest)] text-xs md:text-sm font-medium rounded-full mb-4 md:mb-6">
                Norges ledende spesialistklinikk
              </span>
            </div>

            <h1 className="animate-fade-in-up animation-delay-100 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-[var(--color-charcoal)] mb-4 md:mb-6 text-balance">
              Bli kvitt åreknuter
              <span className="block text-[var(--color-forest)]">skånsomt og effektivt</span>
            </h1>

            <p className="animate-fade-in-up animation-delay-200 text-base md:text-lg lg:text-xl text-[var(--color-charcoal-light)] max-w-xl mb-6 md:mb-8 leading-relaxed">
              Med over 9.000 vellykkede behandlinger gir vi deg trygg og moderne åreknutebehandling.
              Start med en forundersøkelse for å få din personlige behandlingsplan.
            </p>

            <div className="animate-fade-in-up animation-delay-300 flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8">
              <a href="https://www.telefontime.com/pasient/areknuteekspertene/#/selvbetjent/booking" className="btn-primary">
                Bestill forundersøkelse
                <ArrowRightIcon />
              </a>
              <a href="tel:40044600" className="btn-secondary">
                <PhoneIcon />
                Ring oss
              </a>
            </div>

            <div className="animate-fade-in-up animation-delay-400 flex flex-col sm:flex-row gap-3 sm:gap-6 text-xs md:text-sm text-[var(--color-charcoal-light)]">
              <span className="flex items-center gap-2">
                <CheckIcon />
                Forundersøkelse 1 200 kr — trekkes fra behandling
              </span>
              <span className="flex items-center gap-2">
                <ClockIcon />
                Svar innen 24 timer
              </span>
            </div>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section id="behandlinger" className="py-[var(--section-padding)] bg-gradient-section">
        <div className="container-wide">
          <div className="text-center mb-10 md:mb-16">
            <span className="text-[var(--color-forest)] text-xs md:text-sm font-medium tracking-wide uppercase">Våre behandlinger</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-3 md:mt-4 mb-4 md:mb-6">
              Moderne og skånsomme metoder
            </h2>
            <p className="text-[var(--color-charcoal-light)] text-sm md:text-lg max-w-2xl mx-auto">
              Vi tilbyr de mest effektive og skånsomme behandlingsmetodene for åreknuter,
              tilpasset din situasjon.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {services.map((service, index) => {
              const icons = [<LaserIcon key="laser" />, <InjectionIcon key="injection" />, <ScalpelIcon key="scalpel" />];
              return (
                <div key={index} className="card group">
                  <div className="w-10 md:w-12 h-10 md:h-12 bg-[var(--color-sage-light)] rounded-lg flex items-center justify-center mb-4 md:mb-6 group-hover:bg-[var(--color-sage)] transition-colors">
                    {icons[index]}
                  </div>
                  <h3 className="text-lg md:text-xl lg:text-2xl mb-2 md:mb-3">{service.title}</h3>
                  <p className="text-[var(--color-charcoal-light)] text-sm md:text-base mb-4 md:mb-6">{service.description}</p>
                  <div className="flex flex-wrap gap-3 md:gap-6 text-xs md:text-sm text-[var(--color-charcoal-light)] pt-3 md:pt-4 border-t border-[var(--color-sage-light)]">
                    <span className="flex items-center gap-1.5 md:gap-2">
                      <ClockIcon />
                      {service.duration}
                    </span>
                    <span>Restitusjon: {service.recovery}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="prosess" className="py-[var(--section-padding)] bg-[var(--color-cream)]">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="text-[var(--color-forest)] text-xs md:text-sm font-medium tracking-wide uppercase">Slik fungerer det</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-3 md:mt-4 mb-4 md:mb-6">
                Din vei til friske ben
              </h2>
              <p className="text-[var(--color-charcoal-light)] text-sm md:text-lg mb-6 md:mb-8">
                Vi gjør prosessen enkel og trygg for deg. Fra første konsultasjon til
                ferdig behandling følger vi deg hele veien.
              </p>

              <div className="relative">
                <div className="process-line" />

                {[
                  { step: 1, title: "Forundersøkelse", desc: "Grundig ultralydundersøkelse og vurdering av dine åreknuter. Du får en personlig behandlingsplan." },
                  { step: 2, title: "Behandling", desc: "Skånsom behandling utført av våre erfarne spesialister. De fleste kan gå hjem samme dag." },
                  { step: 3, title: "Oppfølging", desc: "Kontroll etter 4-6 uker for å sikre optimalt resultat. Vi er tilgjengelige hvis du har spørsmål." }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 md:gap-6 mb-6 md:mb-8 last:mb-0">
                    <div className="process-dot">{item.step}</div>
                    <div className="pt-1 md:pt-2">
                      <h3 className="text-lg md:text-xl mb-1 md:mb-2">{item.title}</h3>
                      <p className="text-[var(--color-charcoal-light)] text-sm md:text-base">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="card card-forest p-6 md:p-8 lg:p-12">
                <h3 className="text-xl md:text-2xl lg:text-3xl text-white mb-3 md:mb-4">
                  Klar for å ta første steg?
                </h3>
                <p className="text-white/80 text-sm md:text-base mb-6 md:mb-8">
                  Book en forundersøkelse i dag. Vi kontakter deg innen 24 timer for å
                  finne en tid som passer.
                </p>
                <div className="bg-white/10 rounded-lg p-4 md:p-6 mb-6 md:mb-8">
                  <div className="text-white/60 text-xs md:text-sm mb-1">Forundersøkelse</div>
                  <div className="text-2xl md:text-3xl font-serif text-white mb-1">1 200 kr</div>
                  <div className="text-white/60 text-xs md:text-sm">Trekkes fra ved behandling</div>
                </div>
                <a
                  href="https://www.telefontime.com/pasient/areknuteekspertene/#/selvbetjent/booking"
                  className="block w-full bg-white text-[var(--color-forest)] font-medium py-3 md:py-4 px-4 md:px-6 rounded text-center text-sm md:text-base hover:bg-[var(--color-cream)] transition-colors"
                >
                  Bestill forundersøkelse
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="om-oss" className="py-[var(--section-padding)] bg-gradient-section">
        <div className="container-wide">
          <div className="text-center mb-10 md:mb-16">
            <span className="text-[var(--color-forest)] text-xs md:text-sm font-medium tracking-wide uppercase">Hva pasientene sier</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-3 md:mt-4 mb-4 md:mb-6">
              Ekte historier, ekte resultater
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="flex gap-1 text-[var(--color-gold)] mb-3 md:mb-4 pt-6 md:pt-8">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <p className="text-[var(--color-charcoal)] text-sm md:text-base mb-4 md:mb-6 leading-relaxed">
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-3 pt-3 md:pt-4 border-t border-[var(--color-sage-light)]">
                  <div className="w-8 md:w-10 h-8 md:h-10 bg-[var(--color-sage-light)] rounded-full flex items-center justify-center text-[var(--color-forest)] font-medium text-sm md:text-base">
                    {testimonial.author[0]}
                  </div>
                  <div>
                    <div className="font-medium text-[var(--color-charcoal)] text-sm md:text-base">{testimonial.author}</div>
                    <div className="text-xs md:text-sm text-[var(--color-charcoal-light)]">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-[var(--section-padding)] bg-[var(--color-cream)]">
        <div className="container-narrow">
          <div className="text-center mb-10 md:mb-16">
            <span className="text-[var(--color-forest)] text-xs md:text-sm font-medium tracking-wide uppercase">Ofte stilte spørsmål</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-3 md:mt-4">
              Har du spørsmål?
            </h2>
          </div>

          <div className="space-y-0">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="faq-item"
                data-open={openFaq === index}
              >
                <button
                  className="faq-question"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  aria-expanded={openFaq === index}
                >
                  <span>{faq.question}</span>
                  <PlusIcon />
                </button>
                <div className="faq-answer">
                  <p className="pb-6 text-[var(--color-charcoal-light)] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 md:mt-12">
            <p className="text-[var(--color-charcoal-light)] text-sm md:text-base mb-3 md:mb-4">
              Finner du ikke svar på det du lurer på?
            </p>
            <a href="tel:40044600" className="btn-secondary text-sm md:text-base">
              <PhoneIcon />
              Ring oss på 400 44 600
            </a>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="kontakt" className="py-[var(--section-padding)] bg-gradient-section">
        <div className="container-wide">
          <div className="text-center mb-10 md:mb-16">
            <span className="text-[var(--color-forest)] text-xs md:text-sm font-medium tracking-wide uppercase">Våre klinikker</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-3 md:mt-4 mb-4 md:mb-6">
              Finn oss i Oslo og Tromsø
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            {[
              {
                city: "Oslo",
                address: "Sørkedalsveien 10A",
                postal: "0369 Oslo",
                phone: "400 44 600",
                email: "post@areknuteekspertene.no",
                hours: "Man-Fre: 08:00-16:00",
                mapUrl: "https://maps.google.com/?q=Sørkedalsveien+10A,+0369+Oslo"
              },
              {
                city: "Tromsø",
                address: "Storgata 94",
                postal: "9008 Tromsø",
                phone: "400 44 600",
                email: "post@areknuteekspertene.no",
                hours: "Man-Fre: 08:00-16:00",
                mapUrl: "https://maps.google.com/?q=Storgata+94,+9008+Tromsø"
              }
            ].map((location, index) => (
              <div key={index} className="card">
                <a href={location.mapUrl} target="_blank" rel="noopener noreferrer" className="flex items-start justify-between mb-4 md:mb-6 group">
                  <div>
                    <h3 className="text-xl md:text-2xl lg:text-3xl mb-1 group-hover:text-[var(--color-forest)] transition-colors">{location.city}</h3>
                    <p className="text-[var(--color-charcoal-light)] text-sm md:text-base group-hover:text-[var(--color-forest)] transition-colors">{location.address}</p>
                    <p className="text-[var(--color-charcoal-light)] text-sm md:text-base">{location.postal}</p>
                  </div>
                  <div className="w-10 md:w-12 h-10 md:h-12 bg-[var(--color-sage-light)] rounded-full flex items-center justify-center text-[var(--color-forest)] group-hover:bg-[var(--color-forest)] group-hover:text-white transition-colors">
                    <MapPinIcon />
                  </div>
                </a>
                <div className="space-y-2 md:space-y-3 pt-4 md:pt-6 border-t border-[var(--color-sage-light)]">
                  <a href={`tel:${location.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 md:gap-3 text-[var(--color-charcoal-light)] text-sm md:text-base hover:text-[var(--color-forest)] transition-colors">
                    <PhoneIcon />
                    <span>{location.phone}</span>
                  </a>
                  <a href={`mailto:${location.email}`} className="flex items-center gap-2 md:gap-3 text-[var(--color-charcoal-light)] text-sm md:text-base hover:text-[var(--color-forest)] transition-colors break-all">
                    <EmailIcon />
                    <span>{location.email}</span>
                  </a>
                  <div className="flex items-center gap-2 md:gap-3 text-[var(--color-charcoal-light)] text-sm md:text-base">
                    <ClockIcon />
                    <span>{location.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-[var(--section-padding)] bg-[var(--color-forest)] relative overflow-hidden">
        <div className="organic-shape w-[250px] md:w-[500px] h-[250px] md:h-[500px] -top-20 md:-top-40 -right-20 md:-right-40 opacity-10" />
        <div className="organic-shape w-[150px] md:w-[300px] h-[150px] md:h-[300px] bottom-0 left-0 opacity-10" style={{ animationDelay: "3s" }} />

        <div className="container-narrow text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-4 md:mb-6">
            Klar for å ta steget?
          </h2>
          <p className="text-white/80 text-sm md:text-lg max-w-xl mx-auto mb-6 md:mb-8">
            Book din forundersøkelse i dag og ta første steg mot et liv uten
            ubehag fra åreknuter.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <a
              href="https://www.telefontime.com/pasient/areknuteekspertene/#/selvbetjent/booking"
              className="inline-flex items-center justify-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-white text-[var(--color-forest)] font-medium text-sm md:text-base rounded hover:bg-[var(--color-cream)] transition-colors"
            >
              Bestill forundersøkelse
              <ArrowRightIcon />
            </a>
            <a
              href="tel:40044600"
              className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 border-2 border-white/30 text-white font-medium text-sm md:text-base rounded hover:bg-white/10 transition-colors"
            >
              <PhoneIcon />
              400 44 600
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer py-10 md:py-16">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
            <div className="col-span-2">
              <img
                src="https://areknuteekspertene.no/wp-content/uploads/2023/01/areknute-logo.png"
                alt="Åreknuteekspertene"
                className="h-10 md:h-12 w-auto mb-3 md:mb-4 brightness-0 invert"
              />
              <p className="text-white/70 text-sm md:text-base max-w-md mb-4 md:mb-6">
                Norges ledende spesialistklinikk for åreknutebehandling.
                Vi kombinerer medisinsk ekspertise med omsorg for å gi deg
                best mulig resultat.
              </p>
              <div className="flex flex-col gap-2 md:gap-3">
                <a href="tel:40044600" className="flex items-center gap-2 text-white/80 hover:text-white text-sm md:text-base">
                  <PhoneIcon />
                  400 44 600
                </a>
                <a href="mailto:post@areknuteekspertene.no" className="flex items-center gap-2 text-white/80 hover:text-white text-sm md:text-base break-all">
                  <EmailIcon />
                  post@areknuteekspertene.no
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-medium mb-3 md:mb-4 text-sm md:text-base">Hurtiglenker</h4>
              <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
                <li><a href="#behandlinger">Behandlinger</a></li>
                <li><a href="#prosess">Slik fungerer det</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#kontakt">Kontakt</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-3 md:mb-4 text-sm md:text-base">Klinikker</h4>
              <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
                <li>
                  <a href="#kontakt">Oslo</a>
                  <span className="block text-white/50 text-xs md:text-sm">Sørkedalsveien 10A</span>
                </li>
                <li>
                  <a href="#kontakt">Tromsø</a>
                  <span className="block text-white/50 text-xs md:text-sm">Storgata 94</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="line-decoration mb-6 md:mb-8 opacity-30" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-white/50 text-xs md:text-sm">
            <p>&copy; {new Date().getFullYear()} Åreknuteekspertene. Alle rettigheter reservert.</p>
            <div className="flex gap-4 md:gap-6">
              <a href="#" className="hover:text-white">Personvern</a>
              <a href="#" className="hover:text-white">Vilkår</a>
              <a href="#" className="hover:text-white">Cookies</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Price Modal */}
      {priceModalOpen && (
        <div
          className="fixed inset-0 z-[200] flex items-end md:items-center justify-center p-0 md:p-4"
          onClick={() => setPriceModalOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in" />

          {/* Modal */}
          <div
            className="relative bg-white rounded-t-2xl md:rounded-2xl max-w-2xl w-full max-h-[85vh] md:max-h-[90vh] overflow-hidden animate-fade-in-up shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-[var(--color-forest)] px-4 md:px-6 py-4 md:py-5 flex justify-between items-center">
              <div>
                <h2 className="text-xl md:text-2xl font-serif text-white">Prisliste</h2>
                <p className="text-white/70 text-xs md:text-sm">Veiledende priser</p>
              </div>
              <button
                onClick={() => setPriceModalOpen(false)}
                className="text-white/80 hover:text-white transition-colors p-1"
                aria-label="Lukk"
              >
                <CloseIcon />
              </button>
            </div>

            {/* Content */}
            <div className="p-4 md:p-6 overflow-y-auto max-h-[calc(85vh-140px)] md:max-h-[calc(90vh-180px)]">
              {/* Konsultasjon */}
              <div className="mb-6 md:mb-8">
                <h3 className="text-base md:text-lg font-semibold text-[var(--color-forest)] mb-3 md:mb-4 flex items-center gap-2">
                  <span className="w-6 md:w-8 h-6 md:h-8 bg-[var(--color-sage-light)] rounded-full flex items-center justify-center text-xs md:text-sm">1</span>
                  Konsultasjon
                </h3>
                <div className="space-y-2 md:space-y-3">
                  {priceData.konsultasjon.map((item, index) => (
                    <div key={index} className={`flex justify-between items-start py-2 md:py-3 border-b border-gray-100 last:border-0 ${item.highlight ? 'bg-[var(--color-sage-light)]/30 -mx-2 px-2 rounded-lg' : ''}`}>
                      <div className="flex-1 min-w-0 pr-2">
                        <span className="text-[var(--color-charcoal)] text-sm md:text-base">{item.name}</span>
                        {item.note && (
                          <span className="block text-xs md:text-sm text-[var(--color-forest)] mt-0.5">{item.note}</span>
                        )}
                      </div>
                      <span className="font-semibold text-[var(--color-charcoal)] whitespace-nowrap text-sm md:text-base">
                        {item.price === "0" ? "Inkludert" : `${item.price} kr`}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Behandlinger */}
              <div className="mb-6 md:mb-8">
                <h3 className="text-base md:text-lg font-semibold text-[var(--color-forest)] mb-3 md:mb-4 flex items-center gap-2">
                  <span className="w-6 md:w-8 h-6 md:h-8 bg-[var(--color-sage-light)] rounded-full flex items-center justify-center text-xs md:text-sm">2</span>
                  Behandlinger
                </h3>
                <div className="space-y-2 md:space-y-3">
                  {priceData.behandlinger.map((item, index) => (
                    <div key={index} className="flex justify-between items-start py-2 md:py-3 border-b border-gray-100 last:border-0">
                      <div className="flex-1 min-w-0 pr-2">
                        <span className="text-[var(--color-charcoal)] text-sm md:text-base">{item.name}</span>
                        {item.note && (
                          <span className="block text-xs md:text-sm text-[var(--color-charcoal-light)] mt-0.5">{item.note}</span>
                        )}
                      </div>
                      <span className="font-semibold text-[var(--color-charcoal)] whitespace-nowrap text-sm md:text-base">
                        {item.price} kr
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tillegg */}
              <div className="mb-4 md:mb-6">
                <h3 className="text-base md:text-lg font-semibold text-[var(--color-forest)] mb-3 md:mb-4 flex items-center gap-2">
                  <span className="w-6 md:w-8 h-6 md:h-8 bg-[var(--color-sage-light)] rounded-full flex items-center justify-center text-xs md:text-sm">3</span>
                  Tillegg
                </h3>
                <div className="space-y-2 md:space-y-3">
                  {priceData.tillegg.map((item, index) => (
                    <div key={index} className="flex justify-between items-start py-2 md:py-3 border-b border-gray-100 last:border-0">
                      <div className="flex-1 min-w-0 pr-2">
                        <span className="text-[var(--color-charcoal)] text-sm md:text-base">{item.name}</span>
                        {item.note && (
                          <span className="block text-xs md:text-sm text-[var(--color-charcoal-light)] mt-0.5">{item.note}</span>
                        )}
                      </div>
                      <span className="font-semibold text-[var(--color-charcoal)] whitespace-nowrap text-sm md:text-base">
                        {item.price} kr
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Info box */}
              <div className="bg-[var(--color-sage-light)] rounded-lg md:rounded-xl p-3 md:p-4 mt-4 md:mt-6">
                <p className="text-xs md:text-sm text-[var(--color-forest)]">
                  <strong>Forsikring:</strong> De fleste helseforsikringer dekker behandling av åreknuter.
                  Vi hjelper deg med nødvendig dokumentasjon.
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="px-4 md:px-6 py-3 md:py-4 bg-gray-50 border-t flex flex-col sm:flex-row gap-2 md:gap-3">
              <a
                href="https://www.telefontime.com/pasient/areknuteekspertene/#/selvbetjent/booking"
                className="btn-primary flex-1 justify-center text-sm md:text-base"
              >
                Bestill forundersøkelse
                <ArrowRightIcon />
              </a>
              <a
                href="tel:40044600"
                className="btn-secondary flex-1 justify-center text-sm md:text-base"
              >
                <PhoneIcon />
                Ring oss
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
