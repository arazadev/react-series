// Shared button component
// Variants and sizes allow different buttons without repeating Tailwind classes

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  const base = `
    inline-flex
    items-center
    justify-center
    rounded-xl
    font-semibold
    tracking-wide
    transition-all
    duration-300
    ease-out
    active:scale-95
    hover:scale-105
    focus:outline-none
    focus:ring-2
    focus:ring-offset-2
    disabled:cursor-not-allowed
    disabled:opacity-50
    select-none
  `;

  // Button styles are centralized here so changing the design
  // updates every button in the application

  const variants = {
    primary: `
      bg-blue-600
      text-white
      shadow-lg
      shadow-blue-500/20
      hover:bg-blue-700
      hover:shadow-xl
      hover:shadow-blue-500/40
      focus:ring-blue-500
    `,
    outline: `
      border-2
      border-blue-600
      text-blue-600
      bg-white
      hover:bg-blue-600
      hover:text-white
      hover:border-blue-600
      hover:shadow-xl
      hover:shadow-blue-500/25
      focus:ring-blue-500
    `,
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
