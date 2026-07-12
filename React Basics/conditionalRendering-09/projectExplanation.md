# Conditional Rendering in React

A simple React application that demonstrates **conditional rendering** using the **ternary operator** and **logical AND (`&&`) operator**. The UI updates dynamically based on the state value managed with React's `useState` hook.

## 🚀 Features

- React state management using `useState`.
- Conditional rendering with:
  - Ternary operator (`condition ? true : false`)
  - Logical AND operator (`condition && element`)
- Toggle button to change the state.
- Modern UI styling with Tailwind CSS.
- Responsive full-screen layout.

## 🛠️ Technologies Used

- React
- JavaScript (ES6+)
- Tailwind CSS

## 📂 Project Structure

```
src/
│
├── App.jsx        # Main React component
├── main.jsx       # React application entry point
└── index.css      # Tailwind CSS styles
```

## 📖 How It Works

The application uses a state variable called `showBtn`:

```jsx
const [showBtn, setShowBtn] = useState(false);
```

The initial state is `false`, so the application displays the **"showBtn is FALSE"** button.

When the **Toggle Button** is clicked:

```jsx
setShowBtn(!showBtn)
```

The state value changes between `true` and `false`, and React automatically updates the displayed content.

## 🔀 Conditional Rendering

### Ternary Operator

The app uses a ternary operator to render different buttons:

```jsx
{showBtn ? (
  <button>showBtn is TRUE</button>
) : (
  <button>showBtn is FALSE</button>
)}
```

- If `showBtn` is `true`, the first button is displayed.
- If `showBtn` is `false`, the second button is displayed.

### Logical AND (`&&`) Operator

Another way to conditionally render elements:

```jsx
{showBtn && <button>showBtn is TRUE</button>}
```

The element is rendered only when the condition is true.

## 🎨 Tailwind CSS Styling

Tailwind CSS is used to create:

- Dark background
- Centered layout
- Styled buttons
- Hover effects
- Smooth transitions

Example:

```jsx
className="bg-gray-900 text-white"
```

## 📌 Learning Objectives

This project demonstrates:

- React `useState` hook
- State updates and re-rendering
- Conditional rendering techniques
- Tailwind CSS utility classes
- Basic React component structure