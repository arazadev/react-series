# Accordion Component

A simple and responsive Accordion component built with **React**, **Vite**, and **Tailwind CSS**. This project demonstrates how to create an accordion that supports both **single selection** and **multiple selection** modes.

---

## 📌 Features

- Expand and collapse accordion items
- Single selection mode (only one item can remain open)
- Multiple selection mode (multiple items can remain open)
- Toggle between single and multi-selection
- Responsive UI
- Clean and reusable React component
- Styled using Tailwind CSS

---

## 🛠 Technologies Used

- React
- Vite
- Tailwind CSS
- JavaScript (ES6+)

---

## 📖 How It Works

### Single Selection Mode

- Only one accordion item can be expanded at a time.
- Clicking another item automatically closes the previously opened item.
- Clicking an already expanded item closes it.

The currently opened item's ID is stored in:

```javascript
const [selected, setSelected] = useState(null);
```

---

### Multiple Selection Mode

When Multi Selection is enabled:

- Multiple accordion items can stay open simultaneously.
- Clicking an item toggles its expanded state.
- Expanded item IDs are stored inside an array.

```javascript
const [multiple, setMultiple] = useState([]);
```

---

### Switching Between Modes

The button toggles between:

- Single Selection
- Multiple Selection

using the state:

```javascript
const [enableMultiSelection, setEnableMultiSelection] = useState(false);
```

---

## 📄 Accordion Data

Accordion items are stored inside `data.js`.

Example:

```javascript
{
  id: "1",
  question: "What are accordion components?",
  answer: "Accordion components are..."
}
```

Each object contains:

| Property | Description |
|----------|-------------|
| id | Unique identifier |
| question | Accordion heading |
| answer | Accordion content |

---

## 📋 Component Logic

### Opening an Item

In single-selection mode:

```javascript
handleSingleSelection(id)
```

- Opens the clicked item.
- Closes any previously opened item.

---

### Opening Multiple Items

In multi-selection mode:

```javascript
handleMultipleSelection(id)
```

- Adds the item ID if it is not already expanded.
- Removes the item ID if it is already expanded.

---

### Rendering Answers

The answer is conditionally rendered only when the item is expanded.

Example:

```javascript
selected === dataItem.id ||
multiple.includes(dataItem.id)
```

---

## 🎨 Styling

The UI is built entirely using **Tailwind CSS** utility classes.

Some examples include:

- Flexbox layout
- Responsive spacing
- Rounded corners
- Shadows
- Hover effects
- Smooth transitions

---

## 💡 Learning Outcomes

This project demonstrates how to:

- Manage state with React Hooks
- Use conditional rendering
- Work with arrays in React state
- Toggle UI elements
- Build reusable components
- Render lists using `map()`
- Apply Tailwind CSS styling
- Organize a small React project

---
