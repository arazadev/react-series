import React from 'react'


export default function Card() {


    return (

        /*
            Card component demonstrates
            Tailwind dark mode classes.

            When html tag has "dark" class,
            classes starting with dark:
            will automatically activate.
        */

        <div 
        className="
        w-full 
        bg-white 
        border 
        border-gray-200 
        rounded-lg 
        shadow
        dark:bg-gray-800
        dark:border-gray-700
        ">


            {/* Product Image */}
            <img
                className="p-8 rounded-t-lg"
                src="https://i.pcmag.com/imagery/reviews/02PX9YDzfu4pBDkKQBx9jdk-19.fit_scale.size_1028x578.v1709144797.jpg"
                alt="Laptop"
            />



            <div className="px-5 pb-5">


                {/* Product Name */}
                <h5 
                className="
                text-xl
                font-semibold
                text-gray-900
                dark:text-white
                ">
                    Lenovo ThinkPad X1 Carbon Gen 12 (14, Intel)
                </h5>



                {/* Rating Section */}
                <div className="flex items-center mt-3 mb-5">


                    {/* Stars */}
                    {
                        [1,2,3,4].map((star)=>(
                            <svg
                            key={star}
                            className="w-4 h-4 text-yellow-300 mr-1"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                            >
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                        ))
                    }


                    {/* Rating Number */}
                    <span
                    className="
                    bg-blue-100
                    text-blue-800
                    text-xs
                    font-semibold
                    px-2.5
                    py-0.5
                    rounded
                    ml-3
                    ">
                        4.0
                    </span>

                </div>




                {/* Price and Button */}
                <div className="flex items-center justify-between">


                    <span
                    className="
                    text-3xl
                    font-bold
                    text-gray-900
                    dark:text-white
                    ">
                        $599
                    </span>



                    <button
                    className="
                    text-white
                    bg-blue-700
                    hover:bg-blue-800
                    rounded-lg
                    px-5
                    py-2.5
                    ">
                        Add to cart
                    </button>


                </div>


            </div>


        </div>
    )
}
