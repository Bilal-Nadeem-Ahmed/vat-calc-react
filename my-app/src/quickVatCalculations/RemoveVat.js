const RemoveVat = ({val,update}) => {

    const newVal=parseInt(val);
    const handleClick=(e)=>{
        e.preventDefault();
        if (val===undefined){
            alert('Please Enter a valid Number')
        } else{
            update(`This number with the VAT removed is ${(newVal/120 *100).toFixed(2)}`)
        }
        
    }
    return ( 
        <button onClick = {handleClick}>Remove Vat</button>
     );
}
 
export default RemoveVat;