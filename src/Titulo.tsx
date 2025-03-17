import { useState } from "react";


function Titulo(props) {
    const [texto, setTexto] = useState("Um titulo qualquer... :(")
    return <div style={{ marginLeft: "10px"}}>
            <h1 style={{color : props.cor}}>{texto}</h1>
            <button style={{backgroundColor : props.cor, color: "white"}} onClick={() => setTexto("Um titulo especial! :)")}>Mudar texto</button>
        </div>
}


export default Titulo
