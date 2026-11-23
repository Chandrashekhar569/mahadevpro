import { useMemo, useState } from 'react';
import { Search, Trash2, CheckCircle2, ArrowRight } from 'lucide-react';
import { EXCHANGE_MATCHES, type ExchangeMatch, type SportCategory } from '../data/markets';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface SlipSelection {
  matchId: string;
  matchTitle: string;
  tournament: string;
  runnerName: string;
  side: 'Back' | 'Lay';
  odds: number;
}

interface PlacedDemoSlip extends SlipSelection {
  id: string;
  stake: number;
  projectedProfit: number;
  liability: number;
  timestamp: string;
}

const SPORTS: SportCategory[] = ['Cricket', 'Football', 'Tennis', 'Kabaddi'];
const STAKE_PRESETS = [500, 1000, 5000, 10000];

export function LiveExchangeBoard() {
  const [activeSport, setActiveSport] = useState<SportCategory>('Cricket');
  const [inPlayOnly, setInPlayOnly] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSlip, setSelectedSlip] = useState<SlipSelection>({
    matchId: EXCHANGE_MATCHES[0].id,
    matchTitle: EXCHANGE_MATCHES[0].title,
    tournament: EXCHANGE_MATCHES[0].tournament,
    runnerName: EXCHANGE_MATCHES[0].runners[0].name,
    side: 'Back',
    odds: EXCHANGE_MATCHES[0].runners[0].backOdds,
  });
  const [stakeInput, setStakeInput] = useState<string>('1000');
  const [placedSlips, setPlacedSlips] = useState<PlacedDemoSlip[]>([]);
  const [slipNotice, setSlipNotice] = useState<string>('');

  const filteredMatches = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return EXCHANGE_MATCHES.filter((match) => {
      if (match.sport !== activeSport) return false;
      if (inPlayOnly && !match.isInPlay) return false;
      if (!q) return true;
      return (
        match.title.toLowerCase().includes(q) ||
        match.tournament.toLowerCase().includes(q) ||
        match.runners.some((r) => r.name.toLowerCase().includes(q))
      );
    });
  }, [activeSport, inPlayOnly, searchQuery]);

  const numericStake = Math.max(0, Number(stakeInput) || 0);
  const projectedProfit =
    selectedSlip.side === 'Back'
      ? Math.round(numericStake * (selectedSlip.odds - 1))
      : Math.round(numericStake);
  const liability =
    selectedSlip.side === 'Back'
      ? Math.round(numericStake)
      : Math.round(numericStake * (selectedSlip.odds - 1));

  const handleSelectOdds = (
    match: ExchangeMatch,
    runnerName: string,
    side: 'Back' | 'Lay',
    odds: number
  ) => {
    setSelectedSlip({
      matchId: match.id,
      matchTitle: match.title,
      tournament: match.tournament,
      runnerName,
      side,
      odds,
    });
    setSlipNotice('');
  };

  const handleSimulateSlip = () => {
    if (numericStake < 100) {
      setSlipNotice('Enter a minimum demo stake of ₹100.');
      return;
    }
    const newSlip: PlacedDemoSlip = {
      ...selectedSlip,
      id: `DEMO-${Math.floor(10000 + Math.random() * 90000)}`,
      stake: numericStake,
      projectedProfit,
      liability,
      timestamp: new Date().toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };
    setPlacedSlips((prev) => [newSlip, ...prev.slice(0, 2)]);
    setSlipNotice(`Demo slip ${newSlip.id} recorded for simulation.`);
  };

  return (
    <section id="exchange" className="border-t border-white/10 py-16 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-medium text-amber-400">Live Exchange Preview</p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Real-Time Back &amp; Lay Sports Markets
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400 sm:text-base">
              Select any Back or Lay odds below to calculate exact exchange returns and liability in
              the interactive demo slip before requesting your MahadevPro Book ID.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-[#11151E] p-1">
              {SPORTS.map((sport) => {
                const isActive = activeSport === sport;
                return (
                  <button
                    key={sport}
                    type="button"
                    onClick={() => setActiveSport(sport)}
                    className={`min-h-9 rounded-md px-3.5 py-1.5 text-xs font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-amber-400 ${
                      isActive
                        ? 'bg-amber-400 text-zinc-950'
                        : 'text-zinc-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {sport}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Filter toolbar */}
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-sm">
            <Search
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500"
              aria-hidden="true"
            />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Search ${activeSport.toLowerCase()} matches or leagues...`}
              aria-label="Search exchange matches"
              className="min-h-10 w-full rounded-lg border border-white/10 bg-[#11151E] pl-10 pr-4 text-sm text-zinc-100 placeholder:text-zinc-500 focus:border-amber-400 focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setInPlayOnly((prev) => !prev)}
              aria-pressed={inPlayOnly}
              className={`min-h-10 rounded-lg border px-4 py-2 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-amber-400 ${
                inPlayOnly
                  ? 'border-amber-400 bg-amber-400/15 text-amber-300'
                  : 'border-white/10 bg-[#11151E] text-zinc-300 hover:bg-white/5'
              }`}
            >
              {inPlayOnly ? 'Showing In-Play Only' : 'Filter: In-Play Only'}
            </button>
            <span className="font-mono-tabular text-xs text-zinc-400 whitespace-nowrap">
              {filteredMatches.length} {filteredMatches.length === 1 ? 'Market' : 'Markets'}
            </span>
          </div>
        </div>

        {/* Main 2-column Exchange Board + Demo Slip */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-start">
          {/* Odds Table */}
          <div className="lg:col-span-8">
            <div className="overflow-hidden rounded-xl border border-white/10 bg-[#11151E]">
              <div className="hidden grid-cols-12 items-center border-b border-white/10 bg-[#151A25] px-5 py-3 text-xs font-medium text-zinc-400 sm:grid">
                <div className="col-span-6">Match &amp; Market Volume</div>
                <div className="col-span-3 text-center">Back (Win)</div>
                <div className="col-span-3 text-center">Lay (Against)</div>
              </div>

              {filteredMatches.length === 0 ? (
                <div className="px-6 py-14 text-center">
                  <p className="text-sm font-medium text-zinc-200">
                    No {activeSport.toLowerCase()} markets match your current filter.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery('');
                      setInPlayOnly(false);
                    }}
                    className="mt-4 inline-flex min-h-10 items-center rounded-lg border border-white/15 px-4 py-2 text-xs font-semibold text-zinc-200 transition-colors hover:bg-white/5 cursor-pointer"
                  >
                    Reset Filters
                  </button>
                </div>
              ) : (
                <div className="divide-y divide-white/10">
                  {filteredMatches.map((match) => (
                    <div key={match.id} className="p-4 sm:p-5">
                      <div className="mb-3 flex flex-wrap items-center justify-between gap-2 text-xs text-zinc-400">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-medium text-zinc-200">{match.tournament}</span>
                          <span aria-hidden="true">·</span>
                          <span className={match.isInPlay ? 'font-medium text-amber-400' : ''}>
                            {match.statusLabel}
                          </span>
                          {match.scoreSummary && (
                            <>
                              <span aria-hidden="true">·</span>
                              <span className="font-mono-tabular text-zinc-300">
                                {match.scoreSummary}
                              </span>
                            </>
                          )}
                        </div>
                        <span className="font-mono-tabular text-zinc-400">
                          Matched {match.matchedVolume}
                        </span>
                      </div>

                      <div className="space-y-2">
                        {match.runners.map((runner) => {
                          const isBackSelected =
                            selectedSlip.matchId === match.id &&
                            selectedSlip.runnerName === runner.name &&
                            selectedSlip.side === 'Back';
                          const isLaySelected =
                            selectedSlip.matchId === match.id &&
                            selectedSlip.runnerName === runner.name &&
                            selectedSlip.side === 'Lay';

                          return (
                            <div
                              key={runner.name}
                              className="grid grid-cols-1 items-center gap-2 sm:grid-cols-12 sm:gap-3"
                            >
                              <div className="sm:col-span-6">
                                <p className="text-sm font-semibold text-white">{runner.name}</p>
                              </div>

                              <div className="grid grid-cols-2 gap-2 sm:col-span-6">
                                <button
                                  type="button"
                                  onClick={() =>
                                    handleSelectOdds(match, runner.name, 'Back', runner.backOdds)
                                  }
                                  className={`flex min-h-11 flex-col items-center justify-center rounded-lg border px-3 py-1.5 transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-amber-400 ${
                                    isBackSelected
                                      ? 'border-sky-400 bg-sky-500/25 text-white'
                                      : 'border-sky-500/25 bg-sky-500/10 text-sky-100 hover:bg-sky-500/20'
                                  }`}
                                >
                                  <span className="font-mono-tabular text-sm font-semibold">
                                    {runner.backOdds.toFixed(2)}
                                  </span>
                                  <span className="font-mono-tabular text-[11px] text-sky-300/90">
                                    Back · {runner.backLiquidity}
                                  </span>
                                </button>

                                <button
                                  type="button"
                                  onClick={() =>
                                    handleSelectOdds(match, runner.name, 'Lay', runner.layOdds)
                                  }
                                  className={`flex min-h-11 flex-col items-center justify-center rounded-lg border px-3 py-1.5 transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-amber-400 ${
                                    isLaySelected
                                      ? 'border-rose-400 bg-rose-500/25 text-white'
                                      : 'border-rose-500/25 bg-rose-500/10 text-rose-100 hover:bg-rose-500/20'
                                  }`}
                                >
                                  <span className="font-mono-tabular text-sm font-semibold">
                                    {runner.layOdds.toFixed(2)}
                                  </span>
                                  <span className="font-mono-tabular text-[11px] text-rose-300/90">
                                    Lay · {runner.layLiquidity}
                                  </span>
                                </button>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Interactive Demo Exchange Slip */}
          <aside className="lg:col-span-4">
            <div className="rounded-xl border border-white/10 bg-[#11151E] p-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-3.5">
                <h3 className="font-display text-lg font-semibold tracking-tight text-white">
                  Demo Exchange Slip
                </h3>
                <span className="text-xs font-medium text-zinc-400">Preview Mode</span>
              </div>

              <div className="mt-4 space-y-4">
                <div>
                  <p className="text-xs text-zinc-400">{selectedSlip.tournament}</p>
                  <p className="mt-0.5 text-sm font-semibold text-white">
                    {selectedSlip.matchTitle}
                  </p>
                  <div className="mt-2 flex items-center justify-between text-xs">
                    <span className="text-zinc-300">
                      Selection:{' '}
                      <strong className="font-semibold text-white">
                        {selectedSlip.runnerName}
                      </strong>
                    </span>
                    <span
                      className={`font-mono-tabular font-semibold ${
                        selectedSlip.side === 'Back' ? 'text-sky-300' : 'text-rose-300'
                      }`}
                    >
                      {selectedSlip.side} @ {selectedSlip.odds.toFixed(2)}
                    </span>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="demo-stake-input"
                    className="block text-xs font-medium text-zinc-300"
                  >
                    Demo Stake (INR)
                  </label>
                  <input
                    id="demo-stake-input"
                    type="number"
                    min={100}
                    step={100}
                    value={stakeInput}
                    onChange={(e) => {
                      setStakeInput(e.target.value);
                      setSlipNotice('');
                    }}
                    className="font-mono-tabular mt-1.5 min-h-10 w-full rounded-lg border border-white/15 bg-[#090B10] px-3.5 py-2 text-sm text-white focus:border-amber-400 focus:outline-none"
                  />

                  <div className="mt-2 grid grid-cols-4 gap-1.5">
                    {STAKE_PRESETS.map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => {
                          setStakeInput(String(amount));
                          setSlipNotice('');
                        }}
                        className="font-mono-tabular min-h-9 rounded-md border border-white/10 bg-[#171C28] px-2 py-1 text-xs font-medium text-zinc-200 transition-colors hover:border-amber-400/50 hover:text-white cursor-pointer"
                      >
                        ₹{amount.toLocaleString('en-IN')}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 border-t border-white/10 pt-3.5 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">Projected Profit</span>
                    <span className="font-mono-tabular font-semibold text-emerald-400">
                      +₹{projectedProfit.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">
                      {selectedSlip.side === 'Back' ? 'Stake Risk' : 'Lay Liability'}
                    </span>
                    <span className="font-mono-tabular font-semibold text-zinc-200">
                      ₹{liability.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                {slipNotice && (
                  <p className="flex items-center gap-2 text-xs text-amber-300" role="status">
                    <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>{slipNotice}</span>
                  </p>
                )}

                <div className="flex flex-col gap-2.5 pt-1">
                  <button
                    type="button"
                    onClick={handleSimulateSlip}
                    className="min-h-11 w-full rounded-lg border border-white/15 bg-[#181E2B] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 cursor-pointer focus-visible:outline-2 focus-visible:outline-amber-400"
                  >
                    Record Demo Slip
                  </button>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-amber-400 px-4 py-2.5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-amber-300 focus-visible:outline-2 focus-visible:outline-amber-400"
                  >
                    <span>Get Live Exchange ID on WhatsApp</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>

                {placedSlips.length > 0 && (
                  <div className="border-t border-white/10 pt-4">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-xs font-medium text-zinc-400">Recent Demo Slips</span>
                      <button
                        type="button"
                        onClick={() => setPlacedSlips([])}
                        className="inline-flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-200 cursor-pointer"
                      >
                        <Trash2 className="h-3.5 w-3.5" aria-hidden="true" />
                        Clear
                      </button>
                    </div>
                    <div className="space-y-2">
                      {placedSlips.map((slip) => (
                        <div
                          key={slip.id}
                          className="flex items-center justify-between border-t border-white/5 pt-2 text-xs"
                        >
                          <div className="min-w-0 pr-2">
                            <p className="truncate font-medium text-zinc-200">
                              {slip.runnerName} ({slip.side} {slip.odds.toFixed(2)})
                            </p>
                            <p className="font-mono-tabular text-[11px] text-zinc-500">
                              {slip.id} · {slip.timestamp}
                            </p>
                          </div>
                          <div className="text-right font-mono-tabular shrink-0">
                            <p className="text-emerald-400">
                              +₹{slip.projectedProfit.toLocaleString('en-IN')}
                            </p>
                            <p className="text-[11px] text-zinc-400">
                              Stake ₹{slip.stake.toLocaleString('en-IN')}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
