import { useState } from 'react';

function Square() {
    const [value, setValue] = useState(null);

    function handleClick() {
        setValue('X');
      }
    return <button className="square" onClick={handleClick} style={
        {
            borderRadius : "0"
            , width : "50px"
            , height : "50px"
            , border: "1px solid grey"}}>
                {value}</button>;
}
export default function Board() {
    return (
        <>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
        </>
    )
  }
  