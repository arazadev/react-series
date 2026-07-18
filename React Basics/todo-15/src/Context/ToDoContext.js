// Import Context creation and Context usage functions from React
import { createContext, useContext } from "react";




// createContext creates a global storage area
// where we can keep and share todo data
export const ToDoContext = createContext({


    // Default todos structure
    // This value is used only when Provider is not available

    todos: [

        {

            id: 1,

            todo: "Todo msg",

            completed: false

        }

    ],




    // Default functions
    // These empty functions prevent errors
    // before actual functions are provided

    addTodo: (todo) => {},


    updateTodo: (id, todo) => {},


    deleteTodo: (id) => {},


    toggleComplete: (id) => {}

});






// Custom hook for using Todo Context
//
// Instead of writing:
// useContext(ToDoContext)
//
// We can simply write:
// UseToDo()
//
// This makes code cleaner and easier to understand

export const UseToDo = () => {


    return useContext(ToDoContext);


};






// Export Provider
//
// Provider sends data from App.jsx
// to all child components which need it
//
// Example:
// ToDoForm can access addTodo()
// ToDoItem can access updateTodo(), deleteTodo()

export const ToDoProvider = ToDoContext.Provider;
