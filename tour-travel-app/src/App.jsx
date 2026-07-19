import { useState } from "react";
import Layout from './Components/Layout/Layout'
import Hero from './Components/Sections/Hero'
import ToursList from './Components/Sections/ToursList'
import Testimonials from './Components/Sections/Testimonials'
import Newsletter from './Components/Sections/NewsLetter'
import tours from './Data/tours'
import testimonials from './Data/testimonials'
import BookingForm from './Components/Ui/BookingForm'


// Navigation data is passed to Header through Layout
// This keeps the Header reusable for different pages.
const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'Tours', href: '#tours' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Contact', href: '#newsletter' },
]


function App() {

  // Controls opening and closing of the booking modal.
  // The state stays here because multiple components (Header/Button/Form)
  // need to communicate through the parent.
  const [showBooking, setShowBooking] = useState(false);


  return (
    <>
      <Layout
        navLinks={navLinks}
        companyName="SJ Travels"
        onBook={() => setShowBooking(true)}
      >

        {/* Hero section introduces the website and main call-to-action */}
        <Hero
          headline="Discover Your Next Adventure"
          subtitle="Handpicked tours for unforgettable experiences"
          ctaText="Explore Tours"
        />

        {/* Dynamic tour cards generated from data */}
        <ToursList tours={tours} />

        {/* Customer reviews section */}
        <Testimonials testimonials={testimonials} />

        {/* Email subscription section */}
        <NewsLetter />

      </Layout>


      {/* Modal is outside Layout so it appears above all page content */}
      <BookingForm
        isOpen={showBooking}
        onClose={() => setShowBooking(false)}
      />
    </>
  )
}

export default App
