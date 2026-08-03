import { useContext } from "react";
import { GlobalContext } from "../../Context/Context.jsx";
import RecipeCard from "../../Components/RecipeCard/RecipeCard.jsx";


export default function Favorites() {

  // Get saved recipes from global context
  const { favoriteRecipes } = useContext(GlobalContext);


  return (
    <section className="container mx-auto px-5 py-10">


      {/* Favorites page header */}
      <div className="text-center mb-10">

        <h1 className="text-4xl font-bold text-gray-800">
          Your Favorite Recipes
        </h1>

        <p className="text-gray-500 mt-3">
          Your saved recipes are collected here.
        </p>

      </div>



      {favoriteRecipes.length > 0 ? (

        // Display saved recipe cards
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 place-items-center">

          {favoriteRecipes.map((item) => (

            <RecipeCard
              key={item.id}
              item={item}
            />

          ))}

        </div>

      ) : (

        // Message shown when user has no favorites
        <div className="flex flex-col items-center justify-center mt-20">

          <div className="text-6xl">
            🍽️
          </div>

          <h2 className="text-2xl font-bold text-gray-700 mt-5">
            No favorite recipes yet
          </h2>

          <p className="text-gray-500 mt-2 text-center">
            Start exploring recipes and add your favorites here.
          </p>

        </div>

      )}

    </section>
  );
}