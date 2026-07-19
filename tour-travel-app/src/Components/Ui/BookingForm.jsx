// Modal booking form
// It only renders when isOpen is true, controlled by parent component

export default function BookingForm({ isOpen, onClose }) {

  // Prevents unnecessary rendering when modal is closed

  if (!isOpen) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-100
        flex
        items-center
        justify-center
        bg-black/60
        px-4
      "
    >

      <div
        className="
          w-full
          max-w-lg
          rounded-2xl
          bg-white
          p-8
          shadow-2xl
        "
      >

        <div className="flex items-center justify-between">

          <h2 className="text-3xl font-bold text-gray-800">
            Book Your Tour
          </h2>

          <button
            onClick={onClose}
            className="
              text-2xl
              text-gray-500
              hover:text-red-500
            "
          >
            ×
          </button>

        </div>

        {/* 
        Form UI only for now
        Submission logic can later connect with backend/API 
        */}

        <form className="mt-6 space-y-5">

          <input
            type="text"
            placeholder="Full Name"
            className="
              w-full
              rounded-xl
              border
              border-gray-300
              px-4
              py-3
              outline-none
              focus:border-blue-500
            "
          />


          <input
            type="email"
            placeholder="Email Address"
            className="
              w-full
              rounded-xl
              border
              border-gray-300
              px-4
              py-3
              outline-none
              focus:border-blue-500
            "
          />


          <select
            className="
              w-full
              rounded-xl
              border
              border-gray-300
              px-4
              py-3
              outline-none
            "
          >
            <option>Select Destination</option>
            <option>Bali Bliss</option>
            <option>Safari in Kenya</option>
            <option>Alpine Trek</option>
            <option>Kyoto Temples</option>
          </select>


          <input
            type="date"
            className="
              w-full
              rounded-xl
              border
              border-gray-300
              px-4
              py-3
            "
          />


          <button
            type="submit"
            className="
              w-full
              rounded-xl
              bg-blue-600
              py-3
              font-semibold
              text-white
              transition
              hover:bg-blue-700
            "
          >
            Confirm Booking
          </button>

        </form>

      </div>

    </div>
  );
}
