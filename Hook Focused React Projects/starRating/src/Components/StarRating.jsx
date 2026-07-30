import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function StarRating({ noOfStars = 5 }) {

  // Stores the final rating selected by the user after clicking a star
  // Example: User clicks 4th star → rating becomes 4
  const [rating, setRating] = useState(0);


  // Stores the temporary rating while the user is hovering over stars
  // This allows previewing the rating before clicking
  // Example: Mouse over 3rd star → hover becomes 3
  const [hover, setHover] = useState(0);


  // Handles star click event
  // Saves the selected star value permanently in rating state
  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }


  // Handles mouse entering a star
  // Updates hover state to show a temporary yellow preview
  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
  }


  // Handles mouse leaving a star
  // Restores the selected rating after hover ends
  function handleMouseLeave() {
    setHover(rating);
  }


  return (
    <div className="flex gap-1">

      {
        // Creates an array based on noOfStars value
        // Example: noOfStars = 5 creates [0,1,2,3,4]
        // map() is used to generate star components dynamically
      }

      {[...Array(noOfStars)].map((_, index) => {

        // Convert zero-based array index into star number
        // index 0 becomes star 1, index 1 becomes star 2, etc.
        index += 1;


        return (
          <FaStar

            // React requires a unique key for elements created using map()
            key={index}


            // Changes star color based on current state
            //
            // If user is hovering:
            //     use hover value
            //
            // Otherwise:
            //     use selected rating value
            //
            // Example:
            // hover = 3 → first 3 stars become yellow
            // rating = 4 → first 4 stars stay yellow after clicking
            className={`cursor-pointer transition-colors duration-200 ${
              index <= (hover || rating)
                ? "text-yellow-400"
                : "text-gray-300"
            }`}


            // Saves the clicked star as the user's rating
            onClick={() => handleClick(index)}


            // Shows temporary rating preview when mouse enters a star
            onMouseEnter={() => handleMouseEnter(index)}


            // Restores the previous rating when mouse leaves
            onMouseLeave={() => handleMouseLeave()}


            // Controls star size from react-icons
            size={40}
          />
        );
      })}
    </div>
  );
}