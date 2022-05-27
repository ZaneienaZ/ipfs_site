import React from "react"

//goArrayFunctions log elements to arrays
//step 3. array of values is created to represent the gameboard
export default function goArrayFunction(e, goArray){
        console.log('goarrayfunction ran');
        let emptyArray=[];
        let okFriendsArray=[];
        let liberties= [];
        let tryArray = [];
    
        console.log(goArray);
        for (let i = 0; i < 81; i++) {
            //for loop that spans/creates game playfield
            tryArray[i]=document.getElementById('Playfield').children[i].children[0].className;
            }
        
    
        for (let i = 0; i < 81; i++) {
        //for loop that spans/creates game playfield
        goArray[i]=document.getElementById('Playfield').children[i].children[0].className;
    
        }
        console.log(`${goArray} is goArray`)
        return (goArray);
        
}