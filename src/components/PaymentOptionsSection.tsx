import { getWhatsAppUrl } from '../utils/whatsapp';

export function PaymentOptionsSection() {
  const whatsappHref = getWhatsAppUrl();

  return (
    <section id="payments" className="border-t border-white/10 py-14 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Deposit and withdrawal options — ask our WhatsApp team"
          className="group block rounded-2xl border border-amber-500/45 bg-[#040507] px-5 py-8 shadow-[0_0_28px_rgba(245,158,11,0.16)] transition-colors duration-200 hover:border-amber-400/80 sm:px-8 sm:py-10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400"
        >
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-amber-400 sm:text-3xl">
              Deposit and withdrawal options
            </h2>
            <p className="mt-3.5 text-sm leading-relaxed text-zinc-100 sm:text-base">
              Ask our WhatsApp team for the current payment methods, limits and processing times
              before making a deposit or requesting a withdrawal.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-5 lg:justify-between lg:gap-x-4">
            {/* 1. Bank Deposit */}
            <div className="flex items-center gap-2 shrink-0">
              <svg
                width="34"
                height="32"
                viewBox="0 0 36 34"
                fill="none"
                aria-hidden="true"
                className="shrink-0"
              >
                <path d="M4 13L16 6L28 13H4Z" fill="#FFFFFF" />
                <rect x="6" y="15" width="3" height="10" fill="#FFFFFF" />
                <rect x="11.5" y="15" width="3" height="10" fill="#FFFFFF" />
                <rect x="17" y="15" width="3" height="10" fill="#FFFFFF" />
                <rect x="22.5" y="15" width="3" height="10" fill="#FFFFFF" />
                <rect x="4" y="26" width="24" height="3.5" rx="1" fill="#FFFFFF" />
                <circle cx="27" cy="9.5" r="7" fill="#F59E0B" stroke="#040507" strokeWidth="1.5" />
                <circle
                  cx="27"
                  cy="9.5"
                  r="4.5"
                  stroke="#FEF3C7"
                  strokeWidth="1"
                  strokeDasharray="1.5 1.5"
                />
              </svg>
              <div className="leading-[1.05] text-left">
                <span className="block text-[13px] font-extrabold tracking-tight text-emerald-500">
                  BANK
                </span>
                <span className="block text-[13px] font-extrabold tracking-tight text-emerald-500">
                  DEPOSIT
                </span>
              </div>
            </div>

            {/* 2. RUPEE-O */}
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-purple-700 text-sm font-bold text-white">
                ₹
              </span>
              <span className="text-xs font-bold tracking-wider text-zinc-100">RUPEE-O</span>
            </div>

            {/* 3. UPI */}
            <div className="flex flex-col items-start shrink-0">
              <div className="flex items-center gap-0.5">
                <span className="text-xl font-black italic tracking-tight text-white leading-none">
                  UPI
                </span>
                <svg width="16" height="18" viewBox="0 0 18 20" fill="none" aria-hidden="true">
                  <path d="M3 2L11 10L3 18H7L15 10L7 2H3Z" fill="#F97316" />
                  <path d="M8 2L16 10L8 18H11L18 10L11 2H8Z" fill="#22C55E" />
                </svg>
              </div>
              <span className="mt-0.5 text-[7px] font-semibold tracking-wider text-zinc-400">
                UNIFIED PAYMENTS INTERFACE
              </span>
            </div>

            {/* 4. PhonePe */}
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#5F259F] text-sm font-bold text-white">
                पे
              </span>
              <span className="text-base font-bold tracking-tight text-[#8B5CF6]">PhonePe</span>
            </div>

            {/* 5. Paytm */}
            <div className="flex items-baseline shrink-0">
              <span className="text-xl font-black tracking-tight text-[#1E3A8A]">Pay</span>
              <span className="text-xl font-black tracking-tight text-[#00BAF2]">tm</span>
            </div>

            {/* 6. IMPS */}
            <div className="flex flex-col items-start shrink-0">
              <div className="flex items-center gap-0.5">
                <span className="text-lg font-extrabold italic tracking-tight text-white leading-none">
                  IMPS
                </span>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M2 2L8 8L2 14H5L11 8L5 2H2Z" fill="#E4E4E7" />
                  <path d="M7 2L13 8L7 14H10L16 8L10 2H7Z" fill="#A1A1AA" />
                </svg>
              </div>
              <span className="mt-0.5 text-[6.5px] font-semibold tracking-wider text-zinc-400">
                IMMEDIATE PAYMENT SERVICE
              </span>
            </div>

            {/* 7. freecharge */}
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#E37048] text-xs font-black italic text-white">
                f
              </span>
              <span className="text-sm font-bold italic tracking-tight text-[#E37048]">
                freecharge
              </span>
            </div>

            {/* 8. G Pay */}
            <div className="flex items-center gap-1.5 shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="#4285F4"
                  d="M23.49 12.27c0-.79-.07-1.54-.2-2.27H12v4.3h6.45a5.52 5.52 0 0 1-2.39 3.62v3h3.87c2.26-2.08 3.56-5.15 3.56-8.65z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.07 7.93-2.9l-3.87-3a7.17 7.17 0 0 1-10.67-3.76H1.4v3.09A12 12 0 0 0 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.39 14.34a7.2 7.2 0 0 1 0-4.68V6.57H1.4a12 12 0 0 0 0 10.86l3.99-3.09z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.77c1.76 0 3.34.61 4.58 1.8l3.44-3.44C17.95 1.19 15.24 0 12 0A12 12 0 0 0 1.4 6.57l3.99 3.09A7.16 7.16 0 0 1 12 4.77z"
                />
              </svg>
              <span className="text-lg font-medium tracking-tight text-zinc-100">Pay</span>
            </div>

            {/* 9. airtel Payments Bank */}
            <div className="flex items-center gap-1.5 shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M4.5 14.5C6.5 9.5 13 6.5 18 8.5C21 9.7 21.5 13.5 18.5 15.5C15.5 17.5 11.5 15.5 12 12.5C12.3 10.7 14.8 10.2 16 11.5"
                  stroke="#EF4444"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
              </svg>
              <span className="text-base font-bold tracking-tight text-[#EF4444]">airtel</span>
              <div className="leading-[1.05] text-left text-[8px] font-semibold text-[#EF4444]/90">
                <span className="block">Payments</span>
                <span className="block">Bank</span>
              </div>
            </div>

            {/* 10. Bitcoin */}
            <div className="shrink-0" title="Bitcoin">
              <svg width="36" height="36" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                <circle cx="20" cy="20" r="17.5" stroke="#F59E0B" strokeWidth="2.2" />
                <circle cx="20" cy="20" r="13.5" fill="#F59E0B" />
                <text
                  x="20"
                  y="25.5"
                  textAnchor="middle"
                  fill="#040507"
                  fontSize="17"
                  fontWeight="800"
                  fontFamily="sans-serif"
                >
                  ₿
                </text>
              </svg>
            </div>

            {/* 11. Tether USDT */}
            <div className="shrink-0" title="USDT">
              <svg width="36" height="34" viewBox="0 0 40 36" fill="none" aria-hidden="true">
                <path d="M8 2H32L39 14L20 34L1 14L8 2Z" fill="#50AF95" />
                <path d="M12 9H28V12.5H22V25H18V12.5H12V9Z" fill="#FFFFFF" />
                <ellipse
                  cx="20"
                  cy="16.5"
                  rx="9.5"
                  ry="2.5"
                  stroke="#FFFFFF"
                  strokeWidth="1.6"
                  fill="none"
                />
              </svg>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
