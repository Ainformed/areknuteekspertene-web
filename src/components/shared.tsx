"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// ============================================
// ICONS
// ============================================

export const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M18.333 14.1v2.5a1.667 1.667 0 01-1.816 1.667 16.492 16.492 0 01-7.192-2.559 16.25 16.25 0 01-5-5 16.492 16.492 0 01-2.558-7.225A1.667 1.667 0 013.433 1.667h2.5A1.667 1.667 0 017.6 3.308c.106.8.303 1.585.584 2.342a1.667 1.667 0 01-.375 1.758L6.7 8.517a13.333 13.333 0 005 5l1.108-1.109a1.667 1.667 0 011.759-.375c.757.281 1.542.478 2.341.584a1.667 1.667 0 011.425 1.683z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const MapPinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M17.5 8.333c0 5.834-7.5 10.834-7.5 10.834s-7.5-5-7.5-10.834a7.5 7.5 0 1115 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 10.833a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ClockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="8.333" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M10 5v5l3.333 1.667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const ArrowRightIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M4.167 10h11.666M10 4.167L15.833 10 10 15.833" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const EmailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M3.333 3.333h13.334c.916 0 1.666.75 1.666 1.667v10c0 .917-.75 1.667-1.666 1.667H3.333c-.916 0-1.666-.75-1.666-1.667V5c0-.917.75-1.667 1.666-1.667z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18.333 5L10 10.833 1.667 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const ChevronRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Treatment Icons
export const LaserIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[var(--color-forest)]">
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

export const InjectionIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[var(--color-forest)]">
    <path d="M18.5 2.5L21.5 5.5M15 6l3 3M8.5 12.5l-5 5c-.83.83-.83 2.17 0 3s2.17.83 3 0l5-5M12 8l4 4M9 11l-1.5 1.5M13.5 6.5L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ScalpelIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[var(--color-forest)]">
    <path d="M4 20L20 4M4 20l3-3M7 17l3-3M10 14l2-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 10c2-2 4-2 6-4s0-4-2-2-2 4-4 6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Symptom Icons
export const LegSwellingIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 2C8 2 6 6 6 10c0 2 .5 4 1.5 5.5L6 22h12l-1.5-6.5c1-1.5 1.5-3.5 1.5-5.5 0-4-2-8-6-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 10h6M9 14h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
  </svg>
);

export const CrampIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M4 4l4 4M20 4l-4 4M12 2v4M8 12H4M20 12h-4M4 20l4-4M20 20l-4-4M12 22v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

export const TiredLegIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 2v2M12 20v2M4 12H2M22 12h-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
    <path d="M9 10h.01M15 10h.01M9 15c1 1 2.5 1.5 3 1.5s2-.5 3-1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const VeinIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 2c0 4-4 6-4 10s4 6 4 10M12 2c0 4 4 6 4 10s-4 6-4 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="12" cy="8" r="1.5" fill="currentColor"/>
    <circle cx="12" cy="16" r="1.5" fill="currentColor"/>
  </svg>
);

export const ItchIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M8 4c2 2 4 2 6 0M6 8c2 2 4 2 6 0M8 12c2 2 4 2 6 0M6 16c2 2 4 2 6 0M8 20c2 2 4 2 6 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// ============================================
// BREADCRUMBS
// ============================================

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 md:mb-8">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-[var(--color-charcoal-light)]" itemScope itemType="https://schema.org/BreadcrumbList">
        <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
          <Link href="/" className="hover:text-[var(--color-forest)] transition-colors" itemProp="item">
            <span itemProp="name">Hjem</span>
          </Link>
          <meta itemProp="position" content="1" />
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <ChevronRightIcon />
            {item.href ? (
              <Link href={item.href} className="hover:text-[var(--color-forest)] transition-colors" itemProp="item">
                <span itemProp="name">{item.label}</span>
              </Link>
            ) : (
              <span className="text-[var(--color-charcoal)]" itemProp="name">{item.label}</span>
            )}
            <meta itemProp="position" content={String(index + 2)} />
          </li>
        ))}
      </ol>
    </nav>
  );
}

// ============================================
// HEADER
// ============================================

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "header-scrolled" : ""}`}>
      <div className="container-wide py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <img
            src="https://areknuteekspertene.no/wp-content/uploads/2023/01/areknute-logo.png"
            alt="Åreknuteekspertene"
            className="h-12 md:h-16 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          <Link href="/behandlinger/laserbehandling" className="nav-link">Behandlinger</Link>
          <Link href="/oslo" className="nav-link">Oslo</Link>
          <Link href="/tromso" className="nav-link">Tromsø</Link>
          <Link href="/#faq" className="nav-link">FAQ</Link>
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
            <ArrowRightIcon />
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
            <Link href="/behandlinger/laserbehandling" className="py-2" onClick={() => setMobileMenuOpen(false)}>Behandlinger</Link>
            <Link href="/oslo" className="py-2" onClick={() => setMobileMenuOpen(false)}>Oslo</Link>
            <Link href="/tromso" className="py-2" onClick={() => setMobileMenuOpen(false)}>Tromsø</Link>
            <Link href="/#faq" className="py-2" onClick={() => setMobileMenuOpen(false)}>FAQ</Link>
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
  );
}

// ============================================
// FOOTER
// ============================================

export function Footer() {
  return (
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
              Spesialistklinikk for åreknuter siden 2009.
              Laserbehandling og skumbehandling i Oslo og Tromsø.
            </p>
            <div className="flex flex-col gap-2 md:gap-3 mb-4">
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
            <h4 className="text-white font-medium mb-3 md:mb-4 text-sm md:text-base">Behandlinger</h4>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
              <li><Link href="/behandlinger/laserbehandling">Laserbehandling</Link></li>
              <li><Link href="/behandlinger/skumbehandling">Skumbehandling</Link></li>
              <li><Link href="/behandlinger/mikroflebektomi">Mikroflebektomi</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-3 md:mb-4 text-sm md:text-base">Klinikker</h4>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
              <li>
                <Link href="/oslo">Oslo</Link>
                <span className="block text-white/50 text-xs md:text-sm">Sørkedalsveien 10A</span>
              </li>
              <li>
                <Link href="/tromso">Tromsø</Link>
                <span className="block text-white/50 text-xs md:text-sm">Storgata 94</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="line-decoration mb-6 md:mb-8 opacity-30" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-white/50 text-xs md:text-sm">
          <p>&copy; {new Date().getFullYear()} Åreknuteekspertene. Alle rettigheter reservert.</p>
          <div className="flex gap-4 md:gap-6">
            <Link href="/tilstander/blodpropp-i-bena" className="hover:text-white">Tilstander</Link>
            <Link href="/symptomer/kramper-i-bena" className="hover:text-white">Symptomer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ============================================
// CTA SECTION
// ============================================

export function CTASection() {
  return (
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
  );
}

// ============================================
// SYMPTOMS DATA
// ============================================

export const symptomsData = [
  {
    title: "Hovne bein",
    description: "Hevelse i bena kan være et tegn på venøs insuffisiens og åreknuter.",
    icon: "swelling",
    href: "/tilstander/hovne-bein"
  },
  {
    title: "Kramper i bena",
    description: "Krampe i leggen, spesielt om natten, er et vanlig symptom på åreknuter.",
    icon: "cramp",
    href: "/symptomer/kramper-i-bena"
  },
  {
    title: "Tunge, trette ben",
    description: "Følelse av tyngde og tretthet i bena som forverres utover dagen.",
    icon: "tired",
    href: "/tilstander/hovne-bein"
  },
  {
    title: "Synlige blodårer",
    description: "Slyngede, blålige årer synlige under huden er typisk for åreknuter.",
    icon: "vein",
    href: "/behandlinger/laserbehandling"
  },
  {
    title: "Kløe rundt årer",
    description: "Kløe og irritasjon rundt synlige årer kan indikere behov for behandling.",
    icon: "itch",
    href: "/behandlinger/skumbehandling"
  }
];

export function getSymptomIcon(icon: string) {
  switch (icon) {
    case "swelling": return <LegSwellingIcon />;
    case "cramp": return <CrampIcon />;
    case "tired": return <TiredLegIcon />;
    case "vein": return <VeinIcon />;
    case "itch": return <ItchIcon />;
    default: return <VeinIcon />;
  }
}
