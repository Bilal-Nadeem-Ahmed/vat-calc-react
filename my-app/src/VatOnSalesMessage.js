const VatOnSalesMessage = ({totalMonthOne,totalMonthTwo,totalMonthThree,showMessage}) => {
    
    const totals= totalMonthOne+totalMonthTwo+totalMonthThree;
    const totalVatOnSales=(totals/120*20).toFixed(2)
    const styles={
        display: showMessage
        }
    return ( 
        <p style={styles} >The total sales for this quater are <b>{(totals).toFixed(2)}</b>. The total VAT due on sales for this quater is <b>{totalVatOnSales}</b></p>
     );
}
 
export default VatOnSalesMessage;