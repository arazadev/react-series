// Import useState hook from React
// It is used to manage edit mode and input value
import { useState } from "react";


// Import custom hook to access Context functions
import { UseToDo } from "../Context";



const ToDoItem = ({ todo }) => {


    // Controls whether the todo text can be edited or not
    //
    // false = only view mode
    // true  = edit mode

    const [isTodoEditable, setIsTodoEditable] = useState(false);





    // Stores the current todo text
    //
    // Initially it gets value from todo prop

    const [todoMsg, setTodoMsg] = useState(todo.todo);






    // Get todo functions from Context

    const {

        updateTodo,

        deleteTodo,

        toggleComplete

    } = UseToDo();







    // Function to save edited todo

    const editTodo = () => {


        // Send updated todo back to App.jsx

        updateTodo(

            todo.id,

            {

                ...todo,

                todo: todoMsg

            }

        );



        // Exit edit mode after saving

        setIsTodoEditable(false);

    };







    // Function to mark todo completed/uncompleted

    const toggleCompleted = () => {


        // Send todo id to Context

        toggleComplete(todo.id);

    };







    return (


        <div


            // Change background color based on completed status

            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black ${
              
              todo.completed

              ? "bg-[#c6e9a7]"

              : "bg-[#ccbed7]"

            }`}


        >




            {/* Checkbox for completing todo */}

            <input


                type="checkbox"


                className="cursor-pointer"


                checked={todo.completed}



                onChange={toggleCompleted}


            />







            {/* Todo text input */}

            <input


                type="text"


                className={`border outline-none w-full bg-transparent rounded-lg ${
                  
                  isTodoEditable

                  ? "border-black/10 px-2"

                  : "border-transparent"

                } ${
                  
                  todo.completed

                  ? "line-through"

                  : ""

                }`}



                value={todoMsg}



                // Update local text state

                onChange={(e) =>

                    setTodoMsg(e.target.value)

                }



                // Input is disabled when not editing

                readOnly={!isTodoEditable}


            />








            {/* Edit and Save button */}

            <button


                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"



                // Completed todos cannot be edited

                disabled={todo.completed}



                onClick={() => {



                    // Stop if todo is completed

                    if (todo.completed) return;





                    // If already editing,
                    // save changes

                    if (isTodoEditable) {


                        editTodo();


                    }

                    // Otherwise enable editing mode

                    else {


                        setIsTodoEditable(

                            (prev) => !prev

                        );


                    }


                }}


            >


                {

                    // Show save icon in edit mode
                    // Otherwise show edit icon

                    isTodoEditable

                    ? "📁"

                    : "✏️"

                }


            </button>








            {/* Delete button */}

            <button


                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"



                // Delete current todo using id

                onClick={() =>

                    deleteTodo(todo.id)

                }


            >


                ❌


            </button>




        </div>


    );

};



export default ToDoItem;
