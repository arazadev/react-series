# 🚀 Load More Products (React + Tailwind CSS)

A modern **Load More Products** application built with **React**, **Hooks**, **Fetch API**, and **Tailwind CSS**. This project demonstrates how to fetch paginated data from an API, append it to the existing list, and implement a "Load More" feature with a clean and responsive UI.

---

## 📌 Features

- Fetch products from a REST API.
- Load products in batches of **20**.
- Append newly fetched products without replacing existing ones.
- Responsive product grid using Tailwind CSS.
- Modern UI with gradients, hover effects, and smooth animations.
- Loading spinner while fetching data.
- Disable the **Load More** button after loading 100 products.
- Built using React Hooks (`useState` & `useEffect`).

---

## 🛠️ Technologies Used

- React.js
- JavaScript (ES6+)
- Tailwind CSS
- Fetch API
- DummyJSON API

---

## 📂 Project Structure

```text
src/
│
├── components/
│   └── LoadMoreData.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## ⚙️ How It Works

### 1. State Management

The component uses four state variables:

| State | Purpose |
|--------|----------|
| `loading` | Shows the loading spinner while data is being fetched. |
| `products` | Stores all fetched products. |
| `count` | Tracks the current page and calculates the next API request. |
| `disableLoadButton` | Disables the button after loading 100 products. |

---

### 2. Fetching Products

The application fetches products from:

```text
https://dummyjson.com/products
```

using:

```text
limit = 20
skip = count × 20
```

Example:

| Count | Skip | Products |
|------:|-----:|-----------|
| 0 | 0 | 1 - 20 |
| 1 | 20 | 21 - 40 |
| 2 | 40 | 41 - 60 |
| 3 | 60 | 61 - 80 |
| 4 | 80 | 81 - 100 |

---

### 3. Appending Products

Instead of replacing previous products, the application appends newly fetched products using:

```javascript
setProducts((prevData) => [...prevData, ...data.products]);
```

This keeps all previously loaded products visible.

---

### 4. Load More Functionality

Clicking the **Load More** button increases the page count:

```javascript
setCount(count + 1);
```

Whenever `count` changes, `useEffect()` automatically calls the API again.

---

### 5. Disable Button

Once 100 products have been loaded:

```javascript
products.length === 100
```

the button becomes disabled and a completion message is displayed.

---

## 🔄 Application Flow

```text
Component Mounts
        │
        ▼
count = 0
        │
        ▼
fetchProducts()
        │
        ▼
API Returns 20 Products
        │
        ▼
Products Stored in State
        │
        ▼
Products Rendered
        │
        ▼
User Clicks "Load More"
        │
        ▼
count Increases
        │
        ▼
useEffect Runs Again
        │
        ▼
Fetch Next 20 Products
        │
        ▼
Append New Products
        │
        ▼
Repeat Until 100 Products
```

---

## 🧠 React Concepts Used

- Functional Components
- useState Hook
- useEffect Hook
- Conditional Rendering
- Event Handling
- API Integration
- Async / Await
- Array Spread Operator
- Pagination
- Responsive UI Design

---

## 🎨 UI Highlights

- Glassmorphism cards
- Gradient background
- Responsive grid layout
- Image zoom animation
- Hover shadow effects
- Animated loading spinner
- Gradient action button
- Mobile-friendly design

---


## 📸 Output

- Displays products in a responsive grid.
- Loads 20 more products with each button click.
- Stops loading after 100 products.
- Shows a loading animation while fetching data.

---

## 📖 Learning Outcomes

This project helps understand:

- React Hooks
- State Management
- Side Effects with `useEffect`
- REST API Integration
- Pagination
- Array Manipulation
- Conditional Rendering
- Tailwind CSS
- Building reusable React components

---