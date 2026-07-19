import Header from './Header'
import Footer from './Footer'

// Global page wrapper
// Controls shared website structure: Header, content area, Footer

export default function Layout({
  children,
  navLinks,
  socialLinks,
  companyName,
  onBook,
}) {
  return (
    <div
      className="
        flex
        min-h-screen
        flex-col
        overflow-x-hidden
        bg-white
        text-gray-800
        antialiased
      "
    >

{/* Header receives navigation and booking callback from App */}

      <Header
        navLinks={navLinks}
        companyName={companyName}
        onBook={onBook}
      />

      <main
        className="
          flex-1
        "
      >
        {children}
      </main>

{/* Footer remains reusable across pages */}

      <Footer
        socialLinks={socialLinks}
        companyName={companyName}
      />

    </div>
  )
}
