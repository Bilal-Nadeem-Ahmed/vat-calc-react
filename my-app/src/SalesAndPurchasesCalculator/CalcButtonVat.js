
const CalcButton = ({setVatOnPurchasesMonth1,setVatOnPurchasesMonth2,setVatOnPurchasesMonth3,setPurchasesExVatMonth1,setPurchasesExVatMonth2,setPurchasesExVatMonth3,setShowMessage,monthClasses}) => {

    const monthOneInput=document.getElementsByClassName(`${monthClasses[0]}-input`);
    const monthTwoInput=document.getElementsByClassName(`${monthClasses[1]}-input`);
    const monthThreeInput=document.getElementsByClassName(`${monthClasses[2]}-input`);
    const monthOneVatInput=document.getElementsByClassName(`${monthClasses[0]}vat-input`);
    const monthTwoVatInput=document.getElementsByClassName(`${monthClasses[1]}vat-input`);
    const monthThreeVatInput=document.getElementsByClassName(`${monthClasses[2]}vat-input`);
   
    const newArray=Array(31);
    const newArrayTwo=Array(31);
    const newArrayThree=Array(31);
    const newVatArray=Array(31);
    const newVatArrayTwo=Array(31);
    const newVatArrayThree=Array(31);
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
  
    const handleClick=(e)=>{
        e.preventDefault();
      
       
        for( let i=0;i<newArray.length;i++){
            newArray[i]=parseInt(monthOneInput[i].value)
            newArrayTwo[i]=parseInt(monthTwoInput[i].value)
            newArrayThree[i]=parseInt(monthThreeInput[i].value)
            newVatArray[i]=parseInt(monthOneVatInput[i].value)
            newVatArrayTwo[i]=parseInt(monthTwoVatInput[i].value)
            newVatArrayThree[i]=parseInt(monthThreeVatInput[i].value)
        }
        setShowMessage('block')
        setPurchasesExVatMonth1(newArray.reduce(reducer)) 
        setPurchasesExVatMonth2(newArrayTwo.reduce(reducer)) 
        setPurchasesExVatMonth3(newArrayThree.reduce(reducer)) 
        setVatOnPurchasesMonth1(newVatArray.reduce(reducer)) 
        setVatOnPurchasesMonth2(newVatArrayTwo.reduce(reducer)) 
        setVatOnPurchasesMonth3(newVatArrayThree.reduce(reducer))          
    }
    function printDiv() {
        let printContents = document.querySelector('.tablecontainer').innerHTML;
        let originalContents = document.body.innerHTML;
   
        document.body.innerHTML = printContents;
   
        window.print();
   
        document.body.innerHTML = originalContents;
   }
    
    return ( 
        <div>
          <button onClick={handleClick}>Calculate</button> 
          <button onClick={printDiv}>Print</button>  
        </div>
     );
}
 
export default CalcButton;