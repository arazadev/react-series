import SectionTitle from '../Ui/SectionTitle'
import TourCard from '../Cards/TourCard'

// Displays all available tours
// Receives data as props instead of importing directly,
// making this component reusable

export default function ToursList({ tours }) {
  return (
    <section
      id="tours"
      className="
        relative
        overflow-hidden
        bg-white
        py-24
      "
    >

      <div
        className="
          absolute
          -left-40
          top-20
          h-80
          w-80
          rounded-full
          bg-blue-100/40
          blur-3xl
        "
      />

      <div
        className="
          absolute
          -right-40
          bottom-20
          h-80
          w-80
          rounded-full
          bg-cyan-100/40
          blur-3xl
        "
      />


      <div
        className="
          relative
          container
          mx-auto
          px-6
        "
      >

        <SectionTitle
          title="Popular Tours"
          subtitle="Handpicked adventures and unforgettable experiences waiting for you."
        />


        <div
          className="
            mt-14
            grid
            gap-8
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >

          {/* Map through tour data and create reusable TourCard components */}

          {tours.map((tour) => (
            <div
              key={tour.id}
              className="
                transition-all
                duration-500
              "
            >
              <TourCard tour={tour} />
            </div>
          ))}

        </div>


      </div>

    </section>
  )
}
