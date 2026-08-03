# 📸 React Image Slider

A responsive and reusable **Image Slider (Carousel)** built with **React**, **Hooks**, and **Tailwind CSS**. The slider fetches images from the **Lorem Picsum API** and provides smooth fade transitions, previous/next navigation, and clickable indicators.

---

## 🚀 Features

- Fetches images from an API
- Built with React Functional Components
- Uses React Hooks (`useState`, `useEffect`)
- Previous & Next navigation
- Infinite looping slider
- Clickable navigation dots
- Smooth fade animation
- Responsive design
- Tailwind CSS styling
- Reusable component

---

## 📂 Project Structure

```text
imageSlider/
│
├── public/
│   └── favicon.svg
│
├── src/
│   ├── Components/
│   │   └── ImageSlider.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── package.json
├── vite.config.js
└── README.md
```

---

## 🛠️ Technologies Used

- React
- Vite
- Tailwind CSS
- React Icons
- JavaScript (ES6+)

---

## 📸 API Used

This project fetches images from the **Lorem Picsum API**.

```
https://picsum.photos/v2/list
```

Example Request

```
https://picsum.photos/v2/list?page=1&limit=10
```

---

## ⚙️ Props

| Prop | Type | Description | Default |
|------|------|-------------|---------|
| url | string | API URL | Required |
| limit | number | Number of images | 5 |
| page | number | Page number | 1 |

Example

```jsx
<ImageSlider
    url="https://picsum.photos/v2/list"
    limit={10}
    page={1}
/>
```

---

## 🎯 Functionality

- Fetches images using the Fetch API
- Displays one image at a time
- Previous and Next buttons change the current image
- Navigation dots allow jumping to any image
- Smooth fade transition between slides
- Automatically wraps from first to last and vice versa

---

## 📷 Preview

```
        ◀        IMAGE        ▶

           ● ○ ○ ○ ○ ○ ○
```

---

## 📚 React Concepts Used

- Functional Components
- Props
- useState
- useEffect
- Conditional Rendering
- Event Handling
- API Fetching
- Array Mapping
- Component Reusability

---

## 🎨 Tailwind CSS Concepts Used

- Flexbox
- Positioning
- Spacing
- Responsive Utilities
- Hover Effects
- Transition Animations
- Shadows
- Border Radius
- Object Cover
- Overflow Hidden

---
