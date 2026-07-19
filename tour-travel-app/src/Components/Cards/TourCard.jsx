import Button from '../Ui/Button'

// Reusable card component for displaying a single tour
// Receives one tour object and handles only presentation

export default function TourCard({ tour }) {
  return (
    <div
      className="
        group
        overflow-hidden
        rounded-2xl
        border
        border-gray-100
        bg-white
        shadow-md
        transition-all
        duration-500
        ease-out
        hover:-translate-y-3
        hover:shadow-2xl
        hover:shadow-blue-500/10
      "
    >

      <div className="relative overflow-hidden">

{/* Tour image with hover zoom animation for better interaction */}

        <img
          src={tour.image}
          alt={tour.title}
          className="
            h-64
            w-full
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-110
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-linear-to-t
            from-black/70
            via-black/10
            to-transparent
            opacity-70
            transition-opacity
            duration-500
            group-hover:opacity-90
          "
        />


        <span
          className="
            absolute
            left-4
            top-4
            rounded-full
            bg-white/90
            px-4
            py-1.5
            text-sm
            font-semibold
            text-gray-800
            shadow-lg
            backdrop-blur-md
            transition-all
            duration-300
            group-hover:bg-blue-600
            group-hover:text-white
          "
        >
          {tour.duration}
        </span>


        <div className="absolute bottom-5 left-5">

          <p className="text-sm text-white/80">
            Starting From
          </p>

          <h3
            className="
              text-3xl
              font-bold
              text-white
              transition-all
              duration-300
              group-hover:tracking-wide
            "
          >
            {tour.price}
          </h3>

        </div>
      </div>

      <div className="p-6">

        <h2
          className="
            text-2xl
            font-bold
            text-gray-800
            transition-colors
            duration-300
            group-hover:text-blue-600
          "
        >
          {tour.title}
        </h2>

        <p className="mt-4 leading-7 text-gray-600">
          {tour.description}
        </p>


        <div className="my-6 h-px bg-gray-200" />

        <div className="flex items-center justify-between">

          <span
            className="
              text-sm
              font-medium
              text-gray-500
            "
          >
            Adventure Awaits
          </span>

          {/* Action button can later open detailed tour information */}

          <Button
            variant="outline"
            size="sm"
            className="
              opacity-90
              transition-all
              duration-300
              group-hover:opacity-100
            "
          >
            View Details →
          </Button>

        </div>
      </div>
    </div>
  )
}
