import React from 'react'

export default function Tracker() {

    const [windowStats, setWindowStats] = React.useState(
        {
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight,
        }
    )

    React.useEffect(() => {
        function watchWindow() {
            setWindowStats(prevData => (
                {...prevData,
                windowWidth: window.innerWidth,
                windowHeight: window.innerHeight,            
            }))
        }
        
        window.addEventListener("resize", watchWindow)
        
        return function() {
            console.log("Cleaning up...")
            window.removeEventListener("resize", watchWindow)
        }
    }, [])

    return(
        <h1 className='windowStats'>{windowStats.windowWidth}X{windowStats.windowHeight}</h1>
    )

}