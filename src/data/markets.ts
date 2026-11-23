export type SportCategory = 'Cricket' | 'Football' | 'Tennis' | 'Kabaddi';

export interface MarketRunner {
  name: string;
  backOdds: number;
  backLiquidity: string;
  layOdds: number;
  layLiquidity: string;
}

export interface ExchangeMatch {
  id: string;
  sport: SportCategory;
  tournament: string;
  title: string;
  statusLabel: string;
  isInPlay: boolean;
  startTime: string;
  scoreSummary?: string;
  matchedVolume: string;
  runners: [MarketRunner, MarketRunner];
}

export const HERO_IMAGE_PATH = '/src/assets/images/hero_cricket_stadium_1795404781501.jpg';

export const EXCHANGE_MATCHES: ExchangeMatch[] = [
  {
    id: 'crk-1',
    sport: 'Cricket',
    tournament: 'International T20 Series',
    title: 'India vs Australia',
    statusLabel: 'In-Play · 2nd Innings',
    isInPlay: true,
    startTime: '14.3 Overs',
    scoreSummary: 'IND 138/3 · Need 44 off 33',
    matchedVolume: '₹14.82 Cr',
    runners: [
      {
        name: 'India',
        backOdds: 1.48,
        backLiquidity: '₹42.5L',
        layOdds: 1.50,
        layLiquidity: '₹38.1L',
      },
      {
        name: 'Australia',
        backOdds: 3.00,
        backLiquidity: '₹19.4L',
        layOdds: 3.08,
        layLiquidity: '₹21.0L',
      },
    ],
  },
  {
    id: 'crk-2',
    sport: 'Cricket',
    tournament: 'Premier T20 League',
    title: 'Mumbai Strikers vs Chennai Royals',
    statusLabel: 'In-Play · 1st Innings',
    isInPlay: true,
    startTime: '09.2 Overs',
    scoreSummary: 'MUM 82/2 · RR 8.79',
    matchedVolume: '₹9.46 Cr',
    runners: [
      {
        name: 'Mumbai Strikers',
        backOdds: 1.84,
        backLiquidity: '₹28.2L',
        layOdds: 1.86,
        layLiquidity: '₹31.4L',
      },
      {
        name: 'Chennai Royals',
        backOdds: 2.16,
        backLiquidity: '₹24.8L',
        layOdds: 2.18,
        layLiquidity: '₹22.9L',
      },
    ],
  },
  {
    id: 'crk-3',
    sport: 'Cricket',
    tournament: 'Big Bash Championship',
    title: 'Sydney Sixers vs Melbourne Stars',
    statusLabel: 'Upcoming · 19:30 IST',
    isInPlay: false,
    startTime: '19:30 IST',
    matchedVolume: '₹3.15 Cr',
    runners: [
      {
        name: 'Sydney Sixers',
        backOdds: 1.72,
        backLiquidity: '₹15.6L',
        layOdds: 1.75,
        layLiquidity: '₹14.2L',
      },
      {
        name: 'Melbourne Stars',
        backOdds: 2.34,
        backLiquidity: '₹11.8L',
        layOdds: 2.38,
        layLiquidity: '₹10.4L',
      },
    ],
  },
  {
    id: 'crk-4',
    sport: 'Cricket',
    tournament: 'Test Championship',
    title: 'England vs South Africa',
    statusLabel: 'In-Play · Day 3 Session 2',
    isInPlay: true,
    startTime: 'Session 2',
    scoreSummary: 'ENG 312/6 · Lead by 74',
    matchedVolume: '₹6.04 Cr',
    runners: [
      {
        name: 'England',
        backOdds: 1.62,
        backLiquidity: '₹18.9L',
        layOdds: 1.65,
        layLiquidity: '₹17.3L',
      },
      {
        name: 'South Africa',
        backOdds: 2.60,
        backLiquidity: '₹13.1L',
        layOdds: 2.66,
        layLiquidity: '₹12.5L',
      },
    ],
  },
  {
    id: 'ftb-1',
    sport: 'Football',
    tournament: 'English Premier League',
    title: 'Arsenal vs Manchester City',
    statusLabel: 'In-Play · 64 min',
    isInPlay: true,
    startTime: "64'",
    scoreSummary: 'ARS 1 - 1 MCI',
    matchedVolume: '₹8.74 Cr',
    runners: [
      {
        name: 'Arsenal',
        backOdds: 2.42,
        backLiquidity: '₹26.0L',
        layOdds: 2.46,
        layLiquidity: '₹24.1L',
      },
      {
        name: 'Manchester City',
        backOdds: 2.68,
        backLiquidity: '₹22.5L',
        layOdds: 2.74,
        layLiquidity: '₹20.8L',
      },
    ],
  },
  {
    id: 'ftb-2',
    sport: 'Football',
    tournament: 'European Cup Nights',
    title: 'Real Madrid vs Bayern Munich',
    statusLabel: 'Upcoming · 00:30 IST',
    isInPlay: false,
    startTime: '00:30 IST',
    matchedVolume: '₹5.32 Cr',
    runners: [
      {
        name: 'Real Madrid',
        backOdds: 2.04,
        backLiquidity: '₹19.2L',
        layOdds: 2.08,
        layLiquidity: '₹18.7L',
      },
      {
        name: 'Bayern Munich',
        backOdds: 3.45,
        backLiquidity: '₹12.9L',
        layOdds: 3.55,
        layLiquidity: '₹11.6L',
      },
    ],
  },
  {
    id: 'tns-1',
    sport: 'Tennis',
    tournament: 'ATP Masters 1000',
    title: 'C. Alcaraz vs J. Sinner',
    statusLabel: 'In-Play · Set 2',
    isInPlay: true,
    startTime: 'Set 2 (4-3)',
    scoreSummary: '6-4, 4-3 · Alcaraz Serving',
    matchedVolume: '₹4.18 Cr',
    runners: [
      {
        name: 'C. Alcaraz',
        backOdds: 1.56,
        backLiquidity: '₹16.4L',
        layOdds: 1.59,
        layLiquidity: '₹15.2L',
      },
      {
        name: 'J. Sinner',
        backOdds: 2.72,
        backLiquidity: '₹12.1L',
        layOdds: 2.78,
        layLiquidity: '₹11.5L',
      },
    ],
  },
  {
    id: 'tns-2',
    sport: 'Tennis',
    tournament: 'WTA Premier Open',
    title: 'I. Swiatek vs A. Sabalenka',
    statusLabel: 'Upcoming · 21:00 IST',
    isInPlay: false,
    startTime: '21:00 IST',
    matchedVolume: '₹1.95 Cr',
    runners: [
      {
        name: 'I. Swiatek',
        backOdds: 1.90,
        backLiquidity: '₹9.8L',
        layOdds: 1.94,
        layLiquidity: '₹9.1L',
      },
      {
        name: 'A. Sabalenka',
        backOdds: 2.06,
        backLiquidity: '₹8.9L',
        layOdds: 2.10,
        layLiquidity: '₹8.4L',
      },
    ],
  },
  {
    id: 'kbd-1',
    sport: 'Kabaddi',
    tournament: 'Pro Kabaddi League',
    title: 'Patna Pirates vs Puneri Paltan',
    statusLabel: 'In-Play · 2nd Half',
    isInPlay: true,
    startTime: '31 min',
    scoreSummary: 'PAT 28 - 25 PUN',
    matchedVolume: '₹2.64 Cr',
    runners: [
      {
        name: 'Patna Pirates',
        backOdds: 1.68,
        backLiquidity: '₹11.4L',
        layOdds: 1.72,
        layLiquidity: '₹10.2L',
      },
      {
        name: 'Puneri Paltan',
        backOdds: 2.40,
        backLiquidity: '₹9.5L',
        layOdds: 2.46,
        layLiquidity: '₹8.7L',
      },
    ],
  },
];

export type GameCategoryFilter =
  | 'All Games'
  | 'Sportsbook'
  | 'Indian Cards'
  | 'Live Studio'
  | 'Instant Arcade';

export interface ArenaGame {
  id: string;
  filterGroup: Exclude<GameCategoryFilter, 'All Games'>;
  category: string;
  tableCount: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  verticalValue: string;
  featured?: boolean;
}

export const ARENA_GAMES: ArenaGame[] = [
  {
    id: 'arena-exchange',
    filterGroup: 'Sportsbook',
    category: 'Sportsbook Exchange',
    tableCount: '30+ Sports · Ball-by-Ball Markets',
    title: 'Live Cricket & Global Sports Exchange',
    description:
      'Back and lay match winners, session runs, fancy lines, and over-by-over odds across T20 leagues, Test matches, Premier League football, and Grand Slam tennis.',
    imageSrc: '/src/assets/images/hero_cricket_stadium_1795404781501.jpg',
    imageAlt: 'Night-time international cricket stadium illuminated by floodlights',
    verticalValue: 'Cricket Exchange ID',
    featured: true,
  },
  {
    id: 'arena-cards',
    filterGroup: 'Indian Cards',
    category: 'Live Indian Tables',
    tableCount: '18 Live Rooms · 24/7 Dealers',
    title: 'Teen Patti, Andar Bahar & Dragon Tiger',
    description:
      'Classic South Asian card rooms hosted by live studio dealers with fast round settlement and transparent table limits.',
    imageSrc: '/src/assets/images/game_card_tables_1795404782533.jpg',
    imageAlt: 'Dark luxury card table with black and gold playing cards and stacked chips',
    verticalValue: 'Live Card Tables ID',
  },
  {
    id: 'arena-lucky7',
    filterGroup: 'Indian Cards',
    category: 'Indian Card Classics',
    tableCount: '14 Live Tables · 20-Sec Rounds',
    title: 'Lucky 7, 32 Cards & Amar Akbar Anthony',
    description:
      'High-tempo Indian dealer rooms featuring Lucky 7 High-Low, 32 Cards A/B, and classic single-card studio tables.',
    imageSrc: '/src/assets/images/game_lucky_cards_1795408600247.jpg',
    imageAlt: 'Black and gold seven of spades card beside brushed brass dice on dark charcoal felt',
    verticalValue: 'Indian Cards ID',
  },
  {
    id: 'arena-roulette',
    filterGroup: 'Live Studio',
    category: 'VIP Studio Lounge',
    tableCount: '24 Tables · HD Stream',
    title: 'European Roulette & Live Blackjack',
    description:
      'Low-latency multi-camera roulette wheels, lightning multipliers, and classic blackjack tables operating round the clock.',
    imageSrc: '/src/assets/images/game_live_roulette_1795404781768.jpg',
    imageAlt: 'Handcrafted mahogany and brushed brass roulette wheel in a dark VIP lounge',
    verticalValue: 'Live Studio ID',
  },
  {
    id: 'arena-aviator',
    filterGroup: 'Instant Arcade',
    category: 'Instant Arcade',
    tableCount: 'Fast Rounds · Transparent Logs',
    title: 'Aviator Multiplier & Crash Arena',
    description:
      'High-tempo multiplier flight rounds with real-time manual or auto cashout controls and verifiable round history.',
    imageSrc: '/src/assets/images/game_aviator_arcade_1795404781778.jpg',
    imageAlt: 'Matte black and brushed gold stunt aircraft banking upward into twilight clouds',
    verticalValue: 'Arcade Arena ID',
  },
  {
    id: 'arena-baccarat',
    filterGroup: 'Live Studio',
    category: 'High-Limit Tables',
    tableCount: '16 VIP Rooms · No Commission',
    title: 'Speed Baccarat & Casino Hold’em Poker',
    description:
      'Fast-dealing speed baccarat shoes, squeeze tables, and live Texas Hold’em rooms designed for smooth mobile play.',
    imageSrc: '/src/assets/images/game_vip_baccarat_1795408600461.jpg',
    imageAlt: 'Dark slate VIP baccarat table with smoked glass card shoe and brushed brass chip tray',
    verticalValue: 'VIP Tables ID',
  },
  {
    id: 'arena-mines',
    filterGroup: 'Instant Arcade',
    category: 'Instant Grid Games',
    tableCount: 'Instant Payouts · Custom Risk',
    title: 'Mines, Plinko & Dice Turbo',
    description:
      'Choose your mine count or multiplier curve and uncover golden gems across instant, provably fair grid rounds.',
    imageSrc: '/src/assets/images/game_mines_arcade_1795408600294.jpg',
    imageAlt: 'Isometric dark obsidian tile grid with a glowing faceted golden gemstone',
    verticalValue: 'Instant Games ID',
  },
  {
    id: 'arena-wheel',
    filterGroup: 'Live Studio',
    category: 'Live Game Shows',
    tableCount: '12 Broadcast Rooms · Bonus Multipliers',
    title: 'Crazy Wheel, Mega Ball & Monopoly Live',
    description:
      'Interactive studio wheel shows hosted live with multiplier bonus segments, rapid spins, and vibrant HD broadcasts.',
    imageSrc: '/src/assets/images/game_money_wheel_1795408599874.jpg',
    imageAlt: 'Handcrafted walnut and brushed brass fortune wheel illuminated in a dark broadcast studio',
    verticalValue: 'Live Shows ID',
  },
  {
    id: 'arena-virtual-cricket',
    filterGroup: 'Sportsbook',
    category: '24/7 Virtual Sports',
    tableCount: 'Every 3 Min · Non-Stop Fixtures',
    title: 'Virtual Cricket League & E-Sports',
    description:
      'Simulated T10 cricket clashes, virtual football leagues, and competitive e-sports tournaments running non-stop day and night.',
    imageSrc: '/src/assets/images/game_virtual_cricket_1795408600289.jpg',
    imageAlt: 'Polished crimson leather cricket ball resting on a white crease line under night floodlights',
    verticalValue: 'Virtual Sports ID',
  },
  {
    id: 'arena-racing',
    filterGroup: 'Sportsbook',
    category: 'Global Track Markets',
    tableCount: 'UK, AUS & IND Meets · Win & Place',
    title: 'Horse & Greyhound Racing Exchange',
    description:
      'Live Back and Lay win, place, and forecast markets covering premier international thoroughbred and greyhound racecards.',
    imageSrc: '/src/assets/images/game_horse_racing_1795408600032.jpg',
    imageAlt: 'Thoroughbred racehorses galloping down a floodlit night track through golden backlit dust',
    verticalValue: 'Racing Exchange ID',
    featured: true,
  },
];

export interface OnboardingStep {
  number: string;
  title: string;
  detail: string;
}

export const ONBOARDING_STEPS: OnboardingStep[] = [
  {
    number: '01.',
    title: 'Select Your Preferred Vertical',
    detail:
      'Pick a dedicated Cricket Exchange ID, Live Card Tables access, or an All-in-One MahadevPro Book account.',
  },
  {
    number: '02.',
    title: 'Submit Your Mobile Details',
    detail:
      'Enter your name and active WhatsApp number through our verified onboarding form to generate a priority desk ticket.',
  },
  {
    number: '03.',
    title: 'Verify & Receive Login Credentials',
    detail:
      'Our 24/7 onboarding desk confirms 18+ eligibility and activates your unique MahadevPro Book username within 5 minutes.',
  },
  {
    number: '04.',
    title: 'Access Markets & 24/7 Desk Support',
    detail:
      'Sign in from mobile or desktop, preview demo markets first if preferred, and reach support anytime for account assistance.',
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'What is MahadevPro Book and how do I get an official ID?',
    answer:
      'MahadevPro Book is an online cricket exchange and live gaming showcase platform. Click "Get Instant ID" and submit your name, WhatsApp number, and preferred vertical. Our 24/7 onboarding desk generates a priority ticket and delivers login credentials typically within 5 minutes.',
  },
  {
    question: 'Can I preview the exchange using a Demo ID first?',
    answer:
      'Yes. You can test the interactive Demo Slip directly inside the Live Exchange board on this page, or select "Demo ID Preview" inside the Instant ID modal to explore the platform before activating a full member account.',
  },
  {
    question: 'Which sports and live markets are covered?',
    answer:
      'We cover 30+ global sports including International Cricket, IPL and T20 franchise leagues, Test series, English Premier League and European Football, ATP/WTA Tennis, and Pro Kabaddi, alongside live card rooms and arcade arenas.',
  },
  {
    question: 'How fast are account support and settlement desks?',
    answer:
      'Our support desk operates 24 hours a day, 7 days a week via WhatsApp and Telegram. Standard UPI, IMPS, and bank transfer support requests are handled promptly with clear reference tracking.',
  },
  {
    question: 'Does MahadevPro Book work smoothly on mobile browsers?',
    answer:
      'Yes. The entire MahadevPro Book exchange interface, odds slip calculator, and live table directory are built for fast mobile and desktop browsers with zero mandatory app downloads.',
  },
  {
    question: 'What are the age and responsible gaming guidelines?',
    answer:
      'MahadevPro Book is strictly restricted to individuals aged 18 years and older in jurisdictions where online sports and skill gaming platforms are permitted. Always play responsibly and within personal limits.',
  },
];
