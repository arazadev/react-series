# Recursive Navigation Menu (React + Tailwind CSS)

This project is a **Recursive Navigation Menu** built using **React**, **Vite**, and **Tailwind CSS**.

The application displays a nested navigation menu where each menu item can contain an unlimited number of child menus. Clicking the **Plus (+)** icon expands a menu, while clicking the **Minus (-)** icon collapses it.

The main concept demonstrated in this project is **Recursion in React Components**.

---

# Technologies Used

- React
- Vite
- Tailwind CSS
- React Icons

---

# Project Structure

```text
recursiveNavigationMenu/
│
├── public/
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
   │
   ├── Components/
   │   ├── RecursiveNavMenu.jsx
   │   ├── MenuList.jsx
   │   └── MenuItem.jsx
   │
   ├── data.js
   ├── App.jsx
   ├── index.css
   └── main.jsx
```

---

# Project Flow

```
App
 │
 ▼
RecursiveNavMenu
 │
 ▼
MenuList
 │
 ▼
MenuItem
 │
 ▼
MenuList
 │
 ▼
MenuItem
 │
 ▼
MenuList
```

The same components keep calling each other until no child menus remain.

This is recursion.

---

# File Explanation

## 1. main.jsx

This is the application's entry point.

Responsibilities:

- Creates the React application.
- Renders the root component.
- Imports global styles.
- Mounts the application into the HTML root element.

---

## 2. App.jsx

This component acts as the root component of the application.

Responsibilities:

- Imports the menu data.
- Passes the menu data to `RecursiveNavMenu`.

Example:

```jsx
<RecursiveNavMenu menus={menus} />
```

App does not contain any business logic.

Its only responsibility is connecting the data with the UI.

---

## 3. data.js

This file stores the navigation menu data.

Example:

```javascript
{
    label: "Profile",
    to: "/profile",
    children: [...]
}
```

Every menu item has:

| Property | Description |
|----------|-------------|
| label | Menu title |
| to | Route |
| children | Nested menu items |

Since every child follows the same structure as its parent, recursion becomes possible.

Example hierarchy:

```text
Home

Profile
└── Details
    └── Location
        └── City

Settings
├── Account
└── Security
    ├── Login
    └── Register
        └── Random data
```

---

## 4. RecursiveNavMenu.jsx

This is the parent component of the navigation menu.

Responsibilities:

- Receives menu data.
- Creates the menu container.
- Starts rendering by passing data to `MenuList`.

```jsx
<MenuList list={menus} />
```

---

## 5. MenuList.jsx

This component renders one level of the menu.

Responsibilities:

- Receives an array of menu objects.
- Loops through every menu item using `map()`.
- Creates a `MenuItem` for every object.

Example:

```jsx
list.map(item => (
    <MenuItem item={item} />
))
```

Whenever `MenuItem` contains children, another `MenuList` is rendered.

This makes the component recursive.

---

## 6. MenuItem.jsx

This component renders one menu item.

Responsibilities:

- Displays menu label.
- Shows expand/collapse icon.
- Stores expand/collapse state.
- Toggles child visibility.
- Recursively renders child menus.

---

# State Management

Each menu item maintains its own expansion state.

```jsx
const [showCurrentChildren, setShowCurrentChildren] = useState({});
```

Example state:

```javascript
{
    Profile: true,
    Settings: false
}
```

Meaning:

```
Profile → Expanded

Settings → Collapsed
```

---

# Toggle Function

```jsx
function handleToggleChildren(getCurrentlabel) {
    setShowCurrentChildren({
        ...showCurrentChildren,
        [getCurrentlabel]:
            !showCurrentChildren[getCurrentlabel],
    });
}
```

Steps:

1. Copy previous state.
2. Find clicked menu.
3. Reverse its value.
4. Save new state.

---

# Conditional Rendering

The Plus/Minus icon appears only when children exist.

```jsx
item.children &&
item.children.length
```

Child menus are rendered only when:

- children exist
- menu is expanded

```jsx
item.children &&
item.children.length > 0 &&
showCurrentChildren[item.label]
```

Otherwise React renders nothing.

---

# Recursive Rendering

Suppose the menu data is

```text
Profile
└── Details
    └── Location
        └── City
```

Execution becomes

```
MenuList
    │
    ▼
MenuItem(Profile)
    │
    ▼
MenuList
    │
    ▼
MenuItem(Details)
    │
    ▼
MenuList
    │
    ▼
MenuItem(Location)
    │
    ▼
MenuList
    │
    ▼
MenuItem(City)
```

Notice that **no new component is created**.

The same two components continue rendering until there are no children.

---

# Why Recursion?

Imagine manually writing components.

```
Home

Profile

Details

Location

City
```

For every new nesting level, another component would be needed.

With recursion,

```
MenuList
↓

MenuItem
↓

MenuList
↓

MenuItem
↓

MenuList
```

The same components can render unlimited levels.

---

# Tailwind CSS Styling

The UI is styled using Tailwind CSS.

Features include:

- Responsive layout
- Glassmorphism container
- Gradient background
- Rounded cards
- Hover animations
- Smooth transitions
- Shadow effects
- Indented nested menus
- Interactive Plus/Minus buttons

No JavaScript logic depends on the styling.

Tailwind is used only for presentation.

---

# React Concepts Used

- Functional Components
- Props
- useState Hook
- Conditional Rendering
- Event Handling
- List Rendering
- Component Composition
- Recursive Components
- Object Spread Operator
- Dynamic Object Keys

---


# Advantages of This Approach

- Clean component structure.
- Easy to understand.
- Data-driven UI.
- Unlimited nesting.
- Reusable components.
- Easy maintenance.
- Easy to add new menu items.
- Logic remains unchanged regardless of menu depth.

---

# Complete Project Workflow

```
main.jsx
    │
    ▼
App.jsx
    │
    ▼
imports data.js
    │
    ▼
RecursiveNavMenu
    │
    ▼
MenuList
    │
    ▼
MenuItem
    │
    ├───────────────┐
    │               │
No Children     Has Children
    │               │
    ▼               ▼
Render End     Render MenuList
                    │
                    ▼
               MenuItem
                    │
                    ▼
             Continue Recursively
```

---
