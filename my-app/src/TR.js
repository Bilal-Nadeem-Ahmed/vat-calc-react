import {useState} from 'react'
    const TR = ({desc}) => {
    const [val,setVal]=useState(0)
    return ( 
        <tr>  
            <td onChange={(e)=>{setVal(e.target.value)}}>
                <input className={`${desc}-input`} onClick={(e)=>{e.target.value=''}}  defaultValue={0} type="number"/>
            </td>
            <td>{val/120 *20}</td>
      </tr>
     );
}
 
export default TR;