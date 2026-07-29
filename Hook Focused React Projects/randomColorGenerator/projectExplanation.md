# 🎨 Random Color Generator

A simple React project that generates random **HEX** and **RGB** colours using React Hooks. This project was built to practice **useState**, **useEffect**, event handling, conditional rendering, and basic Tailwind CSS styling.

---

## 🚀 Features

- Generate random **HEX** colours
- Generate random **RGB** colours
- Switch between HEX and RGB modes
- Dynamically updates the background colour
- Displays the generated colour value
- Simple and responsive UI using Tailwind CSS

---

## 🛠️ Tech Stack

- React
- Vite
- Tailwind CSS
- JavaScript (ES6)

---

## 📂 Project Structure

```
randomColorGenerator/
│
├── public/
│   └── favicon.svg
│
├── src/
│   ├── Components/
│   │   └── RandomColorGenerator.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 📖 How It Works

### 1. Select a Colour Type

The user can choose between:

- HEX Colour
- RGB Colour

---

### 2. Generate a Random Colour

When the **Create Random Color** button is clicked:

- If the selected type is **HEX**, a random HEX colour is generated.
- If the selected type is **RGB**, a random RGB colour is generated.

---

### 3. Display the Colour

The generated colour is:

- Applied as the page background.
- Displayed on the screen.

---

## 🧠 React Concepts Used

### useState

Used to store:

- Current colour type (`hex` or `rgb`)
- Generated colour value

Example:

```jsx
const [typeOfColor, setTypeOfColor] = useState("hex");
const [color, setColor] = useState("#000000");
```

---

### useEffect

Whenever the colour type changes, a new colour is generated automatically.

```jsx
useEffect(() => {
    if(typeOfColor === "rgb")
        handleRandomRgbColorGenerator();
    else
        handleRandomHexColorGenerator();
}, [typeOfColor]);
```

---

### Event Handling

Buttons use the `onClick` event to:

- Change the colour type
- Generate a new colour

Example:

```jsx
<button onClick={() => setTypeOfColor("hex")}>
    Create HEX Color
</button>
```

---

## 📋 Functions

### randomColor(length)

Returns a random integer between `0` and `length - 1`.

```jsx
function randomColor(length){
    return Math.floor(Math.random() * length);
}
```

---

### handleRandomHexColorGenerator()

Generates a random six-digit HEX colour.

Example Output:

```
#A34F9C
```

---

### handleRandomRgbColorGenerator()

Generates a random RGB colour.

Example Output:

```
rgb(34, 122, 245)
```

---

## 🎨 Tailwind CSS Classes Used

| Class | Purpose |
|--------|---------|
| `w-screen` | Full screen width |
| `h-screen` | Full screen height |
| `flex` | Flexbox layout |
| `flex-col` | Vertical layout |
| `items-center` | Horizontally centre items |
| `justify-center` | Vertically centre items |
| `gap-8` | Space between elements |
| `text-white` | White text colour |
| `text-center` | Centre-align text |
| `px-4 py-2` | Button padding |
| `rounded-md` | Rounded button corners |
| `hover:bg-gray-200` | Hover effect |
| `transition` | Smooth hover animation |

---


## 📸 Preview

The application allows you to:

- Switch between HEX and RGB colours.
- Generate unlimited random colours.
- Instantly update the background colour.
- View the generated colour code.

---

## 📚 Learning Outcomes

This project helped practise:

- React Components
- JSX
- React Hooks
- useState
- useEffect
- Event Handling
- Conditional Rendering
- Dynamic Styling
- Tailwind CSS
- Vite Project Structure

---
