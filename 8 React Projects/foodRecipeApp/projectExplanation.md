# 🍳 RecipeHub - Recipe Finder Application

RecipeHub is a modern recipe search application built with **React.js**.  
Users can search for recipes, view detailed recipe information, and save their favorite recipes.

The application uses the **Forkify API** to fetch recipe data and provides a clean responsive interface using **Tailwind CSS**.

---

# 🚀 Features

## 🔍 Recipe Search
- Search recipes by food name or keyword.
- Fetches recipe results from Forkify API.
- Displays recipes dynamically.

## 🍽️ Recipe Cards
- Shows recipe image.
- Displays recipe publisher.
- Displays recipe title.
- Provides navigation to recipe details.

## 📖 Recipe Details
- View complete recipe information.
- Display ingredients list.
- View recipe image and publisher.
- Add or remove recipes from favorites.

## ❤️ Favorites System
- Save favorite recipes.
- Remove recipes from favorites.
- Dedicated favorites page.

## 🔄 Global State Management
- Uses React Context API.
- Shares recipes, favorites, loading state, and search functions across components.

## 📱 Responsive Design
- Fully responsive layout.
- Mobile, tablet, and desktop support.
- Built using Tailwind CSS utility classes.

---

# 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| React.js | Frontend library |
| React Router DOM | Client-side routing |
| Context API | Global state management |
| Tailwind CSS | Styling and responsive design |
| JavaScript ES6+ | Application logic |
| Forkify API | Recipe data source |
| Vite | Development environment |

---

# 📂 Project Structure

```
foodRecipeApp
│
├── public
│   ├── favicon.svg
│   └── icons.svg
│
├── src
│   │
│   ├── Components
│   │   │
│   │   ├── Navbar
│   │   │   └── Navbar.jsx
│   │   │
│   │   └── RecipeCard
│   │       └── RecipeCard.jsx
│   │
│   ├── Context
│   │   └── Context.jsx
│   │
│   ├── Pages
│   │   │
│   │   ├── Home
│   │   │   └── Home.jsx
│   │   │
│   │   ├── Details
│   │   │   └── Details.jsx
│   │   │
│   │   └── Favorites
│   │       └── Favorites.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── index.html
└── README.md
```

---

# 🧩 Application Architecture

The project follows a component-based React architecture.

```
main.jsx
   |
   |
GlobalState (Context API)
   |
   |
App.jsx
   |
   |
Navbar
   |
   |
Routes
   |
   ├── Home
   |
   ├── Favorites
   |
   └── Details
```

---

# 📌 Pages Explanation

## 🏠 Home Page

Location:

```
src/Pages/Home/Home.jsx
```

Responsibilities:

- Retrieves recipes from Context.
- Displays loading state.
- Maps recipes into reusable RecipeCard components.
- Shows empty state when no recipes exist.

---

## ❤️ Favorites Page

Location:

```
src/Pages/Favorites/Favorites.jsx
```

Responsibilities:

- Displays saved recipes.
- Uses global favoriteRecipes state.
- Allows users to manage saved recipes.

---

## 📖 Details Page

Location:

```
src/Pages/Details/Details.jsx
```

Responsibilities:

- Gets recipe ID from URL.
- Fetches recipe details from API.
- Displays:
  - Image
  - Title
  - Publisher
  - Ingredients
- Allows adding/removing favorites.

---

# 🧱 Components

## Navbar

Location:

```
src/Components/Navbar/Navbar.jsx
```

Features:

- Application navigation.
- Recipe search input.
- Search form handling.

---

## RecipeCard

Location:

```
src/Components/RecipeCard/RecipeCard.jsx
```

Features:

- Reusable recipe preview component.
- Displays recipe information.
- Links to recipe details page.

---

# 🌎 Context API

Location:

```
src/Context/Context.jsx
```

Global states:

```javascript
searchTerm
recipes
recipeDetails
favoriteRecipes
loading
```

Global functions:

```javascript
searchRecipes()
toggleFavorite()
```

---

# 🔗 API Integration

This project uses:

```
Forkify API
```

API endpoints:

## Search Recipes

```
GET
https://forkify-api.herokuapp.com/api/v2/recipes?search={query}
```

Example:

```
https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza
```

---

## Recipe Details

```
GET
https://forkify-api.herokuapp.com/api/v2/recipes/{recipe_id}
```

Example:

```
https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886
```

---

# 🧠 React Concepts Used

This project demonstrates:

- Functional Components
- React Hooks
  - useState
  - useEffect
  - useContext
- Context API
- React Router
- Dynamic Routes
- Conditional Rendering
- API Fetching
- Component Reusability
- Props Handling

---

# 🔄 User Flow

```
User enters recipe name
          |
          ↓
Navbar search form
          |
          ↓
Forkify API request
          |
          ↓
Recipes stored in Context
          |
          ↓
Home displays Recipe Cards
          |
          ↓
User opens recipe details
          |
          ↓
Can add recipe to favorites
```

---

# 🎨 UI Features

- Clean card-based layout.
- Hover animations.
- Responsive grid system.
- Loading states.
- Empty state messages.
- Modern orange food-themed design.

---