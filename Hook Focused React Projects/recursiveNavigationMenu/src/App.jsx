import RecursiveNavMenu from "./Components/RecursiveNavMenu"
import menus from "./Components/data";

export default function App () {
  
  return (
    <>
    <RecursiveNavMenu menus={menus}/>
    </>
  )
}
