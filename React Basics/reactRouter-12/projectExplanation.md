# React Router Portfolio Application

A modern React single-page application built with React, React Router DOM, and Tailwind CSS. This project demonstrates reusable components, nested layouts, dynamic routing, and data loading using React Router.

---

# 📌 Project Overview

This project is a React-based website that demonstrates how to build a structured Single Page Application (SPA).

The application includes:

- Home page
- About page
- Contact page
- Dynamic User page
- GitHub profile page
- Shared Header and Footer layout
- Client-side routing
- API data fetching with React Router loader

The project focuses on clean component organization and modern React development practices.

---

# 🚀 Features

## Client-Side Routing

The application uses **React Router DOM** for navigation.

Available routes:

| Route | Component | Purpose |
|---|---|---|
| `/` | Home | Main landing page |
| `/about` | About | About information |
| `/contact` | Contact | Contact page |
| `/user/:userid` | User | Dynamic user route |
| `/github` | Github | GitHub profile information |

---

# 🧭 Application Structure

The application follows this structure:

```
Browser
   |
   ↓
main.jsx
   |
   ↓
React Router
   |
   ↓
Layout.jsx
   |
   ↓
Header
   |
   ↓
Outlet (Current Page)
   |
   ↓
Footer
```

The `Layout` component acts as a shared wrapper for every page.

---

# 📂 Folder Structure

```
src
│
├── Components
│   │
│   ├── About
│   │   └── About.jsx
│   │
│   ├── Contact
│   │   └── Contact.jsx
│   │
│   ├── Footer
│   │   └── Footer.jsx
│   │
│   ├── Github
│   │   └── Github.jsx
│   │
│   ├── Header
│   │   └── Header.jsx
│   │
│   ├── Home
│   │   └── Home.jsx
│   │
│   └── User
│       └── User.jsx
│
├── Layout.jsx
├── main.jsx
├── index.css
└── App.jsx
```

---

# 🛠️ Technologies Used

## React

Used for building reusable UI components.

Website:

https://react.dev/

---

## React Router DOM

Used for:

- Navigation
- Routing
- Nested routes
- Dynamic parameters
- Data loaders

Website:

https://reactrouter.com/

---

## Tailwind CSS

Used for:

- Responsive design
- Utility-based styling
- Fast UI development

Website:

https://tailwindcss.com/

---

# 🧩 Component Documentation

## Layout.jsx

The main application wrapper.

Responsibilities:

- Displays Header globally
- Displays Footer globally
- Uses React Router Outlet for page rendering

Structure:

```jsx
<Header />

<Outlet />

<Footer />
```

---

# Header.jsx

The navigation component.

Features:

- Website logo
- Navigation links
- Active route highlighting
- Login/Get Started buttons

Uses:

```javascript
NavLink
```

to detect the current route.

---

# Footer.jsx

The global footer component.

Contains:

- Branding
- Resource links
- Social links
- Legal links

Displayed on every page through Layout.

---

# Home.jsx

The main landing page.

Includes:

- Hero section
- Call-to-action button
- Promotional images
- Introduction content

---

# About.jsx

Displays information about the project/company.

Includes:

- Image section
- Heading
- Description paragraphs

---

# Contact.jsx

Contact page layout.

Contains:

- Address information
- Phone number
- Email
- Contact form UI

Note:

The form currently does not submit data because no backend logic has been connected.

---

# User.jsx

Demonstrates dynamic routing.

Route:

```
/user/:userid
```

Example:

```
/user/john
```

Output:

```
User: john
```

Uses:

```javascript
useParams()
```

to access the URL parameter.

---

# Github.jsx

Displays GitHub profile information.

Data source:

```
GitHub API
https://api.github.com/users/arazadev
```

Displays:

- Followers count
- Profile image

Uses React Router loader:

```
githubInfoLoader()
```

Flow:

```
Route
 |
 ↓
Loader
 |
 ↓
GitHub API
 |
 ↓
useLoaderData()
 |
 ↓
Github Component
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone <repository-url>
```

---

## Enter Project Folder

```bash
cd project-name
```

---

## Install Dependencies

```bash
npm install
```

---

## Run Development Server

```bash
npm run dev
```

Application will start locally.

Example:

```
http://localhost:5173
```

---

# 📦 Main Dependencies

```json
{
  "react": "latest",
  "react-dom": "latest",
  "react-router-dom": "latest",
  "tailwindcss": "latest"
}
```

---

# 🔄 Routing Explanation

Routes are created in:

```
main.jsx
```

Example:

```jsx
<Route path="/" element={<Layout />}>
    <Route path="" element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="contact" element={<Contact />} />
    <Route path="user/:userid" element={<User />} />
    <Route path="github" element={<Github />} />
</Route>
```

All child pages are rendered inside:

```jsx
<Outlet />
```

---

# 🔐 Important Notes

## External Images

Some images are loaded from external URLs.

For production:

- Store images locally
- Optimize image sizes
- Use a CDN

---