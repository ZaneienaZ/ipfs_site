import React from 'react'
import spaceAbove from '../logic'
import spaceRight from '../logic'
import spaceLeft from '../logic'
import spaceUnder from '../logic'


export default function okToGo(color, goArray, e){
    console.log('this is oktogo funciton');
    console.log(goArray);
    let num = e.target.id;
    console.log(num);
    //Step 8. game checks right, down, left, right 
    //if it's okay to go there
    spaceRight(num, color, goArray, e);
    spaceUnder(num, color, goArray, e);
    spaceLeft(num, color, goArray, e);
    spaceAbove(num, color, goArray, e);
};