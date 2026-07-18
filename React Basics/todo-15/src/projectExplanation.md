# Todo App

A simple Todo application built using React.

This project is created to understand the core concepts of React and how different components communicate with each other.

The main purpose of this project is learning:
- React components
- State management
- Hooks
- Context API
- Local Storage
- Props


---

# Features

## Add Todo

Users can add new tasks using the input field.

Example:

```
Learn React
```

## Edit Todo

Users can update existing todo text.

## Complete Todo

Users can mark tasks as completed using the checkbox.

Completed tasks:
- Get a different background color.
- Show line-through text.

## Delete Todo

Users can remove unwanted tasks.

## Local Storage

Todos are stored in browser local storage.

This means:
- Data remains after refreshing the page.
- Todos are available when opening the project again.


---

# Technologies Used

- React JS
- Vite
- JavaScript ES6+
- Tailwind CSS


---

# Project Structure

```
todo-15

src
│
├── Components
│   ├── Root.js
│   ├── ToDoForm.jsx
│   └── ToDoItem.jsx
│
├── Context
│   ├── Index.js
│   └── ToDoContext.js
│
├── App.jsx
├── index.css
└── main.jsx
```

---

# Application Flow

The application starts from:

```
main.jsx
```

↓

Loads:

```
App.jsx
```

↓

App manages todo data and provides it using Context API.

↓

Components use that shared data.

Flow:

```
main.jsx
    |
    v
App.jsx
    |
    v
ToDoProvider
    |
    +------------+
    |            |
    v            v
ToDoForm    ToDoItem
```


---

# File Explanation


## main.jsx

Starting point of React application.

Responsibilities:

- Connect React with HTML.
- Render the App component.


---

## App.jsx

The main file of the project.

It controls:

- Todo state
- Adding todos
- Updating todos
- Deleting todos
- Completing todos
- Local storage


---

## Components


### ToDoForm.jsx

Responsible for creating new todos.

It:

- Takes input from user.
- Calls addTodo function.
- Clears input after adding.


### ToDoItem.jsx

Responsible for showing a single todo.

It handles:

- Checkbox completion.
- Editing.
- Saving changes.
- Deleting todo.


### Root.js

A common export file.

It allows importing multiple components from one place.


---

# Context API


Context API is used to share data between components without passing props again and again.


This project shares:

- todos
- addTodo()
- updateTodo()
- deleteTodo()
- toggleComplete()


---

# React Concepts Used


## useState

Used for storing changing data.

Examples:

- Todo list
- Input value
- Edit mode


---

## useEffect

Used for running code after rendering.

In this project:

1. Loads todos from localStorage.
2. Saves todos whenever data changes.


---

# Learning Outcome

After completing this project, you should understand:

- How React components work.
- How state is managed.
- How components communicate.
- How Context API works.
- How data can be stored locally.

This project builds a strong foundation for larger React applications.
