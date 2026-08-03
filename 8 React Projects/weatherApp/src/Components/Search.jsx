export default function Search({ search, setSearch, handleSearch }) {
  return (
    <div className="flex flex-col sm:flex-row gap-3">

      {/* City name input field */}
      <input
        type="text"
        placeholder="🔍 Search city..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}

        // Allows searching by pressing Enter key
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}

        className="w-full flex-1 rounded-xl px-5 py-3 bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder:text-white/70 outline-none focus:ring-2 focus:ring-white transition"
      />

      {/* Button to start weather search */}
      <button
        onClick={handleSearch}
        className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white text-sky-600 font-semibold hover:bg-sky-100 active:scale-95 transition-all duration-300 shadow-lg"
      >
        Search
      </button>

    </div>
  );
}