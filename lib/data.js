// ── Business constants ────────────────────────────
export const BIZ = {
  name: 'Testi-Tech Global',
  phones: ['08149683390', '07034553778'],
  whatsapp: '2348149683390',
  address: {
    street: 'Shop 39, Favour Line, Bobizua, G.S.M Village',
    landmark: 'Opp. Oba Market Building, Beside Oba Market Police Station',
    city: 'Benin City',
    region: 'Edo State',
    country: 'Nigeria',
  },
  hours: 'Mon–Sat 9:00am–7:00pm · Sun 12:00pm–5:00pm',
  url: 'https://testi-tech-global.vercel.app',
};

export const wa = (text) =>
  `https://wa.me/${BIZ.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

// ── Catalogue ─────────────────────────────────────
// `image` is optional — drop a file in /public/products and set the path
// (e.g. '/products/iphone-15-pro-max.jpg'); the emoji shows until then.
export const PRODUCTS = [
  { id: 1, name: 'iPhone 15 Pro Max', brand: 'Apple', category: 'iphone', price: '₦1,150,000', storage: '256GB', condition: 'New', emoji: '📱', badge: 'New', image: '' },
  { id: 2, name: 'iPhone 14 Pro', brand: 'Apple', category: 'iphone', price: '₦780,000', storage: '128GB', condition: 'Used', emoji: '📱', badge: 'Used', image: '' },
  { id: 3, name: 'iPhone 13', brand: 'Apple', category: 'iphone', price: '₦520,000', storage: '128GB', condition: 'Used', emoji: '📱', badge: 'Used', image: '' },
  { id: 4, name: 'iPhone 12 Mini', brand: 'Apple', category: 'iphone', price: '₦350,000', storage: '64GB', condition: 'Used', emoji: '📱', badge: 'Used', image: '' },
  { id: 5, name: 'Samsung Galaxy S24 Ultra', brand: 'Samsung', category: 'android', price: '₦950,000', storage: '256GB', condition: 'New', emoji: '📲', badge: 'New', image: '' },
  { id: 6, name: 'Samsung Galaxy A54', brand: 'Samsung', category: 'android', price: '₦280,000', storage: '128GB', condition: 'New', emoji: '📲', badge: 'New', image: '' },
  { id: 7, name: 'Tecno Phantom X2', brand: 'Tecno', category: 'android', price: '₦195,000', storage: '256GB', condition: 'New', emoji: '📲', badge: 'New', image: '' },
  { id: 8, name: 'Infinix Zero 30', brand: 'Infinix', category: 'android', price: '₦145,000', storage: '128GB', condition: 'New', emoji: '📲', badge: 'New', image: '' },
  { id: 9, name: 'MacBook Air M2', brand: 'Apple', category: 'laptop', price: '₦980,000', storage: '256GB', condition: 'New', emoji: '💻', badge: 'New', image: '' },
  { id: 10, name: 'HP Envy x360', brand: 'HP', category: 'laptop', price: '₦420,000', storage: '512GB', condition: 'Used', emoji: '💻', badge: 'Used', image: '' },
  { id: 11, name: 'Dell XPS 13', brand: 'Dell', category: 'laptop', price: '₦680,000', storage: '512GB', condition: 'New', emoji: '💻', badge: 'New', image: '' },
  { id: 12, name: 'iPad Pro 12.9"', brand: 'Apple', category: 'tablet', price: '₦750,000', storage: '256GB', condition: 'New', emoji: '📟', badge: 'New', image: '' },
  { id: 13, name: 'Samsung Tab S9', brand: 'Samsung', category: 'tablet', price: '₦480,000', storage: '128GB', condition: 'New', emoji: '📟', badge: 'New', image: '' },
];

export const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'iphone', label: 'iPhones' },
  { key: 'android', label: 'Android' },
  { key: 'laptop', label: 'Laptops' },
  { key: 'tablet', label: 'Tablets' },
];

export const REVIEWS = [
  { name: 'Emeka Okonkwo', service: 'Bought iPhone 14 Pro', stars: 5, text: 'Got my iPhone 14 Pro here at a great price. They tested it with me, wiped it clean, and I walked out happy. Highly recommend!', avatar: '👨🏾' },
  { name: 'Chioma Adeyemi', service: 'iCloud Unlock', stars: 5, text: 'They unlocked my iCloud-locked iPhone 11 within 24 hours just as promised. Very professional. Will definitely come back.', avatar: '👩🏾' },
  { name: 'David Osaghae', service: 'Device Swap', stars: 5, text: 'Traded in my old Samsung for an iPhone 13 and paid a fair difference. The process was smooth and transparent. No wahala!', avatar: '👨🏿' },
  { name: 'Blessing Nwachukwu', service: 'Phone Flashing', stars: 5, text: 'My Android was completely bricked. They flashed it and it came back to life the same day. Super impressed with the expertise.', avatar: '👩🏿' },
  { name: 'Tunde Fashola', service: 'Bought Laptop', stars: 5, text: 'Bought a MacBook Air M2 from them. Came in sealed with all accessories. Price was much better than other shops in Benin.', avatar: '👨🏾' },
  { name: 'Adaeze Ibe', service: 'Apple ID Fix', stars: 5, text: 'Had a problem with my Apple ID not activating. Fixed within an hour. The staff are knowledgeable and patient. 10/10!', avatar: '👩🏾' },
];
