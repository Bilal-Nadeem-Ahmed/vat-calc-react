const PrintButton = () => {
    function printDiv() {
        let printContents = document.querySelector('.tablecontainer').innerHTML;
        let originalContents = document.body.innerHTML;
   
        document.body.innerHTML = printContents;
   
        window.print();
   
        document.body.innerHTML = originalContents;
   }

    return ( 
        <button onClick={printDiv}>Print</button>  
     );
}
 
export default PrintButton;