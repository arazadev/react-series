// Reusable heading component used by different sections
// Keeps section titles consistent across the website

export default function SectionTitle({ title, subtitle }) {
  return (
    <div
      className="
        mx-auto
        max-w-3xl
        text-center
      "
    >


      <h2
        className="
          bg-linear-to-r
          from-gray-900
          via-blue-700
          to-cyan-500
          bg-clip-text
          pb-2
          text-3xl
          font-extrabold
          tracking-tight
          leading-normal
          text-transparent
          transition-all
          duration-500
          md:text-5xl
        "
      >
        {title}
      </h2>



      <div
        className="
          mx-auto
          mt-5
          h-1
          w-20
          rounded-full
          bg-linear-to-r
          from-blue-600
          to-cyan-400
          transition-all
          duration-500
          hover:w-40
        "
      />



      {subtitle && (
        <p
          className="
            mx-auto
            mt-5
            max-w-2xl
            text-lg
            leading-8
            text-gray-500
          "
        >
          {subtitle}
        </p>
      )}

    </div>
  )
}
