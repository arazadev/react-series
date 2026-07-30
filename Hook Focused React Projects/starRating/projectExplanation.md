# ⭐ Star Rating React Project

A simple and reusable **Star Rating component** built using **React Hooks**, **React Icons**, and **Tailwind CSS**.

This project demonstrates how to manage user interactions using React state, handle hover effects, and create reusable UI components.

---

## 🚀 Project Overview

The Star Rating component allows users to:

- ⭐ Hover over stars to preview a rating
- ⭐ Click stars to select a rating
- ⭐ Display selected rating permanently
- ⭐ Dynamically generate stars based on the number provided

Example:

```
Before selection:
☆☆☆☆☆

Hover over 3 stars:
★★★☆☆

After clicking 4 stars:
★★★★☆
```

---

# 📂 Project Structure

```
starRating
│
├── public
│   └── favicon.svg
│
├── src
│   │
│   ├── Components
│   │   └── StarRating.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
├── eslint.config.js
├── index.html
└── README.md
```

---

# 🛠️ Technologies Used

- React
- React Hooks
- React Icons
- Tailwind CSS
- Vite
- JavaScript (ES6+)

---


# 📚 Concepts Covered

## 1. React Component

The main reusable component:

```
src/Components/StarRating.jsx
```

The component accepts props:

```jsx
<StarRating noOfStars={5} />
```

You can change the number of stars:

```jsx
<StarRating noOfStars={10} />
```

---

# ⚛️ React Hooks Used

## useState()

The project uses two states:

### Rating State

```jsx
const [rating, setRating] = useState(0);
```

Stores the user's selected rating.

Example:

```
User clicks 4th star

rating = 4
```

---

### Hover State

```jsx
const [hover, setHover] = useState(0);
```

Stores temporary hover value.

Example:

```
Mouse moves over 3rd star

hover = 3
```

This creates the preview effect.

---

# ⭐ Star Rendering Logic

Stars are generated dynamically:

```jsx
[...Array(noOfStars)].map()
```

Example:

```jsx
noOfStars = 5
```

Creates:

```
⭐ ⭐ ⭐ ⭐ ⭐
```

This avoids manually writing multiple star components.

---

# 🎨 Dynamic Styling

The star color changes using conditional Tailwind classes:

```jsx
index <= (hover || rating)
```

Logic:

```
If user is hovering:
    show hover rating

Otherwise:
    show selected rating
```

Example:

```
hover = 3

★ ★ ★ ☆ ☆
```

---

# 🖱️ User Interaction Flow

## Hovering

```
Mouse enters star
        |
        ↓
handleMouseEnter()
        |
        ↓
setHover(index)
        |
        ↓
Stars become yellow
```

---

## Clicking

```
User clicks star
        |
        ↓
handleClick()
        |
        ↓
setRating(index)
        |
        ↓
Rating saved
```

---

# 📄 Component Code Explanation

## StarRating.jsx

Responsibilities:

- Generate stars
- Manage rating state
- Handle hover effect
- Handle click events
- Update star colors

---

# 🎯 Features

✅ Reusable component  
✅ Dynamic number of stars  
✅ Hover preview effect  
✅ Click to select rating  
✅ Tailwind styling  
✅ React Hooks practice  

---


# 🧠 Learning Purpose

This project is created to practice:

- React state management
- Component creation
- Props handling
- Event handling
- Conditional rendering
- Dynamic UI updates

---