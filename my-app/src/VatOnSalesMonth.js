
import TR from './TR'
import DateDisplay from './DateDisplay'

const VatOnSalesMonth = ({desc,month}) => {

   
 
  const days=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
  
     return ( 
        <div className={desc}>
            <h2> Month{month}</h2>
           
               
                <table>
                    <thead>
                    <tr>
                        <th> Total Sales</th>
                        <th> Vat On sales</th>
                        
                    </tr>
                    </thead>
                    <tbody>
                  
                  { days.map(i=>{
                        
                    return <TR desc={desc} key={`${desc}-${i}`}  />
                  
                  })}

                    </tbody>
                        
                    
                </table>
                 
           
        </div>
     )
    }
 
export default VatOnSalesMonth;