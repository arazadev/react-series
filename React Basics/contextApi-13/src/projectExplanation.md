# React Context API - Login & Profile Demo

A simple React project demonstrating how to use the **Context API** to share data between components without prop drilling.

---

## 📌 Features

- User Login form
- Profile component
- Shared user state using Context API
- Styled with Tailwind CSS
- Beginner-friendly project structure

---

## 🛠️ Technologies Used

- React
- React Hooks (`useState`, `useContext`)
- Context API
- Tailwind CSS

---

## 📂 Project Structure

```
src
│
├── Components
│   ├── Login.jsx
│   └── Profile.jsx
│
├── ContextAPI
│   ├── UserContext.jsx
│   └── UserContextProvider.jsx
│
├── App.jsx
└── main.jsx
```

---

## 📖 What is Context API?

Context API is a React feature that allows multiple components to access the same data without passing props through every intermediate component.

It helps solve the **prop drilling** problem.

---

## ❌ Without Context API

```
App
│
├── Dashboard
│     │
│     └── Profile
```

To send user data to `Profile`, every intermediate component must receive and pass the props.

---

## ✅ With Context API

```
             UserContext
            /     |      \
        Login   Profile   Navbar
```

Components can access shared data directly using `useContext()`.

---

# Project Workflow

```
User opens application
        │
        ▼
user = null
        │
        ▼
Profile shows "Please Login!"
        │
        ▼
User enters credentials
        │
        ▼
Login calls setUser()
        │
        ▼
Context updates
        │
        ▼
Profile automatically re-renders
        │
        ▼
Welcome Username
```

---

## 📄 File Overview

### UserContext.js

- Creates the Context object.
- Acts as the shared data container.

```jsx
const UserContext = React.createContext();
```

---

### UserContextProvider.jsx

- Stores the shared `user` state.
- Provides `user` and `setUser` to all child components.

```jsx
<UserContext.Provider value={{ user, setUser }}>
    {children}
</UserContext.Provider>
```

---

### App.jsx

- Wraps the application with `UserContextProvider`.
- Makes Context available to all child components.

```jsx
<UserContextProvider>
    <Login />
    <Profile />
</UserContextProvider>
```

---

### Login.jsx

Responsibilities:

- Stores form input using `useState`.
- Gets `setUser` from Context.
- Updates the shared user state after login.

```jsx
setUser({
    username,
    password
});
```

---

### Profile.jsx

Responsibilities:

- Reads the shared user data using `useContext`.
- Displays "Please Login!" if no user exists.
- Displays the username after login.

```jsx
const { user } = useContext(UserContext);
```

---

## 🔄 Data Flow

```
Login
   │
   ▼
setUser()
   │
   ▼
UserContextProvider
   │
   ▼
Context Updates
   │
   ▼
Profile
```

---

## React Hooks Used

### useState()

Used for managing local component state.

Example:

```jsx
const [username, setUsername] = useState("");
```

---

### useContext()

Used to access shared data from Context.

Example:

```jsx
const { user } = useContext(UserContext);
```

---

## Output

### Before Login

```
Context API Demo

Login

Please Login!
```

### After Login

```
Context API Demo

Login

Welcome!
Username: John
```

---

## Key Concepts Learned

- React Context API
- useState
- useContext
- Shared State
- Context Provider
- Prop Drilling
- Component Communication

---

## Conclusion

This project demonstrates how React Context API enables components to share state efficiently without passing props through multiple levels of the component tree.

The overall workflow is:

```
Create Context
      ↓
Create Provider
      ↓
Wrap the Application
      ↓
Update Context (Login)
      ↓
Read Context (Profile)
      ↓
Automatic UI Update
```
