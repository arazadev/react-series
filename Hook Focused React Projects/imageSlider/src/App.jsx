import ImageSlider from "./Components/ImageSlider";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      {/* Reusable Image Slider Component */}
      <ImageSlider
        // API endpoint for fetching images
        url="https://picsum.photos/v2/list"

        // Number of images to fetch
        limit={10}

        // API page number
        page={1}
      />
    </div>
  );
}

export default App;