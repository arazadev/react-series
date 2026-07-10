import { useState } from "react";

function App() {
  const [color, setColor] = useState("grey");

  return (
    <div className="w-full h-screen duration-500" style={{backgroundColor:color}}>

      <div className="fixed bottom-12 flex flex-wrap justify-center inset-x-0 px-2">

        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

          <button onClick={()=>setColor("red")} className="text-white outline-none px-4 py-1 rounded-full shadow-5g" style={{backgroundColor:"red"}} >Red</button>

          <button onClick={()=>setColor("green")} className="text-white outline-none px-4 py-1 rounded-full shadow-5g" style={{backgroundColor:"green"}}  >Green</button>

          <button onClick={()=>setColor("blue")} className="text-white outline-none px-4 py-1 rounded-full shadow-5g" style={{backgroundColor:"blue"}}  >Blue</button>

          <button onClick={()=>setColor("olive")} className="text-white outline-none px-4 py-1 rounded-full shadow-5g" style={{backgroundColor:"olive"}}  >Olive</button>
          
          <button onClick={()=>setColor("black")} className="text-white outline-none px-4 py-1 rounded-full shadow-5g" style={{backgroundColor:"black"}}  >Black</button>
        </div>
      </div>
    </div>
  );
}

export default App;
