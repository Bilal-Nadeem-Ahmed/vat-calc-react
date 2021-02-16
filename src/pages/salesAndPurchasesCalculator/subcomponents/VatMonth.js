import { useState } from "react";



const Input = ({ value, index, onChange,handleClick }) => (
  <input type='number' value={value} autoFocus={true} onClick={handleClick} onChange={onChange} key={index} />
);

const VatMonth = ({ word, values, updateValues, name }) => {
  const [totals, setTotals] = useState(values);
 

 

  const Title = () => {
    if (word === "Purchases") {
      return (
        <tr>
          <th> {word} excl Vat</th>
          <th> Vat On {word}</th>
        </tr>
      );
    }

    return (
      <tr>
        <th> Total {word}</th>
        <th> Vat On {word}</th>
      </tr>
    );
  };

  const handleChange = (e, index) => {
    e.preventDefault();
    const inputValue = e.target.value;
   

    const newValues = [...values];
    newValues[index] = Number(inputValue);

    console.log(newValues);
    setTotals(newValues);
    // this fixes the issue of state not updating 
    updateValues(newValues)
  };
  //
  const handleClick=(e)=>{
    e.preventDefault()
    e.target.value=''

  }

  return (
    <div>
      <h3>{name}</h3>
      <table>
        <thead>
          <Title />
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
                    setTotals={(val)=>setTotals(val)}
                    onChange={(v) => handleChange(v, index)}
                  />
                </td>
                <td>{(value/120*20).toFixed(2)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default VatMonth;
