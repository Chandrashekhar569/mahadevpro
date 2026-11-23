import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

const NAV_LINKS = [
  { label: 'Exchange', href: '#exchange' },
  { label: 'Games', href: '#games' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Support', href: '#support' },
  { label: 'FAQ', href: '#faq' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const whatsappHref = getWhatsAppUrl();

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#090B10]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-8 px-4 py-3.5 sm:px-6">
        {/* Zone 1: Single text element brand wordmark */}
        <a
          href="#top"
          className="font-display text-xl font-semibold tracking-tight text-white whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400"
        >
          Mahadev<span className="text-amber-400">Pro</span> Book
        </a>

        {/* Zone 2: 5 concise single-line navigation links */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-300"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap shrink-0 py-1 transition-colors duration-150 hover:text-white hover:underline hover:underline-offset-8 hover:decoration-amber-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex min-h-10 items-center justify-center rounded-lg bg-amber-400 px-5 py-2 text-sm font-semibold text-zinc-950 transition-colors duration-150 hover:bg-amber-300 active:scale-[0.98] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
          >
            Get Instant ID
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 text-zinc-200 transition-colors duration-150 hover:bg-white/5 md:hidden cursor-pointer focus-visible:outline-2 focus-visible:outline-amber-400"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-white/10 bg-[#0D1017] px-4 py-4 md:hidden">
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex min-h-11 items-center rounded-md px-3 text-sm font-medium text-zinc-200 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-3 flex min-h-11 w-full items-center justify-center rounded-lg bg-amber-400 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-amber-300"
            >
              Get Instant ID on WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
