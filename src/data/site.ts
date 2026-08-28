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
  { label: 'Journal', href: '/blog' },
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
  // Auto-rotating background slideshow — crossfades between these on a timer.
  images: [
    'https://images.pexels.com/photos/2622266/pexels-photo-2622266.jpeg',
    '/media/hero/lodge-suite.jpg',
    '/media/hero/migration-balloons.jpg',
  ],
  title: 'Unforgettable Journeys',
  subtitle:
    'Set off on remarkable, deeply personal journeys through Tanzania, planned by the guides who walk them.',
};

export const statement = {
  lead: 'Every Safari Tells a Story. Let Yours Begin With Us.',
  body: [
    "A great safari is more than wildlife, it's the people who guide you, the places you discover, and the memories you take home. At King Mufasa Expeditions, our passionate local team creates carefully planned journeys that combine adventure, comfort, and authentic Tanzanian hospitality.",
    "Whether you're searching for the Big Five, witnessing the Great Migration, climbing Mount Kilimanjaro, relaxing on the beautiful beaches of Zanzibar, celebrating your honeymoon, marking a special anniversary, enjoying a family adventure, or planning a once-in-a-lifetime safari, we are here to make every moment unforgettable.",
    'From your first inquiry to the day you return home, our goal is to provide exceptional service, personalized experiences, and memories that will stay with you forever.',
  ],
};

export const journeyFilters = [
  'All',
  'Northern Circuit',
  'Southern Wild',
  'Coast & Islands',
  'Family Safaris',
  'Walking',
];

/* Real lodge names + descriptions, sourced from the makisala/ratiba
   accommodations table and keyed by the UUID already embedded in each
   day's image URLs (assets.makisala.com/accommodations/<uuid>/...).
   Journey day objects only carry photos — this is the single place that
   maps a UUID to what a guest-facing "Where You'll Stay" panel should say. */
export const accommodationDirectory: Record<string, { name: string; description: string }> = {
  '940e029e-7a16-47e3-94da-820c533ae960': {
    name: "Karibu Camp's Lions Paw",
    description:
      "An explicit view of the cradled Lake Magadi awaits you at the Lion's Paw east of Ngorongoro's caldera. Create unforgettable memories with views of large tusked elephants and the endangered black rhinos using your binoculars from the bar and lounge area. Lion's Paw is 10 minutes away from the crater entrance, where you can relax, unwind, and enjoy serene bush dinners to crown your crater experience.",
  },
  '06ac8d86-d1d7-45ad-9b71-aa802260d016': {
    name: 'Marera Valley Lodge',
    description:
      'Marera Valley Lodge, located on the outskirts of Karatu town about midway between Lake Manyara and the Ngorongoro Crater, is close to the village of Rhotia. Convenient to the main road, this elegant lodge has stunning views over the valley to the hills beyond.',
  },
  '3dfcd843-1316-41e1-8a93-4a3e92b60118': {
    name: 'Escarpment Luxury Lodge Manyara',
    description:
      "Escarpment Luxury Lodge is a globally recognized brand providing world-class luxury accommodation, safari, and other hospitality services in Africa. Established in 2011, the lodge was built to offer travelers an elevated safari experience with affordable yet global-standard luxury hospitality.",
  },
  '3bcefc6b-2bd8-4272-a7af-f3c419fba0aa': {
    name: 'Moyo Camp Warangi',
    description:
      'A luxury tented camp nestled in the Serengeti National Reserve in the Seronera Valley, known as the big cat capital of Africa and one of the most popular areas in the entire reserve. Its location was thoughtfully chosen facing the Warangi River for the best year-round game viewing and breathtaking sunsets, just 20km from the Serengeti Seronera Airstrip.',
  },
  'a53c734d-50ca-4221-b4db-c4fa27eeaa52': {
    name: 'Kubu Kubu Tented Lodge',
    description:
      "Kubu Kubu Tented Camp is an exciting addition to Tanganyika Wilderness Camps' collection of luxury safari accommodation, with a modern African appearance creating a fresh, sleek, yet comfortable ambiance. Situated in the stunning central Serengeti, the camp is strategically positioned in one of the main migration areas so guests can enjoy this awesome natural wonder from the comfort of their tents.",
  },
  '9e2966db-6cb2-4f58-9fab-25ce40fb4961': {
    name: 'Rufiji River Camp',
    description:
      "An intimate tented camp on the banks of the Rufiji River in Nyerere National Park, offering front row seats to hippos, elephants and the world's largest population of endangered African wild dog.",
  },
  'bad0db9c-23ae-46b2-994b-4c1254c97fcd': {
    name: 'Nyota Serengeti',
    description:
      "Nyota Serengeti is the brand's luxury tented camp, set on a special campsite at Banagi in northern Seronera, where the Orangi River draws wildlife to the camp's edge. Twenty-four canvas tents stand on hardwood platforms, and a rare Serengeti swimming pool and starlit mess tent anchor camp life.",
  },
  '60257fe5-f717-486e-bf87-549ff06254b9': {
    name: 'Ruaha River Lodge',
    description:
      "A classic safari lodge of stone and thatch chalets strung along the Great Ruaha River in Ruaha National Park, Tanzania's largest protected wilderness, with game passing through camp day and night.",
  },
  '042b32ed-5c16-43ec-b97f-e3b081cb2e8e': {
    name: 'Vuma Hills Tented Camp',
    description:
      "Sixteen tents perched in the forested Vuma Hills above Mikumi National Park's Mkata floodplain, a cool retreat with sweeping views over the game-rich plains below.",
  },
  'c9d7d124-cfb4-4089-8a62-00539aeb4a1e': {
    name: 'Njiro Legacy',
    description:
      'A locally owned mid-range hotel in the Njiro suburb on the southern edge of Arusha, set in walled gardens around a swimming pool with Mount Meru on the skyline. Twenty-four rooms run from Standard to Executive, and the property works chiefly as a first and last night base for the northern circuit, with a safari desk, airport transfers and secure luggage storage while guests are in the parks.',
  },
  '90e9468a-7178-4222-95ee-3bf81bfe290a': {
    name: 'Tulia Boutique Hotel and Spa',
    description:
      "Tulia Boutique Hotel and Spa is located on White Rose Road in the Sakina area of Arusha, about 15 minutes from Arusha Airport and 1.5 kilometers from the Uhuru Monument. The hotel offers an outdoor courtyard, a year-round swimming pool, a spa and the Kiota Gift Shop, alongside a restaurant serving local and international dishes and a cocktail bar.",
  },
  '1767dcf3-bfdc-4556-8e53-e7c90cd328c1': {
    name: 'Maramboi Tented Lodge',
    description:
      'A large tented lodge on the migration corridor between Tarangire National Park and Lake Manyara, with a big pool, thatched lounge and views over golden grassland.',
  },
  '2138a428-ab46-4caf-8e92-6ee1fed16b64': {
    name: 'Ngorongoro Serena Safari Lodge',
    description:
      'Nestled high on the jagged rim of the Ngorongoro Crater and shrouded in mist, this lodge is a stunning example of ecological and architectural harmony — its boulder-built buildings camouflaged by indigenous creepers and linked by timber walkways that skirt ancient trees.',
  },
  'aa75a5c7-3e97-4c31-80a2-75406fb6e4a8': {
    name: 'Gran Melia Arusha',
    description:
      "This spectacular hotel is located between the Serengeti and Kilimanjaro National Parks, opening out onto all of Tanzania's majestic natural beauty. An oasis of five-star comfort and elegance, with extensive facilities, exclusive suites, international cuisine, a spa, infinity pool and gym.",
  },
};

/* Each journey has a slug -> /journeys/{slug}, plus the data its
   detail page renders (day-by-day, inclusions, gallery).
   Each day object's cinematic band image (the full-width photo behind the
   day number/title) defaults to `images[0]`. Set `bandImage` on a day to
   pick a different photo for that band without changing which image leads
   the "Where You'll Stay" gallery below it. */
export const journeys = [
  {
    slug: 'north-to-sea',
    featured: true,
    meta: 'Northern Circuit · 15 Days / 14 Nights',
    category: 'Northern Circuit',
    title: 'North to Sea',
    nights: 14,
    season: 'Jun — Oct',
    priceFrom: '$8,900',
    image: '/media/journeys/north-to-sea.jpeg',
    summary:
      'The whole arc of the north in one unhurried line — from the coffee farms below Meru, through baobab country and the crater, into the deep Serengeti, and out to the reef. Fourteen nights, five grounds, one guide the whole way.',
    days: [
      { days: 'Day 01 — 02', place: 'Arusha', nights: 1, note: 'Arrive and sleep off the flight on a coffee farm below Mount Meru. An easy first walk, a briefing with your guide, and an early night.', optional: false },
      { days: 'Day 03 — 05', place: 'Tarangire', nights: 2, bandImage: 'https://images.pexels.com/photos/29107115/pexels-photo-29107115.jpeg', note: 'Baobab country, and the largest elephant families in the north. Long slow game drives along the river, and a night walk with the camp rangers.', optional: false },
      { days: 'Day 06 — 07', place: 'Ngorongoro', nights: 2, bandImage: 'https://images.pexels.com/photos/28708345/pexels-photo-28708345.jpeg', note: 'Two nights on the crater rim at Olduvai Ridge. Descend at first light while the floor is still cold and the lion are still moving.', optional: false },
      { days: 'Day 08 — 12', place: 'Serengeti', nights: 5, bandImage: 'https://images.pexels.com/photos/29107115/pexels-photo-29107115.jpeg', note: 'Five unhurried nights following the herds wherever they have moved to. Your guide reads the grass; the route changes daily. Balloon at dawn on request.', optional: false },
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
      'https://images.unsplash.com/photo-1586584525758-f63cd62475a6?w=1200&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1704684715217-f4b3ca3161f7?w=1200&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1665449417444-fe7fec4b7425?w=1200&q=85&auto=format&fit=crop',
    ],
  },
  {
    slug: 'the-quiet-south',
    featured: true,
    meta: 'Southern Wild · 9 Days / 8 Nights',
    category: 'Southern Wild',
    title: 'The Quiet South',
    nights: 8,
    season: 'All Year',
    priceFrom: '$5,800',
    image: '/media/journeys/the-quiet-south.jpeg',
    summary:
      'Nyerere by boat, Mikumi\'s floodplain giraffe, a waterfall trek into the Udzungwa rainforest, and Ruaha\'s wild dog and roan antelope country — four of the south\'s least-visited parks strung into one long circuit, closing with a bush flight back to the coast.',
    days: [
      { days: 'Day 01 — 02', place: 'Nyerere National Park', nights: 2, note: 'Picked up in Dar es Salaam for the roughly five-hour drive down the Kilwa Road to Mtemere Gate — one of the largest conservation areas in the world, protected since 1896 and a UNESCO World Heritage Site since 1982. Lunch on arrival, then a two-hour sunset boat safari on the Rufiji River for hippo, crocodile and river birds. Day two is a full day of game driving in a pop-up-roof Land Cruiser, picnic lunch included, tracking elephant, buffalo, lion, giraffe and zebra. Two nights at Rufiji River Camp.', images: ['https://assets.makisala.com/accommodations/9e2966db-6cb2-4f58-9fab-25ce40fb4961/sundowner-deck-elephants.jpg', 'https://assets.makisala.com/accommodations/9e2966db-6cb2-4f58-9fab-25ce40fb4961/tented-room-interior.jpg', 'https://assets.makisala.com/accommodations/9e2966db-6cb2-4f58-9fab-25ce40fb4961/wild-dog-closeup.jpg', 'https://assets.makisala.com/accommodations/9e2966db-6cb2-4f58-9fab-25ce40fb4961/pool-deck-exterior.jpg', 'https://assets.makisala.com/accommodations/9e2966db-6cb2-4f58-9fab-25ce40fb4961/private-plunge-pool-hammock.jpg', 'https://assets.makisala.com/accommodations/9e2966db-6cb2-4f58-9fab-25ce40fb4961/main-pool.jpg', 'https://assets.makisala.com/accommodations/9e2966db-6cb2-4f58-9fab-25ce40fb4961/thatched-viewing-deck.jpg', 'https://assets.makisala.com/accommodations/9e2966db-6cb2-4f58-9fab-25ce40fb4961/shaded-tent-daybed.jpg', 'https://assets.makisala.com/accommodations/9e2966db-6cb2-4f58-9fab-25ce40fb4961/rufiji-river-landscape.jpg', 'https://assets.makisala.com/accommodations/9e2966db-6cb2-4f58-9fab-25ce40fb4961/elephant-game-drive.jpg'], optional: false },
      { days: 'Day 03 — 04', place: 'Mikumi National Park', nights: 2, note: 'An early two-hour walking safari in Nyerere before breakfast, then the long 7–8 hour drive north to Mikumi through mountain scenery and village roads. A full day of game driving follows — baboon, zebra, impala and the local Mikumi giraffe, a reticulated–Maasai cross, with lion frequently sighted, buffalo on the Mkata floodplain, and the hippo pool best visited in late afternoon. Two nights at Vuma Hills Tented Camp.', images: ['https://assets.makisala.com/accommodations/042b32ed-5c16-43ec-b97f-e3b081cb2e8e/tented-room-interior.jpg', 'https://assets.makisala.com/accommodations/042b32ed-5c16-43ec-b97f-e3b081cb2e8e/pool-loungers.jpg', 'https://assets.makisala.com/accommodations/042b32ed-5c16-43ec-b97f-e3b081cb2e8e/deck-forest-view.jpg', 'https://assets.makisala.com/accommodations/042b32ed-5c16-43ec-b97f-e3b081cb2e8e/dining-dusk.jpg', 'https://assets.makisala.com/accommodations/042b32ed-5c16-43ec-b97f-e3b081cb2e8e/lounge-firepit.jpg', 'https://assets.makisala.com/accommodations/042b32ed-5c16-43ec-b97f-e3b081cb2e8e/bar-interior.jpg', 'https://assets.makisala.com/accommodations/042b32ed-5c16-43ec-b97f-e3b081cb2e8e/giraffes-tree.jpg', 'https://assets.makisala.com/accommodations/042b32ed-5c16-43ec-b97f-e3b081cb2e8e/aerial-vuma-hills.jpg', 'https://assets.makisala.com/accommodations/042b32ed-5c16-43ec-b97f-e3b081cb2e8e/sundowner-lantern.jpg', 'https://assets.makisala.com/accommodations/042b32ed-5c16-43ec-b97f-e3b081cb2e8e/guests-wildlife-spotting.jpg'], optional: false },
      { days: 'Day 05', place: 'Udzungwa Mountains National Park', nights: 1, note: 'An hour\'s drive to Udzungwa, then a guided trek to the Sanje Waterfalls — a 200-metre drop through rainforest with views over the Kilombero floodplain, two further pools for swimming, and a picnic lunch at the top before the escarpment trail back down. Overnight at Udzungwa Falls Lodge.', optional: false },
      { days: 'Day 06 — 07', place: 'Ruaha National Park', nights: 2, note: 'Drive through Iringa and the Kitonga Hills, with views of the Great Rift Escarpment and the Great Ruaha River, arriving with a game drive en route to Ruaha River Lodge. Ruaha is nearly the size of the Serengeti and sits where several vegetation zones meet — greater and lesser kudu, sable and roan antelope, and over 350 bird species, with lion, leopard, hyena and wild dog hunting the riverbanks. A full second day to explore at will. Two nights at Ruaha River Lodge.', images: ['https://assets.makisala.com/accommodations/60257fe5-f717-486e-bf87-549ff06254b9/tented-room-interior.jpg', 'https://assets.makisala.com/accommodations/60257fe5-f717-486e-bf87-549ff06254b9/bush-lunch-riverside.jpg', 'https://assets.makisala.com/accommodations/60257fe5-f717-486e-bf87-549ff06254b9/walking-safari-elephants.jpg', 'https://assets.makisala.com/accommodations/60257fe5-f717-486e-bf87-549ff06254b9/game-drive-vehicle-plains.jpg', 'https://assets.makisala.com/accommodations/60257fe5-f717-486e-bf87-549ff06254b9/elephants-baobab.jpg', 'https://assets.makisala.com/accommodations/60257fe5-f717-486e-bf87-549ff06254b9/elephant-herd-riverbank.jpg', 'https://assets.makisala.com/accommodations/60257fe5-f717-486e-bf87-549ff06254b9/lioness-portrait.jpg', 'https://assets.makisala.com/accommodations/60257fe5-f717-486e-bf87-549ff06254b9/sunset-heron-reflection.jpg', 'https://assets.makisala.com/accommodations/60257fe5-f717-486e-bf87-549ff06254b9/hippo-wallow.jpg', 'https://assets.makisala.com/accommodations/60257fe5-f717-486e-bf87-549ff06254b9/greater-kudu.jpg'], optional: false },
      { days: 'Day 08', place: 'Dar es Salaam', nights: 0, note: 'A final sunrise game drive to Msembe Airstrip for the 10:45 flight back to Dar es Salaam, landing 13:15, with a complimentary transfer on to your hotel or the international airport.', optional: false },
    ],
    included: [
      'Park fees for non-residents',
      'All activities mentioned in the itinerary',
      'Meals as specified each day',
      'Roundtrip airport transfers',
      'A professional driver-guide throughout',
      'All transportation and internal flights during the tour',
      'All taxes and VAT',
    ],
    excluded: [
      'International flights to and from the client\'s home country',
      'Additional accommodation before or after the tour',
      'Gratuities — guideline $10 per person per day for guide and crew',
      'Personal items: souvenirs, travel insurance, visa fees',
      'Government-imposed increases in taxes and/or park fees',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1516899843768-460939230e51?w=1200&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1764390692517-98db135fe1be?w=1200&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1764614131376-a4fac1025d5f?w=1200&q=85&auto=format&fit=crop',
    ],
  },
  {
    slug: 'salt-and-silence',
    featured: true,
    meta: 'Coast & Islands · 8 Days / 7 Nights',
    category: 'Coast & Islands',
    title: 'Zanzibar in Silence',
    nights: 7,
    season: 'Jun — Mar',
    priceFrom: '$4,200',
    image: '/media/journeys/zanzibar-in-silence.jpeg',
    summary:
      'For when the safari is over and the body wants salt water. Seven nights on the far side of Zanzibar and the Mafia channel — reef, dhow, spice, and a schedule with nothing on it.',
    days: [
      { days: 'Day 01 — 04', place: 'Zanzibar', bandImage: 'https://assets.makisala.com/accommodations/bc06e133-b674-45ce-86a9-069a14ce2cfe/1767861565484-124aMeliaZanzibar-Two%20Bedroom%20Villa%20Pool.webp', nights: 3, note: 'A house on the north-east coast, well away from the crowds. Snorkelling the reef at slack tide, a spice walk inland, sunset dhows.', optional: false },
      { days: 'Day 05 — 07', place: 'Mafia Island', bandImage: 'https://images.pexels.com/photos/5858997/pexels-photo-5858997.jpeg', nights: 3, note: 'Swim with whale sharks in season, dive the marine park, and eat what the boats bring in. The quietest island in the country.', optional: false },
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
      'https://images.unsplash.com/photo-1646667642307-e2bf4541284e?w=1200&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1678042956696-e072ff82cff5?w=1200&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1464925029952-5d9ca1cf4f64?w=1200&q=85&auto=format&fit=crop',
    ],
  },

  /* Migrated from the previous site's itinerary pages — slugs kept identical
     to the old WordPress URLs so any future redirect mapping is a straight
     /journeys/{slug} rewrite. Prices were not published on the source pages,
     so priceFrom reads "Price on request" pending a real rate sheet. */
  {
    slug: '2-day-tarangire-and-ngorongoro-crater-from-zanzibar',
    meta: 'Fly-In from Zanzibar · 2 Days / 1 Night',
    category: 'Northern Circuit',
    title: 'Two Days in the Ngorongoro Crater',
    packageTitle: '2-Day Tarangire & Ngorongoro Crater Safari from Zanzibar',
    packageGroup: 'fly-in',
    nights: 1,
    season: 'Jun — Oct',
    priceFrom: '$1,600',
    image: 'https://images.pexels.com/photos/20847561/pexels-photo-20847561.jpeg',
    summary: 'A short, direct hop from Zanzibar into Tarangire and down into the Ngorongoro Crater — for travellers who have days on the beach to spare, not weeks.',
    days: [
      { days: 'Day 01', place: 'Tarangire', bandImage: 'https://images.pexels.com/photos/28359728/pexels-photo-28359728.jpeg', nights: 1, note: 'Fly from Zanzibar into Arusha, then drive into Tarangire for a seven-to-eight hour game drive along the river — elephant, lion, leopard, and eland. Overnight at Escarpment Luxury Lodge.', images: ['https://assets.makisala.com/accommodations/3dfcd843-1316-41e1-8a93-4a3e92b60118/1786462560616-IMG_0104_11zon-scaled.jpg', 'https://assets.makisala.com/accommodations/3dfcd843-1316-41e1-8a93-4a3e92b60118/1786462560615-escarpmentluxurylodge1_579040510_p_3774418397657113986_1_p_3774418397657113986.png', 'https://assets.makisala.com/accommodations/3dfcd843-1316-41e1-8a93-4a3e92b60118/1786462560614-escarpmentluxurylodge1_20250519_p_3635728330407117496_1_3635728319191594809_11zon.png', 'https://assets.makisala.com/accommodations/3dfcd843-1316-41e1-8a93-4a3e92b60118/1786462560613-EscarpmentLuxuryLodge_183_11zon.jpg', 'https://assets.makisala.com/accommodations/3dfcd843-1316-41e1-8a93-4a3e92b60118/1786462560612-EscarpmentLuxuryLodge_182_11zon-1-scaled.jpg', 'https://assets.makisala.com/accommodations/3dfcd843-1316-41e1-8a93-4a3e92b60118/1786462560611-EscarpmentLuxuryLodge_1811_11zon-1-scaled.jpg', 'https://assets.makisala.com/accommodations/3dfcd843-1316-41e1-8a93-4a3e92b60118/1786462560610-DJI_20250823150214_0298_D_11zon-1-scaled.jpg', 'https://assets.makisala.com/accommodations/3dfcd843-1316-41e1-8a93-4a3e92b60118/1786462560609-An-aerial-view-of-Lake-Manyara-National-Park.jpg', 'https://assets.makisala.com/accommodations/3dfcd843-1316-41e1-8a93-4a3e92b60118/1786462560607-YTE2622_11zon-1-scaled.jpg'], optional: false },
      { days: 'Day 02', place: 'Ngorongoro', nights: 0, bandImage: 'https://images.pexels.com/photos/28708345/pexels-photo-28708345.jpeg', note: 'Descend into the crater at first light for black rhino, elephant, hyena and lion, lunch at Hippo Lake, then the climb out and a transfer back to Zanzibar by evening flight.', optional: false },
    ],
    included: ['Park fees and all listed activities', 'Full board and specified drinks', 'Roundtrip flights and airport transfers', 'A professional driver-guide throughout'],
    excluded: ['International flights home', 'Accommodation before or after the tour', 'Tips and personal items'],
    gallery: [
      'https://images.unsplash.com/photo-1521651201144-634f700b36ef?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1504173010664-32509aeebb62?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1772175007897-0a4927cf4531?w=1200&q=80&auto=format&fit=crop',
    ],
  },
  {
    slug: '3-day-luxury-fly-in-fly-out-safari-from-zanzibar',
    meta: 'Fly-In from Zanzibar · 3 Days / 2 Nights',
    category: 'Northern Circuit',
    title: 'Fly-In: Serengeti & the Crater',
    packageTitle: '3-Day Luxury Fly-In Fly-Out Safari from Zanzibar',
    packageGroup: 'fly-in',
    nights: 2,
    season: 'Jun — Oct',
    priceFrom: '$2,500',
    image: 'https://images.pexels.com/photos/16444267/pexels-photo-16444267.jpeg',
    summary: 'No long drives — a small plane from Zanzibar puts you in the Serengeti by mid-morning, with a crater descent to close the trip before flying back to the coast.',
    days: [
      { days: 'Day 01', place: 'Serengeti', nights: 1, bandImage: 'https://images.pexels.com/photos/29107115/pexels-photo-29107115.jpeg', note: 'Fly in from Zanzibar via Arusha, landing on the Serengeti airstrip. Game drives on arrival and at sunset. Overnight at Moyo Tented Camp.', images: ['https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878366108-MOYO-BKG-1920-03%402x.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878385197-moyo-warangi-platformtent.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878375545-moyo-warangi-diningtable.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878379769-DSC03604.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878389544-DSC03603.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878396505-DJI_0699.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878371380-Moyo-Table-staff.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878373488-moyo-warangi-chair.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878377562-DSC03651.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878381866-DSC03593.webp'], optional: false },
      { days: 'Day 02', place: 'Serengeti → Ngorongoro', nights: 1, bandImage: 'https://images.pexels.com/photos/28708345/pexels-photo-28708345.jpeg', note: 'A full day of game drives across the plains, then an afternoon transfer to the crater rim. Overnight at Ngorongoro Serena Lodge.', images: ['https://assets.makisala.com/accommodations/2138a428-ab46-4caf-8e92-6ee1fed16b64/17.jpg', 'https://assets.makisala.com/accommodations/2138a428-ab46-4caf-8e92-6ee1fed16b64/21.jpg', 'https://assets.makisala.com/accommodations/2138a428-ab46-4caf-8e92-6ee1fed16b64/16.jpg', 'https://assets.makisala.com/accommodations/2138a428-ab46-4caf-8e92-6ee1fed16b64/2.jpg', 'https://assets.makisala.com/accommodations/2138a428-ab46-4caf-8e92-6ee1fed16b64/1.jpg', 'https://assets.makisala.com/accommodations/2138a428-ab46-4caf-8e92-6ee1fed16b64/8.jpg', 'https://assets.makisala.com/accommodations/2138a428-ab46-4caf-8e92-6ee1fed16b64/15.jpg', 'https://assets.makisala.com/accommodations/2138a428-ab46-4caf-8e92-6ee1fed16b64/13.jpg', 'https://assets.makisala.com/accommodations/2138a428-ab46-4caf-8e92-6ee1fed16b64/20.jpg', 'https://assets.makisala.com/accommodations/2138a428-ab46-4caf-8e92-6ee1fed16b64/12.jpg'], optional: false },
      { days: 'Day 03', place: 'Ngorongoro', nights: 0, bandImage: 'https://images.pexels.com/photos/10829143/pexels-photo-10829143.jpeg', note: 'Descend into the crater for black rhino and the resident big cats, lunch at Hippo Lake, then the climb out and an afternoon flight back to Zanzibar.', optional: false },
    ],
    included: ['All park entrances', 'Full board, water, and house drinks', 'All flights during the tour', 'A safari 4×4 with pop-up roof and charging'],
    excluded: ['Tips', 'Visas and personal items'],
    gallery: [
      'https://images.unsplash.com/photo-1585468274952-66591eb14165?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1616128417743-c3a6992a65e7?w=1200&q=80&auto=format&fit=crop',
    ],
  },
  {
    slug: '4-day-endless-plains-from-zanzibar-to-serengeti',
    meta: 'Fly-In from Zanzibar · 4 Days / 3 Nights',
    category: 'Northern Circuit',
    title: '4 Days Fly-In Safari from Zanzibar',
    packageTitle: '4-Day Endless Plains Safari from Zanzibar to Serengeti',
    packageGroup: 'fly-in',
    nights: 3,
    season: 'Jun — Oct',
    priceFrom: '$2,250',
    image: 'https://images.pexels.com/photos/27462254/pexels-photo-27462254.jpeg',
    summary: 'Home to roughly three million large animals, including the black rhino — the Serengeti, the crater, and Tarangire in one unhurried line from the coast.',
    days: [
      { days: 'Day 01 — 02', place: 'Serengeti', nights: 2, bandImage: 'https://images.pexels.com/photos/29107115/pexels-photo-29107115.jpeg', note: 'Fly in and settle into two full days on the plains — dawn and dusk game drives, with a picnic lunch overlooking the Ngorongoro highlands on the second day. Overnight at Moyo Tented Camp.', images: ['https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878366108-MOYO-BKG-1920-03%402x.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878385197-moyo-warangi-platformtent.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878375545-moyo-warangi-diningtable.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878379769-DSC03604.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878389544-DSC03603.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878396505-DJI_0699.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878371380-Moyo-Table-staff.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878373488-moyo-warangi-chair.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878377562-DSC03651.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878381866-DSC03593.webp'], optional: false },
      { days: 'Day 03', place: 'Ngorongoro', nights: 1, bandImage: 'https://images.pexels.com/photos/28708345/pexels-photo-28708345.jpeg', note: 'A full day inside the crater, home to over 30,000 animals and the Big Five, with lunch by a hippo pool. Overnight at Escarpment Luxury Lodge.', images: ['https://assets.makisala.com/accommodations/3dfcd843-1316-41e1-8a93-4a3e92b60118/1786462560616-IMG_0104_11zon-scaled.jpg', 'https://assets.makisala.com/accommodations/3dfcd843-1316-41e1-8a93-4a3e92b60118/1786462560615-escarpmentluxurylodge1_579040510_p_3774418397657113986_1_p_3774418397657113986.png', 'https://assets.makisala.com/accommodations/3dfcd843-1316-41e1-8a93-4a3e92b60118/1786462560614-escarpmentluxurylodge1_20250519_p_3635728330407117496_1_3635728319191594809_11zon.png', 'https://assets.makisala.com/accommodations/3dfcd843-1316-41e1-8a93-4a3e92b60118/1786462560613-EscarpmentLuxuryLodge_183_11zon.jpg', 'https://assets.makisala.com/accommodations/3dfcd843-1316-41e1-8a93-4a3e92b60118/1786462560612-EscarpmentLuxuryLodge_182_11zon-1-scaled.jpg', 'https://assets.makisala.com/accommodations/3dfcd843-1316-41e1-8a93-4a3e92b60118/1786462560611-EscarpmentLuxuryLodge_1811_11zon-1-scaled.jpg', 'https://assets.makisala.com/accommodations/3dfcd843-1316-41e1-8a93-4a3e92b60118/1786462560610-DJI_20250823150214_0298_D_11zon-1-scaled.jpg', 'https://assets.makisala.com/accommodations/3dfcd843-1316-41e1-8a93-4a3e92b60118/1786462560609-An-aerial-view-of-Lake-Manyara-National-Park.jpg', 'https://assets.makisala.com/accommodations/3dfcd843-1316-41e1-8a93-4a3e92b60118/1786462560607-YTE2622_11zon-1-scaled.jpg'], optional: false },
      { days: 'Day 04', place: 'Tarangire', nights: 0, note: 'A last seven-to-eight hour game drive through Tarangire, picnic lunch by the river, before the evening transfer to Kilimanjaro International Airport.', optional: false },
    ],
    included: ['Park fees and all listed activities', 'Full board and specified drinks', 'All accommodation and transport', 'Roundtrip airport transfer and driver-guide'],
    excluded: ['International flights home', 'Tips and personal items', 'An optional Lake Manyara night drive ($200pp)'],
    gallery: [
      'https://images.unsplash.com/photo-1557756006-90a218bcc7e1?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1740830591229-10ac8838361f?w=1200&q=80&auto=format&fit=crop',
    ],
  },
  {
    slug: '4-day-serengeti-fly-in-fly-out-safari-luxury-safari',
    meta: 'Fly-In from Zanzibar · 4 Days / 3 Nights',
    category: 'Northern Circuit',
    title: '4 Days Serengeti from Zanzibar',
    packageTitle: '4-Day Serengeti Fly-In Fly-Out Luxury Safari',
    packageGroup: 'fly-in',
    nights: 3,
    season: 'Jun — Oct',
    priceFrom: '$2,700',
    image: 'https://images.pexels.com/photos/2622266/pexels-photo-2622266.jpeg',
    summary: 'Two full nights in prime migration and big-cat territory, then a night on the crater rim — a fly-in route built to skip the redundant driving.',
    days: [
      { days: 'Day 01 — 02', place: 'Serengeti', nights: 2, bandImage: 'https://images.pexels.com/photos/17831035/pexels-photo-17831035.jpeg', note: "Fly in from Zanzibar via Arusha for two days of game drives in prime migration and big-cat territory, mornings and evenings around the day's heat. Overnight at Moyo Tented Camp.", images: ['https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878366108-MOYO-BKG-1920-03%402x.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878385197-moyo-warangi-platformtent.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878375545-moyo-warangi-diningtable.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878379769-DSC03604.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878389544-DSC03603.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878396505-DJI_0699.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878371380-Moyo-Table-staff.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878373488-moyo-warangi-chair.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878377562-DSC03651.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878381866-DSC03593.webp'], optional: false },
      { days: 'Day 03', place: 'Ngorongoro', nights: 1, bandImage: 'https://images.pexels.com/photos/28708345/pexels-photo-28708345.jpeg', note: 'A last Serengeti game drive at breakfast, then the drive to the crater rim. Overnight at Ngorongoro Serena Safari Lodge.', images: ['https://assets.makisala.com/accommodations/2138a428-ab46-4caf-8e92-6ee1fed16b64/17.jpg', 'https://assets.makisala.com/accommodations/2138a428-ab46-4caf-8e92-6ee1fed16b64/21.jpg', 'https://assets.makisala.com/accommodations/2138a428-ab46-4caf-8e92-6ee1fed16b64/16.jpg', 'https://assets.makisala.com/accommodations/2138a428-ab46-4caf-8e92-6ee1fed16b64/2.jpg', 'https://assets.makisala.com/accommodations/2138a428-ab46-4caf-8e92-6ee1fed16b64/1.jpg', 'https://assets.makisala.com/accommodations/2138a428-ab46-4caf-8e92-6ee1fed16b64/8.jpg', 'https://assets.makisala.com/accommodations/2138a428-ab46-4caf-8e92-6ee1fed16b64/15.jpg', 'https://assets.makisala.com/accommodations/2138a428-ab46-4caf-8e92-6ee1fed16b64/13.jpg', 'https://assets.makisala.com/accommodations/2138a428-ab46-4caf-8e92-6ee1fed16b64/20.jpg', 'https://assets.makisala.com/accommodations/2138a428-ab46-4caf-8e92-6ee1fed16b64/12.jpg'], optional: false },
      { days: 'Day 04', place: 'Ngorongoro Crater', nights: 0, bandImage: 'https://images.pexels.com/photos/33798297/pexels-photo-33798297.jpeg', note: 'Descend for black rhino and the resident predators, lunch at Hippo Lake, then the climb out and an afternoon flight back to Zanzibar.', optional: false },
    ],
    included: ['Park fees and all listed activities', 'Full board and specified drinks', 'All flights during the tour', 'Roundtrip airport transfer and driver-guide'],
    excluded: ['International flights home', 'Accommodation before or after the tour', 'Tips (guideline $20pp/day) and personal items'],
    gallery: [
      'https://images.unsplash.com/photo-1634646350436-e1448c1d4f63?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590523278191-995cbcda646b?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1766603636766-1f4662469448?w=1200&q=80&auto=format&fit=crop',
    ],
  },
  {
    slug: '4-days-zanzibar-beach-holiday',
    meta: 'Coast & Islands · 4 Days / 3 Nights',
    category: 'Coast & Islands',
    title: 'Four Days on the Sand',
    nights: 3,
    season: 'Jun — Mar',
    priceFrom: 'Price on request',
    image: 'https://images.unsplash.com/photo-1646667642307-e2bf4541284e?w=1600&q=85&auto=format&fit=crop',
    summary: 'For when four days is all you have — Zanzibar\'s white sand, the reef at Mnemba, and a spice-farm afternoon inland.',
    days: [
      { days: 'Day 01', place: 'Zanzibar', nights: 1, note: 'Transfer to a beachfront resort on the north-east coast. An afternoon of nothing but sand, shore walks, and the sunset.', optional: false },
      { days: 'Day 02', place: 'Mnemba Atoll', nights: 1, note: 'A snorkelling morning over the reef at Mnemba, swimming among reef fish with a chance of dolphins. Afternoon free, or a beachside massage.', optional: false },
      { days: 'Day 03', place: 'Jozani Forest', nights: 1, note: "A morning walk through Jozani Forest for the rare red colobus monkey, then a spice-farm visit and tasting. Evening back on the beach.", optional: false },
      { days: 'Day 04', place: 'Zanzibar', nights: 0, note: 'A final unhurried morning by the water before the transfer to the airport.', optional: false },
    ],
    included: ['Airport transfers', 'Beach resort accommodation', 'Daily breakfast and selected meals', 'Guided tours (Stone Town, spice tour, Jozani Forest, Prison Island)'],
    excluded: ['International flights', 'Travel insurance and visa fees', 'Personal expenses (drinks, souvenirs, tips)'],
    gallery: [
      'https://images.unsplash.com/photo-1516815231560-8f41ec531527?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1750784700372-d65667976cde?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1766603636766-1f4662469448?w=1200&q=80&auto=format&fit=crop',
    ],
  },
  {
    slug: '5-day-fly-in-serengeti-ngorongoro-crater-lake-manyara',
    meta: 'Fly-In from Zanzibar · 5 Days / 4 Nights',
    category: 'Northern Circuit',
    title: 'Fly-In: The Northern Three',
    packageTitle: '5-Day Fly-In Safari: Serengeti, Ngorongoro Crater & Lake Manyara',
    packageGroup: 'fly-in',
    nights: 4,
    season: 'Jun — Oct',
    priceFrom: '$3,300',
    image: 'https://images.pexels.com/photos/18960157/pexels-photo-18960157.jpeg',
    summary: 'Two full nights in the Serengeti, then the crater and Lake Manyara — a fly-in route across the three parks most people come north for.',
    days: [
      { days: 'Day 01 — 02', place: 'Serengeti', nights: 2, bandImage: 'https://images.pexels.com/photos/29107115/pexels-photo-29107115.jpeg', note: "Fly in from Zanzibar via Arusha for two full days on the plains, split-session game drives timed around the day's heat. Overnight at Moyo Tented Camp.", images: ['https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878366108-MOYO-BKG-1920-03%402x.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878385197-moyo-warangi-platformtent.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878375545-moyo-warangi-diningtable.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878379769-DSC03604.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878389544-DSC03603.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878396505-DJI_0699.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878371380-Moyo-Table-staff.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878373488-moyo-warangi-chair.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878377562-DSC03651.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878381866-DSC03593.webp'], optional: false },
      { days: 'Day 03', place: 'Ngorongoro', nights: 1, bandImage: 'https://images.pexels.com/photos/28708345/pexels-photo-28708345.jpeg', note: 'A last Serengeti drive at breakfast, then the transfer to the crater rim. Overnight at Ngorongoro Serena Safari Lodge.', images: ['https://assets.makisala.com/accommodations/2138a428-ab46-4caf-8e92-6ee1fed16b64/17.jpg', 'https://assets.makisala.com/accommodations/2138a428-ab46-4caf-8e92-6ee1fed16b64/21.jpg', 'https://assets.makisala.com/accommodations/2138a428-ab46-4caf-8e92-6ee1fed16b64/16.jpg', 'https://assets.makisala.com/accommodations/2138a428-ab46-4caf-8e92-6ee1fed16b64/2.jpg', 'https://assets.makisala.com/accommodations/2138a428-ab46-4caf-8e92-6ee1fed16b64/1.jpg', 'https://assets.makisala.com/accommodations/2138a428-ab46-4caf-8e92-6ee1fed16b64/8.jpg', 'https://assets.makisala.com/accommodations/2138a428-ab46-4caf-8e92-6ee1fed16b64/15.jpg', 'https://assets.makisala.com/accommodations/2138a428-ab46-4caf-8e92-6ee1fed16b64/13.jpg', 'https://assets.makisala.com/accommodations/2138a428-ab46-4caf-8e92-6ee1fed16b64/20.jpg', 'https://assets.makisala.com/accommodations/2138a428-ab46-4caf-8e92-6ee1fed16b64/12.jpg'], optional: false },
      { days: 'Day 04', place: 'Ngorongoro → Manyara', nights: 1, note: 'Descend into the crater at first light, lunch at Hippo Lake, then an afternoon transfer to Lake Manyara for an evening walk and cycle. Overnight at Escarpment Luxury Lodge.', bandImage: 'https://images.pexels.com/photos/32459724/pexels-photo-32459724.jpeg', images: ['https://assets.makisala.com/accommodations/3dfcd843-1316-41e1-8a93-4a3e92b60118/1786462560616-IMG_0104_11zon-scaled.jpg', 'https://assets.makisala.com/accommodations/3dfcd843-1316-41e1-8a93-4a3e92b60118/1786462560615-escarpmentluxurylodge1_579040510_p_3774418397657113986_1_p_3774418397657113986.png', 'https://assets.makisala.com/accommodations/3dfcd843-1316-41e1-8a93-4a3e92b60118/1786462560614-escarpmentluxurylodge1_20250519_p_3635728330407117496_1_3635728319191594809_11zon.png', 'https://assets.makisala.com/accommodations/3dfcd843-1316-41e1-8a93-4a3e92b60118/1786462560613-EscarpmentLuxuryLodge_183_11zon.jpg', 'https://assets.makisala.com/accommodations/3dfcd843-1316-41e1-8a93-4a3e92b60118/1786462560612-EscarpmentLuxuryLodge_182_11zon-1-scaled.jpg', 'https://assets.makisala.com/accommodations/3dfcd843-1316-41e1-8a93-4a3e92b60118/1786462560611-EscarpmentLuxuryLodge_1811_11zon-1-scaled.jpg', 'https://assets.makisala.com/accommodations/3dfcd843-1316-41e1-8a93-4a3e92b60118/1786462560610-DJI_20250823150214_0298_D_11zon-1-scaled.jpg', 'https://assets.makisala.com/accommodations/3dfcd843-1316-41e1-8a93-4a3e92b60118/1786462560609-An-aerial-view-of-Lake-Manyara-National-Park.jpg', 'https://assets.makisala.com/accommodations/3dfcd843-1316-41e1-8a93-4a3e92b60118/1786462560607-YTE2622_11zon-1-scaled.jpg'], optional: false },
      { days: 'Day 05', place: 'Lake Manyara', nights: 0, note: 'A morning of game drives, guided walks and canoeing beneath the tree-climbing lions, before the transfer to Arusha for the flight back to Zanzibar.', bandImage: 'https://images.pexels.com/photos/32459724/pexels-photo-32459724.jpeg', optional: false },
    ],
    included: ['Park fees and all listed activities', 'Full board and specified drinks', 'All flights during the tour', 'Roundtrip airport transfer and driver-guide'],
    excluded: ['International flights home', 'Accommodation before or after the tour', 'Tips (guideline $20pp/day) and personal items'],
    gallery: [
      'https://images.unsplash.com/photo-1521651201144-634f700b36ef?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1772175007897-0a4927cf4531?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1585468274952-66591eb14165?w=1200&q=80&auto=format&fit=crop',
    ],
  },
  {
    slug: '5-days-manyara-serengeti-ngorongoro-best-luxury-safari',
    meta: 'Northern Circuit · 5 Days / 4 Nights',
    category: 'Northern Circuit',
    title: '5-Days Northern Circuit Safari',
    packageTitle: '5-Days Manyara, Serengeti & Ngorongoro Luxury Safari',
    packageGroup: 'northern-circuit',
    nights: 4,
    season: 'Jun — Oct',
    priceFrom: '$2,545',
    image: 'https://images.pexels.com/photos/7218994/pexels-photo-7218994.jpeg',
    summary: 'Tree-climbing lions at Manyara, two full days chasing the migrating herds in the Serengeti, and a last descent into Ngorongoro.',
    days: [
      { days: 'Day 01', place: 'Lake Manyara', nights: 1, note: 'You will be picked up from your lodge and depart to Lake Manyara for game drives while carrying lunch boxes. Once you finish the game drive, you will transfer to the lodge for relaxation, dinner and an overnight stay. Overnight at Escarpment Luxury Lodge.', bandImage: 'https://images.pexels.com/photos/32459724/pexels-photo-32459724.jpeg', images: ['https://assets.makisala.com/accommodations/3dfcd843-1316-41e1-8a93-4a3e92b60118/1786462560616-IMG_0104_11zon-scaled.jpg', 'https://assets.makisala.com/accommodations/3dfcd843-1316-41e1-8a93-4a3e92b60118/1786462560615-escarpmentluxurylodge1_579040510_p_3774418397657113986_1_p_3774418397657113986.png', 'https://assets.makisala.com/accommodations/3dfcd843-1316-41e1-8a93-4a3e92b60118/1786462560614-escarpmentluxurylodge1_20250519_p_3635728330407117496_1_3635728319191594809_11zon.png', 'https://assets.makisala.com/accommodations/3dfcd843-1316-41e1-8a93-4a3e92b60118/1786462560613-EscarpmentLuxuryLodge_183_11zon.jpg', 'https://assets.makisala.com/accommodations/3dfcd843-1316-41e1-8a93-4a3e92b60118/1786462560612-EscarpmentLuxuryLodge_182_11zon-1-scaled.jpg', 'https://assets.makisala.com/accommodations/3dfcd843-1316-41e1-8a93-4a3e92b60118/1786462560611-EscarpmentLuxuryLodge_1811_11zon-1-scaled.jpg', 'https://assets.makisala.com/accommodations/3dfcd843-1316-41e1-8a93-4a3e92b60118/1786462560610-DJI_20250823150214_0298_D_11zon-1-scaled.jpg', 'https://assets.makisala.com/accommodations/3dfcd843-1316-41e1-8a93-4a3e92b60118/1786462560609-An-aerial-view-of-Lake-Manyara-National-Park.jpg', 'https://assets.makisala.com/accommodations/3dfcd843-1316-41e1-8a93-4a3e92b60118/1786462560607-YTE2622_11zon-1-scaled.jpg'], optional: false },
      { days: 'Day 02 — 03', place: 'Serengeti', nights: 2, bandImage: 'https://images.pexels.com/photos/29107115/pexels-photo-29107115.jpeg', note: 'After breakfast, you will depart for Serengeti National Park for wildlife sightseeing. You will enjoy lunch in a suitable place inside the park. In the afternoon, you will continue the game drive activity before reaching the lodge. The following day is dedicated to a full-day game drive inside Serengeti National Park. Overnight at Moyo Tented Luxury Camp.', images: ['https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878366108-MOYO-BKG-1920-03%402x.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878385197-moyo-warangi-platformtent.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878375545-moyo-warangi-diningtable.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878379769-DSC03604.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878389544-DSC03603.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878396505-DJI_0699.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878371380-Moyo-Table-staff.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878373488-moyo-warangi-chair.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878377562-DSC03651.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878381866-DSC03593.webp'], optional: false },
      { days: 'Day 04', place: 'Ngorongoro', nights: 1, bandImage: 'https://images.pexels.com/photos/28708345/pexels-photo-28708345.jpeg', note: 'Today, you will wake up early and enjoy magic game drives in Serengeti National Park. In the afternoon, you will depart to Ngorongoro and stay overnight at the accommodation located on the Ngorongoro Crater Rim. Overnight at Ngorongoro Lions Paw Lodge.', images: ['https://assets.makisala.com/accommodations/940e029e-7a16-47e3-94da-820c533ae960/1786118628011-lions-paw-exterior-hero-37df5c89ed4d.jpg', 'https://assets.makisala.com/accommodations/940e029e-7a16-47e3-94da-820c533ae960/1786118632406-lions-paw-crater-rim-view-984545dfe7b9.jpg', 'https://assets.makisala.com/accommodations/940e029e-7a16-47e3-94da-820c533ae960/1786118629902-lions-paw-sunset-view-ba9c50863114.jpg', 'https://assets.makisala.com/accommodations/940e029e-7a16-47e3-94da-820c533ae960/1786118636440-lions-paw-lounge-cfb5b274550f.jpg', 'https://assets.makisala.com/accommodations/940e029e-7a16-47e3-94da-820c533ae960/1786118634618-lions-paw-bar-1addbc164a9d.jpg', 'https://assets.makisala.com/accommodations/940e029e-7a16-47e3-94da-820c533ae960/1786118638837-lions-paw-restaurant-morning-13f7233953da.jpg', 'https://assets.makisala.com/accommodations/940e029e-7a16-47e3-94da-820c533ae960/1786118641224-lions-paw-restaurant-set-3d04c1fe310e.jpg', 'https://assets.makisala.com/accommodations/940e029e-7a16-47e3-94da-820c533ae960/1786118642455-lions-paw-bush-dining-3c303ab11c9c.jpg', 'https://assets.makisala.com/accommodations/940e029e-7a16-47e3-94da-820c533ae960/1786118644150-lions-paw-double-room-c8ca7410d0d4.jpg', 'https://assets.makisala.com/accommodations/940e029e-7a16-47e3-94da-820c533ae960/1786118645912-lions-paw-twin-room-2476f0bc6bd1.jpg'], optional: false },
      { days: 'Day 05', place: 'Ngorongoro Crater', nights: 0, bandImage:'https://images.pexels.com/photos/33798297/pexels-photo-33798297.jpeg', note: 'After breakfast, you will descend inside Ngorongoro Crater for game drives. Once you finish game drives, you will transfer to Arusha where you will finish the safari.', optional: false },
    ],
    included: ['Transfers listed in the program', 'Professional English-speaking guide', 'Safari 4×4 jeep Toyota Land Cruiser', 'Mineral water in all safari', 'Single-entry park fees, valid 24 hours', 'Activities listed in the program'],
    excluded: ['International flights', 'Visa', 'Drinks at hotels/lodges/tented camps', 'Laundry service', 'Tipping and personal expenses', 'Anything not explicitly included'],
    gallery: [
      'https://images.unsplash.com/photo-1616128417743-c3a6992a65e7?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1557756006-90a218bcc7e1?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&q=80&auto=format&fit=crop',
    ],
  },
  {
    slug: '5-days-tanzania-family-safari',
    meta: 'Family Safaris · 5 Days / 4 Nights',
    category: 'Family Safaris',
    title: 'Family Mini Safari Get Together',
    packageTitle: '5 Day Comfort Safari Experience',
    packageGroup: 'northern-circuit',
    nights: 4,
    season: 'Jun — Oct',
    priceFrom: '$2,300',
    image: 'https://images.pexels.com/photos/28812642/pexels-photo-28812642.jpeg',
    summary: 'Tarangire, the Serengeti, and the crater, paced for a family — game drives balanced against real downtime at the lodge.',
    days: [
      { days: 'Day 01', place: 'Tarangire', nights: 1, bandImage: 'https://images.pexels.com/photos/34085743/pexels-photo-34085743.jpeg', note: "Upon your arrival at Kilimanjaro International Airport, our representative will greet you and escort you to Tarangire National Park. Known for its large elephant herds and striking baobab trees, Tarangire offers a fantastic start to your safari. Enjoy an afternoon game drive, spotting various wildlife including lions, zebras, and giraffes. As the day ends, relax and enjoy dinner at your lodge within the park. Overnight at Escarpment Luxury Lodge.", images: ['https://assets.makisala.com/accommodations/3dfcd843-1316-41e1-8a93-4a3e92b60118/1786462560616-IMG_0104_11zon-scaled.jpg', 'https://assets.makisala.com/accommodations/3dfcd843-1316-41e1-8a93-4a3e92b60118/1786462560615-escarpmentluxurylodge1_579040510_p_3774418397657113986_1_p_3774418397657113986.png', 'https://assets.makisala.com/accommodations/3dfcd843-1316-41e1-8a93-4a3e92b60118/1786462560614-escarpmentluxurylodge1_20250519_p_3635728330407117496_1_3635728319191594809_11zon.png', 'https://assets.makisala.com/accommodations/3dfcd843-1316-41e1-8a93-4a3e92b60118/1786462560613-EscarpmentLuxuryLodge_183_11zon.jpg', 'https://assets.makisala.com/accommodations/3dfcd843-1316-41e1-8a93-4a3e92b60118/1786462560612-EscarpmentLuxuryLodge_182_11zon-1-scaled.jpg', 'https://assets.makisala.com/accommodations/3dfcd843-1316-41e1-8a93-4a3e92b60118/1786462560611-EscarpmentLuxuryLodge_1811_11zon-1-scaled.jpg', 'https://assets.makisala.com/accommodations/3dfcd843-1316-41e1-8a93-4a3e92b60118/1786462560610-DJI_20250823150214_0298_D_11zon-1-scaled.jpg', 'https://assets.makisala.com/accommodations/3dfcd843-1316-41e1-8a93-4a3e92b60118/1786462560609-An-aerial-view-of-Lake-Manyara-National-Park.jpg', 'https://assets.makisala.com/accommodations/3dfcd843-1316-41e1-8a93-4a3e92b60118/1786462560607-YTE2622_11zon-1-scaled.jpg'], optional: false },
      { days: 'Day 02', place: 'Serengeti', nights: 1, bandImage: 'https://images.pexels.com/photos/29107115/pexels-photo-29107115.jpeg', note: "After a hearty breakfast, drive to Serengeti National Park, one of Africa's most celebrated wildlife sanctuaries. The drive will take you through the scenic landscapes of the Great Rift Valley, offering glimpses of local villages and wildlife. Upon reaching the Serengeti, embark on an afternoon game drive before heading to your lodge for dinner and an overnight stay. Overnight at Moyo Tented Camp.", images: ['https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878366108-MOYO-BKG-1920-03%402x.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878385197-moyo-warangi-platformtent.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878375545-moyo-warangi-diningtable.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878379769-DSC03604.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878389544-DSC03603.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878396505-DJI_0699.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878371380-Moyo-Table-staff.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878373488-moyo-warangi-chair.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878377562-DSC03651.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878381866-DSC03593.webp'], optional: false },
      { days: 'Day 03', place: 'Serengeti', nights: 1, bandImage: 'https://images.pexels.com/photos/16258338/pexels-photo-16258338.jpeg', note: 'Spend the entire day exploring the vast plains of the Serengeti. Morning and afternoon game drives will give you the chance to witness the incredible diversity of wildlife that the park is known for, including the Big Five — lions, leopards, rhinos, elephants, and buffaloes. In the evening, return to your lodge for dinner and a relaxing night. Overnight at Moyo Tented Camp.', images: ['https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878366108-MOYO-BKG-1920-03%402x.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878385197-moyo-warangi-platformtent.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878375545-moyo-warangi-diningtable.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878379769-DSC03604.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878389544-DSC03603.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878396505-DJI_0699.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878371380-Moyo-Table-staff.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878373488-moyo-warangi-chair.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878377562-DSC03651.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878381866-DSC03593.webp'], optional: false },
      { days: 'Day 04', place: 'Ngorongoro', nights: 1, bandImage: 'https://images.pexels.com/photos/28708345/pexels-photo-28708345.jpeg', note: 'After an early morning game drive in the Serengeti, enjoy breakfast and then set out for the Ngorongoro Conservation Area. Upon arrival, descend into the Ngorongoro Crater, a natural wonder and a haven for diverse wildlife, including hippos, flamingos, and rare black rhinos. After your crater tour, head to your lodge on the crater rim for dinner and an overnight stay. Overnight at Marera Valley Lodge.', images: ['https://assets.makisala.com/accommodations/06ac8d86-d1d7-45ad-9b71-aa802260d016/1767879123355-Marera-4170-1030x686.webp', 'https://assets.makisala.com/accommodations/06ac8d86-d1d7-45ad-9b71-aa802260d016/1767879128991-Marera-4128-1030x686.webp', 'https://assets.makisala.com/accommodations/06ac8d86-d1d7-45ad-9b71-aa802260d016/1767879134571-Marera-4132-1030x686.webp', 'https://assets.makisala.com/accommodations/06ac8d86-d1d7-45ad-9b71-aa802260d016/1767879140883-Marera-5403-1030x686.webp', 'https://assets.makisala.com/accommodations/06ac8d86-d1d7-45ad-9b71-aa802260d016/1767879118076-4V8A3579-1030x686.webp', 'https://assets.makisala.com/accommodations/06ac8d86-d1d7-45ad-9b71-aa802260d016/1767879121056-4V8A4344-1030x687.webp', 'https://assets.makisala.com/accommodations/06ac8d86-d1d7-45ad-9b71-aa802260d016/1767879125217-Marera-5656-1030x686.webp', 'https://assets.makisala.com/accommodations/06ac8d86-d1d7-45ad-9b71-aa802260d016/1767879126916-Marera-4177-1030x686.webp', 'https://assets.makisala.com/accommodations/06ac8d86-d1d7-45ad-9b71-aa802260d016/1767879132914-Marera-4139-1030x686.webp', 'https://assets.makisala.com/accommodations/06ac8d86-d1d7-45ad-9b71-aa802260d016/1767879136549-Marera-5240-1030x686.webp'], optional: false },
      { days: 'Day 05', place: 'Arusha', nights: 0, bandImage: 'https://images.pexels.com/photos/16157043/pexels-photo-16157043.jpeg', note: 'On your final day, enjoy breakfast while taking in the breathtaking views of the crater. Afterward, drive back to Arusha, where you can do some last-minute shopping or explore the city before being transferred to Kilimanjaro International Airport for your departure flight. This marks the end of your unforgettable family safari.', optional: false },
    ],
    included: ['All accommodations as per the itinerary', 'Meals as specified (breakfast, lunch, dinner)', 'All park entry fees and government taxes', 'Game drives in a 4×4 safari vehicle with a pop-up roof', 'Services of a professional English-speaking guide', 'All airport transfers', 'Bottled water during game drives', 'Crater tour in Ngorongoro', 'Visit to a Maasai village (if included in the itinerary)'],
    excluded: ['International and domestic flights', 'Visa fees', 'Travel insurance', 'Beverages (alcoholic and non-alcoholic)', 'Optional activities (e.g. hot-air balloon ride in Serengeti)', 'Maasai village visit fee (if opted for)', 'Tips and gratuities', 'Personal expenses (laundry, souvenirs, etc.)', 'Additional meals not mentioned in the itinerary'],
    gallery: [
      'https://images.unsplash.com/photo-1740830591229-10ac8838361f?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1634646350436-e1448c1d4f63?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590523278191-995cbcda646b?w=1200&q=80&auto=format&fit=crop',
    ],
  },
  {
    slug: '6-day-the-great-wildebeest-migration-safari',
    meta: 'Northern Circuit · 6 Days / 5 Nights',
    category: 'Northern Circuit',
    title: '6 Days Experience of the best parks in Tanzania',
    packageTitle: '6-Day Great Wildebeest Migration Safari',
    packageGroup: 'northern-circuit',
    nights: 5,
    season: 'Jun — Sep',
    priceFrom: '$2,900',
    image: 'https://images.pexels.com/photos/13983133/pexels-photo-13983133.jpeg',
    summary: 'A migration-season-only route to the Mara River crossings, finishing with a descent into Ngorongoro for the Big Five. Runs June through September only.',
    days: [
      { days: 'Day 01', place: 'Arusha', bandImage: 'https://images.pexels.com/photos/16157043/pexels-photo-16157043.jpeg', nights: 1, note: 'We will arrange for your pick up from the airport and transfer you to the hotel. There is an optional detour to Arusha city where you can explore the city and prepare for your tour the next day. Later in the evening, there will be a briefing session about your tour. You will also have the option to go for a small hike to Kilima Moto and enjoy the beautiful sunset view. Overnight at Tulia Boutique Hotel & Spa.', images: ['https://assets.makisala.com/accommodations/90e9468a-7178-4222-95ee-3bf81bfe290a/boutique-01.webp', 'https://assets.makisala.com/accommodations/90e9468a-7178-4222-95ee-3bf81bfe290a/boutique-02.webp', 'https://assets.makisala.com/accommodations/90e9468a-7178-4222-95ee-3bf81bfe290a/boutique-04.webp', 'https://assets.makisala.com/accommodations/90e9468a-7178-4222-95ee-3bf81bfe290a/boutique-06.webp', 'https://assets.makisala.com/accommodations/90e9468a-7178-4222-95ee-3bf81bfe290a/boutique-07.webp', 'https://assets.makisala.com/accommodations/90e9468a-7178-4222-95ee-3bf81bfe290a/boutique-08.webp', 'https://assets.makisala.com/accommodations/90e9468a-7178-4222-95ee-3bf81bfe290a/boutique-09.webp', 'https://assets.makisala.com/accommodations/90e9468a-7178-4222-95ee-3bf81bfe290a/boutique-10.webp', 'https://assets.makisala.com/accommodations/90e9468a-7178-4222-95ee-3bf81bfe290a/boutique-12.webp', 'https://assets.makisala.com/accommodations/90e9468a-7178-4222-95ee-3bf81bfe290a/boutique-15.webp'], optional: false },
      { days: 'Day 02', place: 'Ngorongoro Highlands → Serengeti', nights: 1, bandImage: 'https://images.pexels.com/photos/29107115/pexels-photo-29107115.jpeg', note: "After breakfast, you will travel to the Serengeti National Park which is one of Africa's premier game parks. Driving through the Ngorongoro Conservation Area toward the Serengeti National Park, you will begin to experience the vastness of this territory and marvel at the multitude of animal and bird life while cruising through this acacia-spotted savannah. Overnight at Moyo Tented Camp.", images: ['https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878366108-MOYO-BKG-1920-03%402x.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878385197-moyo-warangi-platformtent.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878375545-moyo-warangi-diningtable.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878379769-DSC03604.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878389544-DSC03603.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878396505-DJI_0699.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878371380-Moyo-Table-staff.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878373488-moyo-warangi-chair.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878377562-DSC03651.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878381866-DSC03593.webp'], optional: false },
      { days: 'Day 03', place: 'Serengeti — the Mara', nights: 1, bandImage: 'https://images.pexels.com/photos/17820242/pexels-photo-17820242.jpeg', note: 'Today, you will venture deeper into the world-famous Serengeti on a full-day game drive in search of the great wildebeest migration. Overnight at Moyo Tented Camp.', images: ['https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878366108-MOYO-BKG-1920-03%402x.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878385197-moyo-warangi-platformtent.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878375545-moyo-warangi-diningtable.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878379769-DSC03604.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878389544-DSC03603.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878396505-DJI_0699.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878371380-Moyo-Table-staff.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878373488-moyo-warangi-chair.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878377562-DSC03651.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878381866-DSC03593.webp'], optional: false },
      { days: 'Day 04', place: 'Serengeti → Ngorongoro', nights: 1, bandImage: 'https://images.pexels.com/photos/28708345/pexels-photo-28708345.jpeg', note: 'Today, you will enjoy another full-day game drive in Central Serengeti. Overnight at Ngorongoro Serena Safari Lodge.', images: ['https://assets.makisala.com/accommodations/2138a428-ab46-4caf-8e92-6ee1fed16b64/17.jpg', 'https://assets.makisala.com/accommodations/2138a428-ab46-4caf-8e92-6ee1fed16b64/21.jpg', 'https://assets.makisala.com/accommodations/2138a428-ab46-4caf-8e92-6ee1fed16b64/16.jpg', 'https://assets.makisala.com/accommodations/2138a428-ab46-4caf-8e92-6ee1fed16b64/2.jpg', 'https://assets.makisala.com/accommodations/2138a428-ab46-4caf-8e92-6ee1fed16b64/1.jpg', 'https://assets.makisala.com/accommodations/2138a428-ab46-4caf-8e92-6ee1fed16b64/8.jpg', 'https://assets.makisala.com/accommodations/2138a428-ab46-4caf-8e92-6ee1fed16b64/15.jpg', 'https://assets.makisala.com/accommodations/2138a428-ab46-4caf-8e92-6ee1fed16b64/13.jpg', 'https://assets.makisala.com/accommodations/2138a428-ab46-4caf-8e92-6ee1fed16b64/20.jpg', 'https://assets.makisala.com/accommodations/2138a428-ab46-4caf-8e92-6ee1fed16b64/12.jpg'], optional: false },
      { days: 'Day 05', place: 'Ngorongoro Crater', nights: 1, bandImage: 'https://images.pexels.com/photos/33798297/pexels-photo-33798297.jpeg', note: 'Today, you will be rewarded with a visit to the stunning Ngorongoro Crater, which became a UNESCO World Heritage Site in 1979. Overnight at Tulia Boutique Hotel & Spa.', images: ['https://assets.makisala.com/accommodations/90e9468a-7178-4222-95ee-3bf81bfe290a/boutique-01.webp', 'https://assets.makisala.com/accommodations/90e9468a-7178-4222-95ee-3bf81bfe290a/boutique-02.webp', 'https://assets.makisala.com/accommodations/90e9468a-7178-4222-95ee-3bf81bfe290a/boutique-04.webp', 'https://assets.makisala.com/accommodations/90e9468a-7178-4222-95ee-3bf81bfe290a/boutique-06.webp', 'https://assets.makisala.com/accommodations/90e9468a-7178-4222-95ee-3bf81bfe290a/boutique-07.webp', 'https://assets.makisala.com/accommodations/90e9468a-7178-4222-95ee-3bf81bfe290a/boutique-08.webp', 'https://assets.makisala.com/accommodations/90e9468a-7178-4222-95ee-3bf81bfe290a/boutique-09.webp', 'https://assets.makisala.com/accommodations/90e9468a-7178-4222-95ee-3bf81bfe290a/boutique-10.webp', 'https://assets.makisala.com/accommodations/90e9468a-7178-4222-95ee-3bf81bfe290a/boutique-12.webp', 'https://assets.makisala.com/accommodations/90e9468a-7178-4222-95ee-3bf81bfe290a/boutique-15.webp'], optional: false },
      { days: 'Day 06', place: 'Arusha', nights: 0, bandImage: 'https://images.pexels.com/photos/16157042/pexels-photo-16157042.jpeg', note: 'Today, you will be transferred to the airport, marking the end of your safari with King Mufasa Expeditions.', optional: false },
    ],
    included: ['Park fees (for non-residents)', 'All activities (unless labelled as optional)', 'Meals (as specified in the day-by-day section)', 'Drinks (as specified in the day-by-day section)', 'All accommodation (unless listed as upgrade)', 'Roundtrip airport transfer', 'A professional driver/guide', 'All transportation (unless labelled as optional)', 'All taxes/VAT'],
    excluded: ['International flights (from/to home)', 'Additional accommodation before and at the end of the tour', 'Tipping and personal items', 'Government-imposed increase of taxes and/or park fees'],
    gallery: [
      'https://images.unsplash.com/photo-1585468274952-66591eb14165?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1521651201144-634f700b36ef?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1504173010664-32509aeebb62?w=1200&q=80&auto=format&fit=crop',
    ],
  },
  {
    slug: '6-days-zanzibar-getaway',
    meta: 'Coast & Islands · 6 Days / 5 Nights',
    category: 'Coast & Islands',
    title: 'The Zanzibar Getaway',
    nights: 5,
    season: 'Jun — Mar',
    priceFrom: 'Price on request',
    image: 'https://images.unsplash.com/photo-1678042956696-e072ff82cff5?w=1600&q=85&auto=format&fit=crop',
    summary: 'Stone Town history, a spice tour, Jozani\'s red colobus monkeys, and a full day sailing on Safari Blue — beach time bookends the lot.',
    days: [
      { days: 'Day 01', place: 'Zanzibar', nights: 1, note: 'Arrival at Abeid Amani Karume International Airport, transfer to a beach resort, and the rest of the day to yourselves.', optional: false },
      { days: 'Day 02', place: 'Stone Town', nights: 1, note: "A guided walk through Stone Town's Sultan's Palace, the House of Wonders, the old slave market, and the narrow market streets between them.", optional: false },
      { days: 'Day 03', place: 'Spice Farm & Jozani Forest', nights: 1, note: "A morning spice-farm visit tracing the island's trading history, then an afternoon walk through Jozani Forest for the endangered red colobus monkey.", optional: false },
      { days: 'Day 04', place: 'Safari Blue', nights: 1, note: 'A full day aboard a traditional dhow — snorkelling the reef, a seafood barbecue on a sandbank, and the ocean the whole way.', optional: false },
      { days: 'Day 05', place: 'Zanzibar', nights: 1, note: 'A free day on the beach — swim, sunbathe, or add kayaking, paddleboarding or a dive.', optional: false },
      { days: 'Day 06', place: 'Zanzibar', nights: 0, note: 'A final unhurried morning before the transfer to the airport.', optional: false },
    ],
    included: ['Airport transfers', 'Beach resort accommodation', 'Daily breakfast and selected meals', 'Guided tours (Stone Town, spice tour, Jozani Forest, Prison Island)'],
    excluded: ['International flights', 'Travel insurance and visa fees', 'Personal expenses (drinks, souvenirs, tips)'],
    gallery: [
      'https://images.unsplash.com/photo-1750784700372-d65667976cde?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516815231560-8f41ec531527?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590523278191-995cbcda646b?w=1200&q=80&auto=format&fit=crop',
    ],
  },
  {
    slug: '7-day-private-luxury-safari-to-tanzania-premier-parks',
    meta: 'Northern Circuit · 7 Days / 6 Nights',
    category: 'Northern Circuit',
    title: '7 Days Tanzania Luxury Safari',
    packageTitle: "7-Day Private Luxury Safari to Tanzania's Premier Parks",
    packageGroup: 'northern-circuit',
    nights: 6,
    season: 'Jun — Oct',
    priceFrom: '$2,700',
    image: 'https://assets.makisala.com/accommodations/bad0db9c-23ae-46b2-994b-4c1254c97fcd/12-nyota-serengeti.jpg',
    summary: 'A private road safari through Tarangire, the Serengeti, and Ngorongoro, with a dedicated driver-guide and top-tier lodges the whole way.',
    days: [
      { days: 'Day 01', place: 'Arusha', bandImage: 'https://images.pexels.com/photos/16157043/pexels-photo-16157043.jpeg',  nights: 1, note: 'Pickup at Kilimanjaro International Airport and a first night at Gran Melia Arusha.', images: ['https://assets.makisala.com/accommodations/aa75a5c7-3e97-4c31-80a2-75406fb6e4a8/1767861025904-104mGranMeliaArusha-Deluxe%20Room%20Mountain%20Meru%20View%20Twin.webp', 'https://assets.makisala.com/accommodations/aa75a5c7-3e97-4c31-80a2-75406fb6e4a8/1767861029933-102oGranMeliaArusha-Deluxe%20Room%20Bathroom.webp', 'https://assets.makisala.com/accommodations/aa75a5c7-3e97-4c31-80a2-75406fb6e4a8/1767861035214-007jGranMeliaArusha-Lobby.webp', 'https://assets.makisala.com/accommodations/aa75a5c7-3e97-4c31-80a2-75406fb6e4a8/1767861042432-002eGranMeliaArusha-General%20Facade.webp', 'https://assets.makisala.com/accommodations/aa75a5c7-3e97-4c31-80a2-75406fb6e4a8/1767861053257-002iGranMeliaArusha-General%20Facade.webp', 'https://assets.makisala.com/accommodations/aa75a5c7-3e97-4c31-80a2-75406fb6e4a8/1767861063434-007aGranMeliaArusha-Lobby.webp', 'https://assets.makisala.com/accommodations/aa75a5c7-3e97-4c31-80a2-75406fb6e4a8/1767861068730-104oGranMeliaArusha-Deluxe%20Room%20Mountain%20Meru%20View.webp', 'https://assets.makisala.com/accommodations/aa75a5c7-3e97-4c31-80a2-75406fb6e4a8/1767861019500-055cGranMeliaArusha-Red%20Level%20Lounge.webp', 'https://assets.makisala.com/accommodations/aa75a5c7-3e97-4c31-80a2-75406fb6e4a8/1767861027695-104cGranMeliaArusha-Deluxe%20Room%20Mountain%20Meru%20View%20twin.webp', 'https://assets.makisala.com/accommodations/aa75a5c7-3e97-4c31-80a2-75406fb6e4a8/1767861031990-104tGranMeliaArusha-Deluxe%20Room%20Mountain%20Meru%20View%20balcony.webp'], optional: false },
      { days: 'Day 02', place: 'Tarangire', bandImage: 'https://images.pexels.com/photos/28359728/pexels-photo-28359728.jpeg', nights: 1, note: 'Into Tarangire for elephant, lion, leopard, buffalo and over 450 recorded bird species. Overnight at Escarpment Luxury Lodge, Mto wa Mbu.', images: ['https://assets.makisala.com/accommodations/3dfcd843-1316-41e1-8a93-4a3e92b60118/1786462560616-IMG_0104_11zon-scaled.jpg', 'https://assets.makisala.com/accommodations/3dfcd843-1316-41e1-8a93-4a3e92b60118/1786462560615-escarpmentluxurylodge1_579040510_p_3774418397657113986_1_p_3774418397657113986.png', 'https://assets.makisala.com/accommodations/3dfcd843-1316-41e1-8a93-4a3e92b60118/1786462560614-escarpmentluxurylodge1_20250519_p_3635728330407117496_1_3635728319191594809_11zon.png', 'https://assets.makisala.com/accommodations/3dfcd843-1316-41e1-8a93-4a3e92b60118/1786462560613-EscarpmentLuxuryLodge_183_11zon.jpg', 'https://assets.makisala.com/accommodations/3dfcd843-1316-41e1-8a93-4a3e92b60118/1786462560612-EscarpmentLuxuryLodge_182_11zon-1-scaled.jpg', 'https://assets.makisala.com/accommodations/3dfcd843-1316-41e1-8a93-4a3e92b60118/1786462560611-EscarpmentLuxuryLodge_1811_11zon-1-scaled.jpg', 'https://assets.makisala.com/accommodations/3dfcd843-1316-41e1-8a93-4a3e92b60118/1786462560610-DJI_20250823150214_0298_D_11zon-1-scaled.jpg', 'https://assets.makisala.com/accommodations/3dfcd843-1316-41e1-8a93-4a3e92b60118/1786462560609-An-aerial-view-of-Lake-Manyara-National-Park.jpg', 'https://assets.makisala.com/accommodations/3dfcd843-1316-41e1-8a93-4a3e92b60118/1786462560607-YTE2622_11zon-1-scaled.jpg'], optional: false },
      { days: 'Day 03 — 04', place: 'Serengeti', nights: 2, bandImage: 'https://images.pexels.com/photos/29107115/pexels-photo-29107115.jpeg', note: 'Across the endless plains to the Serengeti, home to over 1.5 million wildebeest, zebra and gazelle alongside the Big Five. Dawn and dusk game drives from a private camp. Overnight at Nyota Luxury Camp.', images: ['https://assets.makisala.com/accommodations/bad0db9c-23ae-46b2-994b-4c1254c97fcd/01-nyota-serengeti.jpg', 'https://assets.makisala.com/accommodations/bad0db9c-23ae-46b2-994b-4c1254c97fcd/02-nyota-serengeti.jpg', 'https://assets.makisala.com/accommodations/bad0db9c-23ae-46b2-994b-4c1254c97fcd/03-nyota-serengeti.jpg', 'https://assets.makisala.com/accommodations/bad0db9c-23ae-46b2-994b-4c1254c97fcd/04-nyota-serengeti.jpg', 'https://assets.makisala.com/accommodations/bad0db9c-23ae-46b2-994b-4c1254c97fcd/05-nyota-serengeti.jpg', 'https://assets.makisala.com/accommodations/bad0db9c-23ae-46b2-994b-4c1254c97fcd/06-nyota-serengeti.jpg', 'https://assets.makisala.com/accommodations/bad0db9c-23ae-46b2-994b-4c1254c97fcd/07-nyota-serengeti.jpg', 'https://assets.makisala.com/accommodations/bad0db9c-23ae-46b2-994b-4c1254c97fcd/08-nyota-serengeti.jpg', 'https://assets.makisala.com/accommodations/bad0db9c-23ae-46b2-994b-4c1254c97fcd/09-nyota-serengeti.jpg', 'https://assets.makisala.com/accommodations/bad0db9c-23ae-46b2-994b-4c1254c97fcd/10-nyota-serengeti.jpg'], optional: false },
      { days: 'Day 05', place: 'Ngorongoro', nights: 1, bandImage: 'https://images.pexels.com/photos/28708345/pexels-photo-28708345.jpeg', note: 'Evening transfer to the crater rim. Overnight at Ngorongoro Serena Lodge.', images: ['https://assets.makisala.com/accommodations/2138a428-ab46-4caf-8e92-6ee1fed16b64/17.jpg', 'https://assets.makisala.com/accommodations/2138a428-ab46-4caf-8e92-6ee1fed16b64/21.jpg', 'https://assets.makisala.com/accommodations/2138a428-ab46-4caf-8e92-6ee1fed16b64/16.jpg', 'https://assets.makisala.com/accommodations/2138a428-ab46-4caf-8e92-6ee1fed16b64/2.jpg', 'https://assets.makisala.com/accommodations/2138a428-ab46-4caf-8e92-6ee1fed16b64/1.jpg', 'https://assets.makisala.com/accommodations/2138a428-ab46-4caf-8e92-6ee1fed16b64/8.jpg', 'https://assets.makisala.com/accommodations/2138a428-ab46-4caf-8e92-6ee1fed16b64/15.jpg', 'https://assets.makisala.com/accommodations/2138a428-ab46-4caf-8e92-6ee1fed16b64/13.jpg', 'https://assets.makisala.com/accommodations/2138a428-ab46-4caf-8e92-6ee1fed16b64/20.jpg', 'https://assets.makisala.com/accommodations/2138a428-ab46-4caf-8e92-6ee1fed16b64/12.jpg'], optional: false },
      { days: 'Day 06', place: 'Ngorongoro Crater', nights: 1, bandImage: 'https://images.pexels.com/photos/33798297/pexels-photo-33798297.jpeg', note: 'A full day on the crater floor for leopard, buffalo, zebra and black rhinoceros. Overnight at Forest Hill Lodge, Arusha.', optional: false },
      { days: 'Day 07', place: 'Arusha', bandImage: 'https://images.pexels.com/photos/16157043/pexels-photo-16157043.jpeg', nights: 0, note: 'Transfer to Kilimanjaro International Airport for the departure flight.', optional: false },
    ],
    included: ['All activities and accommodation', 'A professional driver-guide and park fees', 'All transportation at destination', 'Meals, water and house soft drinks'],
    excluded: ['International flights and visa', 'Personal items and tips'],
    gallery: [
      'https://images.unsplash.com/photo-1557756006-90a218bcc7e1?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1521651201144-634f700b36ef?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1772175007897-0a4927cf4531?w=1200&q=80&auto=format&fit=crop',
    ],
  },
  {
    slug: '7-day-tanzania-drive-in-fly-out-luxury-safari',
    meta: 'Northern Circuit · 7 Days / 6 Nights',
    category: 'Northern Circuit',
    title: '7 Day Game Drive Safari & Fly Out',
    packageTitle: '7-Day Tanzania Drive-In Fly-Out Luxury Safari',
    packageGroup: 'northern-circuit',
    nights: 6,
    season: 'Jun — Oct',
    priceFrom: '$5,500',
    image: 'https://assets.makisala.com/accommodations/a53c734d-50ca-4221-b4db-c4fa27eeaa52/2.jpg',
    summary: 'Tarangire, Lake Manyara, Ngorongoro and the Serengeti by road, flying out from Seronera airstrip instead of retracing the drive.',
    days: [
      { days: 'Day 01', place: 'Arusha', bandImage: 'https://images.pexels.com/photos/16157043/pexels-photo-16157043.jpeg', nights: 1, note: 'We will pick you up from the airport, then transfer you to the hotel with an optional detour to Arusha city to sightsee the city & prepare for your trip the next day. Overnight at Grand Melia Arusha.', images: ['https://assets.makisala.com/accommodations/aa75a5c7-3e97-4c31-80a2-75406fb6e4a8/1767861025904-104mGranMeliaArusha-Deluxe%20Room%20Mountain%20Meru%20View%20Twin.webp', 'https://assets.makisala.com/accommodations/aa75a5c7-3e97-4c31-80a2-75406fb6e4a8/1767861029933-102oGranMeliaArusha-Deluxe%20Room%20Bathroom.webp', 'https://assets.makisala.com/accommodations/aa75a5c7-3e97-4c31-80a2-75406fb6e4a8/1767861035214-007jGranMeliaArusha-Lobby.webp', 'https://assets.makisala.com/accommodations/aa75a5c7-3e97-4c31-80a2-75406fb6e4a8/1767861042432-002eGranMeliaArusha-General%20Facade.webp', 'https://assets.makisala.com/accommodations/aa75a5c7-3e97-4c31-80a2-75406fb6e4a8/1767861053257-002iGranMeliaArusha-General%20Facade.webp', 'https://assets.makisala.com/accommodations/aa75a5c7-3e97-4c31-80a2-75406fb6e4a8/1767861063434-007aGranMeliaArusha-Lobby.webp', 'https://assets.makisala.com/accommodations/aa75a5c7-3e97-4c31-80a2-75406fb6e4a8/1767861068730-104oGranMeliaArusha-Deluxe%20Room%20Mountain%20Meru%20View.webp', 'https://assets.makisala.com/accommodations/aa75a5c7-3e97-4c31-80a2-75406fb6e4a8/1767861019500-055cGranMeliaArusha-Red%20Level%20Lounge.webp', 'https://assets.makisala.com/accommodations/aa75a5c7-3e97-4c31-80a2-75406fb6e4a8/1767861027695-104cGranMeliaArusha-Deluxe%20Room%20Mountain%20Meru%20View%20twin.webp', 'https://assets.makisala.com/accommodations/aa75a5c7-3e97-4c31-80a2-75406fb6e4a8/1767861031990-104tGranMeliaArusha-Deluxe%20Room%20Mountain%20Meru%20View%20balcony.webp'], optional: false },
      { days: 'Day 02', place: 'Tarangire', bandImage: 'https://images.pexels.com/photos/28359728/pexels-photo-28359728.jpeg', nights: 1, note: 'You will be picked up at 7:30 am and after being familiar with the guide, you will drive to Tarangire (a 2-hour drive), famous for its diverse landscape. Overnight at Maramboi Tented Lodge.', images: ['https://assets.makisala.com/accommodations/1767dcf3-bfdc-4556-8e53-e7c90cd328c1/2.jpg', 'https://assets.makisala.com/accommodations/1767dcf3-bfdc-4556-8e53-e7c90cd328c1/25.jpg', 'https://assets.makisala.com/accommodations/1767dcf3-bfdc-4556-8e53-e7c90cd328c1/8.jpg', 'https://assets.makisala.com/accommodations/1767dcf3-bfdc-4556-8e53-e7c90cd328c1/20.jpg', 'https://assets.makisala.com/accommodations/1767dcf3-bfdc-4556-8e53-e7c90cd328c1/14.jpg', 'https://assets.makisala.com/accommodations/1767dcf3-bfdc-4556-8e53-e7c90cd328c1/17.jpg', 'https://assets.makisala.com/accommodations/1767dcf3-bfdc-4556-8e53-e7c90cd328c1/16.jpg', 'https://assets.makisala.com/accommodations/1767dcf3-bfdc-4556-8e53-e7c90cd328c1/1.jpg', 'https://assets.makisala.com/accommodations/1767dcf3-bfdc-4556-8e53-e7c90cd328c1/3.jpg', 'https://assets.makisala.com/accommodations/1767dcf3-bfdc-4556-8e53-e7c90cd328c1/5.jpg'], optional: false },
      { days: 'Day 03', place: 'Lake Manyara', nights: 1, note: 'After breakfast, you will enjoy the lodge seeing wildlife adjacent to the lodge then continue with activities outside of Lake Manyara visiting local farms. Overnight at Maramboi Tented Lodge.', bandImage: 'https://images.pexels.com/photos/32459724/pexels-photo-32459724.jpeg', images: ['https://assets.makisala.com/accommodations/1767dcf3-bfdc-4556-8e53-e7c90cd328c1/2.jpg', 'https://assets.makisala.com/accommodations/1767dcf3-bfdc-4556-8e53-e7c90cd328c1/25.jpg', 'https://assets.makisala.com/accommodations/1767dcf3-bfdc-4556-8e53-e7c90cd328c1/8.jpg', 'https://assets.makisala.com/accommodations/1767dcf3-bfdc-4556-8e53-e7c90cd328c1/20.jpg', 'https://assets.makisala.com/accommodations/1767dcf3-bfdc-4556-8e53-e7c90cd328c1/14.jpg', 'https://assets.makisala.com/accommodations/1767dcf3-bfdc-4556-8e53-e7c90cd328c1/17.jpg', 'https://assets.makisala.com/accommodations/1767dcf3-bfdc-4556-8e53-e7c90cd328c1/16.jpg', 'https://assets.makisala.com/accommodations/1767dcf3-bfdc-4556-8e53-e7c90cd328c1/1.jpg', 'https://assets.makisala.com/accommodations/1767dcf3-bfdc-4556-8e53-e7c90cd328c1/3.jpg', 'https://assets.makisala.com/accommodations/1767dcf3-bfdc-4556-8e53-e7c90cd328c1/5.jpg'], optional: false },
      { days: 'Day 04', place: 'Ngorongoro', nights: 1, bandImage: 'https://images.pexels.com/photos/28708345/pexels-photo-28708345.jpeg', note: 'After breakfast, you will go to the Ngorongoro crater, you will descend this beautiful caldera & do a game drive in the early evening. Overnight at Ngorongoro Serena Safari Lodge.', images: ['https://assets.makisala.com/accommodations/2138a428-ab46-4caf-8e92-6ee1fed16b64/17.jpg', 'https://assets.makisala.com/accommodations/2138a428-ab46-4caf-8e92-6ee1fed16b64/21.jpg', 'https://assets.makisala.com/accommodations/2138a428-ab46-4caf-8e92-6ee1fed16b64/16.jpg', 'https://assets.makisala.com/accommodations/2138a428-ab46-4caf-8e92-6ee1fed16b64/2.jpg', 'https://assets.makisala.com/accommodations/2138a428-ab46-4caf-8e92-6ee1fed16b64/1.jpg', 'https://assets.makisala.com/accommodations/2138a428-ab46-4caf-8e92-6ee1fed16b64/8.jpg', 'https://assets.makisala.com/accommodations/2138a428-ab46-4caf-8e92-6ee1fed16b64/15.jpg', 'https://assets.makisala.com/accommodations/2138a428-ab46-4caf-8e92-6ee1fed16b64/13.jpg', 'https://assets.makisala.com/accommodations/2138a428-ab46-4caf-8e92-6ee1fed16b64/20.jpg', 'https://assets.makisala.com/accommodations/2138a428-ab46-4caf-8e92-6ee1fed16b64/12.jpg'], optional: false },
      { days: 'Day 05', place: 'Serengeti', nights: 1, bandImage: 'https://images.pexels.com/photos/29107115/pexels-photo-29107115.jpeg', note: 'After breakfast, you will continue with the drive to Serengeti arriving in the early afternoon where you will check in at the lodge & relax. Overnight at Kubu Kubu Tented Lodge.', images: ['https://assets.makisala.com/accommodations/a53c734d-50ca-4221-b4db-c4fa27eeaa52/14.jpg', 'https://assets.makisala.com/accommodations/a53c734d-50ca-4221-b4db-c4fa27eeaa52/9.jpg', 'https://assets.makisala.com/accommodations/a53c734d-50ca-4221-b4db-c4fa27eeaa52/4.jpg', 'https://assets.makisala.com/accommodations/a53c734d-50ca-4221-b4db-c4fa27eeaa52/12.jpg', 'https://assets.makisala.com/accommodations/a53c734d-50ca-4221-b4db-c4fa27eeaa52/13.jpg', 'https://assets.makisala.com/accommodations/a53c734d-50ca-4221-b4db-c4fa27eeaa52/19.jpg', 'https://assets.makisala.com/accommodations/a53c734d-50ca-4221-b4db-c4fa27eeaa52/24.jpg', 'https://assets.makisala.com/accommodations/a53c734d-50ca-4221-b4db-c4fa27eeaa52/25.jpg', 'https://assets.makisala.com/accommodations/a53c734d-50ca-4221-b4db-c4fa27eeaa52/3.jpg', 'https://assets.makisala.com/accommodations/a53c734d-50ca-4221-b4db-c4fa27eeaa52/1.jpg'], optional: false },
      { days: 'Day 06', place: 'Serengeti', nights: 1, bandImage: 'https://images.pexels.com/photos/19530816/pexels-photo-19530816.jpeg', note: 'On this day you will continue with an early morning game drive, with an option to go out the whole day or break up game drives. Overnight at Kubu Kubu Tented Lodge.', images: ['https://assets.makisala.com/accommodations/a53c734d-50ca-4221-b4db-c4fa27eeaa52/14.jpg', 'https://assets.makisala.com/accommodations/a53c734d-50ca-4221-b4db-c4fa27eeaa52/9.jpg', 'https://assets.makisala.com/accommodations/a53c734d-50ca-4221-b4db-c4fa27eeaa52/4.jpg', 'https://assets.makisala.com/accommodations/a53c734d-50ca-4221-b4db-c4fa27eeaa52/12.jpg', 'https://assets.makisala.com/accommodations/a53c734d-50ca-4221-b4db-c4fa27eeaa52/13.jpg', 'https://assets.makisala.com/accommodations/a53c734d-50ca-4221-b4db-c4fa27eeaa52/19.jpg', 'https://assets.makisala.com/accommodations/a53c734d-50ca-4221-b4db-c4fa27eeaa52/24.jpg', 'https://assets.makisala.com/accommodations/a53c734d-50ca-4221-b4db-c4fa27eeaa52/25.jpg', 'https://assets.makisala.com/accommodations/a53c734d-50ca-4221-b4db-c4fa27eeaa52/3.jpg', 'https://assets.makisala.com/accommodations/a53c734d-50ca-4221-b4db-c4fa27eeaa52/1.jpg'], optional: false },
      { days: 'Day 07', place: 'Serengeti', nights: 0, bandImage: 'https://images.pexels.com/photos/16258338/pexels-photo-16258338.jpeg', note: 'On this day you will start early carrying all your luggage and enjoying the sunrise game drive, later on, head towards Seronera airstrip.', optional: false },
    ],
    included: ['All park entrances', 'Accommodation', 'Meals & water', 'Soft drinks (beers & wine)', 'Professional safari guide', 'Safari jeep 4x4 with pop up roof'],
    excluded: ['Tips', 'Visas', 'Items of personal nature'],
    gallery: [
      'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1585468274952-66591eb14165?w=1200&q=80&auto=format&fit=crop',
    ],
  },
  {
    slug: '7-days-tanzania-family-safari',
    meta: 'Family Safaris · 7 Days / 6 Nights',
    category: 'Family Safaris',
    title: '7 Days Family Safari in Northern Tanzania',
    packageTitle: '7 Day the big five safari Serengeti and Ngorongoro',
    packageGroup: 'northern-circuit',
    nights: 6,
    season: 'Jun — Oct',
    priceFrom: '$3,100',
    image: 'https://images.pexels.com/photos/34085743/pexels-photo-34085743.jpeg',
    summary: 'A week through Tarangire, the Serengeti, and Ngorongoro, built for comfort, safety and excitement in equal measure.',
    days: [
      { days: 'Day 01', place: 'Arusha', bandImage: 'https://images.pexels.com/photos/16157043/pexels-photo-16157043.jpeg', nights: 1, note: 'Upon your arrival at Kilimanjaro International Airport, you will be warmly welcomed by our representative and transferred to your hotel in Arusha. Overnight at Njiro Legacy.', images: ['https://assets.makisala.com/accommodations/c9d7d124-cfb4-4089-8a62-00539aeb4a1e/2-pool-garden-night-web.jpg', 'https://assets.makisala.com/accommodations/c9d7d124-cfb4-4089-8a62-00539aeb4a1e/3-award-pool.jpg', 'https://assets.makisala.com/accommodations/c9d7d124-cfb4-4089-8a62-00539aeb4a1e/4-executive-room-web.jpg', 'https://assets.makisala.com/accommodations/c9d7d124-cfb4-4089-8a62-00539aeb4a1e/5-standard-room-web.jpg', 'https://assets.makisala.com/accommodations/c9d7d124-cfb4-4089-8a62-00539aeb4a1e/6-twin-room-web.jpg', 'https://assets.makisala.com/accommodations/c9d7d124-cfb4-4089-8a62-00539aeb4a1e/7-award-room-comfort.jpg', 'https://assets.makisala.com/accommodations/c9d7d124-cfb4-4089-8a62-00539aeb4a1e/8-award-room-suite.jpg', 'https://assets.makisala.com/accommodations/c9d7d124-cfb4-4089-8a62-00539aeb4a1e/9-award-corridor.jpg', 'https://assets.makisala.com/accommodations/c9d7d124-cfb4-4089-8a62-00539aeb4a1e/10-conference-hall-web.jpg', 'https://assets.makisala.com/accommodations/c9d7d124-cfb4-4089-8a62-00539aeb4a1e/11-instagram-legacy-1.jpg'], optional: false },
      { days: 'Day 02', place: 'Tarangire',bandImage: 'https://images.pexels.com/photos/28359728/pexels-photo-28359728.jpeg', nights: 1, note: 'After a hearty breakfast, you will embark on a scenic drive to Tarangire National Park. Known for its large elephant population and baobab trees, Tarangire offers a full day of game viewing. Overnight at Escarpment Luxury Lodge.', images: ['https://assets.makisala.com/accommodations/3dfcd843-1316-41e1-8a93-4a3e92b60118/1786462560616-IMG_0104_11zon-scaled.jpg', 'https://assets.makisala.com/accommodations/3dfcd843-1316-41e1-8a93-4a3e92b60118/1786462560615-escarpmentluxurylodge1_579040510_p_3774418397657113986_1_p_3774418397657113986.png', 'https://assets.makisala.com/accommodations/3dfcd843-1316-41e1-8a93-4a3e92b60118/1786462560614-escarpmentluxurylodge1_20250519_p_3635728330407117496_1_3635728319191594809_11zon.png', 'https://assets.makisala.com/accommodations/3dfcd843-1316-41e1-8a93-4a3e92b60118/1786462560613-EscarpmentLuxuryLodge_183_11zon.jpg', 'https://assets.makisala.com/accommodations/3dfcd843-1316-41e1-8a93-4a3e92b60118/1786462560612-EscarpmentLuxuryLodge_182_11zon-1-scaled.jpg', 'https://assets.makisala.com/accommodations/3dfcd843-1316-41e1-8a93-4a3e92b60118/1786462560611-EscarpmentLuxuryLodge_1811_11zon-1-scaled.jpg', 'https://assets.makisala.com/accommodations/3dfcd843-1316-41e1-8a93-4a3e92b60118/1786462560610-DJI_20250823150214_0298_D_11zon-1-scaled.jpg', 'https://assets.makisala.com/accommodations/3dfcd843-1316-41e1-8a93-4a3e92b60118/1786462560609-An-aerial-view-of-Lake-Manyara-National-Park.jpg', 'https://assets.makisala.com/accommodations/3dfcd843-1316-41e1-8a93-4a3e92b60118/1786462560607-YTE2622_11zon-1-scaled.jpg'], optional: false },
      { days: 'Day 03', place: 'Serengeti', nights: 1, bandImage: 'https://images.pexels.com/photos/29107115/pexels-photo-29107115.jpeg', note: 'Begin your day with an early breakfast before setting off on a journey to Serengeti National Park. The drive takes you through stunning landscapes, with opportunities for game viewing along the way. Overnight at Moyo Tented Camp.', images: ['https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878366108-MOYO-BKG-1920-03%402x.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878385197-moyo-warangi-platformtent.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878375545-moyo-warangi-diningtable.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878379769-DSC03604.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878389544-DSC03603.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878396505-DJI_0699.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878371380-Moyo-Table-staff.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878373488-moyo-warangi-chair.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878377562-DSC03651.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878381866-DSC03593.webp'], optional: false },
      { days: 'Day 04', place: 'Serengeti', nights: 1, bandImage: 'https://images.pexels.com/photos/29107115/pexels-photo-29107115.jpeg', note: "Today is dedicated to exploring the vast plains of Serengeti National Park. You'll spend the entire day on a game drive, seeking out the Big Five and other incredible wildlife. Overnight at Moyo Tented Luxury Camp.", images: ['https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878366108-MOYO-BKG-1920-03%402x.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878385197-moyo-warangi-platformtent.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878375545-moyo-warangi-diningtable.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878379769-DSC03604.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878389544-DSC03603.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878396505-DJI_0699.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878371380-Moyo-Table-staff.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878373488-moyo-warangi-chair.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878377562-DSC03651.webp', 'https://assets.makisala.com/accommodations/3bcefc6b-2bd8-4272-a7af-f3c419fba0aa/1767878381866-DSC03593.webp'], optional: false },
      { days: 'Day 05', place: 'Ngorongoro', nights: 1, bandImage: 'https://images.pexels.com/photos/28708345/pexels-photo-28708345.jpeg', note: "Start your day with an early morning game drive in Serengeti, followed by breakfast at the lodge. Afterward, you'll journey to the Ngorongoro Conservation Area. Overnight at Ngorongoro Lions Paw.", images: ['https://assets.makisala.com/accommodations/940e029e-7a16-47e3-94da-820c533ae960/1786118628011-lions-paw-exterior-hero-37df5c89ed4d.jpg', 'https://assets.makisala.com/accommodations/940e029e-7a16-47e3-94da-820c533ae960/1786118632406-lions-paw-crater-rim-view-984545dfe7b9.jpg', 'https://assets.makisala.com/accommodations/940e029e-7a16-47e3-94da-820c533ae960/1786118629902-lions-paw-sunset-view-ba9c50863114.jpg', 'https://assets.makisala.com/accommodations/940e029e-7a16-47e3-94da-820c533ae960/1786118636440-lions-paw-lounge-cfb5b274550f.jpg', 'https://assets.makisala.com/accommodations/940e029e-7a16-47e3-94da-820c533ae960/1786118634618-lions-paw-bar-1addbc164a9d.jpg', 'https://assets.makisala.com/accommodations/940e029e-7a16-47e3-94da-820c533ae960/1786118638837-lions-paw-restaurant-morning-13f7233953da.jpg', 'https://assets.makisala.com/accommodations/940e029e-7a16-47e3-94da-820c533ae960/1786118641224-lions-paw-restaurant-set-3d04c1fe310e.jpg', 'https://assets.makisala.com/accommodations/940e029e-7a16-47e3-94da-820c533ae960/1786118642455-lions-paw-bush-dining-3c303ab11c9c.jpg', 'https://assets.makisala.com/accommodations/940e029e-7a16-47e3-94da-820c533ae960/1786118644150-lions-paw-double-room-c8ca7410d0d4.jpg', 'https://assets.makisala.com/accommodations/940e029e-7a16-47e3-94da-820c533ae960/1786118645912-lions-paw-twin-room-2476f0bc6bd1.jpg'], optional: false },
      { days: 'Day 06', place: 'Ngorongoro Crater', nights: 1, bandImage: 'https://images.pexels.com/photos/33798297/pexels-photo-33798297.jpeg', note: 'After an early breakfast, descend into the Ngorongoro Crater for a thrilling game drive. The crater is home to a diverse range of wildlife. Overnight at Gran Melia Arusha.', images: ['https://assets.makisala.com/accommodations/aa75a5c7-3e97-4c31-80a2-75406fb6e4a8/1767861025904-104mGranMeliaArusha-Deluxe%20Room%20Mountain%20Meru%20View%20Twin.webp', 'https://assets.makisala.com/accommodations/aa75a5c7-3e97-4c31-80a2-75406fb6e4a8/1767861029933-102oGranMeliaArusha-Deluxe%20Room%20Bathroom.webp', 'https://assets.makisala.com/accommodations/aa75a5c7-3e97-4c31-80a2-75406fb6e4a8/1767861035214-007jGranMeliaArusha-Lobby.webp', 'https://assets.makisala.com/accommodations/aa75a5c7-3e97-4c31-80a2-75406fb6e4a8/1767861042432-002eGranMeliaArusha-General%20Facade.webp', 'https://assets.makisala.com/accommodations/aa75a5c7-3e97-4c31-80a2-75406fb6e4a8/1767861053257-002iGranMeliaArusha-General%20Facade.webp', 'https://assets.makisala.com/accommodations/aa75a5c7-3e97-4c31-80a2-75406fb6e4a8/1767861063434-007aGranMeliaArusha-Lobby.webp', 'https://assets.makisala.com/accommodations/aa75a5c7-3e97-4c31-80a2-75406fb6e4a8/1767861068730-104oGranMeliaArusha-Deluxe%20Room%20Mountain%20Meru%20View.webp', 'https://assets.makisala.com/accommodations/aa75a5c7-3e97-4c31-80a2-75406fb6e4a8/1767861019500-055cGranMeliaArusha-Red%20Level%20Lounge.webp', 'https://assets.makisala.com/accommodations/aa75a5c7-3e97-4c31-80a2-75406fb6e4a8/1767861027695-104cGranMeliaArusha-Deluxe%20Room%20Mountain%20Meru%20View%20twin.webp', 'https://assets.makisala.com/accommodations/aa75a5c7-3e97-4c31-80a2-75406fb6e4a8/1767861031990-104tGranMeliaArusha-Deluxe%20Room%20Mountain%20Meru%20View%20balcony.webp'], optional: false },
      { days: 'Day 07', place: 'Arusha', bandImage: 'https://images.pexels.com/photos/16157043/pexels-photo-16157043.jpeg', nights: 0, note: "After breakfast, you'll drive back to Arusha. If time permits, enjoy some shopping at local markets before being transferred to Kilimanjaro International Airport.", optional: false },
    ],
    included: ['All accommodations as per the itinerary', 'Meals as specified', 'All park entry fees', 'Game drives in a 4×4 safari vehicle', 'Services of a professional English-speaking guide', 'All airport transfers', 'Bottled water during game drives'],
    excluded: ['International and domestic flights', 'Visa fees', 'Travel insurance', 'Beverages', 'Optional activities', 'Tips and gratuities', 'Personal expenses'],
    gallery: [
      'https://images.unsplash.com/photo-1634646350436-e1448c1d4f63?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590523278191-995cbcda646b?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1766603636766-1f4662469448?w=1200&q=80&auto=format&fit=crop',
    ],
  },
  {
    slug: '7-days-zanzibar-island-safari',
    meta: 'Coast & Islands · 7 Days / 6 Nights',
    category: 'Coast & Islands',
    title: 'Zanzibar, Full Circle',
    nights: 6,
    season: 'Jun — Mar',
    priceFrom: 'Price on request',
    image: 'https://images.unsplash.com/photo-1634646350433-fe03ad698448?w=1600&q=85&auto=format&fit=crop',
    summary: "Stone Town, Prison Island, a full day under sail on Safari Blue, Jozani Forest, and the beach at Nungwi — the island, start to finish.",
    days: [
      { days: 'Day 01', place: 'Stone Town', nights: 1, note: 'Arrival and transfer into Stone Town, an afternoon among its UNESCO-listed streets, and a traditional Swahili dinner.', optional: false },
      { days: 'Day 02', place: 'Stone Town & Spice Farm', nights: 1, note: 'A guided walk through the House of Wonders, the Old Fort and the former slave market, then an afternoon spice-plantation visit with tropical fruit tasting.', optional: false },
      { days: 'Day 03', place: 'Prison Island', nights: 1, note: 'A boat out to Prison Island for the giant Aldabra tortoises, then on to Nakupenda Sandbank for snorkelling and a seafood lunch.', optional: false },
      { days: 'Day 04', place: 'Safari Blue', nights: 1, note: 'A full day under sail on a traditional dhow — lagoons, sandbanks, coral reef, and a seafood feast beneath the baobabs on a secluded island.', optional: false },
      { days: 'Day 05', place: 'Jozani Forest', nights: 1, note: "A morning in Jozani Chwaka Bay, Zanzibar's only national park, for red colobus monkey and mangrove forest, lunch at The Rock Restaurant out in the ocean.", optional: false },
      { days: 'Day 06', place: 'Nungwi / Kendwa', nights: 1, note: "A free day on the island's white sand in the north, with optional snorkelling, diving, or a sunset dhow cruise.", optional: false },
      { days: 'Day 07', place: 'Zanzibar', nights: 0, note: 'A final breakfast before the transfer to the airport.', optional: false },
    ],
    included: ['Six nights\' accommodation', 'Daily meals as listed', 'Guided tours and entrance fees', 'Airport transfers'],
    excluded: ['International and domestic flights', 'Personal expenses and travel insurance', 'Optional activities'],
    gallery: [
      'https://images.unsplash.com/photo-1516815231560-8f41ec531527?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590523278191-995cbcda646b?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1766603636766-1f4662469448?w=1200&q=80&auto=format&fit=crop',
    ],
  },
  {
    slug: '9-days-in-the-footsteps-of-king-mufasa',
    meta: 'Northern Circuit · 9 Days / 8 Nights',
    category: 'Northern Circuit',
    title: 'In the Footsteps of King Mufasa',
    nights: 8,
    season: 'Jun — Oct',
    priceFrom: 'Price on request',
    image: 'https://assets.makisala.com/accommodations/a53c734d-50ca-4221-b4db-c4fa27eeaa52/6.jpg',
    summary: 'Our fullest northern route — Arusha National Park, Tarangire, the Serengeti, Ngorongoro, and Lake Manyara — private and fully customisable, beginning and ending in Arusha.',
    days: [
      { days: 'Day 01', place: 'Arusha', nights: 1, note: 'Airport transfer, with an optional city tour, Maasai market visit and first taste of the culture.', optional: false },
      { days: 'Day 02', place: 'Arusha National Park', nights: 1, note: 'A game drive for zebra, giraffe and buffalo, with an optional walking safari and canoe out on the Momela lakes. Return to Arusha for the night.', optional: false },
      { days: 'Day 03', place: 'Tarangire', nights: 1, note: "Into Tarangire for its elephant herds and birdlife. Overnight in Mto wa Mbu.", optional: false },
      { days: 'Day 04', place: 'To the Serengeti', nights: 1, bandImage: 'https://images.pexels.com/photos/29107115/pexels-photo-29107115.jpeg', note: 'A drive through the Ngorongoro Crater highlands en route to a campsite in central Serengeti.', optional: false },
      { days: 'Day 05', place: 'Serengeti', nights: 1, bandImage: 'https://images.pexels.com/photos/29107115/pexels-photo-29107115.jpeg', note: 'A full day of game viewing — lion, leopard, elephant, and the migrating herds — with an optional balloon safari or a visit to Moru Kopjes for black rhino.', optional: false },
      { days: 'Day 06', place: 'Serengeti → Ngorongoro Rim', nights: 1, bandImage: 'https://images.pexels.com/photos/28708345/pexels-photo-28708345.jpeg', note: 'A scenic drive back to accommodation on the crater rim.', optional: false },
      { days: 'Day 07', place: 'Ngorongoro Crater', nights: 1, bandImage: 'https://images.pexels.com/photos/33798297/pexels-photo-33798297.jpeg', note: 'An early descent for the Big Five, then the evening drive to Mto wa Mbu.', optional: false },
      { days: 'Day 08', place: 'Lake Manyara', nights: 1, note: 'A game drive for the tree-climbing lions, picnic lunch among the wildlife, then the evening return to Arusha.', bandImage: 'https://images.pexels.com/photos/32459724/pexels-photo-32459724.jpeg', optional: false },
      { days: 'Day 09', place: 'Arusha', nights: 0, note: 'A flexible last day for the city or the market, before the airport transfer.', optional: false },
    ],
    included: ['All park entrances', 'Full board, water and house drinks', 'All flights during the tour and air ambulance cover', 'A safari 4×4 with pop-up roof and charging'],
    excluded: ['Tips', 'Visas and personal items'],
    gallery: [
      'https://images.unsplash.com/photo-1634646350436-e1448c1d4f63?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1521651201144-634f700b36ef?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1616128417743-c3a6992a65e7?w=1200&q=80&auto=format&fit=crop',
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
      priceFrom: '$3,450',
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
      priceFrom: '$2,100',
      image:
        'https://images.pexels.com/photos/12738166/pexels-photo-12738166.jpeg?auto=compress&cs=tinysrgb&w=1600',
      summary:
        'A wild, quiet 4,566m volcano through Arusha National Park — walked with an armed ranger past buffalo and giraffe. The best acclimatisation there is before Kilimanjaro, and a fine trek in its own right.',
      highlights: ['Wildlife on the walk', 'Perfect Kili warm-up', 'Knife-edge summit ridge'],
    },
    {
      name: 'Kilimanjaro — Marangu (5 Days)',
      meta: 'Kilimanjaro · 5 Days',
      days: 5,
      priceFrom: '$2,400',
      image:
        'https://images.pexels.com/photos/8427984/pexels-photo-8427984.jpeg?auto=compress&cs=tinysrgb&w=1600',
      summary:
        'The only Kilimanjaro route with hut accommodation — no camping. A gradual, scenic climb through rainforest, moorland and alpine desert, with two nights at Horombo before the summit push.',
      highlights: ['Hut-based throughout (no tents)', 'Gradual acclimatisation profile', 'Uhuru Peak, 5,896m'],
    },
    {
      name: 'Kilimanjaro — Marangu (6 Days)',
      meta: 'Kilimanjaro · 6 Days',
      days: 6,
      priceFrom: '$2,700',
      image:
        'https://images.pexels.com/photos/8427984/pexels-photo-8427984.jpeg?auto=compress&cs=tinysrgb&w=1600',
      summary:
        'The 6-day Marangu, with an extra acclimatisation day at Horombo Hut (3,720m) added to the direct, moderate path — for walkers who want the hut route with a better shot at the summit.',
      highlights: ['Extra night at Horombo Hut', 'No camping required', 'Colobus monkeys along the trail'],
    },
    {
      name: 'Kilimanjaro — Machame (6 Days)',
      meta: 'Kilimanjaro · 6 Days',
      days: 6,
      priceFrom: '$1,590',
      image:
        'https://images.pexels.com/photos/37808650/pexels-photo-37808650.jpeg?auto=compress&cs=tinysrgb&w=1600',
      summary:
        'The classic "Whiskey" route in its 6-day form, through rainforest, heather and alpine desert to Stella Point and on to Uhuru Peak — with views across all three of Kilimanjaro\'s peaks.',
      highlights: ['Multiple ecological zones', 'Crosses Stella Point', 'Views of Kibo, Mawenzi & Shira'],
    },
    {
      name: 'Kilimanjaro — Lemosho (7 Days)',
      meta: 'Kilimanjaro · 7 Days',
      days: 7,
      priceFrom: '$2,700',
      image:
        'https://images.pexels.com/photos/35568138/pexels-photo-35568138.jpeg?auto=compress&cs=tinysrgb&w=1600',
      summary:
        "One of Kilimanjaro's most scenic and remote approaches, from the west — pristine rainforest, giant heather moorland, and Mount Meru appearing to float above the clouds. Built-in extra days lift the summit success rate.",
      highlights: ['Remote western approach', 'Extra acclimatisation days', 'Dawn summit from Barafu Camp'],
    },
    {
      name: 'Mount Meru — 3-Day Expedition',
      meta: 'Arusha N.P. · 3 Days',
      days: 3,
      priceFrom: '$1,400',
      image:
        'https://images.pexels.com/photos/12738166/pexels-photo-12738166.jpeg?auto=compress&cs=tinysrgb&w=1600',
      summary:
        "A shorter, more intense version of Meru — wildlife on the lower slopes, then a steep 1:30am summit push to the 4,566m Ash Tray crater rim for sunrise. A genuine technical challenge in a fraction of the time.",
      highlights: ['1:30am summit push', 'Sunrise over the Ash Tray crater', 'Half the time of the standard route'],
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
    heroImage: '/media/journeys/trip-planner-hero.jpeg',
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
  lead: 'King Mufasa Expeditions is a Tanzanian-owned house of travel specialists based in Arusha. We believe travel is transformative — so we craft every itinerary by hand, and stand behind it personally.',
  story: [
    "The company is led by Davis Peter, Founder & CEO, and Anneth Benedict, Manager — a small, local team who reply to every enquiry within 24 hours rather than routing you through a call centre. Whether the trip is built around wildlife, culture, or a summit, our specialists tailor it to what you actually want, not a fixed package.",
    "We work exclusively with lodges, camps, and hotels chosen for the excellence of their personalised service, move between them in our own well-maintained, safari-prepared Land Cruisers, and put you with guides who are qualified, experienced, and deeply familiar with the ecosystems they drive.",
  ],
  stats: [
    { value: '100%', label: 'Tanzanian-owned & operated' },
    { value: '24 hrs', label: 'Average enquiry response' },
    { value: '2', label: 'Founding leadership' },
    { value: '4', label: 'Trusted booking & review partners' },
  ],
  guides: {
    title: 'Our guides',
    body: 'Guides are crucial to a safari — so we employ qualified, experienced people who know the wildlife and the regional ecosystems firsthand, not seasonal hires reading from a script. It is the same standard we hold our mountain crews to on Kilimanjaro and Meru.',
    image:
      'https://images.unsplash.com/photo-1616128417743-c3a6992a65e7?w=1200&q=80&auto=format&fit=crop',
  },
  operations: {
    title: 'How we work',
    body: "Every camp and hotel we use is chosen for the excellence of its personalised service, not just its view. We travel in our own safari-prepared Land Cruisers, and our local Tanzanian staff reply to every enquiry and reservation within 24 hours. We're listed and reviewed on TripAdvisor, GetYourGuide, SafariGo, and Google — the same platforms our guests use to check on us before they book.",
    image:
      'https://images.unsplash.com/photo-1557756006-90a218bcc7e1?w=1200&q=80&auto=format&fit=crop',
  },
};

/* Day trips — short Arusha/Kilimanjaro-area excursions, migrated from the
   previous site. A single listing page (/day-trips), no per-trip detail
   routes — these are excursions, not multi-day journeys. */
export const dayTrips = {
  intro: {
    eyebrow: 'Day Trips',
    title: 'Short days out, near Arusha',
    lead: "Not every trip needs a week. These are half- and full-day excursions around Arusha and the Kilimanjaro foothills — good on their own, or bolted onto the start or end of a longer safari.",
  },
  trips: [
    {
      slug: 'chemka-hot-spring',
      title: 'Chemka Hot Spring',
      duration: 'Full day',
      image: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Chemka_Hotsrings_4.jpg',
      summary: 'A roughly 2.5-hour drive from Arusha to the turquoise waters of Chemka (Maji Moto), where a rope swing and shade trees look out toward Kilimanjaro.',
      included: ['Local lunch (mishkaki, nyama choma, chips mayai)', 'Private 4×4 with a professional guide', 'Water, soft drinks, wine and beer', 'Umbrella and t-shirt'],
    },
    {
      slug: 'kilimanjaro-national-park-day-trip',
      title: 'Kilimanjaro National Park Day Trip',
      duration: 'Full day',
      image: 'https://images.pexels.com/photos/8427984/pexels-photo-8427984.jpeg?auto=compress&cs=tinysrgb&w=1200',
      summary: "A taste of the mountain without the summit — the first leg of the Marangu route up through rainforest to Mandara Hut, with a chance of colobus and blue monkeys, then back down the same day.",
      included: ['Park entrance fees and taxes', 'Private 4×4 with roof hatch', 'English-speaking guide, cooks and porters', 'Umbrella and t-shirt'],
    },
    {
      slug: 'materuni-village-waterfall-and-coffee-tour-day-trip',
      title: 'Materuni Village, Waterfall & Coffee Tour',
      duration: 'Full day',
      image: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Materuni1.jpg',
      summary: "A cultural day in an authentic Chagga village on Kilimanjaro's foothills — a walk through coffee and fruit plantations, a hands-on coffee-making session, and a swim at Materuni Waterfall.",
      included: ['Coffee-plantation walk with hands-on roasting & grinding', 'Materuni Waterfall visit (swimming optional)', 'Lunch', 'Hotel pickup and return, English-speaking guide'],
    },
    {
      slug: 'serval-wildlife-sanctuary-day-tour',
      title: 'Serval Wildlife Sanctuary',
      duration: 'Full day',
      // No verified photo of the sanctuary itself exists on Unsplash, Pexels,
      // Flickr or Wikimedia Commons (checked) — it's a small private eco-park,
      // not a documented landmark. This is a generic giraffe close-up standing
      // in until real photography (or permission to use the operator's own
      // photos) is sourced — replace before launch.
      image: 'https://images.unsplash.com/photo-1689105167710-db23a762b151?w=1200&q=85&auto=format&fit=crop',
      summary: 'A luxury ecotourism sanctuary near Kilimanjaro, set among 5,000 hand-planted endemic plants, with close-up access to lion, giraffe, monkey and ostrich.',
      included: ['Park entrance and taxes', 'Local Tanzanian lunch', 'Soft drinks and 3+ litres of water', 'Transfer to/from Arusha or Moshi, guide throughout'],
    },
  ],
};

/* Activities — bookable add-ons that layer onto any safari (a balloon
   flight, a sundowner, a canoe safari). Distinct from the homepage's
   "Signature Experiences" (trip themes like the Migration or Kilimanjaro,
   see `experiences` above) — these are shorter, optional extras, so they
   live at /activities to avoid colliding with the homepage's #experiences
   anchor. Content migrated from source documents; two photos (canoeing,
   horseback) are the operator's own; the rest reuse verified placeholder
   imagery already in use elsewhere on the site pending real photography. */
export const activities = [
  {
    slug: 'balloon-safaris',
    title: 'Balloon Safaris',
    image: 'https://images.unsplash.com/photo-1519659528534-7fd733a832a0?w=2400&q=85&auto=format&fit=crop',
    tagline: 'A dawn flight over the Serengeti, ending in champagne and a bush breakfast.',
    lead: 'A safari from the sky, with no road tracks to follow — a bird\'s-eye view of the Serengeti at first light, then a landing ceremony with champagne and a full breakfast cooked out in the bush.',
    body: [
      "We've partnered with the best balloon safari providers so our clients fly at the best rates and with the easiest logistics — balloon operators work only from inside the parks, so booking through us beats booking direct.",
      "Night game drives aren't permitted in the Serengeti, so the drive out to the launch site in the last dark of the morning is often the only chance to spot nocturnal wildlife before the balloon lifts at first light.",
    ],
    highlights: [
      "A bird's-eye view of the Serengeti — from 3,000 feet you can see almost every detail on a cloudless day",
      'One of the best sunrises anywhere, watched from the basket as the plains wake up beneath you',
      'A landing ceremony — honouring certificate, champagne toast, then a full English bush breakfast',
    ],
    details: {
      location: [
        'Seronera, central Serengeti — flies year-round',
        'Kogatende, north Serengeti — Jul–Nov, follows the migration north',
        'Kirawira, west Serengeti — Jun–Sep, follows the migration west',
        'Ndutu, south Serengeti/north Ngorongoro — Dec–Mar, the calving season',
        'Tarangire — flies year-round',
        'Ruaha — Jul–Aug only (peak season)',
      ],
      duration: '~5 hours door-to-door (60–75 minute flight)',
      price: 'Standard: $570pp · Honeymoon (2 people only): $4,500pp',
      requirements: [
        'Children 5–7 must be accompanied by an adult; 7+ can fly independently',
        'A weight supplement applies above 120kg',
        'Pregnant women cannot fly, due to the bump on landing',
        'Minimum height 1.2m (3.9ft)',
      ],
    },
  },
  {
    slug: 'canoeing-safaris',
    title: 'Canoeing Safaris',
    image: '/media/experiences/canoeing.jpg',
    tagline: "Paddle past elephant and hippo on Tanzania's lakes — game viewing from water level.",
    lead: 'A scenic, guided canoe safari on lakes like Momella, Manyara, Eyasi, Duluti, Tanganyika, and Victoria — wildlife from a completely different angle, drifting silently past buffalo, giraffe, and 600-plus bird species.',
    body: [
      'Lakes inside national parks cost more to paddle than those outside — best treated as an add-on to a game drive rather than a stand-alone day.',
    ],
    highlights: [
      'Arusha National Park (Momella Lakes) — 2–3 hours past giraffe, buffalo, warthog and zebra, with Kilimanjaro and Meru on the horizon',
      'Lake Manyara — silent paddling past hippo, elephant and giraffe on the shore; "wildlife from water"',
      'Lake Eyasi — seasonal canoeing plus fishing alongside the local Hadzabe community',
      'Lake Duluti — a small crater lake near Arusha with 130+ recorded bird species',
      'Lake Tanganyika — Africa\'s largest freshwater lake, crystal clear, with sport fishing and sunset cruising',
      'Rubondo Island / Lake Victoria — Africa\'s largest island national park, mostly untouched equatorial forest',
    ],
    details: {
      duration: '2–3 hours (standard) or full day (combined hike & canoe)',
      price: 'Standard Canoe Excursion (2–3 hours): $60–85pp · Combined Hike & Canoe (full day): $120–150pp',
      requirements: [
        'Includes professional guide, canoe rental, and safety gear',
        'National park entry fees apply separately for Lake Manyara and Arusha National Park',
      ],
    },
  },
  {
    slug: 'cultural-tribes-visits',
    title: 'Cultural Tribes Visits',
    image: 'https://images.unsplash.com/photo-1565030418432-c566ea1c4893?w=1600&q=85&auto=format&fit=crop',
    tagline: "Meet the Maasai, Hadzabe, and Datoga — Tanzania's most enduring tribal cultures.",
    lead: "Tanzania is home to more than 120 ethnic groups. Most have blended into a shared Swahili culture over the last generation, but a few — the Maasai, the Hadzabe, the Datoga — remain close to how they've always lived, and a visit to one is often the most lasting part of a safari.",
    body: [
      'The Maasai are the best known — red-robed cattle herders living near Ngorongoro, where over 40,000 of them live close by several premier parks. Cattle wealth and community elders still govern Maasai life, and their belief system is monotheistic, centred on the deity Engai.',
      "The Hadzabe are hunter-gatherers who've lived in northern Tanzania for over 50,000 years — only a few hundred remain, hunting with bow and arrow and gathering wild fruit, with no fixed social rules beyond what the moment calls for.",
      "The Datoga, once cattle herders like the Maasai and now largely subsistence farmers, live in ten subtribes near Lake Eyasi, Lake Basotu and Singida — known for red-ochre dress and distinctive body tattooing and face painting.",
    ],
    highlights: [
      'Join traditional dance and song',
      'Learn fire-making or beadwork, and speak with villagers in their homes',
      'Buy handmade leather and beadwork directly from the makers',
      'Watch a hunting demonstration with the Hadzabe',
    ],
    details: {
      price: 'Standard Village Visit: $20–40pp (welcome dance, boma tour, and a brief cultural talk)',
      requirements: [
        'Priced to ensure a high-end, ethical experience that properly compensates the community',
        'These communities are not isolated — expect a basic understanding of money, and craft sales or donation requests',
        'A small entrance fee applies to visit a village',
      ],
    },
  },
  {
    slug: 'fly-in-safaris',
    title: 'Fly-In Safaris',
    image: 'https://images.unsplash.com/photo-1634844626847-779930657d3b?w=2400&q=85&auto=format&fit=crop',
    tagline: 'Skip the long, dusty drives — fly straight into the parks.',
    lead: "Tanzania's parks are scattered across a large country. Flying in means you start the game drive the same day you arrive, and can fly out to the coast or a city afterwards instead of retracing the road.",
    body: [
      'Scheduled charter flights run daily on popular routes (some on a two-seat-minimum inducement basis), or a private charter can be hired for your group.',
      'Used well, a fly-in replaces the return leg of a drive — from Ngorongoro to the Serengeti by road, then straight out of the Serengeti to Zanzibar by air, instead of retracing the drive back through Arusha.',
      'You can depart from Zanzibar, Dar es Salaam, Kilimanjaro Airport, Arusha, or Mwanza, or hop directly from park to park.',
    ],
    highlights: [
      'Ideal if your time is limited and you want to see more places',
      'Escapes the long, bumpy drives between parks',
      'Can be combined with a road safari to avoid retracing your route',
    ],
    details: {
      price: 'Scheduled routes: $270–380pp · Inducement fares (min. 2): from $500pp · Private charter (up to 12): $400–600',
      requirements: [
        'Some parks have more than one airstrip — confirm which suits your itinerary before booking',
      ],
    },
  },
  {
    slug: 'horseback-safaris',
    title: 'Horseback Safaris',
    image: '/media/experiences/horseback.jpg',
    tagline: 'Ride alongside zebra and giraffe — safari from the saddle, for all skill levels.',
    lead: "A ride off the beaten track, open to beginner, intermediate, and skilled riders alike — Tanzania's parks explored at the pace of a horse rather than a vehicle. Peak season runs late June to October, the dry season.",
    body: [],
    highlights: [
      'Arusha National Park — from Ngongongare Gate through the "Little Serengeti," past buffalo, giraffe, zebra, and colobus monkey, at a slow pace through dense forest',
      'Serengeti National Park — untouched backcountry and the Ngorongoro Conservation Area, with a chance of the wildebeest migration depending on rainfall',
      'Lake Natron — the pink soda lake and its two million-plus flamingos, ridden from traditional Maasai bomas, with Oldonyo Lengai (the "Mountain of God") on the skyline',
      'Kilimanjaro National Park — the wilderness between Kilimanjaro and Meru, ridden from the "Little Serengeti" through Maasai land to the edge of the park',
      'Wildlife Management Areas — community-owned conservation land including Enduimet WMA, Singita Grumeti, and Loliondo',
    ],
    details: {
      price: '$150pp',
      requirements: ['Priced to ensure a high-end, ethical experience that properly compensates the community'],
    },
  },
  {
    slug: 'night-game-drives',
    title: 'Night Game Drives',
    image: 'https://images.unsplash.com/photo-1523298020485-2eb454f4957b?w=1600&q=85&auto=format&fit=crop',
    tagline: "See Africa's nocturnal hunters — leopard, civet, aardvark — under expert guide and permit.",
    lead: 'A lot happens in the African bush after dark that a normal game drive never sees. Special equipment and expert guides are required, which makes the permits harder to come by — and the drive itself quieter and far less crowded.',
    body: [],
    highlights: [
      "Aardvark, pangolin, hippo out of the water, hunting lion, porcupine, leopard, civet, genet, white-tailed mongoose, and cape hare",
      'A quieter, far less crowded drive than the daytime equivalent',
    ],
    details: {
      location: [
        'Lake Manyara — the most popular park for night drives, with moonlight on the lake',
        'Tarangire — the only other northern-circuit park that permits it',
        'The southern circuit (Selous, Mikumi, Ruaha) — all permit night drives',
      ],
      duration: '2–4 hours, depending on the park',
      price: '$250pp',
      requirements: [
        'Priced to ensure a high-end, ethical experience that properly compensates the community',
        'Extra permits apply — a night-game fee and an armed-ranger fee',
      ],
    },
  },
  {
    slug: 'sundowner-experience',
    title: 'Sundowner',
    // Wikimedia Commons, Baobab at sunset - Tanzania (Tarangire) by Gopal
    // Vijayaraghavan, CC BY 2.0 — requires visible credit, unlike the
    // Unsplash images elsewhere on this page which don't.
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Baobab_at_sunset_-_Tanzania.jpg/1920px-Baobab_at_sunset_-_Tanzania.jpg',
    tagline: 'Drinks and canapés as the African sky turns gold — a safari tradition.',
    lead: "One of Africa's most cherished safari traditions — a drink and something to eat as the sun goes down, at a scenic spot your guide has chosen for the view.",
    body: [
      'As your afternoon game drive ends, your guide sets up safari chairs, a small table, and a selection of wine, beer, gin and tonic, soft drinks and juice, alongside nuts, samosas, canapés and other light snacks. The whole thing runs 45 minutes to an hour before you head back to camp.',
    ],
    highlights: [
      'A classic safari tradition, enjoyed by travellers for generations',
      "Serengeti's endless plains, Tarangire's baobabs, or the Ngorongoro crater rim as a backdrop",
      'Well suited to honeymoons, anniversaries, birthdays, and other celebrations',
    ],
    details: {
      bestTime: 'Jun–Oct (dry season, clear golden sunsets) or Nov–May (green season, dramatic cloud and colour)',
      price: 'Standard: $50–80pp · Private celebration (honeymoons, proposals, anniversaries): $120–200pp',
    },
  },
  {
    slug: 'treetop-walkway',
    title: 'Treetop Walkway',
    image: 'https://images.unsplash.com/photo-1657463420259-1c92c609f89e?w=1600&q=85&auto=format&fit=crop',
    tagline: "Tanzania's first and longest canopy walk, 18 metres above the Lake Manyara forest floor.",
    lead: "A 370-metre run of nine suspension bridges through the Lake Manyara groundwater forest canopy, up to 18 metres above the ground — blue monkey, baboon, and the Silvery-cheeked Hornbill at eye level instead of below the vehicle.",
    body: [
      'Your guide leads the walk from ground level up into the canopy, crossing nine bridges to viewing platforms built around mature trees, with commentary on the forest ecosystem, medicinal plants, and birdlife along the way. It takes 30–60 minutes, and sits right at the park entrance — a natural add-on before or after a game drive.',
    ],
    highlights: [
      'A different vantage on the forest than any game drive offers',
      'Blue monkey, baboon, butterflies and a long list of forest birds',
      'Secure suspension bridges with safety netting, suitable for most travellers 5 and up',
    ],
    details: {
      bestTime: 'Jun–Oct (dry season, best wildlife viewing) or Nov–May (green season, best birding and butterflies)',
      price: '$20–50pp (Lake Manyara park entrance charged separately)',
      requirements: ['Suitable for guests 5 years and older'],
    },
  },
  {
    slug: 'zipline-adventure',
    title: 'Zipline Adventure',
    // Wikimedia Commons, Zip-line over rainforest canopy, Costa Rica, by
    // Khaufle, CC BY-SA 3.0 / GFDL — requires visible credit, unlike the
    // Unsplash images elsewhere on this page which don't.
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Zip-line_over_rainforest_canopy_4_January_2005%2C_Costa_Rica.jpg',
    tagline: 'Soar over the Great Rift Valley on four to five ziplines near Lake Manyara.',
    lead: "A run of ziplines through the trees at the base of the Great Rift Valley escarpment in Mto wa Mbu, between ancient baobabs with views across the valley and the Maasai Steppe — a natural stop between Arusha, Manyara, Ngorongoro and the Serengeti.",
    body: [
      "A safety briefing and equipment fitting in Mto wa Mbu is followed by a 20-minute drive through Maasai land to the course. The adventure itself runs four to five ziplines connected by elevated platforms, and the whole outing takes two to three hours — a good half-day between longer safari days.",
    ],
    highlights: [
      'Panoramic views of the Rift Valley, forest, baobabs, and the Maasai Steppe',
      'A high-energy break from game drives, without leaving the itinerary',
      'Professionally guided, with a full safety briefing and equipment provided',
    ],
    details: {
      bestTime: 'Jun–Oct and Jan–Mar (clearest skies and best visibility)',
      price: '$55–70pp, including guides, safety gear, and transfers to/from the course',
      requirements: ['Minimum age 7', 'Minimum weight 23kg / maximum weight 130kg', 'Not suitable for expectant mothers'],
    },
  },
];

/* Destinations — the national parks and reserves our journeys are built
   from. One page per park (/destinations/{slug}), plus an index grid.
   Content drawn from the previous site, verified against current park data. */
export const destinations = [
  {
    slug: 'serengeti-national-park',
    name: 'Serengeti National Park',
    region: 'Northern Circuit',
    summary: 'Endless savannah and the greatest wildlife spectacle on Earth — four million animals moving across a horizon that never ends.',
    image: 'https://images.unsplash.com/photo-1673667618335-face21a8b1a8?w=2400&q=85&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1764614131376-a4fac1025d5f?w=1200&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519659528534-7fd733a832a0?w=1200&q=85&auto=format&fit=crop',
    ],
    quote: 'The place where the land moves on forever.',
    lead: "The Serengeti is one of the planet's most iconic wildlife ecosystems — vast open plains and a migration so large it reshapes the land beneath it. A UNESCO World Heritage Site, it gave the world the imagery behind The Lion King, and still delivers the same drama to anyone who drives out onto its grass at dawn.",
    body: [
      "Tanzania's largest national park covers 5,700 square miles, part of a wider 11,583-square-mile ecosystem that includes the Ngorongoro Conservation Area, the Masai Mara, and the surrounding game reserves. The name comes from the Maa word for 'the place where the land moves on forever' — apt, for a park with no fences and no end in sight.",
      'It holds over two million ungulates, roughly 4,000 lions, 1,000 leopards, 550 cheetahs, and around 500 recorded bird species. Every guide we send here has spent years reading which way the herds are about to turn.',
    ],
    bestTime: 'July to October is peak migration season, with the Mara River crossings landing in June–July. January–February brings the calving season and, with it, the best predator viewing in the park.',
    activities: ['Wildebeest migration viewing', 'Hot air balloon safaris', 'Game drives', 'Walking safaris', 'Bird watching'],
    stats: [
      { label: 'Size', value: '5,700 sq mi' },
      { label: 'Best season', value: 'Jul — Oct' },
      { label: 'Lions', value: '~4,000' },
      { label: 'Established', value: '1951' },
    ],
  },
  {
    slug: 'ngorongoro-conservation',
    name: 'Ngorongoro Conservation Area',
    region: 'Northern Circuit',
    summary: "The world's largest intact volcanic caldera — a natural amphitheatre holding one of the densest concentrations of wildlife in Africa.",
    image: 'https://images.unsplash.com/photo-1634662049778-df98fcf2f8e9?w=2400&q=85&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1586584525758-f63cd62475a6?w=1200&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507088164404-020d1e905959?w=1200&q=85&auto=format&fit=crop',
    ],
    quote: 'Descend while the grass is still cold and the predators are still moving.',
    lead: 'Ngorongoro is where natural wonder and human history meet in one place — reliable Big Five sightings inside a crater floor, the Maasai communities who still graze cattle across its rim, and Olduvai Gorge, the "Cradle of Mankind," a short drive away.',
    body: [
      'The Conservation Area spans 8,292 square kilometres of savannah, forest, and soda lake around the crater itself, and remains one of the few places in Tanzania where conservation and traditional Maasai pastoralism coexist by design rather than by exception.',
      'Descend to the crater floor at first light, while the grass is still cold and the predators are still moving, and you will understand why guides who have worked here for twenty years still call it their favourite drive in the country.',
    ],
    bestTime: 'June to October (dry season) gives the clearest game viewing as animals gather around remaining water. December to February brings the calving migration through the wider conservation area.',
    activities: ['Crater floor game drives', 'Crater rim walks', 'Empakai crater hike', 'Olduvai Gorge visit', 'Cultural (Maasai) visits'],
    stats: [
      { label: 'Size', value: '8,292 km²' },
      { label: 'Best season', value: 'Jun — Oct' },
      { label: 'Famous for', value: 'The Crater' },
      { label: 'Status', value: 'UNESCO site' },
    ],
  },
  {
    slug: 'ruaha-national-park',
    name: 'Ruaha National Park',
    region: 'Southern Wild',
    summary: "Tanzania's largest national park, and one of its quietest — you can drive an afternoon here and meet no one else.",
    image: 'https://images.unsplash.com/photo-1700222344634-a7621e8b1339?w=2400&q=85&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1516899843768-460939230e51?w=1200&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1707759408961-2f7c8197d9cc?w=1200&q=85&auto=format&fit=crop',
    ],
    quote: 'A stretch of river to yourselves, tracker ahead, on foot.',
    lead: 'Ruaha is the wild the north has mostly lost — remote, rugged, dotted with ancient baobabs, and cut through by the Great Ruaha River, which draws in elephant, lion, and some of the last wild dog packs left in the country.',
    body: [
      'The park covers over 20,000 square kilometres of dry riverine bush, and holds large elephant herds, lion, leopard, cheetah, and rarities like African wild dog and greater kudu. Over 570 recorded bird species make it one of the best birding parks in Tanzania as well.',
      'Because so few operators run here, a Ruaha camp can put you on foot for a proper walking safari, tracker ahead, with a stretch of river to yourselves.',
    ],
    bestTime: 'June to October (dry season) is best for game viewing, as animals concentrate along the river. November to April is quieter but rewards birders with lush, green cover.',
    activities: ['Walking safaris', 'Game drives', 'Bird watching', 'Cultural visits (Barabaig & Hehe communities)'],
    stats: [
      { label: 'Size', value: '20,000+ km²' },
      { label: 'Best season', value: 'Jun — Oct' },
      { label: 'Bird species', value: '570+' },
      { label: 'Crowds', value: 'Lowest in TZ' },
    ],
  },
  {
    slug: 'arusha-national-park',
    name: 'Arusha National Park',
    region: 'Northern Circuit',
    summary: "Tanzania's smallest park, and its most convenient — a compact wilderness at the foot of Mount Meru, minutes from Arusha.",
    image: 'https://images.unsplash.com/photo-1673667618122-359046273a77?w=2400&q=85&auto=format&fit=crop',
    quote: 'Canoe alongside hippo, or walk on foot past giraffe and buffalo — most parks restrict both.',
    lead: 'Arusha National Park packs volcanic crater, alpine forest, and soda lake into 52 square miles — an easy first or last stop on a longer safari, and the trailhead for Mount Meru itself.',
    body: [
      'The park is built around Mount Meru, a 14,980 ft volcano northwest of Arusha town. The Ngurdoto Crater sits to the southeast, pasture underfoot; the Momella Lakes lie to the northeast, home to flamingo and a long list of wader species. On a clear day, Kilimanjaro is visible 37 miles to the northeast.',
      "It is one of the only parks in Tanzania where you can canoe alongside hippo, or walk on foot with an armed ranger past giraffe and buffalo — most of the country's parks restrict both.",
    ],
    bestTime: "Arusha's altitude keeps it temperate year-round. June to October (dry season) is best for wildlife; March–May brings rain but excellent light for photography.",
    activities: ['Canoeing', 'Forest walks', 'Night game drives', 'Standard game drives'],
    stats: [
      { label: 'Size', value: '52 sq mi' },
      { label: 'Altitude', value: '1,300 m' },
      { label: 'Best season', value: 'Jun — Oct' },
      { label: 'Notable', value: 'Mt Meru, 4,566 m' },
    ],
  },
  {
    slug: 'lake-manyara-national-park',
    name: 'Lake Manyara National Park',
    region: 'Northern Circuit',
    summary: 'A compact park built around a soda lake — dense birdlife, groundwater forest, and the famous tree-climbing lions.',
    image: 'https://images.unsplash.com/photo-1752191434699-21c397877752?w=2400&q=85&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1657463420259-1c92c609f89e?w=1200&q=85&auto=format&fit=crop',
    ],
    quote: 'Tree-climbing lions — a quirk of behaviour nobody has fully explained.',
    lead: "Manyara is the smallest of the four northern-circuit parks, and one of the richest for its size — volcanic soil feeds a groundwater forest dense enough to shelter baboon troops sixty strong, while the lake itself draws in flamingo, pelican, and stork by the thousand.",
    body: [
      'Over 380 bird species have been recorded here, from herons and egrets to jacana and plover. Ground fauna includes large baboon troops, impala, giraffe, buffalo, and zebra.',
      "The park's tree-climbing lions are the reason most people come — a local quirk of behaviour nobody has fully explained, but that our guides can usually find, given enough patience and the right afternoon light.",
    ],
    bestTime: 'July to October (dry season) offers the clearest game viewing. December to February is also good; short rains fall in November, long rains in April–May.',
    activities: ['Canoeing', 'Forest walks', 'Game drives', 'Night game drives', 'Bird watching'],
    stats: [
      { label: 'Bird species', value: '380+' },
      { label: 'Best season', value: 'Jul — Oct' },
      { label: 'Famous for', value: 'Tree-climbing lions' },
      { label: 'Size', value: 'Smallest of the four' },
    ],
  },
  {
    slug: 'tarangire-national-park',
    name: 'Tarangire National Park',
    region: 'Northern Circuit',
    summary: 'Baobab country, and the largest elephant herds in the north — the most distinctly "Out of Africa" landscape in Tanzania.',
    image: 'https://images.unsplash.com/photo-1704684715217-f4b3ca3161f7?w=2400&q=85&auto=format&fit=crop',
    quote: 'The most distinctly "Out of Africa" landscape left in Tanzania.',
    lead: "Tarangire is Tanzania's sixth-largest park, and looks like nowhere else in the northern circuit — dry wooded savannah studded with some of the finest baobab forest in the country, cut through by the Tarangire River.",
    body: [
      'The park holds tree-climbing lion, large herds of African bush elephant, plains zebra, Masai giraffe, impala, blue wildebeest, buffalo, and eland. The river corridor pulls in dense birdlife, including several species of colourful lovebird.',
      'September and October bring the largest elephant congregations of the year, as herds concentrate along the last remaining water. Long grass makes December–May quieter for game viewing but strong for birding.',
    ],
    bestTime: 'June to October (dry season) is best for game viewing; September–October for the largest elephant herds. The wet season (late November–May) is better for birding.',
    activities: ['Game drives', 'Walking safaris', 'Night game drives', 'Bird watching'],
    stats: [
      { label: 'Rank', value: '6th largest in TZ' },
      { label: 'Best season', value: 'Jun — Oct' },
      { label: 'Peak elephant', value: 'Sep — Oct' },
      { label: 'Famous for', value: 'Baobabs & elephant' },
    ],
  },
];

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
  // Platform logos link straight to the live review pages. Tripadvisor's score/count
  // is the real, verified figure. SafariBookings, Google, and Design My Safari show
  // a link only (no score/count) — `pending: true` on each. `invert` recolours a
  // logo to ink so it reads on the light surface. `badge` marks the Design My
  // Safari partner graphic, which carries its own colours/border and is rendered
  // larger, unfiltered, at its native aspect ratio.
  ratings: [
    {
      platform: 'SafariBookings',
      logo: '/brand/safaribookings.png',
      alt: 'SafariBookings',
      invert: true,
      pending: true,
      href: 'https://www.safaribookings.com/reviews/p6151',
    },
    {
      platform: 'Tripadvisor',
      logo: '/brand/tripadvisor.svg',
      alt: 'Tripadvisor',
      pending: true,
      href: 'https://www.tripadvisor.com/Attraction_Review-g297913-d27415878-Reviews-King_Mufasa_Expeditions-Arusha_Arusha_Region.html',
    },
    {
      platform: 'Google',
      logo: '/brand/google-wordmark.svg',
      alt: 'Google',
      pending: true,
      href: 'https://www.google.com/maps/search/King+Mufasa+Expeditions+Arusha',
    },
    {
      platform: 'Design My Safari',
      logo: '/brand/designmysafari-partner.svg',
      alt: 'Design My Safari Safari Partner',
      badge: true,
      pending: true,
      href: 'https://www.designmysafari.com/?utm_source=kingmufasaexpeditions&utm_medium=partner&utm_campaign=operator_partner',
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
      { label: 'Destinations', href: '/destinations' },
      { label: 'Day Trips', href: '/day-trips' },
      { label: 'Add-On Activities', href: '/activities' },
      { label: 'Experiences', href: '/#experiences' },
    ],
  },
  {
    heading: 'House',
    links: [
      { label: 'About us', href: '/about' },
      { label: 'Our guides', href: '/about#guides' },
      { label: 'Reviews', href: '/#reviews' },
      { label: 'Refund Policy', href: '/refund-policy' },
      { label: 'Journal', href: '/blog' },
    ],
  },
  {
    heading: 'Good to Know',
    links: [
      { label: 'Our booking process', href: '/our-booking-process' },
      { label: 'Our vehicles', href: '/our-vehicle' },
      { label: 'Tipping guideline', href: '/tipping-guideline' },
      { label: 'Contact', href: '/contact' },
      { label: 'Privacy policy', href: '/privacy-policy' },
      { label: 'Terms & conditions', href: '/terms-conditions' },
    ],
  },
];
