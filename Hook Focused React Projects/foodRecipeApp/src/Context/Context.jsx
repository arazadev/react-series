import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";


// Create global context to share application data
export const GlobalContext = createContext(null);



export default function GlobalState({ children }) {


  // Used for programmatic navigation after search
  const navigate = useNavigate();



  // Global application states

  // Stores search input value
  const [searchTerm, setSearchTerm] = useState("");

  // Stores recipes returned from API
  const [recipes, setRecipes] = useState([]);

  // Stores currently opened recipe details
  const [recipeDetails, setRecipeDetails] = useState(null);

  // Stores user favorite recipes
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  // Controls loading indicator
  const [loading, setLoading] = useState(false);




  // Fetch recipes based on search keyword
  async function searchRecipes(e) {

    e.preventDefault();


    // Prevent empty searches
    if (!searchTerm.trim()) return;


    try {

      setLoading(true);


      // API request for searched recipes
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchTerm}`
      );


      const data = await response.json();



      // Store recipes received from API
      if (data?.data?.recipes) {

        setRecipes(data.data.recipes);

      }



      // Clear search input after successful search
      setSearchTerm("");


      // Return user to home page
      navigate("/");



    } catch (error) {

      console.log(error);


    } finally {

      // Stop loading indicator
      setLoading(false);

    }

  }





  // Add or remove recipes from favorites
  function toggleFavorite(recipe) {


    // Create copy to avoid directly modifying state
    const copiedList = [...favoriteRecipes];



    // Check if recipe already exists
    const index = copiedList.findIndex(
      (item) => item.id === recipe.id
    );



    if (index === -1) {

      // Add recipe if it is not already favorite
      copiedList.push(recipe);

    } else {

      // Remove recipe if it already exists
      copiedList.splice(index, 1);

    }



    // Update favorite recipes state
    setFavoriteRecipes(copiedList);

  }





  return (

    // Provide global states and functions to child components
    <GlobalContext.Provider

      value={{

        searchTerm,
        setSearchTerm,

        recipes,

        recipeDetails,
        setRecipeDetails,

        favoriteRecipes,

        toggleFavorite,

        searchRecipes,

        loading,

      }}

    >

      {children}

    </GlobalContext.Provider>

  );

}