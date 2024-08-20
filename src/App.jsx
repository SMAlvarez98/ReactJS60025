import { useState } from "react";
import { ItemsListContainer } from "./components/ItemsListContainer/ItemsListContainer";
import { NavBar } from "./components/ItemsListContainer/NavBar/NavBar";
/* function App (){
    return (
        <div>
            <div>
                <h1>Titulo 1</h1>
                <p>Parrafo 1</p>
            </div>
            <div>
                <h2>Titulo 2</h2>
                <p>Parrafo 2</p>
            </div>
        </div>
    )
} */


/* function App(){
    const [contador, setContador] = useState(0)
    return (
        <>
            <h2>{contador}</h2>
            <button onClick={()=>{
                setContador(contador + 1)
            }}>1+</button>
            <button onClick={()=>{
                setContador(contador - 1)
            }}>1-</button>
        </>
    )
} */

function App (){
    return (
        <>
            {/* <ItemsListContainer mensaje = "Hola soy un mensaje"/> */}
            <NavBar/>
        </>
    )
}

export default App;