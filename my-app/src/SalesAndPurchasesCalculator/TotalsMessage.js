
const TotalsMessage = ({totalMonthOne,totalMonthTwo,totalMonthThree,showMessage,word}) => {
    
    const totals= totalMonthOne+totalMonthTwo+totalMonthThree;
    const totalVatOnSales=(totals/120*20).toFixed(2)
    const styles={
        display: showMessage
        }
       
      
    return ( 
        
        <p style={styles} >The total <b>{word}</b> for this quater are <b>{(totals).toFixed(2)}</b>. The total VAT due on <b>{word}</b> for this quater is <b>{totalVatOnSales}</b></p>       

     );
}
 
export default TotalsMessage;