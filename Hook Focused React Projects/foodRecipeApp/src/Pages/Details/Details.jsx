import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../Context/Context.jsx";


export default function Details() {

  // Get recipe id from URL parameter
  const { id } = useParams();


  // Access recipe details and favorite functionality from global state
  const {
    recipeDetails,
    setRecipeDetails,
    favoriteRecipes,
    toggleFavorite,
  } = useContext(GlobalContext);



  // Fetch selected recipe details whenever recipe id changes
  useEffect(() => {

    async function getRecipe() {

      try {

        // Request recipe information from Forkify API
        const response = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
        );


        const data = await response.json();


        // Save received recipe data into global state
        if (data?.data) {
          setRecipeDetails(data.data);
        }


      } catch (error) {

        // Handle API errors
        console.log(error);

      }

    }


    getRecipe();

  }, [id]);



  // Check whether current recipe already exists in favorites
  const isFavorite = favoriteRecipes.some(
    (item) => item.id === recipeDetails?.recipe?.id
  );



  // Show loading state before recipe data arrives
  if (!recipeDetails) {

    return (
      <div className="flex justify-center items-center h-96">

        <h2 className="text-2xl font-semibold text-orange-500">
          Loading recipe...
        </h2>

      </div>
    );

  }



  // Extract recipe object from API response
  const { recipe } = recipeDetails;



  return (

    <section className="container mx-auto px-5 py-10">

      <div className="grid lg:grid-cols-2 gap-10 items-start">


        {/* Recipe image section */}
        <div>

          <img
            src={recipe.image_url}
            alt={recipe.title}
            className="w-full h-[450px] object-cover rounded-2xl shadow-lg"
          />

        </div>



        {/* Recipe information section */}
        <div>


          {/* Recipe author/publisher */}
          <p className="text-orange-500 uppercase font-semibold">

            {recipe.publisher}

          </p>



          {/* Recipe title */}
          <h1 className="text-4xl font-bold text-gray-800 mt-2">

            {recipe.title}

          </h1>



          {/* Add or remove recipe from favorites */}
          <button
            onClick={() => toggleFavorite(recipe)}
            className={`mt-6 px-6 py-3 rounded-lg text-white font-medium transition ${
              isFavorite
                ? "bg-red-500 hover:bg-red-600"
                : "bg-orange-500 hover:bg-orange-600"
            }`}
          >

            {isFavorite 
              ? "Remove from Favorites" 
              : "Add to Favorites"
            }

          </button>



          {/* Ingredients list */}
          <div className="mt-8">

            <h2 className="text-2xl font-bold mb-4">
              Ingredients
            </h2>


            <ul className="space-y-3">


              {recipe.ingredients.map((ingredient, index) => (

                <li
                  key={index}
                  className="bg-gray-100 rounded-lg p-3"
                >

                  <span className="font-semibold">

                    {ingredient.quantity || "-"}{" "}
                    {ingredient.unit}

                  </span>{" "}

                  {ingredient.description}

                </li>

              ))}


            </ul>

          </div>


        </div>


      </div>


    </section>

  );

}