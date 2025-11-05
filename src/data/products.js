export const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 89.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    description: "High-quality wireless headphones with noise cancellation and 30-hour battery life.",
    featured: true,
    rating: 4.5,
    stock: 25
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 199.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    description: "Advanced fitness tracking with heart rate monitor, GPS, and smartphone connectivity.",
    featured: true,
    rating: 4.7,
    stock: 15
  },
  {
    id: 3,
    name: "Organic Cotton T-Shirt",
    price: 29.99,
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    description: "Comfortable and sustainable organic cotton t-shirt in various colors.",
    featured: true,
    rating: 4.3,
    stock: 50
  },
  {
    id: 4,
    name: "Ceramic Coffee Mug",
    price: 15.99,
    category: "Home & Kitchen",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=400&fit=crop",
    description: "Handcrafted ceramic coffee mug with elegant design and comfortable grip.",
    featured: false,
    rating: 4.1,
    stock: 30
  },
  {
    id: 5,
    name: "Laptop Backpack",
    price: 59.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    description: "Durable laptop backpack with multiple compartments and water-resistant material.",
    featured: true,
    rating: 4.6,
    stock: 20
  },
  {
    id: 6,
    name: "Wireless Phone Charger",
    price: 39.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1609592424748-c2e18e4b5b3f?w=400&h=400&fit=crop",
    description: "Fast wireless charging pad compatible with all Qi-enabled devices.",
    featured: false,
    rating: 4.2,
    stock: 40
  },
  {
    id: 7,
    name: "Running Shoes",
    price: 129.99,
    category: "Sports",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    description: "Professional running shoes with advanced cushioning and breathable design.",
    featured: true,
    rating: 4.8,
    stock: 35
  },
  {
    id: 8,
    name: "Desk Lamp",
    price: 45.99,
    category: "Home & Kitchen",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    description: "Adjustable LED desk lamp with multiple brightness levels and USB charging port.",
    featured: false,
    rating: 4.4,
    stock: 18
  },
  {
    id: 9,
    name: "Bluetooth Speaker",
    price: 79.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    description: "Portable Bluetooth speaker with 360-degree sound and waterproof design.",
    featured: false,
    rating: 4.5,
    stock: 28
  },
  {
    id: 10,
    name: "Yoga Mat",
    price: 34.99,
    category: "Sports",
    image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=400&h=400&fit=crop",
    description: "Non-slip yoga mat with extra cushioning and eco-friendly materials.",
    featured: true,
    rating: 4.3,
    stock: 45
  },
  {
    id: 11,
    name: "Stainless Steel Water Bottle",
    price: 24.99,
    category: "Home & Kitchen",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
    description: "Insulated water bottle that keeps drinks cold for 24 hours or hot for 12 hours.",
    featured: false,
    rating: 4.6,
    stock: 60
  },
  {
    id: 12,
    name: "Wireless Mouse",
    price: 19.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
    description: "Ergonomic wireless mouse with precision tracking and long battery life.",
    featured: false,
    rating: 4.2,
    stock: 55
  }
];

export const categories = [
  "All Categories",
  "Electronics",
  "Clothing", 
  "Home & Kitchen",
  "Accessories",
  "Sports"
];

export const getFeaturedProducts = () => {
  return products.filter(product => product.featured);
};

export const getProductsByCategory = (category) => {
  if (category === "All Categories") {
    return products;
  }
  return products.filter(product => product.category === category);
};

export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id));
};

export const searchProducts = (query) => {
  return products.filter(product => 
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.description.toLowerCase().includes(query.toLowerCase()) ||
    product.category.toLowerCase().includes(query.toLowerCase())
  );
};
