# ShopHub - E-commerce Application

A modern, responsive e-commerce application built with Next.js 15, React 19, and Tailwind CSS. Features a complete shopping experience with product browsing, cart management, and a beautiful user interface.

## 🌟 Features

### ✅ Home Page
- **Hero Section**: Eye-catching welcome section with call-to-action buttons
- **Features Showcase**: Highlight key benefits (Free Shipping, Quality Guarantee, 24/7 Support)
- **Featured Products**: Display curated product selection
- **Newsletter Signup**: Customer engagement section
- **Responsive Design**: Optimized for all device sizes

### ✅ Products Page with Sidebar
- **Advanced Filtering**: Category, price range, and search filters
- **Sidebar Navigation**: Comprehensive filtering options
- **Product Grid**: Clean, organized product display
- **Sorting Options**: Sort by name, price, and rating
- **Pagination**: Handle large product catalogs efficiently
- **Search Functionality**: Real-time product search

### ✅ Shopping Cart
- **Add to Cart**: Seamless product addition from any page
- **Quantity Management**: Increase/decrease item quantities
- **Remove Items**: Individual item removal capability
- **Cart Persistence**: Maintains cart state across sessions
- **Order Summary**: Detailed pricing breakdown
- **Responsive Design**: Mobile-friendly cart interface

## 🛠️ Technology Stack

- **Framework**: Next.js 15 with App Router
- **Frontend**: React 19
- **Styling**: Tailwind CSS 4.0
- **State Management**: React Context API with useReducer
- **Images**: Next.js Image Optimization
- **Icons**: Custom SVG icons
- **Font**: Geist Sans & Geist Mono

## 📁 Project Structure

```
src/
├── app/
│   ├── cart/
│   │   └── page.js          # Shopping cart page
│   ├── products/
│   │   └── page.js          # Products listing page
│   ├── globals.css          # Global styles
│   ├── layout.js            # Root layout with providers
│   └── page.js              # Home page
├── components/
│   ├── Footer.js            # Footer component
│   ├── Header.js            # Navigation header
│   ├── ProductCard.js       # Product display card
│   └── Sidebar.js           # Filtering sidebar
├── context/
│   └── CartContext.js       # Cart state management
└── data/
    └── products.js          # Product data and utilities

screenshots/                 # Application screenshots
└── README.md               # Screenshot documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd E-commerce-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Pages Overview

### Home Page (`/`)
- Welcome hero section
- Feature highlights
- Featured products grid
- Newsletter signup

### Products Page (`/products`)
- Complete product catalog
- Advanced filtering sidebar
- Search functionality
- Sorting and pagination

### Cart Page (`/cart`)
- Shopping cart management
- Quantity controls
- Order summary
- Checkout preparation

## 🎨 Design Features

- **Modern UI**: Clean, professional design using Tailwind CSS
- **Responsive Layout**: Mobile-first approach with desktop optimization
- **Interactive Elements**: Hover effects, smooth transitions
- **Accessibility**: Semantic HTML and keyboard navigation support
- **Loading States**: Visual feedback for user actions
- **Error Handling**: Graceful fallbacks and user messaging

## 📊 Product Features

- **Product Ratings**: Star-based rating system
- **Stock Management**: Real-time stock level display
- **Category System**: Organized product categorization
- **Price Display**: Clear pricing with tax calculations
- **Image Optimization**: Next.js Image component for performance

## 🛒 Cart Features

- **Add to Cart**: One-click product addition
- **Quantity Controls**: Intuitive +/- buttons
- **Remove Items**: Individual item removal
- **Clear Cart**: Remove all items at once
- **Price Calculation**: Real-time total updates
- **Empty Cart State**: Friendly empty cart messaging

## 📸 Screenshots

Screenshots of all major pages and functionality are available in the `/screenshots` folder:

1. **Home Page**: Hero section and featured products
2. **Products Page**: Full catalog with sidebar filters
3. **Cart Page**: Shopping cart with order summary
4. **Add-to-Cart Demo**: Functionality demonstration

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project in Vercel dashboard
3. Deploy automatically

### Other Platforms
This Next.js app can be deployed on any platform supporting Node.js:
- Netlify
- Railway
- Heroku
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first styling
- Unsplash for product images
- Vercel for hosting and deployment
