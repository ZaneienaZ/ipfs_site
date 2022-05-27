import React from 'react'
import styled from 'styled-components'

export default function HelpDisplay(props){
    return(
        <div className="help-display">{JSON.stringify(props.goArray)+'is what Im displaying'}</div>
    )
}

//Something else entirely
/*setGoArray(prevData => {
    return prevData.map((row, index) => {
        let rowIndex = index
        return row.map((piece, index) => {
        let columnIndex = index
        //console.log(piece)
        let search = ""+rowIndex+columnIndex
        //console.log(search)
        return search === e.target.id ? newColor : goArray[rowIndex][columnIndex]  
    })
})
})*/