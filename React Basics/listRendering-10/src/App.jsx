import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Hey",
      desc: "I am a good todo",
    },
    {
      id: 2,
      title: "Hey Another todo",
      desc: "I am a good todo too",
    },
    {
      id: 3,
      title: "Hey I am grocery todo",
      desc: "I am a good todo but I am grocery todo",
    },
  ]);

  return (
    <>
      <h1>React List Rendering</h1>

      {/* Rendering list using map() */}
      {todos.map((item) => {
        return (
          <div
            key={item.id}
            className="m-4 border border-1 border-purple-400"
          >
            <div>
              <strong>Title:</strong> {item.title}
            </div>

            <div>
              <strong>Description:</strong> {item.desc}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default App;