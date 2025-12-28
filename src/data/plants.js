export const plants = [
  // Air Purifying Plants
  {
    id: 'ap-1',
    name: 'Snake Plant',
    price: 25,
    description: 'Low maintenance air purifier perfect for beginners.',
    image: 'https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?w=400&h=400&fit=crop',
    category: 'Air Purifying Plants',
  },
  {
    id: 'ap-2',
    name: 'Peace Lily',
    price: 30,
    description: 'Elegant white flowers and excellent air cleaning properties.',
    image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e1ce2?w=400&h=400&fit=crop',
    category: 'Air Purifying Plants',
  },
  {
    id: 'ap-3',
    name: 'Spider Plant',
    price: 18,
    description: 'Fast-growing with cascading leaves, great for hanging baskets.',
    image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=400&h=400&fit=crop',
    category: 'Air Purifying Plants',
  },
  {
    id: 'ap-4',
    name: 'Pothos',
    price: 15,
    description: 'Trailing vine that thrives in low light conditions.',
    image: 'https://images.unsplash.com/photo-1637967886160-fd761519fb90?w=400&h=400&fit=crop',
    category: 'Air Purifying Plants',
  },
  {
    id: 'ap-5',
    name: 'Boston Fern',
    price: 22,
    description: 'Lush, feathery fronds that add humidity to your space.',
    image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400&h=400&fit=crop',
    category: 'Air Purifying Plants',
  },
  {
    id: 'ap-6',
    name: 'Rubber Plant',
    price: 35,
    description: 'Bold, glossy leaves make a strong visual statement.',
    image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400&h=400&fit=crop',
    category: 'Air Purifying Plants',
  },

  // Aromatic & Fragrant Plants
  {
    id: 'af-1',
    name: 'Lavender',
    price: 20,
    description: 'Calming fragrance, perfect for bedrooms and relaxation spaces.',
    image: 'https://images.unsplash.com/photo-1595235060109-22de0de79924?w=400&h=400&fit=crop',
    category: 'Aromatic Plants',
  },
  {
    id: 'af-2',
    name: 'Jasmine',
    price: 28,
    description: 'Sweet, intoxicating scent that blooms at night.',
    image: 'https://images.unsplash.com/photo-1606567595334-d39972c85dfd?w=400&h=400&fit=crop',
    category: 'Aromatic Plants',
  },
  {
    id: 'af-3',
    name: 'Mint',
    price: 12,
    description: 'Fresh, invigorating aroma, great for cooking too.',
    image: 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=400&h=400&fit=crop',
    category: 'Aromatic Plants',
  },
  {
    id: 'af-4',
    name: 'Rosemary',
    price: 14,
    description: 'Woody, herbaceous scent with culinary benefits.',
    image: 'https://images.unsplash.com/photo-1515586000433-45406d8e6662?w=400&h=400&fit=crop',
    category: 'Aromatic Plants',
  },
  {
    id: 'af-5',
    name: 'Gardenia',
    price: 32,
    description: 'Creamy white blooms with an unforgettable fragrance.',
    image: 'https://images.unsplash.com/photo-1589994160839-163cd867cfe8?w=400&h=400&fit=crop',
    category: 'Aromatic Plants',
  },
  {
    id: 'af-6',
    name: 'Eucalyptus',
    price: 26,
    description: 'Refreshing, spa-like scent with silvery foliage.',
    image: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=400&h=400&fit=crop',
    category: 'Aromatic Plants',
  },

  // Low Maintenance Succulents
  {
    id: 'su-1',
    name: 'Echeveria',
    price: 12,
    description: 'Rose-shaped succulent in beautiful pastel colors.',
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400&h=400&fit=crop',
    category: 'Succulents',
  },
  {
    id: 'su-2',
    name: 'Aloe Vera',
    price: 16,
    description: 'Healing gel inside, striking architectural form.',
    image: 'https://images.unsplash.com/photo-1567331711402-509c12c41959?w=400&h=400&fit=crop',
    category: 'Succulents',
  },
  {
    id: 'su-3',
    name: 'Jade Plant',
    price: 20,
    description: 'Symbol of prosperity with thick, oval leaves.',
    image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400&h=400&fit=crop',
    category: 'Succulents',
  },
  {
    id: 'su-4',
    name: 'String of Pearls',
    price: 18,
    description: 'Unique trailing succulent resembling a beaded necklace.',
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=400&fit=crop',
    category: 'Succulents',
  },
  {
    id: 'su-5',
    name: 'Haworthia',
    price: 14,
    description: 'Compact zebra-striped rosettes, perfect for desks.',
    image: 'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=400&h=400&fit=crop',
    category: 'Succulents',
  },
  {
    id: 'su-6',
    name: "Burro's Tail",
    price: 22,
    description: 'Cascading blue-green leaves create stunning displays.',
    image: 'https://images.unsplash.com/photo-1446071103084-c257b5f70672?w=400&h=400&fit=crop',
    category: 'Succulents',
  },
];

export const getPlantsByCategory = () => {
  const categories = {};
  
  plants.forEach(plant => {
    if (!categories[plant.category]) {
      categories[plant.category] = [];
    }
    categories[plant.category].push(plant);
  });
  
  return categories;
};
