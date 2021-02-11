import {useState, useEffect, useDebugValue } from 'react'
import CalcButtonVat from './CalcButtonVat';
import VatMonth from './VatMonth';
import DateDisplay from './DateDisplay'
import TotalsMessage from './TotalsMessage';

console.log(0)
const VatOnPurchases = () => {
    const days=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
  
    const monthclassespurchases=['purchasesvatmonth1','purchasesvatmonth2','purchasesvatmonth3']
    const [vatOnPurchasesMonth1,setVatOnPurchasesMonth1]=useState(0);
    const [vatOnPurchasesMonth2,setVatOnPurchasesMonth2]=useState(0);
    const [vatOnPurchasesMonth3,setVatOnPurchasesMonth3]=useState(0);
    const [showMessage,setShowMessage]=useState('none');
  console.log(vatOnPurchasesMonth1)
  
return ( 
<div className="vatonsales">
    <div className='vatonsalestables'>
        <DateDisplay 
            days={days}/>
        <VatMonth
            word={'Purchases'}
            month={1}
            desc={monthclassespurchases[0]} 
            key={1}/>
        <VatMonth
            word={'Purchases'}
            month={2}
            desc={monthclassespurchases[1]}
            key={2}/>
        <VatMonth 
            word={'Purchases'}
            month={3} 
            desc={monthclassespurchases[2]}
            key={3}/>
    </div>
    <br/>
    <CalcButtonVat
    setVatOnPurchasesMonth1={(total)=>{setVatOnPurchasesMonth1(total)}}
    setVatOnPurchasesMonth2={(total)=>{setVatOnPurchasesMonth2(total)}}
    setVatOnPurchasesMonth3={(total)=>{setVatOnPurchasesMonth3(total)}}
    setShowMessage={setShowMessage}
    monthClasses={monthclassespurchases}
    />
    <TotalsMessage 
    showMessage={showMessage}
    totalMonthOne={vatOnPurchasesMonth1}
    totalMonthTwo={vatOnPurchasesMonth2}
    totalMonthThree={vatOnPurchasesMonth3}
    word={'purchases'}
    />
   
</div>
)
    }
 
export default VatOnPurchases;