import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el);

/* function App(){
    let msj = "Mensaje random";
    if (Math.random() > 0.5){
        msj = "Se modijico el msj";
    }
    return <h1>El resultado es: {msj}</h1>//JSX
} */

/* function App(){ //SUPER ERROR
    let msj = {nombre:"Pepe",apellido:"Lopez"}

    return <h1>{msj}</h1>//JSX
} */


/* function App(){
    const nombre = "Pepe"
    const apellido = "Rojas"
    return <h1>Bienvenido: {nombre} {apellido}</h1>
} */

/* function App(){
    const mensaje = "Ingrese su nombre"
    return <input type="number" min={5} max={10} style={{color:"red",fontSize:"20px"}}alt={mensaje}/>
} */






root .render(<App/>)