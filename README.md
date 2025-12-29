# 🌿 Paradise Nursery - Shopping Cart Application

A dynamic e-commerce web application for an online plant shop built with React and Redux Toolkit.

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat&logo=react)
![Redux](https://img.shields.io/badge/Redux_Toolkit-2.11.2-764ABC?style=flat&logo=redux)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=flat&logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=flat&logo=vite)

## 📋 Project Overview

Paradise Nursery is a fully functional e-commerce application that allows users to browse a beautiful collection of houseplants, view detailed information about each plant, add items to a shopping cart, and manage their cart items with complete CRUD functionality.

### Target Audience
- Plant enthusiasts looking to purchase houseplants online
- Home decorators seeking air-purifying and aromatic plants
- Anyone interested in adding greenery to their living spaces

## ✨ Features

- **Landing Page**: Beautiful hero section with company branding and "Get Started" call-to-action
- **Product Catalog**: Browse plants organized by 3 categories with thumbnails, names, descriptions, and prices
- **Shopping Cart**: Full cart management with add/remove items, quantity controls, and total calculation
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Redux State Management**: Centralized cart state with Redux Toolkit
- **Dynamic Cart Icon**: Shows real-time item count in navigation

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| **React 18** | Frontend UI library |
| **Redux Toolkit** | State management for cart |
| **React Router DOM** | Client-side routing |
| **Tailwind CSS** | Utility-first styling |
| **Vite** | Build tool and dev server |
| **Shadcn/UI** | UI component library |
| **Lucide React** | Icon library |

## 📁 Project Structure

```
paradise-nursery/
├── public/
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
├── src/
│   ├── assets/                 # Images and static assets
│   │   └── hero-bg.jpg
│   ├── components/             # React components
│   │   ├── ui/                # Shadcn UI components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── toast.tsx
│   │   │   └── ... (other UI components)
│   │   ├── CartItem.jsx       # Individual cart item component
│   │   ├── Navbar.jsx         # Navigation bar with cart icon
│   │   ├── NavLink.jsx        # Reusable navigation link
│   │   └── ProductCard.jsx    # Plant product card component
│   ├── data/                   # Data files
│   │   └── plants.js          # Plant catalog data (3 categories, 6+ each)
│   ├── hooks/                  # Custom React hooks
│   │   ├── use-mobile.jsx     # Mobile detection hook
│   │   └── use-toast.js       # Toast notification hook
│   ├── lib/                    # Utility functions
│   │   └── utils.js           # Helper utilities (cn function)
│   ├── pages/                  # Page components
│   │   ├── AboutUs.jsx        # About page
│   │   ├── Cart.jsx           # Shopping cart page
│   │   ├── Index.jsx          # Landing/home page
│   │   ├── NotFound.jsx       # 404 error page
│   │   └── ProductList.jsx    # Product catalog page
│   ├── store/                  # Redux store
│   │   ├── CartSlice.jsx      # Cart reducer and actions
│   │   └── store.js           # Redux store configuration
│   ├── App.jsx                # Main app with routing
│   ├── App.css                # App-specific styles
│   ├── index.css              # Global styles and Tailwind
│   └── main.jsx               # Application entry point
├── index.html                  # HTML template
├── tailwind.config.ts          # Tailwind configuration
├── vite.config.ts              # Vite configuration
└── package.json                # Dependencies and scripts
```

## 📄 Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Landing page with hero section and "Get Started" button |
| `/products` | Plants | Product listing with 3 categories of plants |
| `/cart` | Cart | Shopping cart with item management |
| `/about` | About Us | Company information, mission, and values |

## 🛒 Cart Functionality

The shopping cart implements full CRUD operations using Redux Toolkit:

### Redux Actions (CartSlice.jsx)

```javascript
// Add item to cart
addItem(state, action)
  - Adds new item with quantity: 1
  - If item exists, increments quantity by 1
  - Updates totalQuantity and totalAmount

// Remove item from cart
removeItem(state, action)
  - Removes item completely from cart
  - Updates totalQuantity and totalAmount

// Update item quantity
updateQuantity(state, action)
  - Sets specific quantity for an item
  - Removes item if quantity <= 0
  - Updates totalQuantity and totalAmount

// Clear entire cart
clearCart(state)
  - Removes all items
  - Resets totalQuantity and totalAmount to 0
```

### Cart Features
- ✅ "Add to Cart" button on each product card
- ✅ Button disables after product is added (prevents duplicates)
- ✅ Dynamic cart icon badge showing total item count
- ✅ Increase/decrease quantity buttons in cart
- ✅ Remove individual items from cart
- ✅ Real-time total price calculation
- ✅ "Continue Shopping" link back to products
- ✅ Checkout button (placeholder functionality)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd paradise-nursery

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

## 🌱 Plant Categories

The application features 3 plant categories with 6+ plants each:

1. **Air Purifying Plants** - Plants that clean indoor air
2. **Aromatic Fragrant Plants** - Plants with pleasant scents
3. **Medicinal Plants** - Plants with health benefits

Each plant includes:
- High-quality thumbnail image
- Plant name
- Description
- Price

## 🎨 Design Features

- **Color Scheme**: Natural green palette with warm accents
- **Typography**: Clean, readable fonts
- **Layout**: Card-based product display with grid layout
- **Animations**: Smooth hover effects and transitions
- **Responsiveness**: Mobile-first design approach

## 👤 Author

Built as a final project for the React Development Course.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Made with 💚 by Paradise Nursery
</p>
