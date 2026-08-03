import { useEffect, useState } from "react";
import {
  BsArrowLeftCircleFill,
  BsArrowRightCircleFill,
} from "react-icons/bs";

export default function ImageSlider({ url, limit = 5, page = 1 }) {
  // Stores the fetched images
  const [images, setImages] = useState([]);

  // Tracks the currently displayed image
  const [currentSlide, setCurrentSlide] = useState(0);

  // Loading and error states
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  // Fetch images from the API
  async function fetchImages(getUrl) {
    try {
      setLoading(true);

      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
      }

      setLoading(false);
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  // Navigate to the previous image
  function handlePrevious() {
    setCurrentSlide(
      currentSlide === 0 ? images.length - 1 : currentSlide - 1
    );
  }

  // Navigate to the next image
  function handleNext() {
    setCurrentSlide(
      currentSlide === images.length - 1 ? 0 : currentSlide + 1
    );
  }

  // Fetch images when the component mounts
  // or whenever the URL changes
  useEffect(() => {
    if (url) fetchImages(url);
  }, [url]);

  // Show loading state
  if (loading)
    return (
      <div className="flex justify-center text-white items-center h-screen text-xl font-semibold">
        Loading...
      </div>
    );

  // Show error message if request fails
  if (errorMsg)
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        {errorMsg}
      </div>
    );

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-900">
      {/* Slider Container */}
      <div className="relative w-175 h-112.5 rounded-2xl overflow-hidden shadow-2xl">

        {/* Images */}
        {images.map((image, index) => (
          <img
            key={image.id}
            src={image.download_url}
            alt={image.author}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
              currentSlide === index
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          />
        ))}

        {/* Previous Button */}
        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/30 rounded-full p-2 hover:bg-black/60 transition-all duration-300"
        >
          <BsArrowLeftCircleFill size={35} />
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/30 rounded-full p-2 hover:bg-black/60 transition-all duration-300"
        >
          <BsArrowRightCircleFill size={35} />
        </button>

        {/* Navigation Dots */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-white scale-125"
                  : "bg-gray-400 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}