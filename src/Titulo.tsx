
<<<<<<< HEAD

function Titulo(props) {
    const [texto, setTexto] = useState("Um titulo qualquer... :(")
    return <div style={{ marginLeft: "10px"}}>
            <h1 style={{color : props.cor}}>{texto}</h1>
            <button style={{backgroundColor : props.cor, color: "white"}} onClick={() => setTexto("Um titulo especial! :)")}>Mudar texto</button>
=======
function Titulo() {
    return <div>
            <h1>Titulo muito incrivel :D</h1>
>>>>>>> 84197e927cdbb58ed4e1dd822639f7cba3cf847b
        </div>
}


export default Titulo
