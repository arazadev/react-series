import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../Context/Context.jsx";



export default function Navbar() {


  // Access search state and search function
  const { 
    searchTerm, 
    setSearchTerm, 
    searchRecipes 
  } = useContext(GlobalContext);




  return (

    <header className="bg-white shadow-md">


      <nav className="container mx-auto px-5 py-5 flex flex-col md:flex-row items-center justify-between gap-5">



        {/* Application logo */}
        <NavLink
          to="/"
          className="text-3xl font-bold text-orange-500"
        >

          RecipeHub

        </NavLink>





        {/* Recipe search form */}
        <form 
          onSubmit={searchRecipes} 
          className="w-full md:w-auto"
        >

          <input

            type="text"

            placeholder="Search recipes..."

            value={searchTerm}

            // Update search text while typing
            onChange={(e) => setSearchTerm(e.target.value)}

            className="w-full md:w-96 px-5 py-3 rounded-lg border border-gray-300 outline-none focus:border-orange-500"

          />

        </form>





        {/* Navigation links */}
        <div className="flex items-center gap-6 font-medium">



          <NavLink

            to="/"

            className={({ isActive }) =>
              isActive
                ? "text-orange-500"
                : "text-gray-700 hover:text-orange-500 duration-300"
            }

          >

            Home

          </NavLink>




          <NavLink

            to="/favorites"

            className={({ isActive }) =>
              isActive
                ? "text-orange-500"
                : "text-gray-700 hover:text-orange-500 duration-300"
            }

          >

            Favorites

          </NavLink>



        </div>



      </nav>


    </header>

  );

}