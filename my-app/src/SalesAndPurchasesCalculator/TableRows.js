import {useState} from 'react'
  
const TableRows = ({desc,word,obj,addtoarr}) => {
  const [val,setVal]=useState(0)
  const [vatVal,setVatVal]=useState(0)
  
  const handleClick=(e)=>{

    e.target.value=''
    setTimeout(()=>{
    e.target.value==='' ? e.target.value=0:console.log('no')
    },2500)
     
  }

  const handleChange=(e)=>{
    setVal(e.target.value)
  }

  const handleChangeVat=(e)=>{
      setVatVal(e.target.value)
  }
  //component for below
  const HandleChangeVatVal=(e)=>{

   return  (  <input  
                  className={`${desc}vr-input`}
                  min={1} 
                  onChange={(e)=>{ addtoarr(e.target.val);  
                                   console.log(obj)}}  
                  defaultValue={vatVal/120*20}
                  onClick={(e)=>handleClick(e)} type="number"/>
          )
  }
     
   if(word=='sales'){
      return ( 
          <tr>  
              <td>
                  <input  className={`${desc}-input`} min={1}  onChange={(e)=>handleChange(e)} defaultValue={0} onClick={(e)=>handleClick(e)} type="number"/>
              </td>
              <td>{val/120 *20}</td>
          </tr>
      );
    } else{
        return(
        <tr>  
            <td>
                <input  className={`${desc}-input`} min={1} onChange={(e)=>handleChangeVat(e)}  defaultValue={0} onClick={(e)=>handleClick(e)} type="number"/>
            </td>
            <td>
                <HandleChangeVatVal/>  
            </td>
              
          </tr>
        )
     
   }
  
}
 
export default TableRows;