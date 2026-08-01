import { useState, useEffect } from "react";
import Search from "./Search";

export default function Weather() {
  // Stores the user's search input
  const [search, setSearch] = useState("");

  // Controls the loading spinner while fetching data
  const [loading, setLoading] = useState(false);

  // Stores weather information received from API
  const [weatherData, setWeatherData] = useState(null);

  // Stores error messages for invalid searches
  const [error, setError] = useState("");

  // Fetch weather data from OpenWeather API
  async function fetchWeatherData(param) {
    setLoading(true);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=82ea9efcdc5ffc0f1522c11188591701&units=metric`,
      );

      const data = await response.json();

      // Handle invalid city names
      if (data.cod !== 200) {
        setError("Please enter a valid city name.");
        setWeatherData(null);
        setLoading(false);
        return;
      }

      // Save successful API response
      setError("");
      setWeatherData(data);
      setLoading(false);
    } catch (e) {
      // Handle network/API errors
      setLoading(false);
    }
  }

  // Trigger weather search using entered city name
  function handleSearch() {
    if (search.trim()) fetchWeatherData(search);
  }

  // Returns formatted current date
  function getCurrentDate() {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  // Gets main weather condition (Clear, Rain, Clouds, etc.)
  const icon = weatherData?.weather?.[0]?.main;

  // Maps weather conditions to emojis
  const weatherEmoji = {
    Clear: "☀️",
    Clouds: "☁️",
    Rain: "🌧️",
    Snow: "❄️",
    Thunderstorm: "⛈️",
    Drizzle: "🌦️",
    Mist: "🌫️",
  };

  // Load default city weather when component first renders
  useEffect(() => {
    fetchWeatherData("Bhakkar");
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-900 via-cyan-900 to-blue-900 flex flex-col items-center justify-center px-4 py-6">
      {/* App Heading */}
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-wide">
          Weather App
        </h1>
        <p className="mt-2 text-white/80 text-sm sm:text-sm">
          Check real-time weather for any city
        </p>
      </div>
      <div className="w-full max-w-lg rounded-3xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl p-5 sm:p-8 text-white">
        {/* Search input component */}
        <Search
          search={search}
          setSearch={setSearch}
          handleSearch={handleSearch}
        />

        {/* Display error message if city is invalid */}
        {error && (
          <p className="text-red-200 text-center mt-4 font-semibold">{error}</p>
        )}

        {/* Show loading spinner while fetching data */}
        {loading ? (
          <div className="text-center py-16">
            <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="mt-4 text-lg font-medium">Loading...</p>
          </div>
        ) : (
          <>
            {/* Location and date section */}
            <div className="text-center mt-8">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide">
                {weatherData?.name}
              </h1>

              <p className="text-base sm:text-lg text-white/80">
                {weatherData?.sys?.country}
              </p>

              <p className="mt-2 text-xs sm:text-sm text-white/70">
                {getCurrentDate()}
              </p>
            </div>

            {/* Current temperature and weather condition */}
            <div className="mt-8 text-center">
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold break-words">
                {weatherEmoji[icon] || "🌍"} {weatherData?.main?.temp}°
              </h2>

              <p className="capitalize mt-3 text-xl text-white/90">
                {weatherData?.weather?.[0]?.description}
              </p>
            </div>

            {/* Additional weather details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {/* Wind speed card */}
              <div className="rounded-2xl bg-white/15 backdrop-blur-md p-5 text-center shadow-lg hover:scale-105 transition">
                <p className="text-3xl font-bold">{weatherData?.wind?.speed}</p>
                <p className="text-white/70 mt-1">Wind Speed</p>
              </div>

              {/* Humidity card */}
              <div className="rounded-2xl bg-white/15 backdrop-blur-md p-5 text-center shadow-lg hover:scale-105 transition">
                <p className="text-2xl sm:text-3xl font-bold">
                  {weatherData?.main?.humidity}%
                </p>
                <p className="text-white/70 mt-1">Humidity</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
