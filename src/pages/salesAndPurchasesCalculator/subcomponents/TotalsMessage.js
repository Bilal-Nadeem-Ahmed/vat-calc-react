
const TotalsMessage = ({totalSales,totalPurchasesExludingVat,totalVatOnPurchases,word}) => {
    
    
    const totalVatOnSales=(totalSales/120*20).toFixed(2)
   
       if(word==='sales'){
            return ( 
            
                <p >The total <b>{word}</b> for this quater are <b>{totalSales}</b>. The total VAT due on <b>{word}</b> for this quater is <b>{totalVatOnSales}</b></p>       
        
            );

       } else{
            return(
                <p  >The total <b>{word}</b> for this quater are <b>{(totalPurchasesExludingVat+totalVatOnPurchases).toFixed(2)}</b>. The total VAT due on <b>{word}</b> for this quater is <b>{totalVatOnPurchases}</b>.The total <b>{word}</b> without Vat are <b>{totalPurchasesExludingVat}</b></p>     

            )
       }
      
   
}
 
export default TotalsMessage;