import { useState, useEffect } from "react";


// Import Context Provider
import { ThemeProvider } from "./Context/theme";


// Components
import ThemeBtn from "./Components/ThemeBtn";
import Card from "./Components/Card";



function App() {


    // Stores current theme
    const [themeMode, setThemeMode] = useState("light");



    // Function to activate light theme
    const lightTheme = () => {
        setThemeMode("light");
    }



    // Function to activate dark theme
    const darkTheme = () => {
        setThemeMode("dark");
    }



    // Whenever theme changes,
    // update html class.
    //
    // Tailwind dark mode checks:
    // <html class="dark">
    //
    useEffect(()=>{


        const html = document.querySelector("html");


        html.classList.remove(
            "light",
            "dark"
        );


        html.classList.add(themeMode);


    },[themeMode]);




    return (


        /*
            ThemeProvider sends:
            themeMode
            darkTheme()
            lightTheme()

            to all child components
        */
        <ThemeProvider 
        value={{
            themeMode,
            darkTheme,
            lightTheme
        }}>


            <div className="
            flex
            flex-wrap
            min-h-screen
            items-center
            bg-gray-100
            dark:bg-gray-900
            ">


                <div className="w-full">


                    <div className="
                    max-w-sm
                    mx-auto
                    flex
                    justify-end
                    mb-4
                    ">

                        <ThemeBtn/>

                    </div>




                    <div className="
                    max-w-sm
                    mx-auto
                    ">

                        <Card/>

                    </div>


                </div>


            </div>


        </ThemeProvider>

    )
}


export default App;
