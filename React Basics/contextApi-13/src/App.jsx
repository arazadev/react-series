import UserContextProvider from "./ContextAPI/UserContextProvider";
import Login from "./Components/Login";
import Profile from "./Components/Profile";

function App() {
  return (
    // Wrap the entire app with UserContextProvider
    // so every child component can access the shared context
    <UserContextProvider>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-8">
          Context API Demo
        </h1>
        {/* Login updates the shared user data */}
        <Login />
        
        {/* Profile reads the shared user data */}
        <Profile />
      </div>
    </UserContextProvider>
  );
}

export default App;
