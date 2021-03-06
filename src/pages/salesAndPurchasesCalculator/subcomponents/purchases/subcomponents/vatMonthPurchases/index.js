import { useState } from "react";
import Title from "../../../../../../components/dateDisplay/titleForMonths";


const Input = ({ value, index, onChange,handleClick }) => (
  <input type='number' defaultValue={value} autoFocus={true} onClick={handleClick} onChange={onChange}  />
);

const VatMonthPurchases = ({ word, values, vatValues, updateValues,updateVatValues, name }) => {
  const [totals, setTotals] = useState(values);
  const [vatTotals,setVatTotals]=useState(vatValues)
  const [purchasesExcludingVat, setPurchasesExcludingVat] = useState(0);
  const [vatVal,setVatVal]=useState(0)
  

  const handleChange = (e, index) => {
    e.preventDefault();
    const inputValue = e.target.value;
    const newValues = [...totals];
    newValues[index] = Number(inputValue);
    setPurchasesExcludingVat(inputValue);
    // setVatVal((purchasesExcludingVat/100*20).toFixed(2))
    if(inputValue >0){
        setTotals(newValues)
        updateValues(totals)
    }
    console.log(totals)
  };
  
  const handleClick=(e)=>{
    e.preventDefault()
    e.target.value=''

    

  }
  //vat month puchases
  const handleChangeVat=(e,index)=>{
    e.preventDefault();
    const inputValueVat = e.target.value;
    const newVatValues = [...vatTotals];
    newVatValues[index] = Number(inputValueVat);
    updateVatValues(newVatValues)
    setVatVal(inputValueVat)
    console.log(newVatValues)
}
  const VatOnPurchasesInput=({index})=>{

    return  (  <input  
                   className={`vat-input`}
                   min={1} 
                   type='number'
                   defaultValue={vatVal}
                   onChange={(e)=>{ handleChangeVat(e,index) }}  
                   onFocus={true}
                   onClick={(e)=>handleClick(e)} />
           )
   }



  return (
    <div>
      <h3>{name}</h3>
      <table>
        <thead>
         <Title word={word}/>
        </thead>
        <tbody>
          {totals.map((value, index) => {
            return (
              <tr key={`${value}-${index}`}>
                <td >
                  <Input 
                    handleClick={(e)=>handleClick(e)}
                    index={index}
                    value={value}
                    onChange={(v) => handleChange(v, index)}
                  />
                </td>
                {/* <td><VatOnPurchasesInput key={index+'as'} index={index}/></td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default VatMonthPurchases;
