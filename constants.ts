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
    image: 'https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/227742_1757716339_9fdd05cc-f2a2-4ddc-a8ad-1f280ccc5f04.jpeg',
    foodicsId: '2202312'
  },
  {
    id: 'bp-2',
    name: 'Club Sandwiches with Chips',
    description: 'Eggs, lettuce, slices of Irish cheddar (yellow & white), tomato, bacon or turkey, mayo, slices of brioche, chips.',
    price: '26 SR',
    category: 'Brunch Plates',
    image: 'https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/227742_1757716272_9fdd0567-055e-456c-ac20-7bffbc2520b1.jpeg',
    foodicsId: '2202342'
  },
  {
    id: 'bp-3',
    name: 'Shakshuka Pan',
    description: 'Squared\'s shakshuka, mixed labneh and feta, sourdough bread.',
    price: '29 SR',
    category: 'Brunch Plates',
    image: 'https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/227742_1728506847_9d34efaa-5710-43b2-bfd3-fb2bd59a4453.jpg'
  },
  {
    id: 'bp-4',
    name: 'V-Omelet',
    description: 'Eggs omelets, green pepper, white mushroom, parmesan, tomato, sourdough bread, side salad.',
    price: '28 SR',
    category: 'Brunch Plates',
    image: 'https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/227742_1728507103_9d34f131-1b20-4765-9b99-304f78d537cb.jpg'
  },

  // --- Brunch Toasties ---
  {
    id: 'bt-1',
    name: 'Avo-ca Toast',
    description: 'Sliced avocado, poached eggs, mixed labneh and feta, chili flakes, parsley, sourdough bread, side salad.',
    price: '28 SR',
    category: 'Brunch Toasties',
    image: 'https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/227742_1757715177_9fdcfedf-f84b-4364-9dae-481a3301fdc4.jpg'
  },
  {
    id: 'bt-2',
    name: 'Mushroom Toast',
    description: 'Scrambled eggs, white mushroom, herbs, sourdough, side salad.',
    price: '26 SR',
    category: 'Brunch Toasties',
    image: 'https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/227742_1757715277_9fdcff79-80d5-446c-9dc4-55392809c2b1.jpg'
  },
  {
    id: 'bt-3',
    name: 'Shakshuka Toast',
    description: 'Squared\'s shakshuka, mixed labneh and feta, sumac, cilantro, sourdough toast, side salad.',
    price: '24 SR',
    category: 'Brunch Toasties',
    image: 'https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/227742_1728507040_9d34f0d0-b4fc-4c66-8b81-7718927cfda1.jpg'
  },
  {
    id: 'bt-4',
    name: 'Omelet Toast',
    description: 'Eggs (omelete), parmesan, sourdough bread, side salad.',
    price: '22 SR',
    category: 'Brunch Toasties',
    image: 'https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/227742_1757715343_9fdcffdd-fd8e-4442-b4f6-78c5c792047d.jpg'
  },
  {
    id: 'bt-5',
    name: 'Berries Peanut Butter Toast',
    description: 'Peanut butter, granolas, berries jam, berries, sourdough bread.',
    price: '24 SR',
    category: 'Brunch Toasties',
    image: 'https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/227742_1757715197_9fdcfeff-29c1-469b-9b56-644a8b3b82f0.jpg'
  },
  {
    id: 'bt-6',
    name: 'Labneh and Zatar Toast',
    description: 'Fresh labneh, Palestinian zatar, olive oil, mint, pomegranate sauce, sourdough.',
    price: '18 SR',
    category: 'Brunch Toasties',
    image: 'https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/227742_1757715212_9fdcff16-a561-4958-9c5d-8bfb188b890c.jpg'
  },

  // --- Brunch Buns & Crust ---
  {
    id: 'bbc-1',
    name: 'O\'Eggs',
    description: 'Eggs, baby arugula, Irish cheddar, white sauce, brioche bun.',
    price: '22 SR',
    category: 'Brunch Buns & Crust',
    image: 'https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/227742_1757716236_9fdd0530-b95d-4c64-842d-1b8936560654.jpg'
  },
  {
    id: 'bbc-2',
    name: 'NY Eggs (BEC)',
    description: 'Sunny side eggs, white Irish cheddar, beef bacon, brioche bun.',
    price: '24 SR',
    category: 'Brunch Buns & Crust',
    image: 'https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/227742_1757716225_9fdd0520-2090-4f0c-b599-c58582dd73e1.jpg'
  },
  {
    id: 'bbc-3',
    name: 'Grilled Melt',
    description: 'Mozzarella, yellow Irish cheddar, white Irish cheddar, roasted tomatoes, pesto mayo, in a sourdough grilled toast.',
    price: '26 SR',
    category: 'Brunch Buns & Crust',
    image: 'https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/227742_1757716180_9fdd04db-18b7-4767-9c0d-34f76ae2a010.jpg'
  },
  {
    id: 'bbc-4',
    name: 'Halloumi Ciabatta',
    description: 'Halloumi, roasted cherry tomatoes, baby arugula, ciabatta bread.',
    price: '24 SR',
    category: 'Brunch Buns & Crust',
    image: 'https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/227742_1757716200_9fdd04f9-48d6-4f72-9ad8-702d4f1a4d1a.jpg'
  },
  {
    id: 'bbc-5',
    name: 'Halloumi Croissant',
    description: 'Halloumi, roasted cherry tomatoes, baby arugula, fresh baked croissant.',
    price: '23 SR',
    category: 'Brunch Buns & Crust',
    image: 'https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/227742_1757716213_9fdd050e-18d8-4588-8487-1ffdfaef9510.jpg'
  },
  {
    id: 'bbc-6',
    name: 'Scrambled Croissant',
    description: 'Scrambled eggs, parmesan cheese, fresh baked croissant, side salad.',
    price: '21 SR',
    category: 'Brunch Buns & Crust',
    image: 'https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/227742_1728506795_9d34ef5a-0bfe-4ed6-b4b2-02c95442fa11.jpg'
  },
  {
    id: 'bbc-7',
    name: 'Shakshuka Sliders',
    description: 'Squared\'s shakshuka, mixed labneh and feta, sumac, cilantro, in brioche bun (3 sliders).',
    price: '25 SR',
    category: 'Brunch Buns & Crust',
    image: 'https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/227742_1728506864_9d34efc3-56b1-4509-bb51-4e519802956c.jpg'
  },
  {
    id: 'bbc-8',
    name: 'Scrambled Sliders',
    description: 'Scrambled eggs, parmesan cheese, three brioche sliders.',
    price: '24 SR',
    category: 'Brunch Buns & Crust',
    image: 'https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/227742_1728506814_9d34ef77-5f71-4caf-b394-0de853ca7da4.jpg'
  },
  {
    id: 'bbc-9',
    name: 'Crazy-Cado Ciabatta',
    description: 'Avocado, tomato, pesto, fresh mozzarella, ciabatta bread.',
    price: '28 SR',
    category: 'Brunch Buns & Crust',
    image: 'https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/227742_1757716159_9fdd04bb-00a2-4018-9cda-e72b55c0cdbd.jpg'
  },
  {
    id: 'bbc-10',
    name: 'Caprese Ciabatta',
    description: 'Fresh mozzarella, baby arugula, tomato, pesto with mix balsamic sauce, ciabatta bread.',
    price: '26 SR',
    category: 'Brunch Buns & Crust',
    image: 'https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/227742_1757716145_9fdd04a5-22c9-480c-b165-19b2aa06f322.jpg'
  },

  // --- Brunch Sweet Chapter ---
  {
    id: 'bs-1',
    name: 'Aci Bowl - Fruits',
    description: 'Fresh Aci bowl topped with seasonal fruits.',
    price: '34 SR',
    category: 'Brunch Sweet',
    image: 'https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/227742_1757715848_9fdd02e0-b418-413a-ae01-b8a38686d1d6.jpg'
  },
  {
    id: 'bs-2',
    name: 'Aci Bowl - Chocolate',
    description: 'Fresh Aci bowl with rich chocolate toppings.',
    price: '36 SR',
    category: 'Brunch Sweet',
    image: 'https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/227742_1757715502_9fdd00cf-e43f-44a0-a082-33a5411eedca.jpeg'
  },
  {
    id: 'bs-3',
    name: 'Classic Pancake',
    description: '3 pieces of pancakes, butter, maple syrup.',
    price: '24 SR',
    category: 'Brunch Sweet',
    image: 'https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/227742_1757715814_9fdd02ab-faf3-429f-abf6-669be7cdbd7b.jpg'
  },
  {
    id: 'bs-4',
    name: 'Berries Crema Pancake',
    description: '3 pieces of pancakes, fresh blackberry and raspberry sauce, fresh crema, fresh berries.',
    price: '29 SR',
    category: 'Brunch Sweet',
    image: 'https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/227742_1757715487_9fdd00b9-5d7f-4f4b-a8a8-d703cbcb7251.jpg'
  },
  {
    id: 'bs-5',
    name: 'Chocolate Pancake',
    description: '3 pieces of pancakes, Belgian chocolate, crunchy cornflakes, ice cream.',
    price: '32 SR',
    category: 'Brunch Sweet',
    image: 'https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/227742_1757715669_9fdd01cf-a9b4-4a6e-b9aa-b93010ccc33d.jpg'
  },
  {
    id: 'bs-6',
    name: 'Hotcake',
    description: 'Fluffy hotcake, butter, maple syrup.',
    price: '22 SR',
    category: 'Brunch Sweet',
    image: 'https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/227742_1757715878_9fdd030e-c7ed-4b65-bdcc-599e9a2285bf.jpg'
  },
  {
    id: 'bs-7',
    name: 'Hotcake - Belgian Chocolate',
    description: 'Fluffy hotcake with Belgian chocolate.',
    price: '26 SR',
    category: 'Brunch Sweet',
    image: 'https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/227742_1757715747_9fdd0245-ef3b-411a-8c41-8cdd9762cf9e.jpg'
  },
  {
    id: 'bs-8',
    name: 'Classic French Toast',
    description: 'Butter toasted brioche bread, maple syrup, berries, ice cream.',
    price: '28 SR',
    category: 'Brunch Sweet',
    image: 'https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/227742_1757715763_9fdd025f-66ab-4dde-a75f-d93f7c860a7a.jpg'
  },
  {
    id: 'bs-9',
    name: 'French Toast - Chocolate',
    description: 'Butter toasted brioche bread, Belgian chocolate, ice cream.',
    price: '30 SR',
    category: 'Brunch Sweet',
    image: 'https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/227742_1757715684_9fdd01e6-7ec2-46c6-9887-831980f84df2.jpg'
  },
  {
    id: 'bs-10',
    name: 'French toast (Squared)',
    description: 'Butter and cinnamon toasted brioche bread, maple syrup, berries, ice cream.',
    price: '29 SR',
    category: 'Brunch Sweet',
    image: 'https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/227742_1757715832_9fdd02c8-a989-4f92-956c-2b9dc53c48d5.jpg'
  },

  // --- Freshly Baked ---
  {
    id: 'fb-1',
    name: 'Cookie',
    description: 'Freshly baked classic cookie.',
    price: '12 SR',
    category: 'Freshly Baked',
    image: 'https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/227742_1757714561_9fdcfb34-1271-4c82-801a-c9187c87a81e.JPG'
  },
  {
    id: 'fb-2',
    name: 'Cinnamon Roll',
    description: 'Soft cinnamon roll with icing.',
    price: '16 SR',
    category: 'Freshly Baked',
    image: 'https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/227742_1757714435_9fdcfa74-1d7f-4ae8-bb7a-490c8e68ad36.JPG'
  },
  {
    id: 'fb-3',
    name: 'Focaccia Cheese',
    description: 'Focaccia bread, tomato sauce, mozzarella, Irish white cheddar, cherry tomato, Italian herbs.',
    price: '18 SR',
    category: 'Freshly Baked',
    image: 'https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/227742_1757714723_9fdcfc2b-6572-499a-b808-7c9319eaaade.jpg'
  },
  {
    id: 'fb-4',
    name: 'Focaccia Zatar',
    description: 'Focaccia bread, olive oil, Palestinian Zatar.',
    price: '14 SR',
    category: 'Freshly Baked',
    image: 'https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/227742_1757714738_9fdcfc43-232a-4e66-bb73-3eb5958d9b02.jpg'
  },
  {
    id: 'fb-5',
    name: 'Croissants (Cheese)',
    description: 'Freshly baked cheese croissant.',
    price: '14 SR',
    category: 'Freshly Baked',
    image: 'https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/227742_1757714585_9fdcfb59-2e7e-4328-a4d8-1d7e117aaea7.jpg'
  },
  {
    id: 'fb-6',
    name: 'Croissants (Plain)',
    description: 'Freshly baked butter croissant.',
    price: '12 SR',
    category: 'Freshly Baked',
    image: 'https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/227742_1757714605_9fdcfb78-41d7-4d34-99bb-75f66ee79645.jpg'
  },
  {
    id: 'fb-7',
    name: 'Croissants (Zatar)',
    description: 'Freshly baked zatar croissant.',
    price: '13 SR',
    category: 'Freshly Baked',
    image: 'https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/227742_1757714621_9fdcfb8f-b7b7-460d-b595-ad36d3f63131.jpg'
  },

  // --- Snacks 24/7 ---
  {
    id: 'sn-1',
    name: 'Mini Ciabatta - Halloumi Zater',
    description: 'Bite-sized delight.',
    price: '10 SR',
    category: 'Snacks 24/7',
    image: 'https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/227742_1757717584_9fdd0d39-9601-4fe6-893f-c161a1c87342.JPG'
  },
  {
    id: 'sn-2',
    name: 'Mini Ciabatta - Labneh Zatar',
    description: 'Fresh labneh, Palestinian Zatar, olive oil, mint, pomegranate sauce.',
    price: '8 SR',
    category: 'Snacks 24/7',
    image: 'https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/227742_1757717639_9fdd0d8d-4c2a-47d0-9325-6a29b293af93.JPG'
  },
  {
    id: 'sn-3',
    name: 'Mini Ciabatta - Halloumi',
    description: 'Halloumi, roasted cherry tomatoes, baby arugula.',
    price: '10 SR',
    category: 'Snacks 24/7',
    image: 'https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/227742_1757717618_9fdd0d6d-0462-45ca-b72f-7e5f60c576d0.JPG'
  },
  {
    id: 'sn-4',
    name: 'Mini Ciabatta - Grilled Melt',
    description: 'Mozzarella, Irish cheddar (yellow & white), roasted cherry tomatoes, pesto mayo.',
    price: '12 SR',
    category: 'Snacks 24/7',
    image: 'https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/227742_1757717601_9fdd0d53-b15a-4efd-950d-0d8620a85c01.JPG'
  },
  {
    id: 'sn-5',
    name: 'Mini Ciabatta - Spicy Fetta',
    description: 'Mixed feta & labneh, mozzarella, jalapeno sauce, olive oil, chili flakes.',
    price: '11 SR',
    category: 'Snacks 24/7',
    image: 'https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/227742_1757717671_9fdd0dbd-95fd-44e0-b533-233bab7bcf83.JPG'
  },
  {
    id: 'sn-6',
    name: 'Protein Balls',
    description: 'Healthy energy snack.',
    price: '8 SR',
    category: 'Snacks 24/7',
    image: 'https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/227742_1757717887_9fdd0f08-415d-4bc9-8f37-ed2bf4593831.jpg'
  },

  // --- Espresso Drinks (Selection) ---
  {
    id: 'ed-1',
    name: 'Spanish Latte',
    description: 'Our signature blend of sweet condensed milk and robust espresso.',
    price: '22 SR',
    category: 'Espresso Drinks',
    image: 'https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/227742_1728160603_9d2cdfe4-1d4d-4e39-baf9-b127c36d5c18.jpg'
  },
  {
    id: 'ed-2',
    name: 'Iced Pistachio',
    description: 'Rich pistachio sauce blended with chilled milk and espresso.',
    price: '26 SR',
    category: 'Espresso Drinks',
    image: 'https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/227742_1702369748_9ad4626a-4781-44b9-b1b4-486ef0fe1d65.jpg'
  },
  {
    id: 'ed-3',
    name: 'Salted Caramel',
    description: 'Perfect balance of sweet caramel and sea salt with espresso.',
    price: '24 SR',
    category: 'Espresso Drinks',
    image: 'https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/227742_1702369748_9ad4626a-4781-44b9-b1b4-486ef0fe1d65.jpg'
  },
  {
    id: 'ed-4',
    name: 'Rose Latte',
    description: 'Floral notes of rose infused with creamy latte.',
    price: '22 SR',
    category: 'Espresso Drinks',
    image: 'https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/227742_1702369748_9ad4626a-4781-44b9-b1b4-486ef0fe1d65.jpg'
  },
  {
    id: 'ed-5',
    name: 'Affogato Matcha',
    description: 'Creamy matcha poured over ice cream.',
    price: '24 SR',
    category: 'Espresso Drinks',
    image: 'https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/227742_1757718038_9fdd0fee-b3c4-4ce9-9961-6e045566dd05.jpg'
  },

  // --- Coffee Drinks ---
  {
    id: 'cd-1',
    name: 'V60',
    description: 'Hand-poured single origin coffee.',
    price: '22 SR',
    category: 'Coffee Drinks',
    image: 'https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/227742_1702369816_9ad462d2-4837-42e3-96e7-a776e89a7b5b.jpg'
  },
  {
    id: 'cd-2',
    name: 'Cup of the Day',
    description: 'Daily rotating selection of brewed coffee.',
    price: '12 SR',
    category: 'Coffee Drinks',
    image: 'https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/227742_1702369816_9ad462d2-4837-42e3-96e7-a776e89a7b5b.jpg'
  },
  {
    id: 'cd-3',
    name: 'Cold Brew',
    description: 'Steeped for hours for a smooth, rich flavor.',
    price: '24 SR',
    category: 'Coffee Drinks',
    image: 'https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/227742_1702369816_9ad462d2-4837-42e3-96e7-a776e89a7b5b.jpg'
  },

  // --- Tea & Beyond ---
  {
    id: 'tb-1',
    name: 'Tea',
    description: 'Classic steamed tea.',
    price: '8 SR',
    category: 'Tea & Beyond',
    image: 'https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/227742_1757716607_9fdd0766-07dc-4fa8-8f92-dd9188c05018.jpg'
  },
  {
    id: 'tb-2',
    name: 'Green Tea',
    description: 'Refreshing green tea.',
    price: '8 SR',
    category: 'Tea & Beyond',
    image: 'https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/227742_1757716545_9fdd0708-9526-4ff0-b413-cf9406eae1a1.jpg'
  },
  {
    id: 'tb-3',
    name: 'Karak',
    description: 'Spiced milk tea.',
    price: '10 SR',
    category: 'Tea & Beyond',
    image: 'https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/227742_1757716557_9fdd071a-ef65-4105-bd65-9c11eb605194.jpeg'
  },
  {
    id: 'tb-4',
    name: 'Wild Fruits Tea',
    description: 'Aromatic wild fruits infusion.',
    price: '14 SR',
    category: 'Tea & Beyond',
    image: 'https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/227742_1757716625_9fdd0781-804d-4ecf-ac9d-8aa996590e18.jpg'
  },
  {
    id: 'tb-5',
    name: 'Mandarin Iced Tea',
    description: 'Citrusy refreshing iced tea.',
    price: '20 SR',
    category: 'Tea & Beyond',
    image: 'https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/227742_1757716582_9fdd0740-0a54-4f5f-910d-a78b0e9199c7.jpg'
  },
  {
    id: 'tb-6',
    name: 'Peach Iced Tea',
    description: 'Sweet and chilled peach tea.',
    price: '20 SR',
    category: 'Tea & Beyond',
    image: 'https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/227742_1757716592_9fdd0750-43e4-4fc5-9cbe-0cdc728ed7b1.jpg'
  },

  // --- Non-Coffee Drinks ---
  {
    id: 'nc-1',
    name: 'Blue Ocean Mojito',
    description: 'Refreshing blue mojito.',
    price: '24 SR',
    category: 'Non-Coffee Drinks',
    image: 'https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/227742_1757718295_9fdd1176-0f4b-4818-8eb4-72aa51152996.jpg'
  },
  {
    id: 'nc-2',
    name: 'Passion Fruit Mojito',
    description: 'Tropical passion fruit refresher.',
    price: '24 SR',
    category: 'Non-Coffee Drinks',
    image: 'https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/227742_1757718321_9fdd119d-bf65-4511-aa10-9e86db7e6985.jpg'
  },
  {
    id: 'nc-3',
    name: 'Strawberry Mojito',
    description: 'Sweet strawberry mocktail.',
    price: '24 SR',
    category: 'Non-Coffee Drinks',
    image: 'https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/227742_1728159009_9d2cd663-62ea-413f-adcb-01cac1ea70f1.jpg'
  },
  {
    id: 'nc-4',
    name: 'Orange Juice (Fresh)',
    description: 'Freshly squeezed orange juice.',
    price: '18 SR',
    category: 'Non-Coffee Drinks',
    image: 'https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/227742_1757718308_9fdd118a-2cc4-42ed-a318-567dfb3240ff.jpg'
  },
  {
    id: 'nc-5',
    name: 'Milk Chocolate - Iced',
    description: 'Chilled creamy chocolate milk.',
    price: '20 SR',
    category: 'Non-Coffee Drinks',
    image: 'https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/227742_1757718215_9fdd10fb-8e2a-489c-8efd-18436413cda4.jpg'
  },
  {
    id: 'nc-6',
    name: 'San Pellegrino',
    description: 'Sparkling water.',
    price: '14 SR',
    category: 'Non-Coffee Drinks',
    image: 'https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/227742_1757718374_9fdd11ee-4405-4baf-bd5d-0e440b8587eb.jpeg'
  },
  {
    id: 'nc-7',
    name: 'Water "Nova"',
    description: 'Mineral water.',
    price: '5 SR',
    category: 'Non-Coffee Drinks',
    image: 'https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/227742_1728159073_9d2cd6c5-27e8-4dc0-8293-822932e6da24.jpg'
  }
];

// Re-export as FEATURED_MENU for now to avoid breaking imports, though we will use FULL_MENU
export const FEATURED_MENU = FULL_MENU.slice(0, 4);

export const SOCIAL_POSTS = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800&h=800',
    caption: 'Morning brews & good vibes ☕️',
    type: 'post'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=800&h=800',
    caption: 'Our signature specialty beans ✨',
    type: 'post'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800&h=800',
    caption: 'Latte art perfection 🎨',
    type: 'post'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800&h=800',
    caption: 'Fresh pastries, baked daily 🥐',
    type: 'post'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800&h=800',
    caption: 'Your cozy corner in Qatif 💫',
    type: 'post'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1445077100181-a33e9ac94db0?auto=format&fit=crop&q=80&w=800&h=800',
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