import Button from '../Ui/Button'

// Main landing section.
// Receives text content through props to keep it reusable

export default function Hero({ headline, subtitle, ctaText }) {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">

      <div
        className="
          absolute
          inset-0
          scale-105
          bg-cover
          bg-center
          bg-no-repeat
          transition-transform
          duration-10000
          ease-linear
          hover:scale-110
        "
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2000&q=80)',
        }}
      />

      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/45 to-black/70" />


      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="relative z-10 container mx-auto px-6 text-center text-white">

        <h1
          className="
            mx-auto
            max-w-5xl
            text-5xl
            font-extrabold
            leading-tight
            tracking-tight
            md:text-6xl
            lg:text-7xl
          "
        >
          {headline}
        </h1>

        <p
          className="
            mx-auto
            mt-8
            max-w-3xl
            text-lg
            leading-8
            text-gray-200
            md:text-xl
          "
        >
          {subtitle}
        </p>

        <div className="mt-10">
          <Button size="lg">
            {ctaText}
          </Button>
        </div>

{/* Quick trust indicators to increase user confidence */}

        <div className="mt-20 grid grid-cols-3 gap-8 text-center">

          <div className="transition-transform duration-300 hover:-translate-y-2">
            <h2 className="text-4xl font-bold">500+</h2>
            <p className="mt-2 text-gray-300">
              Happy Travelers
            </p>
          </div>

          <div className="transition-transform duration-300 hover:-translate-y-2">
            <h2 className="text-4xl font-bold">75+</h2>
            <p className="mt-2 text-gray-300">
              Destinations
            </p>
          </div>

          <div className="transition-transform duration-300 hover:-translate-y-2">
            <h2 className="text-4xl font-bold">4.9★</h2>
            <p className="mt-2 text-gray-300">
              Average Rating
            </p>
          </div>

        </div>

      </div>

    </section>
  )
}
