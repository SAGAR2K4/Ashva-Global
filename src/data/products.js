const rawData = {
  shirtingFabrics: [
    { name: '100% Cotton' },
    { name: '100% Cotton Indigo' },
    { name: 'CVC' },
  ],
  suitingFabrics: [
    { name: 'Polyester/Viscose (T/R)' },
    { name: '100% Polyester' },
  ],
  menApparel: [
    { name: 'Cotton Casual Shirts' },
  ],
  womenApparel: [
    { name: 'Cotton Workwear Blouses' },
  ],
};

// Add category while flattening
const products = Object.entries(rawData).flatMap(([category, items], index) =>
  items.map((item, i) => ({
    id: `${index}-${i}`,
    name: item.name,
    category,
    image: `https://via.placeholder.com/300x300?text=${encodeURIComponent(item.name)}`,
  }))
);

export default products;