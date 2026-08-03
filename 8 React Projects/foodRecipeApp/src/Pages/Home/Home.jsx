import { useContext } from "react";
import { GlobalContext } from "../../Context/Context.jsx";
import RecipeCard from "../../Components/RecipeCard/RecipeCard.jsx";


export default function Home() {

  // Access global recipe data and loading state
  const { recipes, loading } = useContext(GlobalContext);


  // Display loading message while fetching recipes
  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <h2 className="text-2xl font-semibold text-orange-500">
          Loading recipes...
        </h2>
      </div>
    );
  }


  return (
    <section className="container mx-auto px-5 py-10">

      {/* Page heading */}
      <div className="text-center mb-10">

        <h1 className="text-4xl font-bold text-gray-800">
          Find Your Favorite Recipes
        </h1>

        <p className="text-gray-500 mt-3">
          Search and discover delicious recipes from around the world.
        </p>

      </div>


      {recipes.length > 0 ? (

        // Render recipe cards dynamically from API results
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 place-items-center">

          {recipes.map((item) => (
            <RecipeCard 
              key={item.id} 
              item={item} 
            />
          ))}

        </div>

      ) : (

        // Empty state when no recipes are available
        <div className="text-center mt-20">

          <h2 className="text-2xl font-bold text-gray-700">
            No recipes found
          </h2>

          <p className="text-gray-500 mt-2">
            Try searching for something like 
            <span className="font-semibold"> pizza</span>,
            <span className="font-semibold"> burger</span>, or
            <span className="font-semibold"> pasta</span>.
          </p>

        </div>

      )}

    </section>
  );
}