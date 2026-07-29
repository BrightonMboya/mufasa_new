/* Single source of truth for site content.
   Swap image URLs here — every section reads from this file.
   NOTE: photographic images are Unsplash placeholders. Some may not be
   Tanzanian in origin; replace with licensed, location-verified shots
   before launch. Brand logo/favicons are the real King Mufasa assets. */

export const site = {
  name: 'King Mufasa Expeditions',
  shortName: 'King Mufasa',
  tagline: 'The Value of Experience',
  region: 'Tanzania',
  phone: '+255 624 036 021',
  email: 'info@kingmufasaexpeditions.com',
  address: ['Sokoine Road, Arusha', 'United Republic of Tanzania'],
  logo: '/brand/logo.png',
};

/* Top-level nav, trimmed: Home lives on the logo; Safaris/Destinations/
   Zanzibar collapse into one "Safaris" entry (the journeys grid spans all). */
export const nav = [
  { label: 'Safaris', href: '/#journeys' },
  { label: 'Trekking', href: '/trekking' },
  { label: 'About Us', href: '/about' },
];

/* Web3Forms submission (https://web3forms.com). Free, no backend: the browser
   POSTs the fields and Web3Forms emails them to the inbox this key is registered
   with — info@kingmufasaexpeditions.com. The key is not a secret (it ships in
   the page and only permits submitting to that inbox). Reused from the earlier
   King Mufasa landing page. The Trip Planner uses this to email each enquiry. */
export const forms = {
  web3formsKey: '8ecfc2c4-197c-4a99-bdf7-31f5154766d2',
  endpoint: 'https://api.web3forms.com/submit',
};

export const hero = {
  // Elephant family crossing a dusty plain (muted autoplay loop).
  // Source: Pexels (license: free, no attribution). Compressed to ~2.2MB.
  video: '/media/hero-elephants.mp4',
  poster: '/media/hero-elephants.jpg',
  title: 'The Plain Remembers',
  subtitle:
    'Set off on remarkable, deeply personal journeys through Tanzania, planned by the guides who walk them.',
};

export const statement = {
  lead: 'A guide who has read the same valley for twenty years will show you things a map cannot hold.',
  body: "Our nine guides were all born within a day's drive of the parks they work in. Between them they hold sixty-one years in the field, four languages of the north, and a standing argument about where the cats will be in March. We pay them through the closed season so they never have to leave.",
};

export const journeyFilters = [
  'All',
  'Northern Circuit',
  'Southern Wild',
  'Coast & Islands',
  'Walking',
];

/* Each journey has a slug -> /journeys/{slug}, plus the data its
   detail page renders (day-by-day, inclusions, gallery). */
export const journeys = [
  {
    slug: 'north-to-sea',
    meta: 'Northern Circuit · 14 Nights',
    category: 'Northern Circuit',
    title: 'North to Sea',
    nights: 14,
    season: 'Jun — Oct',
    priceFrom: '$8,900',
    image:
      'https://images.unsplash.com/photo-1521651201144-634f700b36ef?w=1600&q=80&auto=format&fit=crop',
    summary:
      'The whole arc of the north in one unhurried line — from the coffee farms below Meru, through baobab country and the crater, into the deep Serengeti, and out to the reef. Fourteen nights, five grounds, one guide the whole way.',
    days: [
      { days: 'Day 01 — 02', place: 'Arusha', nights: 1, note: 'Arrive and sleep off the flight on a coffee farm below Mount Meru. An easy first walk, a briefing with your guide, and an early night.', optional: false },
      { days: 'Day 03 — 05', place: 'Tarangire', nights: 2, note: 'Baobab country, and the largest elephant families in the north. Long slow game drives along the river, and a night walk with the camp rangers.', optional: false },
      { days: 'Day 06 — 07', place: 'Ngorongoro', nights: 2, note: 'Two nights on the crater rim at Olduvai Ridge. Descend at first light while the floor is still cold and the lion are still moving.', optional: false },
      { days: 'Day 08 — 12', place: 'Serengeti', nights: 5, note: 'Five unhurried nights following the herds wherever they have moved to. Your guide reads the grass; the route changes daily. Balloon at dawn on request.', optional: false },
      { days: 'Day 13 — 14', place: 'Zanzibar', nights: 2, note: 'Optional. Fly to the coast for reef, a dhow at sunset, and nothing whatsoever on the schedule. The plain lets you go slowly.', optional: true },
    ],
    included: [
      'A single private guide for the full route',
      'All park and conservation fees',
      'Internal flights (Arusha–Serengeti–Zanzibar)',
      'Full board at all camps, house drinks',
      'Private 4×4 with pop-up roof and charging',
    ],
    excluded: [
      'International flights to Kilimanjaro (JRO)',
      'Tanzania visa and travel insurance',
      'Balloon safari and spa treatments',
      'Gratuities for guide and camp staff',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1616128417743-c3a6992a65e7?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1634646350436-e1448c1d4f63?w=1200&q=80&auto=format&fit=crop',
    ],
  },
  {
    slug: 'the-quiet-south',
    meta: 'Southern Wild · 9 Nights',
    category: 'Southern Wild',
    title: 'The Quiet South',
    nights: 9,
    season: 'Jun — Nov',
    priceFrom: '$6,400',
    image:
      'https://images.unsplash.com/photo-1504173010664-32509aeebb62?w=1600&q=80&auto=format&fit=crop',
    summary:
      'Ruaha and the Selous, where you can drive for an afternoon and meet no one. The least-visited great parks in Tanzania, and the ones our guides argue about most. Nine nights for travellers who have done the north and want the wild back.',
    days: [
      { days: 'Day 01', place: 'Dar es Salaam', nights: 1, note: 'Arrive on the coast and overnight before the light aircraft south. A quiet garden hotel, an early start.', optional: false },
      { days: 'Day 02 — 05', place: 'Ruaha', nights: 4, note: 'Four nights at Mwagusi Sand, built into a dry riverbank where elephant dig for water metres from the deck. Walking safaris every morning.', optional: false },
      { days: 'Day 06 — 09', place: 'Nyerere / Selous', nights: 4, note: 'Boat safaris on the Rufiji, fly-camping on a sandbank, and the highest density of wild dog left in the country.', optional: false },
    ],
    included: [
      'A single private guide for the full route',
      'All park and conservation fees',
      'Light-aircraft transfers throughout',
      'Full board, house drinks, walking and boat safaris',
      'One night fly-camping under canvas',
    ],
    excluded: [
      'International flights to Dar es Salaam',
      'Tanzania visa and travel insurance',
      'Gratuities for guide and camp staff',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1740830591229-10ac8838361f?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1557756006-90a218bcc7e1?w=1200&q=80&auto=format&fit=crop',
    ],
  },
  {
    slug: 'salt-and-silence',
    meta: 'Coast & Islands · 7 Nights',
    category: 'Coast & Islands',
    title: 'Salt and Silence',
    nights: 7,
    season: 'Jun — Mar',
    priceFrom: '$4,200',
    image:
      'https://images.unsplash.com/photo-1590523278191-995cbcda646b?w=1600&q=80&auto=format&fit=crop',
    summary:
      'For when the safari is over and the body wants salt water. Seven nights on the far side of Zanzibar and the Mafia channel — reef, dhow, spice, and a schedule with nothing on it.',
    days: [
      { days: 'Day 01 — 04', place: 'Zanzibar', nights: 3, note: 'A house on the north-east coast, well away from the crowds. Snorkelling the reef at slack tide, a spice walk inland, sunset dhows.', optional: false },
      { days: 'Day 05 — 07', place: 'Mafia Island', nights: 3, note: 'Swim with whale sharks in season, dive the marine park, and eat what the boats bring in. The quietest island in the country.', optional: false },
    ],
    included: [
      'All island and channel transfers',
      'Full board and house drinks',
      'Guided reef snorkelling and one spice tour',
      'Marine-park fees',
    ],
    excluded: [
      'Flights to and from Zanzibar',
      'Scuba diving and whale-shark excursions',
      'Tanzania visa and travel insurance',
      'Gratuities',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1634646350436-e1448c1d4f63?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1766603636766-1f4662469448?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1750784700372-d65667976cde?w=1200&q=80&auto=format&fit=crop',
    ],
  },
];

/* Signature experiences — the bestseller reasons people come to Tanzania.
   These lead the homepage in place of accommodation: we are a tour operator,
   so we sell the experience, not the bed. Four cards, one per bookable trip:
   the northern safari, the wild south, the coast, and the mountain. `line` is
   the single line overlaid on the photo. The grid (see Experiences.astro) lays
   these out as a four-card editorial pinwheel — two wide, two narrow. */
export const experiences = [
  {
    title: 'The Great Migration',
    line: 'Two million wildebeest on the move, and river crossings that stop your breath.',
    place: 'Serengeti',
    season: 'Jun — Oct',
    href: '/journeys/north-to-sea',
    // Wildebeest streaming down the bank into the river — the crossing itself.
    image:
      'https://images.unsplash.com/photo-1772175007897-0a4927cf4531?w=1600&q=80&auto=format&fit=crop',
  },
  {
    title: 'Big Cats & the Wild South',
    line: 'Lion, leopard and cheetah — and the wild south walked on foot, a tracker ahead.',
    place: 'Ruaha & the Selous',
    season: 'Jun — Nov',
    href: '/journeys/the-quiet-south',
    image:
      'https://images.unsplash.com/photo-1585468274952-66591eb14165?w=1200&q=80&auto=format&fit=crop',
  },
  {
    title: 'Zanzibar & the Reef',
    line: 'Salt water, a dhow at sunset, and nothing whatsoever on the schedule.',
    place: 'Zanzibar & Mafia',
    season: 'Jun — Mar',
    href: '/journeys/salt-and-silence',
    image:
      'https://images.unsplash.com/photo-1516815231560-8f41ec531527?w=1200&q=80&auto=format&fit=crop',
  },
  {
    title: 'Kilimanjaro',
    line: 'The roof of Africa, walked slowly so the mountain lets you up.',
    place: 'Kilimanjaro',
    season: 'Jan — Mar, Jun — Oct',
    href: '/trekking',
    image:
      'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1600&q=80&auto=format&fit=crop',
  },
];

/* Trekking page. Images are real, verified Kilimanjaro / Meru photos
   (source: Pexels, free / no attribution required). */
export const trekking = {
  intro: {
    eyebrow: 'Trekking',
    title: 'The mountains, walked slowly',
    heroImage:
      'https://images.pexels.com/photos/8427984/pexels-photo-8427984.jpeg?auto=compress&cs=tinysrgb&w=1600',
    lead: 'Kilimanjaro is a walk, not a climb — and the difference between a summit and a hard week is acclimatisation, guiding, and time. We route every trek long, so the mountain lets you up.',
    body: "Our mountain crews are the same year to year: lead guides with hundreds of summits, cooks who feed a camp at altitude, and porters paid and equipped to the KPAP standard. We never sell the shortest route, because the shortest route is where people fail.",
  },
  routes: [
    {
      name: 'Kilimanjaro — Lemosho',
      meta: 'Kilimanjaro · 8 Days',
      days: 8,
      priceFrom: '$4,600',
      image:
        'https://images.pexels.com/photos/35568138/pexels-photo-35568138.jpeg?auto=compress&cs=tinysrgb&w=1600',
      summary:
        'The long western approach, and the one with the highest success rate. Eight days lets you sleep low and climb high across the Shira Plateau before the summit night.',
      highlights: ['Highest success rate', 'Quietest first days', 'Best acclimatisation profile'],
    },
    {
      name: 'Kilimanjaro — Machame',
      meta: 'Kilimanjaro · 7 Days',
      days: 7,
      priceFrom: '$3,900',
      image:
        'https://images.pexels.com/photos/37808650/pexels-photo-37808650.jpeg?auto=compress&cs=tinysrgb&w=1600',
      summary:
        'The classic "Whiskey" route — steeper and more direct than Lemosho, through five climate zones from rainforest to the roof of Africa. Seven days for walkers who are fit and short on time.',
      highlights: ['Five climate zones', 'Dramatic Barranco Wall', 'Well-supported classic'],
    },
    {
      name: 'Mount Meru',
      meta: 'Arusha N.P. · 4 Days',
      days: 4,
      priceFrom: '$1,850',
      image:
        'https://images.pexels.com/photos/12738166/pexels-photo-12738166.jpeg?auto=compress&cs=tinysrgb&w=1600',
      summary:
        'A wild, quiet 4,566m volcano through Arusha National Park — walked with an armed ranger past buffalo and giraffe. The best acclimatisation there is before Kilimanjaro, and a fine trek in its own right.',
      highlights: ['Wildlife on the walk', 'Perfect Kili warm-up', 'Knife-edge summit ridge'],
    },
  ],
  included: [
    'A lead guide and full mountain crew paid to KPAP standard',
    'All park, camping, and rescue fees',
    'Quality mess tents, sleeping tents, and mattresses',
    'All meals on the mountain and a private chef',
    'Pre- and post-trek nights in Arusha',
  ],
};

/* Trip Planner — a client-side quiz (modelled on jacadatravel.com's) that
   filters the collection below by the visitor's answers. No backend: each
   item is tagged against the same option values the steps offer, and the
   /trip-planner page scores every item by how many tags overlap. Months are
   1–12; a match means the item's good-travel window includes a chosen month. */
export const planner = {
  intro: {
    eyebrow: 'Trip Planner',
    title: 'Find your Tanzania in minutes',
    body: "Tell us what you'd love from your next journey and we'll draw the trips from our collection that fit. Think of it as a starting point for the conversation — not a checkout.",
    cta: "Let's begin",
    heroImage:
      'https://images.unsplash.com/photo-1745885979468-44a855f8a5fa?w=1800&q=80&auto=format&fit=crop',
  },
  steps: [
    {
      id: 'see',
      kind: 'multi',
      title: 'What would you like to see?',
      hint: 'Select one or more',
      options: [
        { value: 'plains', label: 'The endless plains' },
        { value: 'crater', label: 'The crater highlands' },
        { value: 'south', label: 'The wild south' },
        { value: 'coast', label: 'Zanzibar & the coast' },
        { value: 'mountains', label: 'Kilimanjaro & the peaks' },
        { value: 'rivers', label: 'Rivers & lakes' },
      ],
    },
    {
      id: 'interests',
      kind: 'multi',
      title: 'What draws you?',
      hint: 'Select one or more',
      options: [
        { value: 'migration', label: 'The great migration' },
        { value: 'bigcats', label: 'Big cats & predators' },
        { value: 'walking', label: 'Walking safari' },
        { value: 'culture', label: 'Culture & community' },
        { value: 'honeymoon', label: 'Seclusion & romance' },
        { value: 'conservation', label: 'Conservation' },
        { value: 'summit', label: 'Reaching a summit' },
        { value: 'reef', label: 'Reef & ocean' },
      ],
    },
    {
      id: 'occasion',
      kind: 'single',
      title: 'Who is travelling?',
      hint: 'Select one',
      options: [
        { value: 'couple', label: 'Just the two of us' },
        { value: 'honeymoon', label: 'A honeymoon' },
        { value: 'family', label: 'With family' },
        { value: 'friends', label: 'With friends' },
        { value: 'solo', label: 'On my own' },
      ],
    },
    {
      id: 'months',
      kind: 'multi',
      title: 'When would you like to travel?',
      hint: 'Select one or more',
      skip: "I haven't decided yet",
      options: [
        { value: '1', label: 'Jan' }, { value: '2', label: 'Feb' },
        { value: '3', label: 'Mar' }, { value: '4', label: 'Apr' },
        { value: '5', label: 'May' }, { value: '6', label: 'Jun' },
        { value: '7', label: 'Jul' }, { value: '8', label: 'Aug' },
        { value: '9', label: 'Sep' }, { value: '10', label: 'Oct' },
        { value: '11', label: 'Nov' }, { value: '12', label: 'Dec' },
      ],
    },
  ],
  items: [
    {
      title: journeys[0].title,
      meta: journeys[0].meta,
      price: journeys[0].priceFrom,
      image: journeys[0].image,
      href: `/journeys/${journeys[0].slug}`,
      blurb: 'The whole arc of the north in one line — baobab country, the crater, the deep Serengeti, and out to the reef.',
      tags: {
        see: ['plains', 'crater', 'coast'],
        interests: ['migration', 'bigcats', 'honeymoon'],
        occasion: ['couple', 'honeymoon', 'friends', 'family'],
        months: [6, 7, 8, 9, 10],
      },
    },
    {
      title: journeys[1].title,
      meta: journeys[1].meta,
      price: journeys[1].priceFrom,
      image: journeys[1].image,
      href: `/journeys/${journeys[1].slug}`,
      blurb: 'Ruaha and the Selous, where you can drive an afternoon and meet no one. Walking and boat safaris, and the wild put back.',
      tags: {
        see: ['south', 'rivers'],
        interests: ['walking', 'bigcats', 'conservation'],
        occasion: ['couple', 'friends', 'solo'],
        months: [6, 7, 8, 9, 10, 11],
      },
    },
    {
      title: journeys[2].title,
      meta: journeys[2].meta,
      price: journeys[2].priceFrom,
      image: journeys[2].image,
      href: `/journeys/${journeys[2].slug}`,
      blurb: 'For when the safari is over and the body wants salt water — the far side of Zanzibar and the Mafia channel.',
      tags: {
        see: ['coast'],
        interests: ['reef', 'honeymoon'],
        occasion: ['honeymoon', 'couple', 'family'],
        months: [1, 2, 3, 6, 7, 8, 9, 10, 11, 12],
      },
    },
    {
      title: trekking.routes[0].name,
      meta: trekking.routes[0].meta,
      price: trekking.routes[0].priceFrom,
      image: trekking.routes[0].image,
      href: '/trekking',
      blurb: 'The long western approach up Kilimanjaro, and the route with the highest success rate. Eight days, sleep low and climb high.',
      tags: {
        see: ['mountains'],
        interests: ['summit', 'walking'],
        occasion: ['couple', 'friends', 'solo'],
        months: [1, 2, 3, 6, 7, 8, 9, 10],
      },
    },
    {
      title: trekking.routes[1].name,
      meta: trekking.routes[1].meta,
      price: trekking.routes[1].priceFrom,
      image: trekking.routes[1].image,
      href: '/trekking',
      blurb: 'The classic "Whiskey" route — steeper and more direct, through five climate zones from rainforest to the roof of Africa.',
      tags: {
        see: ['mountains'],
        interests: ['summit', 'walking'],
        occasion: ['friends', 'solo', 'couple'],
        months: [1, 2, 3, 6, 7, 8, 9, 10],
      },
    },
    {
      title: trekking.routes[2].name,
      meta: trekking.routes[2].meta,
      price: trekking.routes[2].priceFrom,
      image: trekking.routes[2].image,
      href: '/trekking',
      blurb: 'A wild, quiet 4,566m volcano walked with an armed ranger past buffalo and giraffe — and the best warm-up there is for Kilimanjaro.',
      tags: {
        see: ['mountains'],
        interests: ['summit', 'walking', 'bigcats'],
        occasion: ['solo', 'friends', 'couple'],
        months: [1, 2, 3, 6, 7, 8, 9, 10],
      },
    },
  ],
};

/* About page. */
export const about = {
  hero: {
    image:
      'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1600&q=80&auto=format&fit=crop',
    eyebrow: 'About Us',
    title: 'The value of experience',
  },
  lead: 'King Mufasa Expeditions is a small house of Tanzanian guides. We do not sell every trip — we sell the ones we would take ourselves, and we drive them personally.',
  story: [
    "We started with one Land Cruiser and a rule that has not changed: the person who plans your journey is a guide who has walked it, not a salesperson reading a brochure. Every route we offer, someone on this team has driven, walked, or slept in — usually many times over.",
    'Because we are based in Arusha and Dar, not in a European office, the money stays close to the ground. We employ our guides year-round, pay our mountain porters to the KPAP standard, and keep our camps small enough to close in the rains so the land can recover.',
  ],
  stats: [
    { value: '9', label: 'Resident guides' },
    { value: '61', label: 'Years in the field' },
    { value: '12', label: 'Guests per camp, max' },
    { value: '100%', label: 'Tanzanian-owned' },
  ],
  guides: {
    title: 'The guides',
    body: 'Our nine guides were all born within a day’s drive of the parks they work in. Between them they hold four languages of the north and a standing argument about where the cats will be in March. We pay them through the closed season so they never have to leave.',
    image:
      'https://images.unsplash.com/photo-1616128417743-c3a6992a65e7?w=1200&q=80&auto=format&fit=crop',
  },
  conservation: {
    title: 'Conservation',
    body: 'A share of every journey goes to the conservancies and communities whose land you travel through. Small camps, low volume, and long stays are not just how we like to travel — they are how the places we love stay worth visiting.',
    image:
      'https://images.unsplash.com/photo-1557756006-90a218bcc7e1?w=1200&q=80&auto=format&fit=crop',
  },
};

export const enquiry = {
  image:
    'https://images.unsplash.com/photo-1772224607566-13144baab071?w=1600&q=80&auto=format&fit=crop',
  title: 'Tell us when you can leave, and we will do the rest.',
  body: 'A first conversation takes about twenty minutes and costs nothing. You will speak with the person who designs the route, not a call centre.',
};

/* Reviews & Recognition — social proof block on the homepage, placed just
   before the enquiry CTA.
   PLACEHOLDER DATA: the scores, counts, review links and testimonials below are
   illustrative. Before launch, replace them with real figures, verbatim and
   attributable reviews, live links to each platform, and official accreditation
   logos — same rule as the image placeholders at the top of this file. Do not
   publish fabricated ratings or quotes. */
export const reviews = {
  eyebrow: 'Reviews & Recognition',
  title: 'Travellers on the record',
  lead: "Most of our guests come to us on a recommendation. The rest tend to read the reviews first — so here is where they live, unedited, on the platforms that host them.",
  // Platform logos link straight to the live review pages. Ratings/counts for
  // SafariBookings and Tripadvisor are the real, verified figures. Google is
  // pending its Business Profile URL and rating — `pending: true` shows a link
  // only, no invented score. `invert` recolours a white-on-transparent logo to
  // ink so it reads on the light surface.
  ratings: [
    {
      platform: 'SafariBookings',
      logo: '/brand/safaribookings.png',
      alt: 'SafariBookings',
      invert: true,
      score: '5.0',
      count: '101 reviews',
      href: 'https://www.safaribookings.com/reviews/p6151',
    },
    {
      platform: 'Tripadvisor',
      logo: '/brand/tripadvisor.svg',
      alt: 'Tripadvisor',
      score: '5.0',
      count: '35 reviews',
      href: 'https://www.tripadvisor.com/Attraction_Review-g297913-d27415878-Reviews-King_Mufasa_Expeditions-Arusha_Arusha_Region.html',
    },
    {
      platform: 'Google',
      logo: '/brand/google-wordmark.svg',
      alt: 'Google',
      pending: true,
      href: 'https://www.google.com/maps/search/King+Mufasa+Expeditions+Arusha',
    },
  ],
  // Real, relevant credentials for a Tanzanian operator. Swap the text badges
  // for official logos when you have them.
  accreditations: [
    { short: 'TATO', full: 'Tanzania Association of Tour Operators' },
    { short: 'TALA', full: 'Licensed Tourist Agent' },
    { short: 'ATTA', full: 'African Travel & Tourism Association' },
    { short: 'KPAP', full: 'Partner for Responsible Travel' },
    { short: 'SafariBookings', full: 'Verified Operator' },
  ],
};

export const footerLinks = [
  {
    heading: 'Travel',
    links: [
      { label: 'Safaris', href: '/#journeys' },
      { label: 'Trekking', href: '/trekking' },
      { label: 'Experiences', href: '/#experiences' },
    ],
  },
  {
    heading: 'House',
    links: [
      { label: 'About us', href: '/about' },
      { label: 'Our guides', href: '/about#guides' },
      { label: 'Reviews', href: '/#reviews' },
      { label: 'Conservation', href: '/about#conservation' },
    ],
  },
];
