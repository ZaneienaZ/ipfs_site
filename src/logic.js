//Main go function. Accepts click input.
//decides to turn black or white
//import React from 'react';
//import setRoundCount from './pages/Go'
import { unstable_concurrentAct } from 'react-dom/cjs/react-dom-test-utils.production.min';
//import okToGo from './logics/okToGo'
import React from 'react'

let libertiesMain=[];
let goPosition;
let color;
let attackcolor;
let taken = false;
let valueFound;
let checkIfBlocked;
let blocked;
let okFriendsArray=[];
let enemy;
let noAttackBack;
let piecesArray=[];
let checkLoop = 0;
let emptyArray=[];
let tryArray = [];
let arrayArray =[];


function goFunction(e, roundCount, goArray){
    arrayArray =[];
    console.log(roundCount+' is roundCount')
    console.log(goArray)
    checkLoop = 0;
    console.log(e);
    libertiesMain=[];
    piecesArray=[];
    let checkIfBlocked =false;
    let blocked=false;
    //let liberties= [];

    let evenRound = (roundCount%2===0);
    //if (e.altKey){altKeyTree(e, goArray);}
    if (evenRound){altKeyTree(e, goArray);}
    else{mainTree(e, goArray)};

    if(arrayArray.length > 0){
    console.log(arrayArray+': arrayArray')
    return arrayArray
    }
};

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//step 1. option black
function mainTree(e, goArray){
    console.log('goFunction ran main');
    color='black';
    console.log(e.target)
    const statement = e.target.className

    positionFor(e, goPosition);
    console.log(e.target.id);
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//toggles between empty-->white--->black
    if (statement==='black'){
        blackToWhite(e, goArray);
    } else if(statement==='empty'){
        emptyToBlack(e, goArray);
    } else if(statement==='white') {
        whiteToEmpty(e, goArray);
    } else { console.log('error')     
    };


console.log('end of go function black')

}
//end of black tree-
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//Step 1. option White
function altKeyTree(e, goArray){
    color= 'white'
    console.log('goFunction ran alt');
    positionFor(e, goPosition);
    //step 6
    emptyToWhite(e, goArray);
}
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//Step13 called from emptyToblack function
function checkBlocked(goArray){

//allert('check blocked')
//THIS SECTION IS ONLY TO CHECK HOW MANY ROUNDS PASSED VVVV
let blackstone=0;
let whitestone=0;
let topblock=0;
let emptystone=0;
for(let i=0; i<goArray.length; i++){
    if(goArray[i]==='black'){
    blackstone++
    }else if(goArray[i]==='white'){
    whitestone++
    }else if(goArray[i]==='empty'){
    emptystone++

    }
};


//TESTing for checked
//allert(blockedArray+':blockedArray')
console.log(blackstone);
console.log(whitestone);
console.log(emptystone);
console.log(okFriendsArray+'line 72');
//TESTing for checked
//THIS SECTION IS ONLY TO CHECK HOW MANY ROUNDS PASSED^^^


//step 13a. checks if at least 2 black and white
//stones have been place. NOTE change to turn based loop
if(blackstone>2&&whitestone>2){
    console.log("let's go! fight:" + goPosition)


//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//variable set
valueFound=false
//step 13.a.2 empty main function called
emptyMain(goPosition, color, valueFound);

//outside of 13.a.3 to get value
console.log(checkIfBlocked+':checkIfBlocked')
isBlocked(goArray);
}
};

//End of checkedBlocked function....

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

/*Give position in array of stone placed.
'*/ //Step 5. go position
    function positionFor(e, goPosition){
        goPosition = e.target.id;
        console.log('goPosition'+e.target.id+'through id')
        console.log(goPosition + ' is go position')
    return goPosition; 
};
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


/*Section of code changes the colors of stones
on the board*/
    function blackToWhite(e, goArray){
    let lightStone = e.target;
        console.log("black to white function ran");
        lightStone.classList.add('white');
        lightStone.classList.remove('black');

        if ( libertiesMain.length === 0){
           blockedSpace();
        }else if (libertiesMain.length===1){
            blockedSpace();
        } else {
        //lightStone.id='light'
    }};
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

    //toggle white to empty style
    function whiteToEmpty(e, goArray){
        let noStone = e.target;
        noStone.classList.add('empty');
        noStone.classList.remove('white');
        console.log('stone taken away')
        //noStone.id=noStone.id;
    };
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    //toggles empty to black
    //step 6 black tree
    function emptyToBlack(e, goArray){
        let darkStone;
        darkStone = e.target;
        darkStone.classList.add('black');
        darkStone.classList.remove('empty');
        console.log('black stone placed')
        console.log(goArray)

    //triggers step 7 black
        

        arrayArray =  goArray.map((row, index) => {
            let rowIndex = index
            return row.map((piece, index) => {
            let columnIndex = index
            let search = ""+rowIndex+columnIndex
            return search === e.target.id ? 'black' : piece  
        })
    })
    okToGo('black', goArray, e);
        console.log('oktogo function ran e2b');

    //other side of oktogo tree step 13 black tree

//------------------------------------------------------------------------------------------------------------------------
    //checks if the space is blocked
       // checkBlocked(); <<<<----this is still in play

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
        console.log(parseInt(libertiesMain))
        console.log(libertiesMain)
        let liberties1= new Set(libertiesMain);
        let libertiesFin = Array.from(liberties1); 
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<        
        
        //console.log(liberties1); 
        console.log(parseInt(libertiesFin));       
        console.log(libertiesFin.length +' player liberties')
        //console.log(libertiesFin); 
        console.log(attackcolor+':is attack color')
        console.log(color+':is player color')
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
        //allert(blocked+':is blocked value')
        if (libertiesFin.length === 0){
            //allert('final liberties 0:' + libertiesFin.length)
            blockedSpace(e, goArray, libertiesFin);
        } else if (libertiesFin.length === 1 ){
            //allert('final liberties 1:' +libertiesFin.length)            
            blockedSpace(e, goArray, libertiesFin);
        } else if(blocked){
            darkStone.id=darkStone.id
        }
         else {
        //darkStone.id='dark'
        darkStone.id=darkStone.id;
        }
    };
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    //Step 6 for white tree.
    function emptyToWhite(e, goArray){
        //section below turns stone white
        //lightStone = document.getElementById("try");
        let lightStone = e.target
        lightStone.classList.add('white');
        lightStone.classList.remove('empty');
        //section above turns stone white
        console.log(goArray)
        console.log("empty to white function ran");
        console.log('white stone placed')


        //triggers Step 7 for white tree

        arrayArray =  goArray.map((row, index) => {
            let rowIndex = index
            return row.map((piece, index) => {
            let columnIndex = index
            console.log(piece)
            let search = ""+rowIndex+columnIndex
            //console.log(search)
            return search === e.target.id ? 'white' : piece  
        })
    })
    
    okToGo('white', goArray, e);

    console.log('oktogo function ran e2w');
        //other side of okToGo ober function w/lots of step 12 branches step 13    
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


        //step 13 tracking liberties
        //dealing with array trickery
        let liberties1= new Set(libertiesMain);
        let libertiesFin =Array.from(liberties1);
        console.log(libertiesFin);    
        //console.log(liberties1);



        console.log(libertiesMain);       
        console.log(libertiesFin.length +' player liberties')
        console.log(libertiesFin)
        console.log(attackcolor+':is attack color')
        console.log(color+':is player color')
        console.log(okFriendsArray+':isfriend array')
    


        //step 14 if array is less than or equal to one run blockt callback
        if (libertiesFin.length === 0){
            //allert('libertiesfin 0 white function')
            blockedSpace(e, goArray, libertiesFin);
        } else if (libertiesFin.length === 1 ){ 
            //allert('libertiesfin 1 white function')           
            blockedSpace(e, goArray, libertiesFin);
        } else {
        //lightStone.id='light'
        } 
    };        
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


// Blocks space unless player can capture stones
 //call back from step 14, step 15
    function blockedSpace(e, goArray, libertiesFin){
        
        //stone = document.getElementById('try');
        let stone = e.target
        let num0 = stone.id[0];
        let num1 = stone.id[1];
        console.log(stone);
        console.log(libertiesFin.length);
        //checks if takepeesis function ran, if yes is ok.
        //step 16a


        if(taken){
                console.log('taken:'+ taken)
        //taken=false might mess things up
                console.log(taken)
        //checks the color step 16a.2
                if(color==='white'){
                    stone.className='white'}
                else{
                    stone.id=stone.id
                    //allert('do nothing')
            };
        //step 16b if not take than space is noGo
        //all elements changed are reverted to empty    
        }else {
        stone.id= stone.id;
        stone.className= 'empty'

        arrayArray =  goArray.map((row, index) => {
            let rowIndex = index
            return row.map((piece, index) => {
            let columnIndex = index
            let search = ""+rowIndex+columnIndex
            //allert(e.target.id)
            return search === ""+[num0]+[num1] ? 'empty' : piece  
        })
    }) 
        
        console.log("Can't place stone here, there are no liberties")
        return arrayArray
        }
    };

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
      
/* 2. check if other color is surrounding a space
*/ //Step 7. okToGo function, both black and white tie in here
    function okToGo(color, goArray, e){
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
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

/* checkRight pieces around going to the direction*/
//series of checks that come off 12a.
//12a2.
//from 12b.7.2 as well checking from Enemy side 12b.7.3
//from 13.a.4 checking if space is blocked side


    function checkRight(num, color, goArray, e){
        spaceRight(num, color, goArray, e);
        spaceUnder(num, color, goArray, e);
        spaceAbove(num, color, goArray, e);
    };

    function checkLeft(num, color, goArray, e){
        spaceUnder(num, color, goArray, e);
        spaceLeft(num, color, goArray, e);
        spaceAbove(num, color, goArray, e);
    };

    function checkAbove(num,color, goArray, e){
        spaceRight(num, color, goArray, e);
        spaceLeft(num, color, goArray, e);
        spaceAbove(num, color, goArray, e);
    };

    function checkUnder(num,color, goArray, e){
        spaceRight(num, color, goArray, e);
        spaceUnder(num, color, goArray, e);
        spaceLeft(num, color, goArray, e);
    };

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//Step 12a ok FriendsMain checks liberties of same colored
//neighbors
    function okFriendsMain(directionName, numberToThe, color, goArray){
            ++checkLoop
        if (checkLoop < 50) {

        const okToGo = {
            'Right': okToGoRight,
            'Left': okToGoLeft,
            'Under': okToGoUnder,
            'Above': okToGoAbove
        };
        okToGo[directionName](numberToThe, color, goArray);

        }
    }
           
    function okToGoLeft(num, color, goArray){
        console.log('ok2gLeft function start');
        checkLeft(num,color,goArray)
        console.log('ok2gLeft function end');
    };

    function okToGoRight(num, color, goArray){
        console.log('ok2gRight function ran')
        checkRight(num,color,goArray);
        console.log('ok2goright function end');
    };

    function okToGoAbove(num, color, goArray){
        console.log('ok2gAbove function ran')
        checkAbove(num,color,goArray);
        console.log('ok2gAb function end' );
    };

    function okToGoUnder(num, color, goArray){
        console.log('ok2gUnder function ran')
        checkUnder(num,color,goArray);
        console.log('ok2gUnder END')
    };

//after these series of moves are done, 12a ends


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//goAttacked checks liberties of enemies pieces

//Step 12.b.4 checks individual liberties for each attacked piece
//accepts number to attck, color, and direction as inputs
function goAttackedMain(e, toAttack, color, directionName, goArray){
    console.log(goArray);
    console.log('goAtktMain');
    let num = toAttack;
    
    //12.b.5 
    //calls opposit color to toggle color and attack color
    color= oppositeColor(color, directionName);
    let prelength = 0;
    console.log(num);
    console.log(color+': is color goAtktMain');
    //12.b.6 because code is used several times
    //stuff. Gets value of number of liberties in array.
    console.log(libertiesMain);
    prelength = libertiesMain.length;
    console.log(prelength+':is values for prelength');
    //allert(libertiesMain);

//12.b.7a call goAttacked function with
//respect to the give direction
//set-up
    //let enemiesFunction = window['goAttacked'+directionName];
    let enemiesFunction = 'goAttacked'.concat(directionName, '(','num',',','color',',','goArray',')');
   // let Cond = 'okToGo'.concat(directionName, '(','num',',','color',',','goArray',')')
        
    console.log(enemiesFunction+' is concated enemies')
    eval(enemiesFunction);
    console.log(goArray);
    //console.log(enemiesFunction)

//12.b.7b calling the enemies function
//which is really the goAttack+etc function
    //enemiesFunction(num,color);
//12.b.7 end
    console.log(libertiesMain + ': post length of array');
    console.log(libertiesMain.length)



//12.b.8 is 12.b.6 part a 12.b.6.a 
//gets value of number of liberties after Step 12.b.7
    let postlength=libertiesMain.length
    console.log(postlength+': is postlength')
//12.b.8a slices values off that it picked up during main
    let attackedLiberties = libertiesMain.slice(prelength);
    //let attackedLiberties = libertiesMain
    console.log(attackedLiberties+': are attacked liberties'+
        attackedLiberties.length+': is length');

//12.b.8b sets libertesMane back to original value is
//in 12.b.6.
    libertiesMain = libertiesMain.slice(0,prelength);



//12.b.9 checks to see if attacked liberties has liberties
        //if(attackedLiberties.length===0){ trying something out
    if(!(attackedLiberties.length)){


        //allert('taken, '+attackedLiberties.length+':attacked liberties length');
            //allert('takePieces');
        //12.b.9a takes piece with no liberties
            //piecesArray=[];
            attackcolor = oppositeColor(attackcolor, directionName);
            color = oppositeColor(color, directionName);
           console.log(attackcolor+': is attackcolor'+color+':is color')
           
        console.log(num+'is number to take');
            takePieces(e, goArray, num);
            //12.b.9.b
            //takeFriends();//NOTE very experimental!!!
        taken=true;
};


//12.b.10 
//toggles attacking back on after loopoing
noAttackBack=false;
};


//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


//from Step 12.b.7 the all important 12.b.7.2 
   function goAttackedRight(num, color, goArray){
        console.log('goAtktrght function ran');
        console.log(num+':is number of the attacked')
        checkRight(num, color, goArray);
        console.log('goattckdright end')
};    

    function goAttackedUnder(num, color, goArray){
        console.log('goAtktundr function ran')
        checkUnder(num,color, goArray)
        console.log('goattktUndr ENd')
};

    function goAttackedLeft(num, color, goArray){
        console.log('go Attktleft start');
        console.log(color +'color goatkktleft');
        checkLeft(num,color, goArray)
        console.log('goAtktLeft End');
    };

    function goAttackedAbove(num, color, goArray){
        console.log(color+':goattktAbuv')
        console.log('goatktAbuv start')
        checkAbove(num, color, goArray);
        console.log('goatktabuv end');
    };   
    
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

/*Checks right, down, left, and above respectively
and subtracts liberties when applicable */
//12.b.5 Callback function toggles color between
//black and white.    
    function oppositeColor(color, directionName){
        console.log('opposite color fnx ran')
        if(color==='white'){color='black'}
        else if(color==='black'){color='white'};
        console.log(color+':is opposite color function '+directionName);
        return color;
    };


//12.b.2 call back function toggles enemy selector
    function oppositeEnemy(){
        (!enemy)? enemy = true : enemy = false;
    };

    function sameColor(color){
        if(color==='black'){color='black'}
        else if (color==='white'){color='white'};
        return color;

    };

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
 

//12a,12b.7.2, 13.a.4
//also loops through this section for 12a and 12b check it out...     
//Step 10 spaceMain starts from step 9 Step 9
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    function spaceMain(directionName, numberToThe, color, goArray, e){
      //makes sure color is set to players color
      if( libertiesMain.length < 30) {
        //color= sameColor(color)
     //sets opposite color equal to attack color  
        attackcolor = oppositeColor(color, directionName);
        console.log(numberToThe+': '+directionName)
        console.log(goArray[numberToThe.slice(0,1)][numberToThe.slice(-1)]+':is color to:'+directionName)
        console.log(color+': is color in main')
        console.log(attackcolor+ ': is attackcolor')

        //step 11a.(12.empty) checks if space next door is empty
        //to find possible liberties
        console.log(`${goArray}: is goArray`)
        console.log('there is an edge-case because array is update beginning of next round')
        //if (goArray[numberToThe]==='empty'){
 /*1*/       if (goArray[numberToThe.slice(0,1)][numberToThe.slice(-1)]==='empty'){
//!!case empty
            console.log(numberToThe+' =open liberty. empty')               
            !libertiesMain.includes(numberToThe)&&libertiesMain.push(numberToThe);  
            console.log(libertiesMain+' : are libertiesMain');
            //allert(color);
            
        //NOTE get better understandin of value found
            if(!valueFound)
            {
        //13.a.3 if this evaluates to true than it was run
        //can execute code below. case that adjacent
        //space is empty
            if(checkIfBlocked)
                 {
            
                if(emptyArray.length<32){
                console.log(emptyArray);
                alert(emptyArray)
        //if empty array is less than 32 than continue checking
        //there must be 2 or more space to not be blocked
                checkEmpty(numberToThe, color, valueFound)}
                else{};
                };
            }



            //step 12a. checks if next door is the players color                
            // in order to gain it's liberties
/*2*/
//!!!Case it's friendly!!!
           // }else if(goArray[numberToThe]===color){
        }else if(goArray[numberToThe.slice(0,1)][numberToThe.slice(-1)]===color){
                           
            console.log(numberToThe);
            console.log(directionName);

            //step 12a. okFriendsMain function is callback function that's                    
            //triggered when friendly color is nearby            
            okFriendsMain(directionName, numberToThe, color, goArray);
            //allert(direction +':a buddy, his liberties are my liberties');
            
            
            if(enemy){
            if(okFriendsArray.length<40){
                !okFriendsArray.includes(numberToThe)&&okFriendsArray.push(numberToThe);   
            /*allert('okFriendsArray:'+okFriendsArray)*/ }       
        }

                if(!valueFound){
    //means 13.a3 has happened same color was found
    //means can loop the friendly, neighbor as well 
                if(checkIfBlocked){
    //NOTE what is valueFound? checks if friend can be found
    //in the blockedChecked function maybe name something better.
                    valueFound= true;
                   // allert('same color found')
                   if(emptyArray.indexOf(numberToThe) !== -1){emptyArray.push(numberToThe)    
                    console.log(emptyArray);
                    checkEmpty(numberToThe, color, valueFound)
                   }
                    }
                }
        //end of loop friendly through checkEmpty


        //Step 12b. okEnemMain is triggered. means enems are neighbors                          
/*3*/
//!!!Case it's enemy
        //}else if(goArray[numberToThe]===attackcolor){
        }else if(goArray[numberToThe.slice(0,1)][numberToThe.slice(-1)]===attackcolor){
            //allert(direction +':an enemy, check his liberties for life');
            if (noAttackBack||checkIfBlocked){/*'Avoid infinite loop. No attackback'*/}
    //if this is yes than means we're passed step 13.a.3
    //checking to see if and empty main. Case neighbor
    //is enemy
        //else if(checkIfBlocked){/*allert('Do nothing, just checking')*/}
            else{
    //Step 12b execute call back function
            okEnemiesMain(e, directionName, numberToThe, color, goArray);
            }

/*4 END OF SPACEMAIN*/
//!!!case error something went wrong
        } else {//                                                    
        //looks like the edge of the world mate!');
        alert('error' +goArray[numberToThe])           
        }

    }
    
    };
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

    //12a,12b.7.2, (13.a.4 from checking if blocked perspective)
    //step 12.b.7.3 territory coming from enemy perspective
    //step 12.a.2.3. territory of a friend perspective
    //step 8. territory
    function spaceRight(num, color, goArray, e){
        let right = parseInt(num[1])+1
        let numberToThe= num.toString().slice(0,1)+right;
        let directionName='Right'
        if(right==9){}
        else{
        //continues to Step 9.    
        spaceMain(directionName, numberToThe, color, goArray, e);
        }
    };    
        

    function spaceUnder(num, color, goArray, e){
        let under = parseInt(num[0])+1
        let numberToThe= ""+under+num.toString().slice(-1);

        let directionName='Under'
    if(under==9){}
    else{
        spaceMain(directionName, numberToThe, color, goArray, e);
        }
    };    

    //check left space
    function spaceLeft(num, color, goArray, e){
        let left = parseInt(num[1])-1
        let numberToThe= ""+num.toString().slice(0,1)+left;
        let directionName='Left'
    if(left<0){/*allert('success')*/}
    else{   
        spaceMain(directionName, numberToThe, color, goArray, e);
        }
    };


    function spaceAbove(num, color, goArray, e){
        let above = parseInt(num[0])-1
        let numberToThe= ""+above+num.toString().slice(-1);
        let directionName='Above'
    if(above<0){}

    else{   
        spaceMain(directionName, numberToThe, color, goArray, e);
        }
    };
  //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//3. AFTER move: if it's next to opposite color check
//if opposite color has empty next to it YES: End process ?
//if left right above than check its liberties                     !!Called from SpaceMain()
//12.b. Main function when dealing with enemies
function okEnemiesMain(e, directionName, numberToThe, color, goArray){
    console.log(directionName);
    console.log(numberToThe);
    console.log(color);
    //12.b.2  toggles enemy status
    oppositeEnemy(); //Enemy Yes
    //12.b.3 attackbacks are not allowed(otherwise creates infinite loop)
    noAttackBack=true;

    //12.b.4. call goAttacked main for each direction
    //there is an enemy neighbor 
    let toAttack=numberToThe;
    console.log(toAttack+':is toAttack');
    console.log('attack:' +directionName+'!!!');
    console.log(goArray);
    goAttackedMain(e, toAttack,color,directionName, goArray);
    //12.b.5 toggles stop back to no. So that 
    //player can attack an additional enemy
    oppositeEnemy(); //Enemy No
};//END of okEnemiesMain
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


//12.b.9a
function takePieces(e, goArray, num){
    let num0=num[0];
    console.log(num[0])
    let num1=num[1];
    console.log(num[1])
    let right= Number(num1)+1
    let left= Number(num1)-1
    let above = Number(num0)-1
    let under = Number(num0)+1

    console.log('takepeacez function ran');
    console.log(num)
    console.log(goArray[num]);
    console.log(piecesArray+': is piecesArray');
    console.log(goArray+'is goArray at takePeacez');
    if(!piecesArray.includes(num)){
    //trying to squash a bug
    piecesArray.push(num)
    console.log(piecesArray)
    console.log('all your base are belong to us!');
    console.log(document.getElementById(`${num}`).className+': try new method get element here')

    console.log(num)
    alert(num+': number to take')
    console.log(attackcolor+'attackcolor');
    console.log(color+'color');
 
//12.b.9a taken set to yes to allow player to move in
//without other liberties
    taken=true;
//12.b.9a sets back to empty
//Dependant on document.getElementById
    document.getElementById(`${num}`).className='empty'
    //goArray[num0][num1] = 'empty'

        arrayArray =  goArray.map((row, index) => {
        let rowIndex = index
        return row.map((piece, index) => {
        let columnIndex = index
        //console.log(piece)
        let search = ""+rowIndex+columnIndex
        //console.log(search)
        let realPiece = search === e.target.id ? color : piece
        //allert(e.target.id)
        return search === ""+[num0]+[num1] ? 'empty' : realPiece  
    })
    
}) 

    console.log('update this better by saving to value then setGoArray')
    
//allert('here:'+ document.getElementById('Playfield').children[num].children[0].className)
if(right<9 &&(goArray[num0][right]==attackcolor)){  takePieces(e, goArray, ""+[num0]+[right])}
if(left>=0 &&(goArray[num0][left]==attackcolor)){   takePieces(e, goArray, ""+[num0]+[left])}
if(above>=0 && (goArray[above][num1]==attackcolor)){ takePieces(e, goArray, ""+[above]+[num1])}
if(under<9 &&(goArray[under][num1]==attackcolor)){  takePieces(e, goArray, ""+[under]+[num1])}

return arrayArray

/*if((goArray[num+9]==attackcolor)&&!((num+1)%9===0)){takePieces(goArray ,num+9)
    console.log('take another piece')};
    if((goArray[num-9]==attackcolor)&&!((num-1)%9===0)){takePieces(goArray, num-9)
        console.log('take another piece')};
    if((goArray[num+1]==attackcolor)&&!(num+1>80)){takePieces(goArray, num+1)
        console.log('take another piece')};
    if((goArray[num-1]==attackcolor)&&!(num-1<0)){takePieces(goArray, num-1)
        console.log('take another piece')};*/
    }
    
    
};
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


/*check blocked space with liberties of liberties
*/
//called by blockedcheck
//13.a.3
function emptyMain(num, color, valueFound){
alert(valueFound)

//means that this function was executed
checkIfBlocked=true;
//allert('emptyMain function:'+ num);

//trying to exit loop before it loops again
/*if(valueFound==='yes'){ allert('do nothing')  
}else {*/

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

while(!valueFound){

//otherwise continue with step 13.a.4
if(!valueFound){
checkRight(num, color);
console.log(num +':empty main 1');}

if(!valueFound){
checkUnder(num, color);
console.log(num +':empty main 2');}

if(!valueFound){
checkLeft(num, color); 
console.log(num +':empty main 3');}

if(!valueFound){
checkAbove(num, color);
console.log(num +':empty main 4');}
}

};
//end of 13.a.4 && emptyMain

//check adjacent empty space valuefound must be 
//no and checkedblocked must be yes
//ie no value found and running from inside check blocked
//function
function checkEmpty(numberToThe, color, valueFound){
    //allert('check empty function')

if(valueFound){
   //allert('numberToThe')
   if(emptyArray.indexOf(numberToThe) !== -1){emptyArray.push(numberToThe)
    console.log('move on')}
}
//only execute code if value not yes found
    else{

        //if empty array doesn'T include the following number
        if(!emptyArray.includes(numberToThe)){
        
        //push the number to the empty array
        emptyArray.push(numberToThe);
        //run empty main function for value... why?NOTE
        emptyMain(numberToThe,color, valueFound);
    };
};
};
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

/*
2. for all elements of emptyarray check to see
if if player color exists.
I think this is for blocked off space
*/
function isBlocked(goArray){
   // allert('isblocked function start')
    let newArray=[];
for(let i=0; i<emptyArray.length; i++){
    newArray[i]=goArray[emptyArray[i]];
    if (newArray[i]===color){

        blocked=false
    }else{
        blocked=true;
    };
    console.log(emptyArray[i])

    if(emptyArray.length>40){
        blocked=false
    }
};
console.log(newArray)
if(blocked){

    blockedSpace();
    };
};
export default goFunction;