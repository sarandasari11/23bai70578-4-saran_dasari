# Experiment 4: Advanced React Application with Hooks and State Management
---
⭕ SCREENSHOTS ARE THERE IN PUBLIC FOLDER
---
## 📋 Project Overview

**Experiment 4 (Exp4)** is a full-featured React 19 + Vite Single Page Application (SPA) that demonstrates advanced React concepts including **Context API**, **useReducer Hook**, **useMemo Optimization**, and **Advanced CSS Styling**. This project showcases best practices in state management, component architecture, and modern UI/UX design.

### Student ID: 23BAI70578
### Created: February 19, 2026

---

## 🎯 Old Features (From Exp3)

The project was built upon **Exp3** which included:

- **Basic React Setup** - React Router v7 with multiple pages (Home, Login, Cart)
- **Simple Form Components** - Basic contact form with minimal styling
- **Product Grid** - Simple product display without advanced features
- **Login Page** - Mock authentication with basic layout
- **Basic CSS Styling** - Standard CSS without gradients or animations
- **Light Theme Only** - No dark mode support
- **Basic State Management** - useState hooks for local component state
- **Simple Cart System** - Basic add/remove cart functionality

---

## ✨ New Features in Experiment 4

### 1. **Global Context API for State Management**
   - **File:** `src/context/AppContext.jsx`
   - Centralized state management for:
     - 🛒 Shopping cart (add, update, remove items)
     - 🌙 Theme state (light/dark mode)
     - 👤 User profile (name, email, login status)
   - Wraps entire application for global state access
   - Used by 4+ components across all pages

### 2. **useReducer Hook Implementation**
   - **File:** `src/reducer/appReducer.js`
   - Structured state transitions with **7 Actions**:
     - `ADD_TO_CART` - Add items to shopping cart
     - `REMOVE_FROM_CART` - Remove items from cart
     - `UPDATE_CART_QUANTITY` - Update item quantities
     - `CLEAR_CART` - Clear all items
     - `TOGGLE_THEME` - Switch between light/dark modes
     - `LOGIN_USER` - Authenticate user
     - `LOGOUT_USER` - Sign out user
   - Predictable state management pattern
   - Used in AppContext for central state handling

### 3. **useMemo Hook Optimization**
   - **File:** `src/pages/CartPage.jsx`
   - Optimized cart summary calculations:
     - **Total Items Count** - Sum of all quantities
     - **Total Price** - Sum of all item prices
     - **Average Price** - Mean price per item
     - **Unique Items Count** - Number of different products
   - Recalculates only when cart dependency changes
   - Improves performance with large product lists
   - Prevents unnecessary re-renders

### 4. **Dark/Light Theme Toggle**
   - **Toggle Button:** Right side of navbar (purple #7B68EE button)
   - **Label:** Dynamic "Dark" / "Lite" text with sun/moon icon
   - **Theme Files:**
     - `src/index.css` - Base CSS variables for colors
     - `src/DarkTheme.css` - 370+ lines of dark mode overrides
   - **Coverage:**
     - All pages support both themes
     - Form elements styled for both modes
     - Buttons and cards adapt to theme
     - Good contrast in both light and dark modes

### 5. **Advanced CSS Styling System**
   - **Files:**
     - `src/App.css` - ~500 lines of utility classes
     - `src/index.css` - Global variables and animations
     - `src/pages/HomePage.css` - ~600 lines advanced styling
     - `src/pages/CartPage.css` - ~468 lines with table styling
     - `src/LoginPage.css` - Split layout with animations
   - **Features:**
     - Linear gradients on titles and buttons
     - Smooth animations (fadeIn, slideInUp, slideInDown, bounce, pulse, glow)
     - Hover effects with transforms
     - Responsive grid layouts
     - Box shadows and elevation changes
     - Transition effects on all interactive elements

### 6. **Advanced Contact Form**
   - **Location:** HomePage - Advanced Contact Form Section
   - **Form Fields:**
     - ✏️ Full Name (text input)
     - 📧 Email Address (email input)
     - 📞 Phone Number (tel input)
     - 📝 Subject (text input)
     - 📂 Category Dropdown (General, Support, Feedback, Partnership, Bug Report)
     - ⚠️ Priority Dropdown (Low, Normal, High, Urgent)
     - 💬 Message (textarea 5 rows)
     - ⭐ Rating Component (1-5 stars)
     - ✅ Newsletter Checkbox
   - **State Management:** Form data tracked in useState with 8 properties
   - **Submit Handling:**
     - Form validation
     - Success message display with CheckCircle icon
     - Auto-reset after 3 seconds
     - Console logging for debugging
   - **Like Button:** Heart icon button to show appreciation
   - **Styling:** Advanced CSS with icons, gradients, and focus states

### 7. **Shopping Cart System**
   - **File:** `src/pages/CartPage.jsx`
   - **Features:**
     - Display all cart items in table format
     - Update item quantities with +/- buttons
     - Remove individual items
     - Clear entire cart
     - Real-time price calculations using useMemo
     - Summary cards showing:
       - Total items count (green)
       - Unique items (blue)
       - Total price (orange)
       - Average price (red)
   - **Styling:** Color-coded summary cards with animations
   - **Responsive:** Adapts to mobile and desktop screens

### 8. **Enhanced Routing & Navigation**
   - **Pages:**
     - 🏠 **HomePage** - Products grid, features, contact form
     - 🔐 **LoginPage** - Mock authentication with split layout
     - 🛒 **CartPage** - Shopping cart with summary
   - **Navigation:**
     - Top navbar with Cart badge (item count)
     - Login button in header
     - Back button on Cart and Login pages
     - Smooth page transitions
   - **Features:**
     - Persistent state across pages
     - Login status affects UI
     - Cart data accessible everywhere

### 9. **Features Showcase Section**
   - **8 Feature Items** highlighting Exp4 capabilities:
     1. Global Context API
     2. useReducer Hook
     3. useMemo Optimization
     4. Dark/Light Theme Toggle
     5. Full Shopping Cart System
     6. Advanced Routing
     7. Authentication Flow
     8. Modern UI Design
   - Interactive icons with animations
   - Hover effects (scale, rotate, slide)
   - Educational card layout

### 10. **Enhanced UI/UX**
   - **Product Cards:**
     - Gradient backgrounds
     - Hover animations (scale up, shadow changes)
     - Premium and Popular badges
     - Quick add to cart button
     - Learn More button
     - Star rating display
   - **Hero Section:**
     - Large title with gradient background
     - Animated entrance
     - Feature callout box
   - **Footer:**
     - Copyright information
     - Styled container

---

## 🏗️ Project Structure

```
exp4/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── assets/
│   ├── components/
│   │   └── (reusable components would go here)
│   ├── context/
│   │   └── AppContext.jsx          # Global state provider
│   ├── pages/
│   │   ├── HomePage.jsx            # Main page with products & form
│   │   ├── HomePage.css            # HomePage advanced styling
│   │   ├── LoginPage.jsx           # Authentication page
│   │   ├── LoginPage.css           # Login page styling
│   │   ├── CartPage.jsx            # Shopping cart page
│   │   └── CartPage.css            # Cart page advanced styling
│   ├── reducer/
│   │   └── appReducer.js           # useReducer action handlers
│   ├── App.jsx                     # Main app component with routing
│   ├── App.css                     # Global app styling
│   ├── index.css                   # Global styles & variables
│   ├── main.jsx                    # Entry point
│   ├── DarkTheme.css               # Dark theme overrides (~370 lines)
│   └── LoginPage.css               # Additional login styling
├── eslint.config.js
├── vite.config.js
├── package.json
└── README.md                  # This file
```

---

## 🔧 Technology Stack

### Core Technologies
- **React 19.2.0** - UI library with latest features
- **Vite 7.3.1** - Build tool with fast HMR
- **React Router 7.13.0** - Client-side routing
- **Material-UI (MUI) 7.3.8** - Component library
- **MUI Icons 7.3.8** - Icon set

### Build Tools
- **Node.js** - JavaScript runtime
- **npm** - Package manager
- **ESLint** - Code quality
- **SWC** - Fast transpiler

### Styling
- **CSS3** - Custom properties, gradients, animations
- **Material-UI Theme** - Theming system
- **Flexbox & Grid** - Responsive layouts

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm (v8 or higher)
- Modern web browser

### Installation

1. **Navigate to exp4 folder:**
   ```bash
   cd exp4
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   ```
   http://localhost:5175/
   ```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## 📱 Pages Overview

### 🏠 HomePage
**Route:** `/`
- **Features:**
  - Product grid (5 sample products with prices)
  - Each product card has Add to Cart button
  - Experiment 4 features showcase
  - Advanced contact form with 8+ fields
  - Responsive layout (mobile-first)
  - Dark/Light theme toggle button (top-right, purple)
- **State Used:**
  - Cart items (add/remove)
  - Theme toggle
  - Form data management

### 🔐 LoginPage
**Route:** `/login`
- **Features:**
  - Split layout (left: blue gradient, right: form)
  - Mock authentication
  - Back button (top-left, blue)
  - Theme toggle button (top-left next to back)
  - Email and password inputs
  - Login/Cancel buttons
  - Floating particle animation
- **State Used:**
  - User login state
  - Theme toggle
- **Authentication:**
  - Mock validation (any email works)
  - Sets user name in context
  - Redirects to home on success

### 🛒 CartPage
**Route:** `/cart`
- **Features:**
  - Table display of cart items
  - Quantity controls (+/- buttons)
  - Delete item buttons
  - Clear cart button
  - Summary cards (total items, unique items, total price, avg price)
  - Back button (top-left, blue)
  - Theme toggle button (top-left, purple)
  - useMemo calculations for performance
  - Empty cart message if no items
- **State Used:**
  - Cart items and quantities
  - Theme toggle

---

## 🎨 Color Scheme

### Light Theme
- **Primary:** #1976d2 (Blue)
- **Secondary:** #4CAF50 (Green - Cart button)
- **Accent:** #7B68EE (Purple - Theme toggle)
- **Background:** White (#FFFFFF)
- **Text:** #212121 (Dark grey)

### Dark Theme
- **Primary:** #90caf9 (Light blue)
- **Background:** #1e1e1e (Almost black)
- **Secondary Background:** #2a2a2a (Dark grey)
- **Text:** #e0e0e0 (Light grey)
- **Accent Colors Adjusted:** Lighter versions for contrast

---

## 🎯 React Hooks Used

### 1. **useState**
   - Managing form data
   - Tracking liked status
   - Managing rating state
   - Managing submitted status
   - Component-level state

### 2. **useContext**
   - Accessing global state (cart, theme, user)
   - Used in:
     - HomePage (cart actions, theme toggle)
     - CartPage (read/update cart, theme)
     - LoginPage (user login, theme toggle)
     - All pages (theme application)

### 3. **useReducer**
   - Centralized state management in AppContext
   - 7 different action types
   - Predictable state transitions
   - Complex state logic handling

### 4. **useMemo**
   - CartPage: Optimize cart summary calculations
   - Dependency array: [cart]
   - Prevents unnecessary recalculations
   - Improves performance with large datasets

### 5. **useNavigate**
   - React Router navigation
   - Navigate to different pages
   - Programmatic routing on button clicks

---

## 📊 State Management Architecture

```
AppContext
├── State Properties
│   ├── cart: Array<CartItem>
│   │   ├── id (product id)
│   │   ├── name
│   │   ├── price
│   │   └── quantity
│   ├── theme: 'light' | 'dark'
│   └── user: { name, email, isLoggedIn }
├── Dispatch Actions (useReducer)
│   ├── ADD_TO_CART
│   ├── REMOVE_FROM_CART
│   ├── UPDATE_CART_QUANTITY
│   ├── CLEAR_CART
│   ├── TOGGLE_THEME
│   ├── LOGIN_USER
│   └── LOGOUT_USER
└── Provider: Wraps entire App
    └── Used by: HomePage, CartPage, LoginPage, App
```

---

## 🎨 CSS Features

### Animations
- **fadeIn** - Smooth opacity transition
- **slideInUp** - Slides in from bottom
- **slideInDown** - Slides in from top
- **bounce** - Bouncing effect
- **pulse** - Pulsing opacity
- **glow** - Glowing shadow effect

### Responsive Design
- **Breakpoints:**
  - Mobile: < 600px
  - Tablet: 600px - 900px
  - Desktop: > 900px
- **Grid System:** CSS Grid and Flexbox
- **Mobile-First Approach:** Base styles for mobile, enhanced for larger screens

### Advanced CSS Techniques
- **CSS Custom Properties:** --primary, --text-primary, --shadow-md, etc.
- **Linear Gradients:** 135deg angle for modern look
- **Backdrop Filters:** Blur effects on backgrounds
- **Box Shadows:** Multi-layered shadows for depth
- **Transitions:** Smooth 0.3s - 0.6s transitions
- **Transform:** Scale, rotate, translateX/Y for animations

---

## 🔄 Data Flow

### Adding Item to Cart
1. User clicks "Add to Cart" on product card
2. HomePage.jsx calls `handleAddToCart(item)`
3. Dispatches `ADD_TO_CART` action with item as payload
4. appReducer checks if item exists:
   - If exists: increment quantity
   - If new: add to cart array
5. AppContext state updates
6. HomePage re-renders with feedback
7. CartPage reflects changes when navigated to

### Toggling Theme
1. User clicks theme button (Dark/Lite)
2. Component calls `handleToggleTheme()`
3. Dispatches `TOGGLE_THEME` action
4. appReducer switches theme: 'light' ↔ 'dark'
5. AppContext state updates
6. App.jsx applies 'dark-theme' class to root Box
7. All pages immediately reflect theme changes via DarkTheme.css

### Submitting Contact Form
1. User fills contact form with data (8 fields)
2. Form onChange updates formData state
3. User clicks "Send Message"
4. handleFormSubmit prevents default, logs data
5. Sets `submitted = true`
6. Shows success message with CheckCircle icon
7. After 3000ms: resets form and submitted state
8. Checkmark disappears, user can fill form again

---

## 🧪 Testing Features

### Mock Data
- **Products:** 5 sample products with prices
- **Authentication:** Any email accepted (mock login)
- **Cart:** Fully functional with all operations
- **Form:** Logs submitted data to console

### Console Logging
- Form submissions logged with complete data
- User login logged with email
- Easy debugging and inspection

### Performance Monitoring
- useMemo in CartPage prevents unnecessary calculations
- Check browser DevTools Performance tab
- React DevTools Profiler for component renders

---

## 📝 Comparison: Old (Exp3) vs New (Exp4)

| Feature | Exp3 | Exp4 |
|---------|------|------|
| **State Management** | useState only | Context API + useReducer |
| **Theme Support** | Light only | Light + Dark (toggle) |
| **Cart Management** | Basic list | Full shopping cart with useMemo |
| **Form** | Simple contact form | Advanced form with 8 fields |
| **CSS Styling** | Basic CSS | 2000+ lines advanced CSS |
| **Animations** | Minimal | Extensive animations |
| **Form Fields** | 3 fields | 8 fields (text, email, tel, dropdown, textarea, rating, checkbox) |
| **Cart Summary** | Item count only | useMemo: total, unique, total price, avg price |
| **Page Layout** | Simple | Features section + form reordered |
| **Dark Theme** | N/A | Full dark mode with ~370 lines CSS |
| **Button Colors** | Minimal | Color-coded (green cart, orange login, purple theme) |
| **Back Button** | Plain | Styled with blue background and transitions |
| **Form State** | Manual | Centralized formData object (8 properties) |
| **Theme Button** | Icon only | Button with "Dark" / "Lite" text + icon |
| **Responsive Design** | Basic | Mobile-first with animations |

---

## 💡 Key Learning Outcomes

This project demonstrates mastery of:

1. **Advanced React Hooks:**
   - useContext for global state
   - useReducer for complex state logic
   - useMemo for performance optimization

2. **State Management:**
   - Centralized state architecture
   - Action-based state transitions
   - Multi-level component communication

3. **Modern CSS:**
   - CSS variables for theming
   - Advanced selectors and animations
   - Responsive design patterns
   - Dark mode implementation

4. **Component Architecture:**
   - Provider pattern implementation
   - Proper component hierarchy
   - Reusable UI patterns

5. **React Router:**
   - Multi-page SPA setup
   - Navigation between routes
   - State persistence across routes

6. **UI/UX Design:**
   - Color theory and contrast
   - Animation principles
   - Responsive layouts
   - Accessibility considerations

---

## 📚 File Reference

### Core Files
- **`src/App.jsx`** - Main app with routing
- **`src/context/AppContext.jsx`** - Global state provider
- **`src/reducer/appReducer.js`** - Action handlers

### Pages
- **`src/pages/HomePage.jsx`** - Main page (294 lines)
- **`src/pages/LoginPage.jsx`** - Auth page (139 lines)
- **`src/pages/CartPage.jsx`** - Cart page (241 lines)

### Styling
- **`src/index.css`** - Global styles
- **`src/App.css`** - App component styles
- **`src/DarkTheme.css`** - Dark theme overrides (371 lines)
- **`src/pages/HomePage.css`** - HomePage styles (600+ lines)
- **`src/pages/CartPage.css`** - CartPage styles (468 lines)
- **`src/LoginPage.css`** - LoginPage styles

---

## 🎓 Assignment Requirements Met

✅ **React Hooks Implementation:**
- useContext for global state
- useReducer with 7 actions
- useMemo for optimization
- useState for local component state
- useNavigate for routing

✅ **Advanced CSS:**
- 2000+ lines of total CSS
- Dark/Light theme system
- Animations and transitions
- Responsive design
- Gradient backgrounds

✅ **Advanced Features:**
- Shopping cart system
- Theme toggle functionality
- Contact form with validation
- Multi-page routing
- Dynamic content rendering

✅ **Code Quality:**
- Well-organized file structure
- Clear component separation
- Proper state management
- Reusable patterns
- Comprehensive documentation

---

## 🚀 Future Enhancements

Potential improvements for next iterations:

1. **Backend Integration:** Connect to real API
2. **Database:** Store user data and cart history
3. **Authentication:** Real JWT-based auth
4. **Payment Integration:** Stripe/PayPal checkout
5. **Product Images:** Real product photos
6. **Reviews/Ratings:** User reviews system
7. **Search & Filter:** Product search functionality
8. **User Profile:** Edit user settings
9. **Order History:** Track past orders
10. **Notifications:** Toast/snack bar notifications

---

**Last Updated:** February 19, 2026  
**Student ID:** 23BAI70578  
**Framework:** React 19.2.0 + Vite 7.3.1  
**Status:** ✅ Complete and Fully Functional
