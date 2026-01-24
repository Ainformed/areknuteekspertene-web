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

// FAQ Data
const faqData = [
  {
    question: "Hva er åreknuter og hvorfor oppstår de?",
    answer: "Åreknuter er utvidede, synlige blodårer som oftest oppstår i bena. De skyldes svekket funksjon i veneklaffene som normalt hindrer blodet i å strømme tilbake. Arvelige faktorer, graviditet, overvekt og stående arbeid øker risikoen."
  },
  {
    question: "Gjør behandlingen vondt?",
    answer: "Moderne behandlingsmetoder er skånsomme og utføres med lokalbedøvelse. De fleste pasienter opplever kun et lite stikk ved bedøvelsen. Etter behandlingen kan du oppleve lett ømhet som varer noen dager."
  },
  {
    question: "Hvor lang er restitusjonstiden?",
    answer: "Du kan gå hjem samme dag og de fleste kan gjenoppta normale aktiviteter umiddelbart. Vi anbefaler å unngå hard trening i 1-2 uker. Full effekt av behandlingen sees etter 4-6 uker."
  },
  {
    question: "Dekkes behandlingen av forsikring?",
    answer: "Ja, de fleste helseforsikringer dekker åreknutebehandling når det er medisinsk indisert. Vi hjelper deg med dokumentasjonen. Kontakt ditt forsikringsselskap for å bekrefte dekningen."
  },
  {
    question: "Hva koster en forundersøkelse?",
    answer: "Forundersøkelsen koster kr 1.200,-. Dette beløpet trekkes fra totalprisen dersom du velger å gjennomføre behandling hos oss. Under forundersøkelsen får du en grundig ultralydundersøkelse og en personlig behandlingsplan."
  },
];

// Testimonials Data
const testimonials = [
  {
    text: "Etter 15 år med smerter og hevelser i bena, tok jeg endelig steget. Behandlingen var nesten smertefri, og allerede etter en uke merket jeg enorm forskjell. Skulle ønske jeg gjorde det før!",
    author: "Kristin M.",
    location: "Oslo",
    rating: 5
  },
  {
    text: "Profesjonelt fra første kontakt. Dr. Hansen forklarte alt grundig og jeg følte meg trygg hele veien. Resultatet er fantastisk - bena ser helt normale ut igjen.",
    author: "Erik S.",
    location: "Tromsø",
    rating: 5
  },
  {
    text: "Som sykepleier står jeg mye, og åreknutene hadde blitt et stort problem. Fleksibel timebestilling og rask behandling gjorde det enkelt å kombinere med jobb.",
    author: "Linda H.",
    location: "Oslo",
    rating: 5
  }
];

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
        <div className="container-wide py-4 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2">
            <img
              src="https://areknuteekspertene.no/wp-content/uploads/2023/01/areknute-logo.png"
              alt="Åreknuteekspertene"
              className="h-10 md:h-12 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#behandlinger" className="nav-link">Behandlinger</a>
            <a href="#prosess" className="nav-link">Slik fungerer det</a>
            <a href="#om-oss" className="nav-link">Om oss</a>
            <a href="#faq" className="nav-link">FAQ</a>
            <a href="#kontakt" className="nav-link">Kontakt</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:40044600" className="flex items-center gap-2 text-[var(--color-charcoal-light)] hover:text-[var(--color-forest)] transition-colors">
              <PhoneIcon />
              <span className="font-medium">400 44 600</span>
            </a>
            <a href="https://www.telefontime.com/pasient/areknuteekspertene/#/selvbetjent/booking" className="btn-primary">
              Bestill time
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
            <nav className="container-wide py-6 flex flex-col gap-4">
              <a href="#behandlinger" className="py-2 text-lg" onClick={() => setMobileMenuOpen(false)}>Behandlinger</a>
              <a href="#prosess" className="py-2 text-lg" onClick={() => setMobileMenuOpen(false)}>Slik fungerer det</a>
              <a href="#om-oss" className="py-2 text-lg" onClick={() => setMobileMenuOpen(false)}>Om oss</a>
              <a href="#faq" className="py-2 text-lg" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
              <a href="#kontakt" className="py-2 text-lg" onClick={() => setMobileMenuOpen(false)}>Kontakt</a>
              <div className="pt-4 border-t border-[var(--color-sage-light)]">
                <a href="tel:40044600" className="flex items-center gap-2 py-2">
                  <PhoneIcon />
                  <span>400 44 600</span>
                </a>
                <a href="https://www.telefontime.com/pasient/areknuteekspertene/#/selvbetjent/booking" className="btn-primary w-full mt-4">
                  Bestill time
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-hero min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="organic-shape w-[600px] h-[600px] -top-40 -right-40 opacity-60" />
        <div className="organic-shape w-[400px] h-[400px] bottom-20 -left-20 opacity-40" style={{ animationDelay: "2s" }} />

        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <div className="animate-fade-in-up">
              <span className="inline-block px-4 py-2 bg-[var(--color-sage-light)] text-[var(--color-forest)] text-sm font-medium rounded-full mb-6">
                Norges ledende spesialistklinikk
              </span>
            </div>

            <h1 className="animate-fade-in-up animation-delay-100 text-4xl md:text-5xl lg:text-6xl font-medium text-[var(--color-charcoal)] mb-6 text-balance">
              Bli kvitt åreknuter
              <span className="block text-[var(--color-forest)]">skånsomt og effektivt</span>
            </h1>

            <p className="animate-fade-in-up animation-delay-200 text-lg md:text-xl text-[var(--color-charcoal-light)] max-w-xl mb-8 leading-relaxed">
              Med over 9.000 vellykkede behandlinger gir vi deg trygg og moderne åreknutebehandling.
              Start med en forundersøkelse for å få din personlige behandlingsplan.
            </p>

            <div className="animate-fade-in-up animation-delay-300 flex flex-col sm:flex-row gap-4 mb-8">
              <a href="https://www.telefontime.com/pasient/areknuteekspertene/#/selvbetjent/booking" className="btn-primary">
                Bestill forundersøkelse
                <ArrowRightIcon />
              </a>
              <a href="tel:40044600" className="btn-secondary">
                <PhoneIcon />
                Ring oss
              </a>
            </div>

            <div className="animate-fade-in-up animation-delay-400 flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm text-[var(--color-charcoal-light)]">
              <span className="flex items-center gap-2">
                <CheckIcon />
                Kr 1.200,- (trekkes fra ved behandling)
              </span>
              <span className="flex items-center gap-2">
                <ClockIcon />
                Svar innen 24 timer
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white border-y border-[var(--color-sage-light)]">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { number: "9.000+", label: "Behandlinger utført" },
              { number: "15+", label: "År med erfaring" },
              { number: "98%", label: "Fornøyde pasienter" },
              { number: "2", label: "Klinikker i Norge" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="stat-number mb-2">{stat.number}</div>
                <div className="text-[var(--color-charcoal-light)] text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="behandlinger" className="py-[var(--section-padding)] bg-gradient-section">
        <div className="container-wide">
          <div className="text-center mb-16">
            <span className="text-[var(--color-forest)] text-sm font-medium tracking-wide uppercase">Våre behandlinger</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl mt-4 mb-6">
              Moderne og skånsomme metoder
            </h2>
            <p className="text-[var(--color-charcoal-light)] text-lg max-w-2xl mx-auto">
              Vi tilbyr de mest effektive og skånsomme behandlingsmetodene for åreknuter,
              tilpasset din situasjon.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div key={index} className="card group">
                <div className="w-12 h-12 bg-[var(--color-sage-light)] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[var(--color-sage)] transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[var(--color-forest)]">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl mb-3">{service.title}</h3>
                <p className="text-[var(--color-charcoal-light)] mb-6">{service.description}</p>
                <div className="flex gap-6 text-sm text-[var(--color-charcoal-light)] pt-4 border-t border-[var(--color-sage-light)]">
                  <span className="flex items-center gap-2">
                    <ClockIcon />
                    {service.duration}
                  </span>
                  <span>Restitusjon: {service.recovery}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="prosess" className="py-[var(--section-padding)] bg-[var(--color-cream)]">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[var(--color-forest)] text-sm font-medium tracking-wide uppercase">Slik fungerer det</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl mt-4 mb-6">
                Din vei til friske ben
              </h2>
              <p className="text-[var(--color-charcoal-light)] text-lg mb-8">
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
                  <div key={index} className="flex gap-6 mb-8 last:mb-0">
                    <div className="process-dot">{item.step}</div>
                    <div className="pt-2">
                      <h3 className="text-xl mb-2">{item.title}</h3>
                      <p className="text-[var(--color-charcoal-light)]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="card card-forest p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl text-white mb-4">
                  Klar for å ta første steg?
                </h3>
                <p className="text-white/80 mb-8">
                  Book en forundersøkelse i dag. Vi kontakter deg innen 24 timer for å
                  finne en tid som passer.
                </p>
                <div className="bg-white/10 rounded-lg p-6 mb-8">
                  <div className="text-white/60 text-sm mb-1">Forundersøkelse</div>
                  <div className="text-3xl font-serif text-white mb-1">Kr 1.200,-</div>
                  <div className="text-white/60 text-sm">Trekkes fra ved behandling</div>
                </div>
                <a
                  href="https://www.telefontime.com/pasient/areknuteekspertene/#/selvbetjent/booking"
                  className="block w-full bg-white text-[var(--color-forest)] font-medium py-4 px-6 rounded text-center hover:bg-[var(--color-cream)] transition-colors"
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
          <div className="text-center mb-16">
            <span className="text-[var(--color-forest)] text-sm font-medium tracking-wide uppercase">Hva pasientene sier</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl mt-4 mb-6">
              Ekte historier, ekte resultater
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="flex gap-1 text-[var(--color-gold)] mb-4 pt-8">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <p className="text-[var(--color-charcoal)] mb-6 leading-relaxed">
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-[var(--color-sage-light)]">
                  <div className="w-10 h-10 bg-[var(--color-sage-light)] rounded-full flex items-center justify-center text-[var(--color-forest)] font-medium">
                    {testimonial.author[0]}
                  </div>
                  <div>
                    <div className="font-medium text-[var(--color-charcoal)]">{testimonial.author}</div>
                    <div className="text-sm text-[var(--color-charcoal-light)]">{testimonial.location}</div>
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
          <div className="text-center mb-16">
            <span className="text-[var(--color-forest)] text-sm font-medium tracking-wide uppercase">Ofte stilte spørsmål</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl mt-4">
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

          <div className="text-center mt-12">
            <p className="text-[var(--color-charcoal-light)] mb-4">
              Finner du ikke svar på det du lurer på?
            </p>
            <a href="tel:40044600" className="btn-secondary">
              <PhoneIcon />
              Ring oss på 400 44 600
            </a>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="kontakt" className="py-[var(--section-padding)] bg-gradient-section">
        <div className="container-wide">
          <div className="text-center mb-16">
            <span className="text-[var(--color-forest)] text-sm font-medium tracking-wide uppercase">Våre klinikker</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl mt-4 mb-6">
              Finn oss i Oslo og Tromsø
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                city: "Oslo",
                address: "Sørkedalsveien 10A",
                postal: "0369 Oslo",
                phone: "400 44 600",
                email: "post@areknuteekspertene.no",
                hours: "Man-Fre: 08:00-16:00"
              },
              {
                city: "Tromsø",
                address: "Storgata 94",
                postal: "9008 Tromsø",
                phone: "400 44 600",
                email: "post@areknuteekspertene.no",
                hours: "Man-Fre: 08:00-16:00"
              }
            ].map((location, index) => (
              <div key={index} className="card">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl mb-1">{location.city}</h3>
                    <p className="text-[var(--color-charcoal-light)]">{location.address}</p>
                    <p className="text-[var(--color-charcoal-light)]">{location.postal}</p>
                  </div>
                  <div className="w-12 h-12 bg-[var(--color-sage-light)] rounded-full flex items-center justify-center text-[var(--color-forest)]">
                    <MapPinIcon />
                  </div>
                </div>
                <div className="space-y-3 pt-6 border-t border-[var(--color-sage-light)]">
                  <a href={`tel:${location.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 text-[var(--color-charcoal-light)] hover:text-[var(--color-forest)] transition-colors">
                    <PhoneIcon />
                    <span>{location.phone}</span>
                  </a>
                  <a href={`mailto:${location.email}`} className="flex items-center gap-3 text-[var(--color-charcoal-light)] hover:text-[var(--color-forest)] transition-colors">
                    <EmailIcon />
                    <span>{location.email}</span>
                  </a>
                  <div className="flex items-center gap-3 text-[var(--color-charcoal-light)]">
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
        <div className="organic-shape w-[500px] h-[500px] -top-40 -right-40 opacity-10" />
        <div className="organic-shape w-[300px] h-[300px] bottom-0 left-0 opacity-10" style={{ animationDelay: "3s" }} />

        <div className="container-narrow text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white mb-6">
            Klar for å ta steget?
          </h2>
          <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
            Book din forundersøkelse i dag og ta første steg mot et liv uten
            ubehag fra åreknuter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.telefontime.com/pasient/areknuteekspertene/#/selvbetjent/booking"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[var(--color-forest)] font-medium rounded hover:bg-[var(--color-cream)] transition-colors"
            >
              Bestill forundersøkelse
              <ArrowRightIcon />
            </a>
            <a
              href="tel:40044600"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-medium rounded hover:bg-white/10 transition-colors"
            >
              <PhoneIcon />
              400 44 600
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer py-16">
        <div className="container-wide">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <img
                src="https://areknuteekspertene.no/wp-content/uploads/2023/01/areknute-logo.png"
                alt="Åreknuteekspertene"
                className="h-12 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-white/70 max-w-md mb-6">
                Norges ledende spesialistklinikk for åreknutebehandling.
                Vi kombinerer medisinsk ekspertise med omsorg for å gi deg
                best mulig resultat.
              </p>
              <div className="flex flex-col gap-3">
                <a href="tel:40044600" className="flex items-center gap-2 text-white/80 hover:text-white">
                  <PhoneIcon />
                  400 44 600
                </a>
                <a href="mailto:post@areknuteekspertene.no" className="flex items-center gap-2 text-white/80 hover:text-white">
                  <EmailIcon />
                  post@areknuteekspertene.no
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">Hurtiglenker</h4>
              <ul className="space-y-3">
                <li><a href="#behandlinger">Behandlinger</a></li>
                <li><a href="#prosess">Slik fungerer det</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#kontakt">Kontakt</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">Klinikker</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#kontakt">Oslo</a>
                  <span className="block text-white/50 text-sm">Sørkedalsveien 10A</span>
                </li>
                <li>
                  <a href="#kontakt">Tromsø</a>
                  <span className="block text-white/50 text-sm">Storgata 94</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="line-decoration mb-8 opacity-30" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/50 text-sm">
            <p>&copy; {new Date().getFullYear()} Åreknuteekspertene. Alle rettigheter reservert.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">Personvern</a>
              <a href="#" className="hover:text-white">Vilkår</a>
              <a href="#" className="hover:text-white">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
