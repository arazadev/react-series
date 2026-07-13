# Currency Converter 💱

A simple and responsive currency converter application built using **React**, **Vite**, and **Tailwind CSS**.

The application allows users to convert one currency into another using live exchange rates fetched from a currency API.

---

## 🚀 Features

- Convert between different currencies
- Live exchange rate fetching
- Select source and target currencies
- Swap currencies with one click
- Responsive UI design
- Glass-style user interface
- Reusable Input component
- Custom React hook for API handling

---

## 🛠️ Technologies Used

- **React.js** - Frontend library
- **Vite** - Development environment and build tool
- **Tailwind CSS** - Styling framework
- **JavaScript (ES6+)** - Programming language
- **Currency API** - Exchange rate data source

---

# 📖 How It Works

The application follows this flow:

1. User enters an amount.
2. User selects the currency to convert from.
3. The custom hook fetches exchange rates for that currency.
4. User selects the target currency.
5. The application calculates:

```
Converted Amount = Amount × Exchange Rate
```

6. The converted value is displayed.

---

# 🧩 Components Explanation

## App.jsx

The main application component.

Responsibilities:

- Manages currency states
- Handles conversion logic
- Handles currency swapping
- Passes data to reusable components

---

## Input.jsx

Reusable input component used for:

- Amount input
- Currency selection dropdown

It receives values and functions through props, making it reusable throughout the application.

---

## useCurrencyInfo.js

Custom React hook responsible for fetching currency exchange data.

Example:

```javascript
const currencyInfo = useCurrencyInfo("usd");
```

Returns exchange rates:

```javascript
{
  pkr: 280,
  eur: 0.91,
  inr: 83
}
```

The hook automatically updates whenever the selected base currency changes.

---

## Components/index.js

A barrel file that exports components from a single location.

Instead of:

```javascript
import Input from "./Components/Input";
```

we can write:

```javascript
import { Input } from "./Components";
```

This keeps imports cleaner.

---

# 🔄 Currency Swap Feature

The swap button exchanges:

- Source currency
- Target currency
- Input amount
- Converted amount

Example:

Before:

```
100 USD → PKR
```

After swap:

```
100 PKR → USD
```

---

# 🎨 Styling

The project uses Tailwind CSS for styling.

Main UI features:

- Centered converter card
- Background image
- Transparent glass effect
- Rounded inputs and buttons
- Responsive layout

---

# 🌐 API Usage

Currency data is fetched from:

```
https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api/
```

The API provides current exchange rates for different currencies.

---

# 🧠 React Concepts Used

This project demonstrates:

- Functional Components
- React Hooks
- useState
- useEffect
- Custom Hooks
- Props
- Component Reusability
- State Management
- Controlled Components

---

# 📸 Application Preview

The application provides a simple interface containing:

- Amount input field
- Currency selectors
- Swap button
- Convert button
- Converted output

---