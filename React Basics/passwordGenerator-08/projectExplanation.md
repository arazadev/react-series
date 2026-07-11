# Password Generator

A simple **React Password Generator** that creates random passwords based on user-selected options such as password length, numbers, and special characters.

---

# Features

- Generate random passwords instantly.
- Choose password length (8–100 characters).
- Include numbers (0–9).
- Include special characters (`!@#$%^&*`).
- Copy the generated password to the clipboard with one click.

---

# How It Works

## 1. State Management

The application uses React's `useState` hook to store:

| State | Purpose |
|--------|---------|
| `length` | Stores the password length. |
| `numberAllowed` | Determines whether numbers should be included. |
| `characterAllowed` | Determines whether special characters should be included. |
| `password` | Stores the generated password. |

---

## 2. useRef

```jsx
const passwordRef = useRef(null);
```

A reference to the password input field.

It is used when copying the password so the input can be selected before copying.

---

## 3. Password Generation

The `passwordGenerator()` function creates a random password.

### Step 1

Start with alphabet characters.

```js
let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
```

---

### Step 2

If the **Numbers** checkbox is checked:

```js
str += "0123456789";
```

Numbers are added to the available character pool.

---

### Step 3

If the **Characters** checkbox is checked:

```js
str += "!@#$%^&*";
```

Special characters are added to the character pool.

---

### Step 4

Generate the password.

```js
for (let i = 1; i <= length; i++) {
    let char = Math.floor(Math.random() * str.length + 1);
    pass += str.charAt(char);
}
```

For every character:

- Generate a random index.
- Pick a random character from `str`.
- Append it to the password.

Finally,

```js
setPassword(pass);
```

updates the UI.

---

## 4. Copy Password

```js
copyPasswordToClipboard()
```

This function:

1. Selects the password text.
2. Highlights it.
3. Copies it using

```js
navigator.clipboard.writeText(password);
```

---

## 5. useEffect

```js
useEffect(() => {
    passwordGenerator();
}, [length, numberAllowed, characterAllowed]);
```

Whenever the user changes:

- Password length
- Number option
- Character option

React automatically generates a new password.

---

# React Hooks Used

## useState

Stores values that change during the application's lifecycle.

Example:

```jsx
const [length, setLength] = useState(8);
```

---

## useRef

Provides direct access to the password input element.

Example:

```jsx
const passwordRef = useRef(null);
```

---

## useCallback

Memoizes functions so they are not recreated on every render unless their dependencies change.

Used for:

- `passwordGenerator`
- `copyPasswordToClipboard`

---

## useEffect

Runs side effects after rendering.

Here it regenerates the password whenever the settings change.

---

# Component Flow

```
User changes settings
        │
        ▼
State updates
        │
        ▼
useEffect runs
        │
        ▼
passwordGenerator()
        │
        ▼
New password generated
        │
        ▼
Displayed in input field
        │
        ▼
User clicks Copy
        │
        ▼
Password copied to clipboard
```

---

# Technologies Used

- React
- JavaScript (ES6+)
- Tailwind CSS
- Clipboard API
- React Hooks

---

# Learning Outcomes

This project demonstrates how to:

- Manage state with `useState`.
- Access DOM elements using `useRef`.
- Optimize functions with `useCallback`.
- Execute side effects with `useEffect`.
- Generate random passwords using JavaScript.
- Copy text to the clipboard.
- Build interactive React applications.