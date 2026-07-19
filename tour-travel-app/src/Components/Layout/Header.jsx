// Sticky navigation bar
// Booking action is passed from parent instead of handling state here

export default function Header({ navLinks, companyName, onBook }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-white/75 backdrop-blur-xl transition-all duration-300">
      <div className="container mx-auto flex flex-col items-center justify-between px-6 py-4 md:flex-row">
        <a
          href="#"
          className="group flex items-center gap-2 text-2xl font-bold tracking-tight text-blue-600 transition-all duration-300 hover:scale-105"
        >
          <span className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            {companyName}
          </span>
        </a>

        <nav className="mt-4 flex flex-wrap items-center justify-center gap-8 md:mt-0">

          {/* Navigation links are generated dynamically from data */}

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="
                group
                relative
                text-sm
                font-medium
                text-gray-700
                transition-all
                duration-300
                hover:text-blue-600
              "
            >
              {link.name}

              <span
                className="
                  absolute
                  -bottom-1
                  left-0
                  h-0.5
                  w-0
                  rounded-full
                  bg-blue-600
                  transition-all
                  duration-300
                  ease-out
                  group-hover:w-full
                "
              />
            </a>
          ))}

          <button
            onClick={onBook}
            className="
    rounded-xl
    bg-blue-600
    px-5
    py-2.5
    text-sm
    font-semibold
    text-white
    shadow-lg
    shadow-blue-500/20
    transition-all
    duration-300
    hover:-translate-y-1
    hover:bg-blue-700
  "
          >
            Book Now
          </button>
        </nav>
      </div>
    </header>
  );
}
