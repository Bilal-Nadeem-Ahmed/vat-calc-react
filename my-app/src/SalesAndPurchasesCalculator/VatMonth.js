import {useState} from 'react';
import TableRows from './TableRows';
import TableRowsPurchases from './TableRows'


const VatOnSalesMonth = ({desc,month,word}) => {
  
  //temp for vat on purch component  
const  obj=[]
const addToArray=(a)=>{
  obj.push(a)

}
 
  const days=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
  
     return ( 
        <div className={desc}>
            <h3> Month{month}</h3>
                <table>
                    <thead>
                    <tr>
                        <th> Total {word}</th>
                        <th> Vat On {word}</th>   
                    </tr>
                    </thead>
                    <tbody>

                  { days.map(i=>{
                        
                    return <TableRows  addtoarr={(x)=>addToArray(x)}obj={obj} word={word} desc={desc} key={`${desc}-${i}`}  />
                  
                  })}

                    </tbody>   
                </table>  
        </div>
     )
    }
 
export default VatOnSalesMonth;