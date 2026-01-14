export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFDFB]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-[#FFFDFB] z-50">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-5 flex justify-between items-center">
          <span className="text-[17px] font-semibold text-[#1a1a1a]">
            Åreknuteekspertene
          </span>
          <a
            href="tel:40044600"
            className="text-sm text-[#6b7280] hover:text-[#1a1a1a]"
          >
            400 44 600
          </a>
        </div>
      </header>

      {/* Hero */}
      <main className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20">
        <div className="max-w-5xl mx-auto w-full">
          <p className="text-xs uppercase tracking-[0.08em] text-[#9ca3af] mb-4">
            Spesialistklinikk for åreknuter
          </p>

          <h1 className="text-[32px] md:text-[46px] font-medium text-[#1a1a1a] leading-tight tracking-tight mb-6">
            Få klarhet i om du trenger behandling
          </h1>

          <p className="text-lg text-[#6b7280] max-w-[460px] leading-relaxed mb-8">
            Forundersøkelsen gir deg svar på om du har åreknuter, om behandling
            er nødvendig, og hvilken metode som passer for deg.
          </p>

          <p className="text-base text-[#1a1a1a] mb-6">
            <span className="font-semibold">Kr 1.200,-</span>
            <span className="text-[#6b7280]"> · Trekkes fra ved behandling</span>
          </p>

          <a
            href="https://www.telefontime.com/pasient/areknuteekspertene/#/selvbetjent/booking"
            className="inline-block bg-[#0ea5e9] text-white text-[15px] font-medium px-7 py-3.5 rounded-lg hover:bg-[#0284c7] transition-colors"
          >
            Bestill forundersøkelse
          </a>

          <p className="text-[13px] text-[#9ca3af] mt-4">
            Svar innen 24 timer
          </p>
        </div>
      </main>

      {/* Trust line */}
      <div className="fixed bottom-8 left-6 md:left-12 text-[13px] text-[#9ca3af]">
        9.000+ behandlinger · Etablert 2009 · Oslo & Tromsø
      </div>
    </div>
  );
}
