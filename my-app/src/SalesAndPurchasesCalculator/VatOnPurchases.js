import {useState, useEffect, useDebugValue } from 'react'
import CalcButton from './calcbutton';
import VatMonth from './VatMonth';
import DateDisplay from './DateDisplay'
import TotalsMessage from './TotalsMessage';

console.log(0)
const VatOnPurchases = () => {
    const days=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
    const monthclasses=['vatmonth1','vatmonth2','vatmonth3']
    const [totalSalesMonth1,setSalesMonth1]=useState(0);
    const [totalSalesMonth2,setSalesMonth2]=useState(0);
    const [totalSalesMonth3,setSalesMonth3]=useState(0);
    const [showMessage,setShowMessage]=useState('none');
  console.log(totalSalesMonth1)
return ( 
<div className="vatonsales">
    <div className='vatonsalestables'>
        <DateDisplay 
            days={days}/>
        <VatMonth
            word={'purchass'}
            month={1}
            desc={monthclasses[0]} 
            key={1}/>
        <VatMonth
            word={'purchass'}
            month={2}
            desc={monthclasses[1]}
            key={2}/>
        <VatMonth 
            word={'purchass'}
            month={3} 
            desc={monthclasses[2]}
            key={3}/>
    </div>
    <br/>
    <CalcButton
    setSalesTotalsMonth1={(total)=>{setSalesMonth1(total)}}
    setSalesTotalsMonth2={(total)=>{setSalesMonth2(total)}}
    setSalesTotalsMonth3={(total)=>{setSalesMonth3(total)}}
    setShowMessage={setShowMessage}
    monthClasses={monthclasses}
    />
    <TotalsMessage 
    showMessage={showMessage}
    totalMonthOne={totalSalesMonth1}
    totalMonthTwo={totalSalesMonth2}
    totalMonthThree={totalSalesMonth3}
    word={'purchases'}
    />
   
</div>
)
    }
 
export default VatOnPurchases;