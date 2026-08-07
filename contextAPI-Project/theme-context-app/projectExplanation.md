# Theme Switcher App

A simple React project demonstrating how to use the **Context API** to manage a shared theme state across multiple components. Users can switch between **Light Mode** and **Dark Mode**, and the UI updates instantly without passing props between components.

---

## Project Overview

The goal of this project is to understand how the **React Context API** works by implementing a global theme switcher.

Instead of passing the theme state (`darkMode`) through multiple components using props, the application stores the theme in a context. Any component wrapped by the `ThemeProvider` can access or update the theme using the `useContext()` hook.

---

## Features

- Toggle between Light and Dark themes
- Global state management using React Context API
- No prop drilling
- Built with React and Tailwind CSS
- Clean and reusable component structure

---

## Technologies Used

- React
- React Context API
- React Hooks (`useState`, `useContext`)
- Tailwind CSS
- Vite

---

## Folder Structure

```text
src/
│
├── components/
│   ├── Navbar.jsx
│   └── Card.jsx
│
├── context/
│   └── ThemeContext.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## How It Works

### 1. Create the Context

A context is created using `createContext()`.

```jsx
export const ThemeContext = createContext();
```

The context acts as a container for the shared theme state.

---

### 2. Create the Provider

The `ThemeProvider` stores the application's theme state.

```jsx
const [darkMode, setDarkMode] = useState(true);
```

It also provides a function to switch between themes.

```jsx
const toggleTheme = () => {
  setDarkMode((prev) => !prev);
};
```

Both values are passed to every child component.

```jsx
<ThemeContext.Provider value={{ darkMode, toggleTheme }}>
  {children}
</ThemeContext.Provider>
```

---

### 3. Wrap the Application

The provider wraps the root component inside `main.jsx`.

```jsx
<ThemeProvider>
  <App />
</ThemeProvider>
```

This makes the theme state available throughout the application.

---

### 4. Consume the Context

Components access the shared state using the `useContext()` hook.

```jsx
const { darkMode } = useContext(ThemeContext);
```

Components that need to change the theme can also access:

```jsx
const { toggleTheme } = useContext(ThemeContext);
```

---

## Component Responsibilities

### Navbar

- Displays the application title.
- Contains the button used to switch themes.
- Calls `toggleTheme()` when the button is clicked.

---

### Card

- Reads the current theme from the context.
- Updates its appearance automatically whenever the theme changes.

---

### App

- Reads the shared `darkMode` value.
- Changes the application's background and text colors.
- Renders the `Navbar` and `Card` components.

---

## Why Use Context API?

Without Context API, the theme would need to be passed through multiple components using props.

Example:

```jsx
<App darkMode={darkMode}>
  <Navbar darkMode={darkMode} />
  <Card darkMode={darkMode} />
</App>
```

As applications grow, continuously passing props becomes difficult to maintain. This is known as **prop drilling**.

Using Context API, components can access the shared state directly.

```jsx
const { darkMode } = useContext(ThemeContext);
```

This results in cleaner, more maintainable code.

---

## Key React Concepts Demonstrated

- Creating a Context using `createContext()`
- Creating a Provider component
- Sharing global state
- Using `useContext()`
- Updating shared state with `useState()`
- Avoiding prop drilling
- Conditional rendering with Tailwind CSS

---

## Learning Outcome

This project demonstrates how the React Context API enables multiple components to share and update the same state without passing props manually. It serves as a practical introduction to global state management in React and provides a solid foundation before learning more advanced state management libraries such as Redux.