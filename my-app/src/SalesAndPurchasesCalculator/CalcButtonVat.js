
const CalcButton = ({setVatOnPurchasesMonth1,setVatOnPurchasesMonth2,setVatOnPurchasesMonth3,setShowMessage,monthClasses}) => {

    const monthOneInput=document.getElementsByClassName(`${monthClasses[0]}-input`);
    const monthTwoInput=document.getElementsByClassName(`${monthClasses[1]}-input`);
    const monthThreeInput=document.getElementsByClassName(`${monthClasses[1]}-input`);

   
    const newArray=Array(31);
    const newArrayTwo=Array(31);
    const newArrayThree=Array(31);
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
  
    const handleClick=(e)=>{
        e.preventDefault();
      
       
        for( let i=0;i<newArray.length;i++){
            newArray[i]=parseInt(monthOneInput[i].value)
            newArrayTwo[i]=parseInt(monthTwoInput[i].value)
            newArrayThree[i]=parseInt(monthThreeInput[i].value)
        }
        setShowMessage('block')
        setVatOnPurchasesMonth1(newArray.reduce(reducer)) 
        setVatOnPurchasesMonth2(newArrayTwo.reduce(reducer)) 
        setVatOnPurchasesMonth3(newArrayThree.reduce(reducer))         
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