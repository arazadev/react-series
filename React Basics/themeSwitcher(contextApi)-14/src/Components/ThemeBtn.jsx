import React from 'react'

// Import custom theme hook
// This gives access to theme state and functions
import useTheme from '../Context/theme';


export default function ThemeBtn() {


    // Getting theme information from Context API
    const { themeMode, lightTheme, darkTheme } = useTheme();


    // Runs whenever checkbox changes
    const onChangeBtn = (e) => {

        // Checking checkbox state
        // true  = dark mode
        // false = light mode
        const darkModeStatus = e.currentTarget.checked;


        if (darkModeStatus) {
            darkTheme();
        } 
        else {
            lightTheme();
        }
    }


    return (

        <label className="relative inline-flex items-center cursor-pointer">

            {/* 
                Hidden checkbox.
                Tailwind uses peer class to control
                the toggle design.
            */}
            <input
                type="checkbox"
                className="sr-only peer"
                onChange={onChangeBtn}

                // Checkbox remains checked when dark mode is active
                checked={themeMode === "dark"}

                // React requires controlled inputs to have onChange
                readOnly={false}
            />


            {/* Toggle UI */}
            <div
                className="
                w-11 h-6 
                bg-gray-200 
                rounded-full 
                peer 
                dark:bg-gray-700 
                peer-checked:bg-blue-600
                after:absolute
                after:top-[2px]
                after:left-[2px]
                after:bg-white
                after:border
                after:rounded-full
                after:h-5
                after:w-5
                after:transition-all
                peer-checked:after:translate-x-full
                "
            ></div>


            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-white">
                Toggle Theme
            </span>

        </label>
    )
}
