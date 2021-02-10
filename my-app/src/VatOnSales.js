import {useState, } from 'react'
import CalcButton from './calcbutton';
import VatOnSalesMessage from './VatOnSalesMessage';
import VatOnSalesMonth from './VatOnSalesMonth';
import DateDisplay from './DateDisplay'

const VatOnSales = () => {
    const days=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
    const monthclasses=['month1','month2','month3']
    const [totalSalesMonth1,setSalesMonth1]=useState(0);
    const [totalSalesMonth2,setSalesMonth2]=useState(0);
    const [totalSalesMonth3,setSalesMonth3]=useState(0);
    const [showMessage,setShowMessage]=useState('none');
  
return ( 
<div className="vatonsales">
    <div className='vatonsalestables'>
        <DateDisplay 
            days={days}/>
        <VatOnSalesMonth
            month={1}
            desc={monthclasses[0]} 
            key={1}/>
        <VatOnSalesMonth
            month={2}
            desc={monthclasses[1]}
            key={2}/>
        <VatOnSalesMonth 
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
    />
    <VatOnSalesMessage 
    showMessage={showMessage}
    totalMonthOne={totalSalesMonth1}
    totalMonthTwo={totalSalesMonth2}
    totalMonthThree={totalSalesMonth3}
    />
</div>
)
    }
 
export default VatOnSales;