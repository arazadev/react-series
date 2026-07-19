import SectionTitle from '../Ui/SectionTitle'

// Customer reviews section
// Rating stars are generated dynamically based on rating value

export default function Testimonials({ testimonials }) {
  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-linear-to-b from-gray-50 to-white py-24"
    >
      <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-blue-100 blur-3xl opacity-40" />
      <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-cyan-100 blur-3xl opacity-40" />

      <div className="relative container mx-auto px-6">
        <SectionTitle
          title="What Our Travelers Say"
          subtitle="Real experiences from amazing people around the world."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-gray-100
                bg-white
                p-7
                shadow-md
                transition-all
                duration-500
                hover:-translate-y-3
                hover:shadow-2xl
                hover:shadow-blue-500/10
              "
            >

              <div className="absolute right-5 top-5 text-6xl font-serif text-blue-100 transition-all duration-300 group-hover:scale-110 group-hover:text-blue-200">
                "
              </div>

              <div className="flex items-center gap-4">
                <div className="overflow-hidden rounded-full">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="
                      h-16
                      w-16
                      rounded-full
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-110
                    "
                  />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {t.name}
                  </h3>

                  <div className="mt-1 flex text-yellow-400">

                    {/* Creates five stars and highlights only the user's rating */}

                    {Array.from({ length: 5 }).map((_, index) => (
                      <span
                        key={index}
                        className={`text-lg ${
                          index < t.rating
                            ? 'text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <p className="mt-6 leading-8 text-gray-600">
                “{t.text}”
              </p>


              <div
                className="
                  mt-8
                  h-1
                  w-16
                  rounded-full
                  bg-blue-600
                  transition-all
                  duration-500
                  group-hover:w-full
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
