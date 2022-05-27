import React from 'react';
import goFunction from '../logic.js';
import Counter from '../components/Counter'
import GoBoard from '../components/GoBoard'
import HelpDisplay from '../components/HelpDisplay'

let resultArray

function Go() {
    const buttons = []
    let array = []
    const [roundCount, setRoundCount] = React.useState(0);
    

    for (let i=0;i<9;i++){
        array.push([])
        for (let j=0;j<9;j++){
            array[i].push('empty')          //1

        }
    }

    const [goArray, setGoArray] = React.useState(array)

    for (let i=0;i<9;i++){
        for (let j=0;j<9;j++){
        buttons.push(
        <button id={""+i+j}                 //2
        className={goArray[i][j]} 
        onClick={goFunctionHandler} 
        onMouseUp={newRound}>i:{i}j:{j}</button>)
        }
    
    }

    

    function newRound() {
        setRoundCount(prevCount =>prevCount+1)
    }

    function goFunctionHandler(e) {
        
        resultArray = goFunction(e, roundCount, goArray)
        setGoArray(prevData => {
            return prevData.map((row, index) => {
                let rowIndex = index
                return row.map((piece, index) => {
                let columnIndex = index
                let arrayValue = resultArray? resultArray[rowIndex][columnIndex] : piece
                return  arrayValue  
            })
        })
        })
        //setGoArray(resultArray);
        

    }



      

    return(
        <div>
        <Counter number={roundCount} />
        <HelpDisplay goArray={goArray}/>
        <GoBoard goArray={goArray} buttons={buttons}/>
        </div>
  )
}



export default Go;