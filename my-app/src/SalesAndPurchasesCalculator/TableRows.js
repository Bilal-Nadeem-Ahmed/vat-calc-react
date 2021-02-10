import {useState} from 'react'
    const TableRows = ({desc,word}) => {
    const [val,setVal]=useState(0)
  
  const handleInvalid=(e)=>{
    e.target.value=''
      setTimeout(()=>{
        if(e.target.value===''){
    
            e.target.value=0;
    
      }else{
    
        console.log('ay')
    
    } },3000)
     
  }

     
   if(word=='sales'){
    return ( 
        <tr>  
            <td>
                <input  className={`${desc}-input`} min={1}   defaultValue={0} onClick={(e)=>handleInvalid(e)} type="number"/>
            </td>
            <td>{val/120 *20}</td>
        </tr>
     );

   } else{
       return(
       <tr>  
            <td>
                <input  className={`${desc}-input`} min={1}   defaultValue={0} onClick={(e)=>handleInvalid(e)} type="number"/>
            </td>
            <td>{val/120 *20}</td>
        </tr>
       )
     
   }
  
}
 
export default TableRows;