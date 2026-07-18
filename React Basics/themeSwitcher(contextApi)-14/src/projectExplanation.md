# React Theme Switcher using Context API

A simple React project that demonstrates how to implement a **Dark/Light theme switcher** using:

- React Context API
- Custom React Hooks
- useState Hook
- useEffect Hook
- Tailwind CSS Dark Mode


---

# Project Preview

This application contains:

- A theme toggle switch
- A product card component
- Light mode UI
- Dark mode UI
- Global theme management using Context API


---

# Folder Structure


```
themeSwitcher(contextApi)-14

│
├── node_modules
│
├── public
│
├── src
│   │
│   ├── Components
│   │   │
│   │   ├── Card.jsx
│   │   └── ThemeBtn.jsx
│   │
│   ├── Context
│   │   │
│   │   └── theme.js
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

# How This Project Works


The theme system follows this flow:


```
main.jsx

    |
    v

App.jsx

    |
    v

ThemeProvider

    |
    |
    ----------------
    |              |
    v              v

ThemeBtn        Card Component

```


The `ThemeProvider` provides theme information to all child components.


---

# 1. Creating Theme Context


File:

```
src/Context/theme.js
```


Context API is used to create a global theme store.


It contains:

```javascript
themeMode

darkTheme()

lightTheme()
```


Example:


```javascript
const {
    themeMode,
    darkTheme,
    lightTheme
} = useTheme()
```


Any component can access these values without passing props manually.



---

# 2. ThemeProvider


The Provider is created in `App.jsx`.


Example:


```jsx
<ThemeProvider
value={{
    themeMode,
    darkTheme,
    lightTheme
}}
>

    <App />

</ThemeProvider>
```


Now every child component can access theme data.



---

# 3. Managing Theme State


React `useState()` stores the current theme.


Default value:


```javascript
const [themeMode,setThemeMode] = useState("light")
```


Possible values:


```
light

dark
```



---

# 4. Changing Theme


Two functions are created:



## Light Theme


```javascript
const lightTheme = () => {
    setThemeMode("light")
}
```


This changes application theme to light.



## Dark Theme


```javascript
const darkTheme = () => {
    setThemeMode("dark")
}
```


This changes application theme to dark.



---

# 5. Updating HTML Class


Tailwind CSS dark mode works using the `dark` class.


When theme changes:


Before:

```html
<html class="light">
```


After enabling dark mode:


```html
<html class="dark">
```


This is handled by:


```javascript
useEffect(()=>{
    
document.querySelector("html")
.classList.add(themeMode)

},[themeMode])
```



---

# 6. Tailwind Dark Mode


In:

```
src/index.css
```


We enable class-based dark mode:


```css
@custom-variant dark (&:where(.dark, .dark *));
```


Now Tailwind can use:


```html
<div class="bg-white dark:bg-gray-800">
</div>
```


Light Mode:

```
background = white
```


Dark Mode:

```
background = gray
```



---

# 7. Theme Button


File:

```
Components/ThemeBtn.jsx
```


The checkbox controls the theme.


When checkbox is checked:


```
darkTheme()
```


runs.



When checkbox is unchecked:


```
lightTheme()
```


runs.



The current theme controls checkbox state:


```javascript
checked={themeMode==="dark"}
```



---

# 8. Card Component


File:


```
Components/Card.jsx
```


The Card component demonstrates Tailwind dark classes.


Example:


```html
text-gray-900 dark:text-white
```


Light Mode:


```
Text = black
```


Dark Mode:


```
Text = white
```



---

# Technologies Used


## React


Used for:

- Component creation
- State management
- Hooks


---

## React Context API


Used for:

- Global theme state
- Sharing data between components


---

## Tailwind CSS


Used for:

- Styling
- Responsive design
- Dark mode utilities



---

# Important React Concepts Learned


## Context API

Allows sharing data globally without prop drilling.



## Custom Hook

Created reusable hook:


```javascript
useTheme()
```


Instead of:


```javascript
useContext(ThemeContext)
```


everywhere.



## Controlled Component


The checkbox value is controlled by React state.


Example:


```javascript
checked={themeMode==="dark"}
```



## useEffect


Used to update the HTML class whenever theme changes.



---

# Application Flow Example


User clicks toggle button:


```
ThemeBtn.jsx

        |
        v

darkTheme()

        |
        v

setThemeMode("dark")

        |
        v

useEffect()

        |
        v

<html class="dark">

        |
        v

Tailwind dark styles activate

```



---

# Final Learning Outcome


After completing this project you understand:


✅ Creating React Context  
✅ Using Context Provider  
✅ Creating Custom Hooks  
✅ Managing global state  
✅ Using useState  
✅ Using useEffect  
✅ Implementing Tailwind dark mode  
✅ Building reusable React components  
