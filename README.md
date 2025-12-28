# Paradise Nursery - Shopping Cart Application

## Project Overview

Paradise Nursery is a dynamic e-commerce web application for an online plant shop. This application allows users to browse a beautiful collection of houseplants, view detailed information about each plant, add items to a shopping cart, and manage their cart items with full CRUD functionality.

## Features

- **Landing Page**: Beautiful hero section with company branding and call-to-action
- **Product Catalog**: Browse plants organized by category with thumbnails, names, descriptions, and prices
- **Shopping Cart**: Full cart management with add/remove items, quantity controls, and total calculation
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Redux State Management**: Centralized cart state with Redux Toolkit

## Technologies Used

- React 18
- TypeScript
- Redux Toolkit (for state management)
- React Router DOM (for navigation)
- Tailwind CSS (for styling)
- Vite (build tool)
- Shadcn/UI (component library)

## Pages

1. **Home (/)** - Landing page with hero section and company introduction
2. **Plants (/products)** - Product listing page with all plants organized by category
3. **Cart (/cart)** - Shopping cart page with item management
4. **About (/about)** - Company information and values

## Cart Functionality

- Add plants to cart with "Add to Cart" button
- Button disables after product is added
- Dynamic cart icon with item count
- Increase/decrease quantity buttons
- Remove items from cart
- Real-time total calculation
- Continue shopping and checkout buttons

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Author

Built as a final project for the React development course.

## License

MIT License
