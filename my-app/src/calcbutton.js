import { useState } from "react";

const CalcButton = ({setSalesTotalsMonth1,setSalesTotalsMonth2,setSalesTotalsMonth3,setShowMessage}) => {
    const monthOneInput=document.getElementsByClassName('month1-input');
    const monthTwoInput=document.getElementsByClassName('month2-input');
    const monthThreeInput=document.getElementsByClassName('month3-input');
    const newArray=Array(31);
    const newArrayTwo=Array(31);
    const newArrayThree=Array(31);
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    // const[totalMonthOne,setTotalMonthOne]=useState(0)
    // const[totalMonthTwo,setTotalMonthTwo]=useState(0)
    // const[totalMonthThree,setTotalMonthThree]=useState(0)
    

    const handleClick=(e)=>{
        e.preventDefault();
        for( let i=0;i<newArray.length;i++){
            newArray[i]=parseInt(monthOneInput[i].value)
            newArrayTwo[i]=parseInt(monthTwoInput[i].value)
            newArrayThree[i]=parseInt(monthThreeInput[i].value)
        }
        setShowMessage('block')
        setSalesTotalsMonth1(newArray.reduce(reducer)) 
        setSalesTotalsMonth2(newArrayTwo.reduce(reducer)) 
        setSalesTotalsMonth3(newArrayThree.reduce(reducer)) 
       
        
        
        
        
    }
    
    return ( 
        <div>
        <button onClick={handleClick}>Calculate</button>
        
        </div>

     );
}
 
export default CalcButton;