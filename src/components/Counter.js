import React from "react"
import TrackerStats from "./TrackerStats"

export default function Counter(props) {
        

    const [showStats, setShowStats] = React.useState(true)
    let evenRound = (props.number%2===0)
    let color = evenRound? 'Black': 'White'

    function toggleStats(){
        setShowStats(prevData => !prevData)
    }

    return(
        <div className="counter" onClick={toggleStats}>
           
            {showStats&&<TrackerStats/>}  Round: {props.number} Player: {color}

        </div>
    )
}