# React List Rendering

A simple React project demonstrating how to render dynamic lists using the `map()` method. The project stores todo data in state and displays each item as a reusable UI element.

## 🚀 Features

- Uses React `useState` for managing todo data.
- Renders multiple items dynamically using `map()`.
- Uses unique `key` values for efficient React updates.
- Displays todo title and description.
- Styled with Tailwind CSS.

## 🛠️ Technologies Used

- React
- JavaScript (ES6+)
- Tailwind CSS

## 📖 How It Works

The application stores todo items in a state array:

```jsx
const [todos, setTodos] = useState([
  {
    id: 1,
    title: "Hey",
    desc: "I am a good todo",
  },
]);
```

The `map()` method loops through the `todos` array and creates a UI card for each item:

```jsx
{todos.map((item) => {
  return (
    <div key={item.id}>
      <h3>{item.title}</h3>
      <p>{item.desc}</p>
    </div>
  );
})}
```

The `key` prop helps React track each list item and update the UI efficiently.

## 📌 Learning Goal

This project helps understand:

- React state with `useState`
- Rendering arrays in React
- Using `map()` for dynamic UI creation
- The importance of `key` in React lists