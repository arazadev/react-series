import React, { useEffect, useState } from 'react'

export default function RandomColorGenerator() {

    // Stores whether we want HEX or RGB colors
    const [typeOfColor, setTypeOfColor] = useState('hex')

    // Stores the generated color
    const [color, setColor] = useState("#000000")

    // Returns a random number from 0 to (length - 1)
    function randomColor(length) {
        return Math.floor(Math.random() * length)
    }

    // Generates a random HEX color
    function handleRandomHexColorGenerator() {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColor = "#";

        // Pick 6 random characters from the hex array
        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColor(hex.length)]
        }

        // Update the color state
        setColor(hexColor)
    }

    // Generates a random RGB color
    function handleRandomRgbColorGenerator() {
        const r = randomColor(256)
        const g = randomColor(256)
        const b = randomColor(256)

        // Update the color state
        setColor(`rgb(${r},${g},${b})`)
    }

    // Generate a new color whenever the color type changes
    useEffect(() => {
        if (typeOfColor === 'rgb') handleRandomRgbColorGenerator()
        else handleRandomHexColorGenerator()
    }, [typeOfColor])

    return (
        <div
            className="w-screen h-screen flex flex-col items-center justify-center gap-8 text-white"
            // Background changes based on the generated color
            
            style={{ backgroundColor: color }}
        >
            <div className="flex gap-4">

                {/* Switch to HEX mode */}
                <button
                    onClick={() => setTypeOfColor('hex')}
                    className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition"
                >
                    Create HEX Color
                </button>

                {/* Switch to RGB mode */}
                <button
                    onClick={() => setTypeOfColor('rgb')}
                    className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition"
                >
                    Create RGB Color
                </button>

                {/* Generate a new color based on the selected type */}
                <button
                    onClick={
                        typeOfColor === 'hex'
                            ? handleRandomHexColorGenerator
                            : handleRandomRgbColorGenerator
                    }
                    className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
                >
                    Create Random Color
                </button>
            </div>

            <div className="text-center">

                {/* Display the current color type */}
                <h3 className="text-2xl font-medium">
                    {typeOfColor === 'rgb' ? 'RGB Color' : 'HEX Color'}
                </h3>

                {/* Display the generated color value */}
                <h1 className="text-5xl font-bold mt-2">
                    {color}
                </h1>

            </div>
        </div>
    )
}