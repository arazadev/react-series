import { useState } from "react";
import { usState } from "react";

const app1 = () => {
    const [todos, setTodos] = useState([
    {
      title: "Hey",
      desc: "I am a good todo",
    },
    {
      title: "Hey Another todo",
      desc: "I am a good todo too",
    },
    {
      title: "Hey I am grocery todo",
      desc: "I am a good todo but I am grocery todo",
    },
  ])


  return (
    <div>

        {todos.map((item)=>{
            return
            <div>
                key = {item.title}
            </div>
        })}
      
    </div>
  )
}

export default app1
