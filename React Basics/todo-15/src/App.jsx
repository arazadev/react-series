// useEffect is used for side effects like localStorage
import { useState, useEffect } from "react";


// Import Context Provider
// Provider allows child components to access todo data and functions
import { ToDoProvider } from "./Context";


import ToDoForm from "./Components/ToDoForm";
import ToDoItem from "./Components/ToDoItem";



function App() {


  // State that stores all todos
  //
  // Example:
  // [
  //   {
  //     id: 1,
  //     todo: "Learn React",
  //     completed: false
  //   }
  // ]
  const [todos, setToDos] = useState([]);



  // Function to add a new todo
  const addTodo = (todo) => {


    setToDos((prev) => [

      // Add new todo at the start of array
      {
        id: Date.now(), // Creates unique id using current time
        ...todo
      },


      // Keep previous todos
      ...prev

    ]);

  };




  // Function to update an existing todo
  const updateTodo = (id, todo) => {


    setToDos((prev) =>


      // map creates a new array
      prev.map((prevTodo) =>


        // If id matches, replace old todo with updated todo
        prevTodo.id === id

          ? todo

          // Otherwise keep old todo
          : prevTodo

      )

    );

  };




  // Function to delete a todo
  const deleteTodo = (id) => {


    setToDos((prev) =>


      // filter removes the todo with matching id
      prev.filter(

        (todo) => todo.id !== id

      )

    );

  };





  // Function to change todo completed status
  const toggleComplete = (id) => {


    setToDos((prev) =>


      prev.map((prevTodo) =>


        // Find the selected todo
        prevTodo.id === id


          ? {

              // Copy existing todo data
              ...prevTodo,


              // Reverse completed value
              // false becomes true
              // true becomes false
              completed: !prevTodo.completed

            }


          // Keep other todos unchanged
          : prevTodo

      )

    );

  };





  // Runs once when component loads
  //
  // It gets previously saved todos
  // from browser localStorage
  useEffect(() => {


    const todos = JSON.parse(

      localStorage.getItem("todos")

    );



    // If saved todos exist,
    // update state with saved data

    if (todos && todos.length > 0) {

      setToDos(todos);

    }


  }, []);





  // Runs whenever todos state changes
  //
  // Saves updated todos into localStorage

  useEffect(() => {


    localStorage.setItem(

      "todos",

      JSON.stringify(todos)

    );


  }, [todos]);






  return (


    // Provider shares todos and functions
    // with child components

    <ToDoProvider

      value={{

        todos,

        addTodo,

        updateTodo,

        deleteTodo,

        toggleComplete

      }}

    >


      <div className="bg-[#4d2139] min-h-screen py-8">


        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">



          {/* Application heading */}

          <h1 className="text-2xl font-bold text-center mb-8 mt-2">

            Manage Todos

          </h1>





          {/* Todo input form */}

          <div className="mb-4">

            <ToDoForm />

          </div>





          {/* Display all todos */}

          <div className="flex flex-wrap gap-y-3">


            {todos.map((todo) => (


              <div

                key={todo.id}

                className="w-full"

              >


                {/* Send single todo as prop */}

                <ToDoItem todo={todo} />


              </div>


            ))}


          </div>



        </div>



      </div>



    </ToDoProvider>

  );

}



export default App;
