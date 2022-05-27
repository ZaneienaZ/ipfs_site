import React from "react"

export default function GoBoard(props) {

    return(
        <div className="Go-board" id="Go-board">
        <div className="background-grid">
         <div className= "Playfield" id= "Playfield">
         {props.buttons.map((button,index) =>
             <div className = 'grid-item1' key={index}>{button}</div>
         )}
         </div>
         </div>
         </div>
    )
}