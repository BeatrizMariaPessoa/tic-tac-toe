import { useState } from "react";

interface TituloProps {
    cor: string;
}
    
function Titulo({ cor }: TituloProps) {
    const [texto, setTexto] = useState("Um titulo qualquer... :(")
    return <div>
            <h1 style={{color : cor}}>{texto}</h1>
            <button style={{backgroundColor : cor, color: "white"}} onClick={() => setTexto("Um titulo especial! :)")}>Mudar texto</button>
        </div>
}

export default Titulo