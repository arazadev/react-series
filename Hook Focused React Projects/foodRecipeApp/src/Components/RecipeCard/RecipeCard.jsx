import { Link } from "react-router-dom";


export default function RecipeCard({ item }) {


  return (

    // Individual recipe preview card
    <div className="w-80 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">


      {/* Recipe image */}
      <div className="h-52 overflow-hidden">

        <img
          src={item?.image_url}
          alt={item?.title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />

      </div>




      <div className="p-5">


        {/* Recipe publisher */}
        <p className="text-sm text-orange-500 font-medium uppercase">

          {item?.publisher}

        </p>



        {/* Recipe title */}
        <h2 className="text-xl font-bold text-gray-800 mt-2 line-clamp-2">

          {item?.title}

        </h2>




        {/* Navigate to recipe details page */}
        <Link

          to={`/recipe-item/${item?.id}`}

          className="inline-block mt-5 bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-300"

        >

          View Recipe

        </Link>



      </div>


    </div>

  );

}