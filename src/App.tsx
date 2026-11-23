import { useState, type FormEvent } from 'react';
import {
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Headphones,
  MessageSquare,
} from 'lucide-react';
import { Header } from './components/Header';
import { LiveExchangeBoard } from './components/LiveExchangeBoard';
import { PaymentOptionsSection } from './components/PaymentOptionsSection';
import { ResilientImage } from './components/ResilientImage';
import {
  ARENA_GAMES,
  FAQ_ITEMS,
  HERO_IMAGE_PATH,
  ONBOARDING_STEPS,
  type GameCategoryFilter,
} from './data/markets';
import { getWhatsAppUrl } from './utils/whatsapp';

const GAME_FILTERS: GameCategoryFilter[] = [
  'All Games',
  'Sportsbook',
  'Indian Cards',
  'Live Studio',
  'Instant Arcade',
];

const KPI_METRICS = [
  { value: 'Under 5 Min', label: 'Verified ID Activation Time' },
  { value: '30+ Sports', label: 'Cricket, Football, Tennis & Kabaddi' },
  { value: '24/7 Desk', label: 'Round-the-Clock WhatsApp Support' },
  { value: '256-Bit SSL', label: 'Encrypted Session & Account Access' },
];

export default function App() {
  // Inline onboarding form state
  const [inlineName, setInlineName] = useState('');
  const [inlinePhone, setInlinePhone] = useState('');
  const [inlineVertical, setInlineVertical] = useState('Cricket Exchange ID');
  const [inlineReferral, setInlineReferral] = useState('');
  const [inlineError, setInlineError] = useState('');
  const [inlineSubmittedId, setInlineSubmittedId] = useState<string | null>(null);

  // Game category filter state
  const [activeGameCategory, setActiveGameCategory] = useState<GameCategoryFilter>('All Games');

  // FAQ accordion state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const filteredArenaGames =
    activeGameCategory === 'All Games'
      ? ARENA_GAMES
      : ARENA_GAMES.filter((game) => game.filterGroup === activeGameCategory);

  const defaultWhatsAppHref = getWhatsAppUrl();

  const buildPersonalizedWhatsAppUrl = () => {
    const parts = ['I want ID'];
    if (inlineName.trim()) parts.push(`Name: ${inlineName.trim()}`);
    if (inlineVertical) parts.push(`Type: ${inlineVertical}`);
    if (inlineReferral.trim()) parts.push(`Referral: ${inlineReferral.trim()}`);
    if (inlineSubmittedId) parts.push(`Ticket: ${inlineSubmittedId}`);
    return getWhatsAppUrl(parts.join(' | '));
  };

  const handleInlineSubmit = (e: FormEvent) => {
    e.preventDefault();
    const digits = inlinePhone.replace(/\D/g, '');
    if (inlineName.trim().length < 2) {
      setInlineError('Please enter your name to generate an onboarding ticket.');
      return;
    }
    if (digits.length < 10 || digits.length > 12) {
      setInlineError('Please provide a valid 10-digit WhatsApp or mobile number.');
      return;
    }
    setInlineError('');
    setInlineSubmittedId(`MPB-${Math.floor(100000 + Math.random() * 900000)}`);
  };

  return (
    <div id="top" className="min-h-screen bg-[#090B10] text-zinc-100">
      <Header />

      <main>
        {/* Hero Section: Balanced 2-column split + Full-width 4-column KPI strip below */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch lg:gap-10">
              {/* Left Proposition Column */}
              <div className="flex flex-col justify-between lg:col-span-6">
                <div>
                  <p className="text-xs font-medium text-amber-400">
                    Official MahadevPro Book Portal · 18+ Verified Platform
                  </p>
                  <h1 className="mt-4 font-display text-[clamp(2.35rem,4.2vw,3.75rem)] font-bold leading-[1.06] tracking-tight text-white">
                    Premier Cricket Exchange &amp; Live Sports Arena
                  </h1>
                  <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-300">
                    Get your verified MahadevPro Book ID in minutes on WhatsApp. Trade live Back and
                    Lay odds across international cricket, IPL, football, and tennis alongside 24/7
                    live studio card rooms and instant support desk assistance.
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-3.5">
                    <a
                      href={defaultWhatsAppHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-amber-400 px-6 py-3 text-sm font-semibold text-zinc-950 transition-colors duration-150 hover:bg-amber-300 active:scale-[0.98] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
                    >
                      <MessageSquare className="h-4 w-4" aria-hidden="true" />
                      <span>Get Instant ID on WhatsApp</span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </a>

                    <a
                      href={defaultWhatsAppHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/15 bg-[#11151E] px-6 py-3 text-sm font-semibold text-zinc-100 transition-colors duration-150 hover:bg-white/5 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
                    >
                      Get Demo ID
                    </a>
                  </div>
                </div>

                <div className="mt-10 border-t border-white/10 pt-5 text-xs text-zinc-400">
                  <span>Direct WhatsApp Desk</span>
                  <span className="mx-2" aria-hidden="true">
                    ·
                  </span>
                  <span>UPI, IMPS &amp; Bank Rails Supported</span>
                  <span className="mx-2" aria-hidden="true">
                    ·
                  </span>
                  <span>Zero App Download Required</span>
                </div>
              </div>

              {/* Right Focal Media Column */}
              <div className="lg:col-span-6">
                <a
                  href={defaultWhatsAppHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block h-full min-h-[320px] overflow-hidden rounded-xl border border-white/10 bg-[#11151E] transition-colors hover:border-amber-400/50 lg:min-h-[420px]"
                >
                  <ResilientImage
                    src={HERO_IMAGE_PATH}
                    alt="Floodlit international cricket stadium at night with packed stands and emerald turf pitch"
                    title="MahadevPro Book Live Cricket Stadium"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#090B10]/95 via-[#090B10]/40 to-transparent"
                    aria-hidden="true"
                  />

                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <div className="flex flex-wrap items-end justify-between gap-4">
                      <div>
                        <p className="text-xs font-medium text-amber-400">
                          Featured Match · International T20 Series
                        </p>
                        <p className="mt-1 font-display text-2xl font-semibold text-white">
                          India vs Australia
                        </p>
                        <p className="font-mono-tabular mt-1 text-xs text-zinc-300">
                          IND 138/3 (14.3 Overs) · Back 1.48 / Lay 1.50
                        </p>
                      </div>
                      <span className="inline-flex min-h-10 items-center gap-1.5 rounded-lg border border-white/20 bg-[#090B10]/85 px-4 py-2 text-xs font-semibold text-white backdrop-blur-sm transition-colors group-hover:border-amber-400/60 group-hover:text-amber-300 whitespace-nowrap">
                        <span>Get ID Now</span>
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Full-Width 4-Column KPI Strip below the Hero Split */}
            <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 lg:grid-cols-4">
              {KPI_METRICS.map((metric) => (
                <a
                  key={metric.label}
                  href={defaultWhatsAppHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-[#11151E] px-5 py-5 transition-colors hover:bg-[#161B27] sm:px-6"
                >
                  <p className="font-display text-2xl font-semibold tracking-tight text-white">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-xs text-zinc-400">{metric.label}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: Interactive Live Sports Exchange & Demo Slip */}
        <LiveExchangeBoard />

        {/* Section 3: Featured Games & Live Tables Asymmetric Bento Grid */}
        <section id="games" className="border-t border-white/10 py-16 sm:py-20">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
            <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-medium text-amber-400">One ID · 10 Live Arenas</p>
                <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Sportsbook, Live Card Rooms &amp; Studio Tables
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400 sm:text-base">
                  Every MahadevPro Book account unlocks unified access to cricket markets, Indian
                  card rooms, VIP roulette and baccarat studios, racing tracks, and instant arcade
                  games. Click any arena below to get your ID directly on WhatsApp.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-1 rounded-lg border border-white/10 bg-[#11151E] p-1">
                {GAME_FILTERS.map((category) => {
                  const isActive = activeGameCategory === category;
                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setActiveGameCategory(category)}
                      className={`min-h-9 rounded-md px-3.5 py-1.5 text-xs font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-amber-400 ${
                        isActive
                          ? 'bg-amber-400 text-zinc-950'
                          : 'text-zinc-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredArenaGames.map((game) => {
                const isWideCard = activeGameCategory === 'All Games' && Boolean(game.featured);
                return (
                  <a
                    key={game.id}
                    href={defaultWhatsAppHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-[#11151E] transition-colors duration-200 hover:border-amber-400/50 focus-visible:outline-2 focus-visible:outline-amber-400 ${
                      isWideCard ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
                    }`}
                  >
                    <div
                      className={`relative overflow-hidden bg-[#0D1017] ${
                        isWideCard ? 'aspect-[16/9] lg:aspect-[21/10]' : 'aspect-[4/3]'
                      }`}
                    >
                      <ResilientImage
                        src={game.imageSrc}
                        alt={game.imageAlt}
                        title={game.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                      <div
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#11151E] via-transparent to-transparent"
                        aria-hidden="true"
                      />
                    </div>

                    <div className="flex flex-1 flex-col justify-between p-6">
                      <div>
                        <p className="text-xs text-zinc-400">
                          <span className="font-medium text-amber-400">{game.category}</span>
                          <span className="mx-2" aria-hidden="true">
                            ·
                          </span>
                          <span>{game.tableCount}</span>
                        </p>
                        <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-white">
                          {game.title}
                        </h3>
                        <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">
                          {game.description}
                        </p>
                      </div>

                      <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                        <span className="inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-amber-400 transition-colors group-hover:text-amber-300">
                          <span>Get {game.verticalValue} on WhatsApp</span>
                          <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <span className="text-xs font-medium text-zinc-400 group-hover:text-white">
                          Instant ID
                        </span>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 4: Editorial Numbered Onboarding Steps & Platform Proof */}
        <section id="how-it-works" className="border-t border-white/10 py-16 sm:py-20">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
              {/* Editorial Numbered Steps */}
              <div className="lg:col-span-7">
                <p className="text-xs font-medium text-amber-400">Onboarding Process</p>
                <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  How to Activate Your MahadevPro Book ID
                </h2>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base">
                  No complex paperwork. Four clear steps from your WhatsApp message to full exchange
                  and live table access.
                </p>

                <ol className="mt-8 divide-y divide-white/10 border-y border-white/10">
                  {ONBOARDING_STEPS.map((step) => (
                    <li key={step.number}>
                      <a
                        href={defaultWhatsAppHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="grid grid-cols-1 gap-2 py-5 transition-colors hover:bg-white/[0.02] sm:grid-cols-12 sm:gap-4"
                      >
                        <span className="font-mono-tabular text-sm font-semibold text-amber-400 sm:col-span-2">
                          {step.number}
                        </span>
                        <div className="sm:col-span-10">
                          <h3 className="text-base font-semibold text-white">{step.title}</h3>
                          <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">
                            {step.detail}
                          </p>
                        </div>
                      </a>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Adjacent Proof & Support Desk Highlights */}
              <div className="lg:col-span-5">
                <div className="rounded-xl border border-white/10 bg-[#11151E] p-6 sm:p-7">
                  <p className="text-xs font-medium text-amber-400">Platform Standards</p>
                  <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-white">
                    Built for Fast, Transparent Play
                  </h3>

                  <div className="mt-6 space-y-5">
                    <div className="flex items-start gap-3.5">
                      <Clock className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" aria-hidden="true" />
                      <div>
                        <p className="text-sm font-semibold text-white">
                          Instant Settlement Rails
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-zinc-400">
                          Streamlined account top-ups and withdrawal assistance via UPI, IMPS, and
                          direct bank transfer with clear reference numbers.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <Headphones
                        className="mt-0.5 h-5 w-5 shrink-0 text-amber-400"
                        aria-hidden="true"
                      />
                      <div>
                        <p className="text-sm font-semibold text-white">
                          Dedicated 24/7 WhatsApp Support Desk
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-zinc-400">
                          Human support coordinators online around the clock for new ID creation,
                          password resets, and live match inquiries.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <ShieldCheck
                        className="mt-0.5 h-5 w-5 shrink-0 text-amber-400"
                        aria-hidden="true"
                      />
                      <div>
                        <p className="text-sm font-semibold text-white">
                          Strict 18+ Privacy &amp; Responsible Play
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-zinc-400">
                          All credentials are issued privately through encrypted sessions with
                          configurable personal deposit and play limits.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-7 border-t border-white/10 pt-5">
                    <a
                      href={defaultWhatsAppHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-amber-400 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-amber-300 focus-visible:outline-2 focus-visible:outline-amber-400"
                    >
                      <MessageSquare className="h-4 w-4" aria-hidden="true" />
                      <span>Message WhatsApp for ID</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4.5: Deposit and Withdrawal Options */}
        <PaymentOptionsSection />

        {/* Section 5: Direct Instant ID Form + Interactive FAQ */}
        <section id="support" className="border-t border-white/10 py-16 sm:py-20">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
              {/* Inline Validated Registration Form */}
              <div className="lg:col-span-5">
                <div className="rounded-xl border border-white/10 bg-[#11151E] p-6 sm:p-7">
                  <p className="text-xs font-medium text-amber-400">Direct Onboarding</p>
                  <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    Request Your MahadevPro ID
                  </h2>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                    Fill in your details below or open WhatsApp directly with &ldquo;I want ID&rdquo;
                    pre-filled for immediate activation.
                  </p>

                  {inlineSubmittedId ? (
                    <div className="mt-6 rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-5">
                      <div className="flex items-center gap-2 text-sm font-semibold text-emerald-300">
                        <CheckCircle2 className="h-5 w-5 shrink-0" aria-hidden="true" />
                        <span>Ticket Ready for WhatsApp</span>
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-zinc-300">
                        Tap below to send your pre-filled WhatsApp message directly to our 24/7
                        onboarding desk.
                      </p>
                      <p className="font-mono-tabular mt-3 text-lg font-semibold text-amber-400">
                        {inlineSubmittedId}
                      </p>
                      <div className="mt-4 flex flex-col gap-2.5">
                        <a
                          href={buildPersonalizedWhatsAppUrl()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-emerald-400"
                        >
                          <MessageSquare className="h-4 w-4" aria-hidden="true" />
                          <span>Open WhatsApp &amp; Send Request</span>
                        </a>
                        <button
                          type="button"
                          onClick={() => {
                            setInlineSubmittedId(null);
                            setInlineName('');
                            setInlinePhone('');
                            setInlineReferral('');
                          }}
                          className="inline-flex min-h-10 w-full items-center justify-center rounded-lg border border-white/15 px-4 py-2 text-xs font-semibold text-zinc-200 transition-colors hover:bg-white/5 cursor-pointer"
                        >
                          Reset Form
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleInlineSubmit} className="mt-6 space-y-4" noValidate>
                      <div>
                        <label
                          htmlFor="inline-name"
                          className="block text-xs font-medium text-zinc-300"
                        >
                          Full Name
                        </label>
                        <input
                          id="inline-name"
                          type="text"
                          value={inlineName}
                          onChange={(e) => setInlineName(e.target.value)}
                          placeholder="e.g. Rohan Sharma"
                          className="mt-1.5 min-h-11 w-full rounded-lg border border-white/15 bg-[#090B10] px-3.5 text-sm text-white placeholder:text-zinc-500 focus:border-amber-400 focus:outline-none"
                          required
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="inline-phone"
                          className="block text-xs font-medium text-zinc-300"
                        >
                          WhatsApp / Mobile Number
                        </label>
                        <input
                          id="inline-phone"
                          type="tel"
                          value={inlinePhone}
                          onChange={(e) => setInlinePhone(e.target.value)}
                          placeholder="+91 98XXX XXXXX"
                          className="font-mono-tabular mt-1.5 min-h-11 w-full rounded-lg border border-white/15 bg-[#090B10] px-3.5 text-sm text-white placeholder:text-zinc-500 focus:border-amber-400 focus:outline-none"
                          required
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="inline-vertical"
                          className="block text-xs font-medium text-zinc-300"
                        >
                          Account Type
                        </label>
                        <select
                          id="inline-vertical"
                          value={inlineVertical}
                          onChange={(e) => setInlineVertical(e.target.value)}
                          className="mt-1.5 min-h-11 w-full rounded-lg border border-white/15 bg-[#090B10] px-3.5 text-sm text-white focus:border-amber-400 focus:outline-none"
                        >
                          <option value="Cricket Exchange ID">Cricket Exchange ID</option>
                          <option value="All-in-One Pro ID">All-in-One Pro ID</option>
                          <option value="Live Card Tables ID">Live Card Tables ID</option>
                          <option value="Demo Preview ID">Demo Preview ID</option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="inline-referral"
                          className="block text-xs font-medium text-zinc-300"
                        >
                          Referral Code (Optional)
                        </label>
                        <input
                          id="inline-referral"
                          type="text"
                          value={inlineReferral}
                          onChange={(e) => setInlineReferral(e.target.value)}
                          placeholder="Optional promo or partner code"
                          className="mt-1.5 min-h-11 w-full rounded-lg border border-white/15 bg-[#090B10] px-3.5 text-sm text-white placeholder:text-zinc-500 focus:border-amber-400 focus:outline-none"
                        />
                      </div>

                      {inlineError && (
                        <p className="text-xs font-medium text-rose-400" role="alert">
                          {inlineError}
                        </p>
                      )}

                      <div className="space-y-2.5 pt-1">
                        <a
                          href={defaultWhatsAppHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-amber-400 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-amber-300 focus-visible:outline-2 focus-visible:outline-amber-400"
                        >
                          <MessageSquare className="h-4 w-4" aria-hidden="true" />
                          <span>Get Instant ID on WhatsApp</span>
                        </a>

                        <button
                          type="submit"
                          className="min-h-11 w-full rounded-lg border border-white/15 bg-[#181E2B] px-5 py-2.5 text-sm font-semibold text-zinc-100 transition-colors hover:bg-white/10 cursor-pointer focus-visible:outline-2 focus-visible:outline-amber-400"
                        >
                          Generate Ticket With My Details
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>

              {/* Interactive FAQ Accordion */}
              <div id="faq" className="lg:col-span-7">
                <p className="text-xs font-medium text-amber-400">Questions &amp; Answers</p>
                <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Frequently Asked Questions
                </h2>

                <div className="mt-6 divide-y divide-white/10 border-y border-white/10">
                  {FAQ_ITEMS.map((item, idx) => {
                    const isOpen = openFaqIndex === idx;
                    return (
                      <div key={item.question}>
                        <button
                          type="button"
                          onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                          aria-expanded={isOpen}
                          className="flex min-h-14 w-full items-center justify-between gap-4 py-4 text-left text-sm font-semibold text-white transition-colors hover:text-amber-300 sm:text-base cursor-pointer focus-visible:outline-2 focus-visible:outline-amber-400"
                        >
                          <span>{item.question}</span>
                          <ChevronDown
                            className={`h-4 w-4 shrink-0 text-zinc-400 transition-transform duration-200 ${
                              isOpen ? 'rotate-180 text-amber-400' : ''
                            }`}
                            aria-hidden="true"
                          />
                        </button>
                        {isOpen && (
                          <div className="pb-5 pr-6 text-sm leading-relaxed text-zinc-400">
                            {item.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Quiet Footer */}
      <footer className="border-t border-white/10 bg-[#07090D] pb-24 pt-12 sm:pb-12">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <a
                href="#top"
                className="font-display text-lg font-semibold tracking-tight text-white"
              >
                Mahadev<span className="text-amber-400">Pro</span> Book
              </a>
              <p className="mt-1.5 max-w-md text-xs leading-relaxed text-zinc-500">
                18+ Only. Online sports exchange and live gaming showcase. Please verify local
                jurisdiction regulations and play responsibly.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-zinc-400">
              <a href="#exchange" className="hover:text-white transition-colors">
                Exchange
              </a>
              <a href="#games" className="hover:text-white transition-colors">
                Games
              </a>
              <a href="#how-it-works" className="hover:text-white transition-colors">
                How It Works
              </a>
              <a href="#faq" className="hover:text-white transition-colors">
                FAQ
              </a>
              <a
                href={defaultWhatsAppHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 transition-colors"
              >
                24/7 Support Desk
              </a>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-6 text-xs text-zinc-500">
            © {new Date().getFullYear()} MahadevPro Book. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Compact Floating WhatsApp Get ID Button */}
      <a
        href={defaultWhatsAppHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get ID on WhatsApp"
        className="fixed bottom-5 right-5 z-40 inline-flex min-h-12 items-center gap-2.5 rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-zinc-950 shadow-lg transition-transform duration-150 hover:scale-[1.02] hover:bg-emerald-400 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
      >
        <MessageSquare className="h-4 w-4 shrink-0" aria-hidden="true" />
        <span className="whitespace-nowrap">WhatsApp for ID</span>
      </a>
    </div>
  );
}
