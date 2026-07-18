// useState is used to store and update input value
import { useState } from "react";


// Import custom hook to access Context data
import { UseToDo } from "../Context";



function ToDoForm() {


    // State to store current input text
    //
    // Example:
    // User types "Learn React"
    // todo will store "Learn React"

    const [todo, setTodo] = useState("");




    // Get addTodo function from Context
    // This function is created in App.jsx

    const { addTodo } = UseToDo();





    // This function runs when form is submitted

    const add = (e) => {


        // Prevent page reload after form submit

        e.preventDefault();




        // If input is empty, do nothing
        if (!todo) return;




        // Send new todo data to App.jsx
        //
        // App.jsx will add id automatically

        addTodo({

            todo: todo,

            completed: false

        });





        // Clear input box after adding todo

        setTodo("");

    };





    return (


        <form

            onSubmit={add}

            className="flex"

        >



            {/* Input field for writing todo */}

            <input


                type="text"


                placeholder="Write Todo..."


                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"



                // Controlled input
                // Value always comes from state

                value={todo}




                // Update state whenever user types

                onChange={(e) =>

                    setTodo(e.target.value)

                }


            />





            {/* Submit button */}

            <button


                type="submit"


                className="rounded-r-lg px-3 py-1 bg-pink-600 text-white shrink-0"


            >

                Add


            </button>



        </form>

    );

}



export default ToDoForm;
