// Website footer containing company information,
// navigation shortcuts, and contact details

export default function Footer({ socialLinks, companyName }) {

  // Footer navigation data kept local because it is static

  const quickLinks = [
    { name: "About Us", href: "#" },
    { name: "Our Tours", href: "#tours" },
    { name: "Testimonials", href: "#reviews" },
    { name: "Contact", href: "#newsletter" },
    { name: "FAQs", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ];

  return (
    <footer
      className="
        relative
        overflow-hidden
        bg-gray-950
        text-gray-300
      "
    >
      <div
        className="
          absolute
          -left-40
          top-20
          h-96
          w-96
          rounded-full
          bg-blue-600/10
          blur-3xl
        "
      />

      <div
        className="
          absolute
          -right-40
          bottom-0
          h-96
          w-96
          rounded-full
          bg-cyan-500/10
          blur-3xl
        "
      />

      <div
        className="
          relative
          container
          mx-auto
          grid
          gap-12
          px-6
          py-16
          sm:grid-cols-2
          lg:grid-cols-4
        "
      >
        <div className="space-y-5">
          <h3
            className="
              text-2xl
              font-bold
              bg-linear-to-r
              from-blue-400
              to-cyan-300
              bg-clip-text
              text-transparent
            "
          >
            {companyName}
          </h3>

          <p className="leading-7 text-gray-400">
            Creating unforgettable travel experiences since 2022. Discover new
            places, cultures, and adventures with us.
          </p>
        </div>

        <div>
          <h4 className="mb-5 text-lg font-semibold text-white">Quick Links</h4>

          <ul className="space-y-3 text-sm">
            {quickLinks.slice(0, 3).map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="
                    group
                    relative
                    inline-block
                    transition-colors
                    duration-300
                    hover:text-white
                  "
                >
                  {link.name}

                  <span
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-px
                      w-0
                      bg-blue-400
                      transition-all
                      duration-300
                      group-hover:w-full
                    "
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-5 text-lg font-semibold text-white">Support</h4>

          <ul className="space-y-3 text-sm">
            {quickLinks.slice(3).map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="
                    group
                    relative
                    inline-block
                    transition-colors
                    duration-300
                    hover:text-white
                  "
                >
                  {link.name}

                  <span
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-px
                      w-0
                      bg-blue-400
                      transition-all
                      duration-300
                      group-hover:w-full
                    "
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-5 text-lg font-semibold text-white">Contact Us</h4>

          <ul className="space-y-5 text-sm">
            <li
              className="
                flex
                gap-3
                transition-transform
                duration-300
                hover:translate-x-2
              "
            >
              <span className="text-blue-400">📍</span>

              <span>Mandi Town, Bhakkar, Punjab, 30000</span>
            </li>

            <li
              className="
                flex
                items-center
                gap-3
                transition-transform
                duration-300
                hover:translate-x-2
              "
            >
              <span className="text-blue-400">📞</span>

              <a
                href="tel:+923441234567"
                className="hover:text-white transition-colors"
              >
                +92344-1234567
              </a>
            </li>

            <li
              className="
                flex
                items-center
                gap-3
                transition-transform
                duration-300
                hover:translate-x-2
              "
            >
              <span className="text-blue-400">✉️</span>

              <a
                href="mailto:arazadev@gmail.com"
                className="hover:text-white transition-colors"
              >
                arazadev@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div
          className="
      container
      mx-auto
      flex
      items-center
      justify-center
      px-6
      py-6
      text-center
      text-sm
    "
        >
          <p className=" text-gray-400">
            © {new Date().getFullYear()} {companyName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
