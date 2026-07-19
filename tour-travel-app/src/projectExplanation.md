# SJ Travels - Tour & Travel Website 🌍

A modern, responsive tour and travel website built with **React + Vite + Tailwind CSS**.

The project showcases popular destinations, customer testimonials, newsletter subscription, and a booking modal system with a clean component-based architecture.

---

## 🚀 Features

- ✈️ Beautiful travel landing page
- 🌄 Hero section with call-to-action
- 🗺️ Dynamic tour cards
- ⭐ Customer testimonials with ratings
- 📩 Newsletter subscription section
- 📝 Tour booking modal form
- 📱 Fully responsive design
- 🎨 Modern UI with Tailwind CSS animations
- 🧩 Reusable React components
- 📂 Organized folder structure

---

# 🛠️ Technologies Used

## Frontend

- React.js
- Vite
- Tailwind CSS
- JavaScript (ES6+)

## Concepts Used

- React Components
- Props
- State Management with `useState`
- Component Composition
- Reusable UI Components
- Data-driven Rendering
- Responsive Design

---

# 📁 Project Structure

```
tour-travel-app
│
├── public
│   └── favicon.svg
│
├── src
│   │
│   ├── Components
│   │   │
│   │   ├── Cards
│   │   │   └── TourCard.jsx
│   │   │
│   │   ├── Layout
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Layout.jsx
│   │   │
│   │   ├── Sections
│   │   │   ├── Hero.jsx
│   │   │   ├── ToursList.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   └── Newsletter.jsx
│   │   │
│   │   └── Ui
│   │       ├── Button.jsx
│   │       ├── BookingForm.jsx
│   │       └── SectionTitle.jsx
│   │
│   ├── Data
│   │   ├── tours.js
│   │   └── testimonials.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
└── package.json
```

---

# 🧩 Component Explanation

## App.jsx

The main application component.

Responsibilities:

- Controls application state
- Connects all sections together
- Handles booking modal visibility
- Passes data into child components

Example:

```jsx
const [showBooking, setShowBooking] = useState(false);
```

This state controls opening and closing the booking form.

---

# Layout Components

## Layout.jsx

Provides the global website structure.

Contains:

- Header
- Main content
- Footer


Structure:

```
Layout
│
├── Header
│
├── Page Content
│
└── Footer
```

---

## Header.jsx

Responsible for:

- Website navigation
- Company branding
- Booking button

Navigation links are received through props so the component remains reusable.

---

## Footer.jsx

Contains:

- Company information
- Quick navigation links
- Contact details

---

# Section Components

## Hero.jsx

The first section users see.

Features:

- Background image
- Main heading
- Description
- CTA button
- Travel statistics


---

## ToursList.jsx

Displays all available tours.

The component receives tour data:

```jsx
<ToursList tours={tours}/>
```

Then creates reusable cards using:

```jsx
tour.map()
```

---

## Testimonials.jsx

Displays customer reviews.

Features:

- User avatar
- Customer name
- Rating stars
- Review text

Ratings are generated dynamically.

---

## Newsletter.jsx

Marketing section for collecting emails.

Includes:

- Background image
- Email input
- Subscribe button

---

# UI Components

## Button.jsx

Reusable button component.

Supports:

- Different sizes
- Different styles
- Custom classes


Example:

```jsx
<Button variant="outline">
View Details
</Button>
```

---

## BookingForm.jsx

Modal booking form.

Features:

- Opens dynamically
- Closes with button action
- Collects user information


Controlled by:

```jsx
isOpen
onClose
```

props.

---

## SectionTitle.jsx

Reusable heading component.

Used for:

- Tours section
- Testimonials section

Keeps headings consistent throughout the website.

---

# Data Management

## tours.js

Contains tour information:

Example:

```javascript
{
 title: "Bali Bliss",
 duration: "5 Days",
 price: "$799"
}
```

Data is separated from components to make future API integration easier.

---

## testimonials.js

Stores customer reviews.

Contains:

- Name
- Avatar
- Review
- Rating

---

# ⚙️ Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate into project:

```bash
cd tour-travel-app
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

---

# 📦 Build For Production

Create production build:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

# 💡 Development Approach

This project follows a component-based React architecture.

Main principles:

- Keep components reusable
- Separate data from UI
- Avoid repeated code
- Maintain clean folder organization
- Build small components with single responsibilities

---
