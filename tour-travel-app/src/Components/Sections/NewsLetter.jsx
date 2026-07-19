import Button from '../Ui/Button'

// Full-width newsletter section with background image overlay
// Designed as a marketing call-to-action area

export default function Newsletter() {
  return (
    <section
      id="newsletter"
      className="
        relative
        overflow-hidden
      "
    >

      <div
        className="
          absolute
          inset-0
          scale-105
          bg-cover
          bg-center
          transition-transform
          duration-8000
          ease-linear
          hover:scale-110
        "
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=2000&q=80)',
        }}
      />


      <div
        className="
          absolute
          inset-0
          bg-linear-to-r
          from-black/70
          via-black/50
          to-black/70
        "
      />


      <div
        className="
          absolute
          left-1/2
          top-0
          h-96
          w-96
          -translate-x-1/2
          rounded-full
          bg-blue-500/20
          blur-3xl
        "
      />


      <div
        className="
          relative
          z-10
          container
          mx-auto
          px-6
          py-24
          text-center
          text-white
        "
      >
        <h2
          className="
            text-4xl
            font-extrabold
            tracking-tight
            md:text-5xl
          "
        >
          Stay in Touch
        </h2>

        <p
          className="
            mx-auto
            mt-4
            max-w-2xl
            text-lg
            leading-8
            text-gray-200
          "
        >
          Get exclusive travel deals, destination ideas, and adventure
          inspiration delivered straight to your inbox.
        </p>

        {/* 
        Email collection form.
        Backend submission can be added later 
        */}

        <form
          className="
            mx-auto
            mt-10
            flex
            max-w-xl
            flex-col
            gap-4
            rounded-2xl
            border
            border-white/20
            bg-white/10
            p-3
            backdrop-blur-xl
            transition-all
            duration-500
            hover:bg-white/15
            sm:flex-row
          "
        >
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="
              flex-1
              rounded-xl
              border
              border-white/20
              bg-white/10
              px-5
              py-3
              text-white
              placeholder:text-gray-300
              outline-none
              transition-all
              duration-300
              focus:border-white
              focus:bg-white/20
              focus:ring-2
              focus:ring-white/50
            "
          />

          <Button
            size="md"
            className="
              whitespace-nowrap
            "
          >
            Subscribe →
          </Button>
        </form>
      </div>
    </section>
  )
}
