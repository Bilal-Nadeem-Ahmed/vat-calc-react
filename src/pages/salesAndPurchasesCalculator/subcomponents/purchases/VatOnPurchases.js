import { useState} from "react";

import DateDisplay from "../../../../components/dateDisplay";
import TotalsMessage from "../TotalsMessage";
import VatMonthPurchases from "./subcomponents/vatMonthPurchases";

const VatOnPurchases = () => {
 
  const initialState = [...new Array(31)].map((i) => 0);
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  const monthclassespurchases = [
    "purchasesvatmonth1",
    "purchasesvatmonth2",
    "purchasesvatmonth3",
  ];
  // const [vatOnPurchasesMonth1, setVatOnPurchasesMonth1] = useState(initialState);
  // const [vatOnPurchasesMonth2, setVatOnPurchasesMonth2] = useState(initialState);
  // const [vatOnPurchasesMonth3, setVatOnPurchasesMonth3] = useState(initialState);

  const [PurchasesExVatMonth1, setPurchasesExVatMonth1] = useState(initialState);
  const [PurchasesExVatMonth2, setPurchasesExVatMonth2] = useState(initialState);
  const [PurchasesExVatMonth3, setPurchasesExVatMonth3] = useState(initialState);

  // const reducedVatOnPurchasesMonth1= vatOnPurchasesMonth1.reduce(reducer);
  // const reducedVatOnPurchasesMonth2= vatOnPurchasesMonth2.reduce(reducer);
  // const reducedVatOnPurchasesMonth3= vatOnPurchasesMonth3.reduce(reducer);

  // const reducedPurchasesExVatMonth1= PurchasesExVatMonth1.reduce(reducer);
  // const reducedPurchasesExVatMonth2= PurchasesExVatMonth2.reduce(reducer);
  // const reducedPurchasesExVatMonth3= PurchasesExVatMonth3.reduce(reducer);
 

  

  // const totalPurchasesExludingVat =reducedPurchasesExVatMonth1+reducedPurchasesExVatMonth2+reducedPurchasesExVatMonth3;
  // const totalVatOnPurchases =reducedVatOnPurchasesMonth1+reducedVatOnPurchasesMonth2+reducedVatOnPurchasesMonth3;

  return (
    <div className="vatonpurchases">
      <div className="vatonspurchasestables">
        <DateDisplay />
        
        <VatMonthPurchases
          word={"Purchases"}
          month={1}
          values={PurchasesExVatMonth1}
          updateValues={setPurchasesExVatMonth1}
          // vatValues={vatOnPurchasesMonth1}
          // updateVatValues={setVatOnPurchasesMonth1}
          desc={monthclassespurchases[0]}
          key={1}
        />
        <VatMonthPurchases
          word={"Purchases"}
          month={2}
          values={PurchasesExVatMonth2}
          updateValues={setPurchasesExVatMonth2}
          // vatValues={vatOnPurchasesMonth2}
          // updateVatValues={setVatOnPurchasesMonth2}
          desc={monthclassespurchases[1]}
          key={2}
        />
        <VatMonthPurchases
          word={"Purchases"}
          month={3}
          values={PurchasesExVatMonth3}
          updateValues={setPurchasesExVatMonth3}
          // vatValues={vatOnPurchasesMonth3}
          // updateVatValues={setVatOnPurchasesMonth3}
          desc={monthclassespurchases[2]}
          key={3}
        />
      </div>
      <br />
   
      
      {/* <TotalsMessage
        totalPurchasesExludingVat={totalPurchasesExludingVat}
        totalVatOnPurchases={totalVatOnPurchases}
        word={"purchases"}
      /> */}
    </div>
  );
};

export default VatOnPurchases;
