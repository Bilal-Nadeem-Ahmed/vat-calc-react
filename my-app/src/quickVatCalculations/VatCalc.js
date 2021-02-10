import { useState } from "react";
import CalculateVat from "./CalculateVat";
import RemoveVat from "./RemoveVat";
import AddVat from'./AddVat'

const VatCalc = () => {
    
    const style={
        width:'40vw'
    }
    const[inp,setInp] = useState();
    const[Out,setOut] = useState();
   
    return ( 
        <div className='vatcalc'>
            <div className="window" style={style}>
  <div className="title-bar">
    <div className="title-bar-text">Quick VAT Calculations</div>
    <div className="title-bar-controls">
      <button aria-label="Minimize"></button>
      <button aria-label="Maximize"></button>
      <button aria-label="Close"></button>
    </div>
  </div>
  <div className="window-body">
  <div className="vatcal">
            <input id='green' onChange={(e)=>{
                setInp(e.target.value);
                
               
            }} type="number"/>
           <AddVat val={inp} update={(x)=>{
               setOut(x)
            }}/>
           
           <RemoveVat  val={inp} update={(x)=>{
               setOut(x)
            }}/>
           <CalculateVat val={inp} update={(x)=>{
               setOut(x)
           }}/>
           
            <p>{Out}</p>
        </div>
    
  </div>
</div>
        
        </div>
     );
}
 
export default VatCalc;