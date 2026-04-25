import { Location, MenuItem, NavItem } from './types';

export const LOCATIONS: Location[] = [
  {
    id: 'qatif-main',
    name: 'Qatif Main Branch',
    address: 'King Abdulaziz Street, Al Shatea',
    city: 'Qatif',
    hours: '06:00 AM - 12:00 AM',
    mapUrl: 'https://maps.google.com/?q=Squared+Coffee+Qatif'
  }
];

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#hero' },
  { label: 'Our Story', href: '#story' },
  { label: 'Menu', href: '#menu' },
  { label: 'Locations', href: '#locations' },
  { label: 'Social', href: '#social' },
  { label: 'Loyalty', href: '#loyalty' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#footer' },
];

export const MENU_CATEGORIES = [
  "Brunch Plates",
  "Brunch Toasties",
  "Brunch Buns & Crust",
  "Brunch Sweet",
  "Freshly Baked",
  "Snacks 24/7",
  "Espresso Drinks",
  "Coffee Drinks",
  "Tea & Beyond",
  "Non-Coffee Drinks"
];

export const FULL_MENU: MenuItem[] = [
  // --- Brunch Plates ---
  {
    id: 'bp-1',
    name: 'Five Senses',
    description: 'Squared\'s signature breakfast plate: poached egg, halloumi, falafel, avocado, arugula; over our special pinky labneh.',
    price: '27 SR',
    category: 'Brunch Plates',
    image: '/assets/menu/5d06e6d88ff3ae4a13523f5fc8ca56a0.jpeg',
    foodicsId: '2202312'
  },
  {
    id: 'bp-2',
    name: 'Club Sandwiches with Chips',
    description: 'Eggs, lettuce, slices of Irish cheddar (yellow & white), tomato, bacon or turkey, mayo, slices of brioche, chips.',
    price: '26 SR',
    category: 'Brunch Plates',
    image: '/assets/menu/bdc2af17570bbebd9af181a8131c980d.jpeg',
    foodicsId: '2202342'
  },
  {
    id: 'bp-3',
    name: 'Shakshuka Pan',
    description: 'Squared\'s shakshuka, mixed labneh and feta, sourdough bread.',
    price: '29 SR',
    category: 'Brunch Plates',
    image: '/assets/menu/19abbf45d4b7cf475b94f9531f3a9131.jpg'
  },
  {
    id: 'bp-4',
    name: 'V-Omelet',
    description: 'Eggs omelets, green pepper, white mushroom, parmesan, tomato, sourdough bread, side salad.',
    price: '28 SR',
    category: 'Brunch Plates',
    image: '/assets/menu/1b7e5bc25ae755c9ac8b7b23501f136c.jpg'
  },

  // --- Brunch Toasties ---
  {
    id: 'bt-1',
    name: 'Avo-ca Toast',
    description: 'Sliced avocado, poached eggs, mixed labneh and feta, chili flakes, parsley, sourdough bread, side salad.',
    price: '28 SR',
    category: 'Brunch Toasties',
    image: '/assets/menu/1a8cec4e5b3b5c9264be58bf9d0f0be7.jpg'
  },
  {
    id: 'bt-2',
    name: 'Mushroom Toast',
    description: 'Scrambled eggs, white mushroom, herbs, sourdough, side salad.',
    price: '26 SR',
    category: 'Brunch Toasties',
    image: '/assets/menu/385c28f576dd37b46857487edbe7071d.jpg'
  },
  {
    id: 'bt-3',
    name: 'Shakshuka Toast',
    description: 'Squared\'s shakshuka, mixed labneh and feta, sumac, cilantro, sourdough toast, side salad.',
    price: '24 SR',
    category: 'Brunch Toasties',
    image: '/assets/menu/2f65d8aaa130579fc44c35d4dd46b77d.jpg'
  },
  {
    id: 'bt-4',
    name: 'Omelet Toast',
    description: 'Eggs (omelete), parmesan, sourdough bread, side salad.',
    price: '22 SR',
    category: 'Brunch Toasties',
    image: '/assets/menu/a4d433fbdbb2ea476dffdcd8aa8132aa.jpg'
  },
  {
    id: 'bt-5',
    name: 'Berries Peanut Butter Toast',
    description: 'Peanut butter, granolas, berries jam, berries, sourdough bread.',
    price: '24 SR',
    category: 'Brunch Toasties',
    image: '/assets/menu/bf54c0c6e00a80e8acf082720a2818ac.jpg'
  },
  {
    id: 'bt-6',
    name: 'Labneh and Zatar Toast',
    description: 'Fresh labneh, Palestinian zatar, olive oil, mint, pomegranate sauce, sourdough.',
    price: '18 SR',
    category: 'Brunch Toasties',
    image: '/assets/menu/4bf4cf1ddae2c846a6735ab20d0edf2d.jpg'
  },

  // --- Brunch Buns & Crust ---
  {
    id: 'bbc-1',
    name: 'O\'Eggs',
    description: 'Eggs, baby arugula, Irish cheddar, white sauce, brioche bun.',
    price: '22 SR',
    category: 'Brunch Buns & Crust',
    image: '/assets/menu/43003732b892adc3e730f53b48f33a2e.jpg'
  },
  {
    id: 'bbc-2',
    name: 'NY Eggs (BEC)',
    description: 'Sunny side eggs, white Irish cheddar, beef bacon, brioche bun.',
    price: '24 SR',
    category: 'Brunch Buns & Crust',
    image: '/assets/menu/a9c7a62936567ea2646e6a053f1fe2b2.jpg'
  },
  {
    id: 'bbc-3',
    name: 'Grilled Melt',
    description: 'Mozzarella, yellow Irish cheddar, white Irish cheddar, roasted tomatoes, pesto mayo, in a sourdough grilled toast.',
    price: '26 SR',
    category: 'Brunch Buns & Crust',
    image: '/assets/menu/242be07071ecee33fb0b9d5e6eb05582.jpg'
  },
  {
    id: 'bbc-4',
    name: 'Halloumi Ciabatta',
    description: 'Halloumi, roasted cherry tomatoes, baby arugula, ciabatta bread.',
    price: '24 SR',
    category: 'Brunch Buns & Crust',
    image: '/assets/menu/4418109771da3b74dde1dc92c4f0e122.jpg'
  },
  {
    id: 'bbc-5',
    name: 'Halloumi Croissant',
    description: 'Halloumi, roasted cherry tomatoes, baby arugula, fresh baked croissant.',
    price: '23 SR',
    category: 'Brunch Buns & Crust',
    image: '/assets/menu/cede2c1c96cb8ffc15628f8c3b7110b9.jpg'
  },
  {
    id: 'bbc-6',
    name: 'Scrambled Croissant',
    description: 'Scrambled eggs, parmesan cheese, fresh baked croissant, side salad.',
    price: '21 SR',
    category: 'Brunch Buns & Crust',
    image: '/assets/menu/b2928dfe212ab575b71465441bc133d5.jpg'
  },
  {
    id: 'bbc-7',
    name: 'Shakshuka Sliders',
    description: 'Squared\'s shakshuka, mixed labneh and feta, sumac, cilantro, in brioche bun (3 sliders).',
    price: '25 SR',
    category: 'Brunch Buns & Crust',
    image: '/assets/menu/d84aaaa7b04adce6787477faba3605af.jpg'
  },
  {
    id: 'bbc-8',
    name: 'Scrambled Sliders',
    description: 'Scrambled eggs, parmesan cheese, three brioche sliders.',
    price: '24 SR',
    category: 'Brunch Buns & Crust',
    image: '/assets/menu/416eaa65decc0de196af3c1d1a08ccdc.jpg'
  },
  {
    id: 'bbc-9',
    name: 'Crazy-Cado Ciabatta',
    description: 'Avocado, tomato, pesto, fresh mozzarella, ciabatta bread.',
    price: '28 SR',
    category: 'Brunch Buns & Crust',
    image: '/assets/menu/af83dbeae41e440f68e1ddc984cbe9bf.jpg'
  },
  {
    id: 'bbc-10',
    name: 'Caprese Ciabatta',
    description: 'Fresh mozzarella, baby arugula, tomato, pesto with mix balsamic sauce, ciabatta bread.',
    price: '26 SR',
    category: 'Brunch Buns & Crust',
    image: '/assets/menu/ff156f83db23a328c925380e70dd20f7.jpg'
  },

  // --- Brunch Sweet Chapter ---
  {
    id: 'bs-1',
    name: 'Aci Bowl - Fruits',
    description: 'Fresh Aci bowl topped with seasonal fruits.',
    price: '34 SR',
    category: 'Brunch Sweet',
    image: '/assets/menu/c6f2552c8dad4d33dbdde939be49a60c.jpg'
  },
  {
    id: 'bs-2',
    name: 'Aci Bowl - Chocolate',
    description: 'Fresh Aci bowl with rich chocolate toppings.',
    price: '36 SR',
    category: 'Brunch Sweet',
    image: '/assets/menu/72c950e5cdff67dc9831f1a52243d156.jpeg'
  },
  {
    id: 'bs-3',
    name: 'Classic Pancake',
    description: '3 pieces of pancakes, butter, maple syrup.',
    price: '24 SR',
    category: 'Brunch Sweet',
    image: '/assets/menu/c00a27f57e20556292f7e38aed0aa402.jpg'
  },
  {
    id: 'bs-4',
    name: 'Berries Crema Pancake',
    description: '3 pieces of pancakes, fresh blackberry and raspberry sauce, fresh crema, fresh berries.',
    price: '29 SR',
    category: 'Brunch Sweet',
    image: '/assets/menu/bd1a8d4aecdc6a7a82b7cd0b4c764d7f.jpg'
  },
  {
    id: 'bs-5',
    name: 'Chocolate Pancake',
    description: '3 pieces of pancakes, Belgian chocolate, crunchy cornflakes, ice cream.',
    price: '32 SR',
    category: 'Brunch Sweet',
    image: '/assets/menu/b675e768a91eacf8e8554a95a93afc27.jpg'
  },
  {
    id: 'bs-6',
    name: 'Hotcake',
    description: 'Fluffy hotcake, butter, maple syrup.',
    price: '22 SR',
    category: 'Brunch Sweet',
    image: '/assets/menu/a06fbdd08c3bd54e9e56e8b9f743e63b.jpg'
  },
  {
    id: 'bs-7',
    name: 'Hotcake - Belgian Chocolate',
    description: 'Fluffy hotcake with Belgian chocolate.',
    price: '26 SR',
    category: 'Brunch Sweet',
    image: '/assets/menu/1e50e8de6c45022415c89a1f953e20d3.jpg'
  },
  {
    id: 'bs-8',
    name: 'Classic French Toast',
    description: 'Butter toasted brioche bread, maple syrup, berries, ice cream.',
    price: '28 SR',
    category: 'Brunch Sweet',
    image: '/assets/menu/83c755130f2ad3ec3bde474412b83143.jpg'
  },
  {
    id: 'bs-9',
    name: 'French Toast - Chocolate',
    description: 'Butter toasted brioche bread, Belgian chocolate, ice cream.',
    price: '30 SR',
    category: 'Brunch Sweet',
    image: '/assets/menu/bb1e8933a5bfe410bdc8afe428bf7192.jpg'
  },
  {
    id: 'bs-10',
    name: 'French toast (Squared)',
    description: 'Butter and cinnamon toasted brioche bread, maple syrup, berries, ice cream.',
    price: '29 SR',
    category: 'Brunch Sweet',
    image: '/assets/menu/240217d0b70eb9c5d5925c1dbd75949e.jpg'
  },

  // --- Freshly Baked ---
  {
    id: 'fb-1',
    name: 'Cookie',
    description: 'Freshly baked classic cookie.',
    price: '12 SR',
    category: 'Freshly Baked',
    image: '/assets/menu/d3fc6ce70e5a8686247e71cee389e58b.jpg'
  },
  {
    id: 'fb-2',
    name: 'Cinnamon Roll',
    description: 'Soft cinnamon roll with icing.',
    price: '16 SR',
    category: 'Freshly Baked',
    image: '/assets/menu/9d8f7fb4dd9815b7d2d4d9086076e2d7.jpg'
  },
  {
    id: 'fb-3',
    name: 'Focaccia Cheese',
    description: 'Focaccia bread, tomato sauce, mozzarella, Irish white cheddar, cherry tomato, Italian herbs.',
    price: '18 SR',
    category: 'Freshly Baked',
    image: '/assets/menu/ab1e5299da782fc01ce9dcd7df183e2d.jpg'
  },
  {
    id: 'fb-4',
    name: 'Focaccia Zatar',
    description: 'Focaccia bread, olive oil, Palestinian Zatar.',
    price: '14 SR',
    category: 'Freshly Baked',
    image: '/assets/menu/2da63f2929810019b9cb4f54651b9b34.jpg'
  },
  {
    id: 'fb-5',
    name: 'Croissants (Cheese)',
    description: 'Freshly baked cheese croissant.',
    price: '14 SR',
    category: 'Freshly Baked',
    image: '/assets/menu/68950af81f332bdc038c818ba844e9c1.jpg'
  },
  {
    id: 'fb-6',
    name: 'Croissants (Plain)',
    description: 'Freshly baked butter croissant.',
    price: '12 SR',
    category: 'Freshly Baked',
    image: '/assets/menu/64c785aadcf0b24f1339376ff46da9f6.jpg'
  },
  {
    id: 'fb-7',
    name: 'Croissants (Zatar)',
    description: 'Freshly baked zatar croissant.',
    price: '13 SR',
    category: 'Freshly Baked',
    image: '/assets/menu/ae0cdbb5c11eb759465a293b31ca7b47.jpg'
  },

  // --- Snacks 24/7 ---
  {
    id: 'sn-1',
    name: 'Mini Ciabatta - Halloumi Zater',
    description: 'Bite-sized delight.',
    price: '10 SR',
    category: 'Snacks 24/7',
    image: '/assets/menu/90a330b11e6ed2b5f41bc76238c84f34.jpg'
  },
  {
    id: 'sn-2',
    name: 'Mini Ciabatta - Labneh Zatar',
    description: 'Fresh labneh, Palestinian Zatar, olive oil, mint, pomegranate sauce.',
    price: '8 SR',
    category: 'Snacks 24/7',
    image: '/assets/menu/4d251026aba5becbde4edb7a2f4c590e.jpg'
  },
  {
    id: 'sn-3',
    name: 'Mini Ciabatta - Halloumi',
    description: 'Halloumi, roasted cherry tomatoes, baby arugula.',
    price: '10 SR',
    category: 'Snacks 24/7',
    image: '/assets/menu/25ed09de89e37351f8d10bca4aaff544.jpg'
  },
  {
    id: 'sn-4',
    name: 'Mini Ciabatta - Grilled Melt',
    description: 'Mozzarella, Irish cheddar (yellow & white), roasted cherry tomatoes, pesto mayo.',
    price: '12 SR',
    category: 'Snacks 24/7',
    image: '/assets/menu/8c7253a7c68b62ec4f276659b5d2a392.jpg'
  },
  {
    id: 'sn-5',
    name: 'Mini Ciabatta - Spicy Fetta',
    description: 'Mixed feta & labneh, mozzarella, jalapeno sauce, olive oil, chili flakes.',
    price: '11 SR',
    category: 'Snacks 24/7',
    image: '/assets/menu/4690dec02c0cbdaf2c39d66c4283c933.jpg'
  },
  {
    id: 'sn-6',
    name: 'Protein Balls',
    description: 'Healthy energy snack.',
    price: '8 SR',
    category: 'Snacks 24/7',
    image: '/assets/menu/888854fc8bf44b94a5d99a6861f9ae0d.jpg'
  },

  // --- Espresso Drinks (Selection) ---
  {
    id: 'ed-1',
    name: 'Spanish Latte',
    description: 'Our signature blend of sweet condensed milk and robust espresso.',
    price: '22 SR',
    category: 'Espresso Drinks',
    image: '/assets/menu/5af170c31a679515ba7c00922152c290.jpg'
  },
  {
    id: 'ed-2',
    name: 'Iced Pistachio',
    description: 'Rich pistachio sauce blended with chilled milk and espresso.',
    price: '26 SR',
    category: 'Espresso Drinks',
    image: '/assets/menu/0904193e3e2f991ac6dd11458eee1e5e.jpg'
  },
  {
    id: 'ed-3',
    name: 'Salted Caramel',
    description: 'Perfect balance of sweet caramel and sea salt with espresso.',
    price: '24 SR',
    category: 'Espresso Drinks',
    image: '/assets/menu/0904193e3e2f991ac6dd11458eee1e5e.jpg'
  },
  {
    id: 'ed-4',
    name: 'Rose Latte',
    description: 'Floral notes of rose infused with creamy latte.',
    price: '22 SR',
    category: 'Espresso Drinks',
    image: '/assets/menu/0904193e3e2f991ac6dd11458eee1e5e.jpg'
  },
  {
    id: 'ed-5',
    name: 'Affogato Matcha',
    description: 'Creamy matcha poured over ice cream.',
    price: '24 SR',
    category: 'Espresso Drinks',
    image: '/assets/menu/8824e20f83927da54eb85efa9ed3690b.jpg'
  },

  // --- Coffee Drinks ---
  {
    id: 'cd-1',
    name: 'V60',
    description: 'Hand-poured single origin coffee.',
    price: '22 SR',
    category: 'Coffee Drinks',
    image: '/assets/menu/f2d9dfd2d3fb856b47cd43545a2995da.jpg'
  },
  {
    id: 'cd-2',
    name: 'Cup of the Day',
    description: 'Daily rotating selection of brewed coffee.',
    price: '12 SR',
    category: 'Coffee Drinks',
    image: '/assets/menu/f2d9dfd2d3fb856b47cd43545a2995da.jpg'
  },
  {
    id: 'cd-3',
    name: 'Cold Brew',
    description: 'Steeped for hours for a smooth, rich flavor.',
    price: '24 SR',
    category: 'Coffee Drinks',
    image: '/assets/menu/f2d9dfd2d3fb856b47cd43545a2995da.jpg'
  },

  // --- Tea & Beyond ---
  {
    id: 'tb-1',
    name: 'Tea',
    description: 'Classic steamed tea.',
    price: '8 SR',
    category: 'Tea & Beyond',
    image: '/assets/menu/e04688176fc45be103d389874f1e0f58.jpg'
  },
  {
    id: 'tb-2',
    name: 'Green Tea',
    description: 'Refreshing green tea.',
    price: '8 SR',
    category: 'Tea & Beyond',
    image: '/assets/menu/cfd1043208a8890f008a7b9b9d0bdbb2.jpg'
  },
  {
    id: 'tb-3',
    name: 'Karak',
    description: 'Spiced milk tea.',
    price: '10 SR',
    category: 'Tea & Beyond',
    image: '/assets/menu/5bbd6d85b684dc4e7e3c680a35ecfff4.jpeg'
  },
  {
    id: 'tb-4',
    name: 'Wild Fruits Tea',
    description: 'Aromatic wild fruits infusion.',
    price: '14 SR',
    category: 'Tea & Beyond',
    image: '/assets/menu/49f7f73bfcad813bd0a864cbb7445135.jpg'
  },
  {
    id: 'tb-5',
    name: 'Mandarin Iced Tea',
    description: 'Citrusy refreshing iced tea.',
    price: '20 SR',
    category: 'Tea & Beyond',
    image: '/assets/menu/ee69bcdb60bdbd52cfa7dcf0c82d7f83.jpg'
  },
  {
    id: 'tb-6',
    name: 'Peach Iced Tea',
    description: 'Sweet and chilled peach tea.',
    price: '20 SR',
    category: 'Tea & Beyond',
    image: '/assets/menu/37f38fd53618d3501fc8c85e4df3c023.jpg'
  },

  // --- Non-Coffee Drinks ---
  {
    id: 'nc-1',
    name: 'Blue Ocean Mojito',
    description: 'Refreshing blue mojito.',
    price: '24 SR',
    category: 'Non-Coffee Drinks',
    image: '/assets/menu/ae003e0bac16de85a4066650eb387dfb.jpg'
  },
  {
    id: 'nc-2',
    name: 'Passion Fruit Mojito',
    description: 'Tropical passion fruit refresher.',
    price: '24 SR',
    category: 'Non-Coffee Drinks',
    image: '/assets/menu/3df84933f8f46c417096b02314e4aa9c.jpg'
  },
  {
    id: 'nc-3',
    name: 'Strawberry Mojito',
    description: 'Sweet strawberry mocktail.',
    price: '24 SR',
    category: 'Non-Coffee Drinks',
    image: '/assets/menu/e9a2fb0852a8dbd6ce9754db550823e3.jpg'
  },
  {
    id: 'nc-4',
    name: 'Orange Juice (Fresh)',
    description: 'Freshly squeezed orange juice.',
    price: '18 SR',
    category: 'Non-Coffee Drinks',
    image: '/assets/menu/4775ab420f9cbc06b87d0eeafec70569.jpg'
  },
  {
    id: 'nc-5',
    name: 'Milk Chocolate - Iced',
    description: 'Chilled creamy chocolate milk.',
    price: '20 SR',
    category: 'Non-Coffee Drinks',
    image: '/assets/menu/c7fdf463679423176b313244f1c6a9b2.jpg'
  },
  {
    id: 'nc-6',
    name: 'San Pellegrino',
    description: 'Sparkling water.',
    price: '14 SR',
    category: 'Non-Coffee Drinks',
    image: '/assets/menu/347ae060c5f4f9f799ced898867f580e.jpeg'
  },
  {
    id: 'nc-7',
    name: 'Water "Nova"',
    description: 'Mineral water.',
    price: '5 SR',
    category: 'Non-Coffee Drinks',
    image: '/assets/menu/9de0732526bb167384c9c5a98a66b493.jpg'
  }
];


export const SOCIAL_POSTS = [
  {
    id: 1,
    image: '/assets/social/e90da085ed474c25720632522287d94a.jpg',
    caption: 'Morning brews & good vibes ☕️',
    type: 'post'
  },
  {
    id: 2,
    image: '/assets/social/21bb88eb3bdf22cebabb9d1cdc5fe03b.jpg',
    caption: 'Our signature specialty beans ✨',
    type: 'post'
  },
  {
    id: 3,
    image: '/assets/social/80f821f48ba95cb21ab8567915fe865c.jpg',
    caption: 'Latte art perfection 🎨',
    type: 'post'
  },
  {
    id: 4,
    image: '/assets/social/fe4df43c05038bf27747b53dd99f1001.jpg',
    caption: 'Fresh pastries, baked daily 🥐',
    type: 'post'
  },
  {
    id: 5,
    image: '/assets/social/8805c630b25116376a7da54c36a85299.jpg',
    caption: 'Your cozy corner in Qatif 💫',
    type: 'post'
  },
  {
    id: 6,
    image: '/assets/social/85a9f8bd0c691912dc46458d08b05cea.jpg',
    caption: 'Brunch perfection 🍳',
    type: 'post'
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Abeer Qasim',
    rating: 5,
    text: 'A lovely rooftop, the service was amazing. The workers were polite and helpful. The food was amazing and the prices were great. I went with my friend and we both had a great time.',
    date: '2 months ago'
  },
  {
    id: 2,
    name: 'Dragos Pavel',
    rating: 5,
    text: 'Squared Coffee – Excellent Experience! I had a fantastic visit. The place is beautifully decorated and the atmosphere is great. The coffee was excellent, and the service was top-notch. I highly recommend it!',
    date: '8 months ago'
  },
  {
    id: 3,
    name: 'Sulafa A',
    rating: 5,
    text: 'Amazing coffee shop with incredible service, calm energy, great selection of coffee and desserts. I had a cappuccino and I could tell that the coffee beans used are great quality from the depth of flavor.',
    date: '3 years ago'
  },
  {
    id: 4,
    name: 'Ali A. Al-Mutawa',
    rating: 5,
    text: 'Very nice coffee shop and really their mango travel cake is delicious and I guarantee you will like it.',
    date: '8 months ago'
  },
  {
    id: 5,
    name: 'Nada Al-Zayer',
    rating: 5,
    text: 'Squared cafe is a special place to have a cup of coffee, all of their coffee varieties are amazing. Highly recommended!',
    date: '2 years ago'
  }
];