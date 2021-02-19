import { useState } from 'react';
import CalcButtonVat from './CalcButtonVat';
import VatMonth from '../VatMonth';
import DateDisplay from '../DateDisplay';
import TotalsMessage from '../TotalsMessage';

const VatOnPurchases = () => {
  const days = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
  ];

  const monthclassespurchases = ['purchasesvatmonth1', 'purchasesvatmonth2', 'purchasesvatmonth3'];
  const [vatOnPurchasesMonth1, setVatOnPurchasesMonth1] = useState(0);
  const [vatOnPurchasesMonth2, setVatOnPurchasesMonth2] = useState(0);
  const [vatOnPurchasesMonth3, setVatOnPurchasesMonth3] = useState(0);
  const [PurchasesExVatMonth1, setPurchasesExVatMonth1] = useState(0);
  const [PurchasesExVatMonth2, setPurchasesExVatMonth2] = useState(0);
  const [PurchasesExVatMonth3, setPurchasesExVatMonth3] = useState(0);
  const [showMessage, setShowMessage] = useState('none');
  const totalPurchasesExludingVat = PurchasesExVatMonth1 + PurchasesExVatMonth2 + PurchasesExVatMonth3;
  const totalVatOnPurchases = vatOnPurchasesMonth1 + vatOnPurchasesMonth2 + vatOnPurchasesMonth3;

  return (
    <div className="vatonsales">
      <div className="vatonsalestables">
        <DateDisplay days={days} />
        <VatMonth key={1} desc={monthclassespurchases[0]} month={1} word="Purchases" />
        <VatMonth key={2} desc={monthclassespurchases[1]} month={2} word="Purchases" />
        <VatMonth key={3} desc={monthclassespurchases[2]} month={3} word="Purchases" />
      </div>
      <br />
      <CalcButtonVat
        monthClasses={monthclassespurchases}
        setPurchasesExVatMonth1={(total) => {
          setPurchasesExVatMonth1(total);
        }}
        setPurchasesExVatMonth2={(total) => {
          setPurchasesExVatMonth2(total);
        }}
        setPurchasesExVatMonth3={(total) => {
          setPurchasesExVatMonth3(total);
        }}
        setShowMessage={setShowMessage}
        setVatOnPurchasesMonth1={(total) => {
          setVatOnPurchasesMonth1(total);
        }}
        setVatOnPurchasesMonth2={(total) => {
          setVatOnPurchasesMonth2(total);
        }}
        setVatOnPurchasesMonth3={(total) => {
          setVatOnPurchasesMonth3(total);
        }}
      />
      <TotalsMessage
        showMessage={showMessage}
        totalPurchasesExludingVat={totalPurchasesExludingVat}
        totalVatOnPurchases={totalVatOnPurchases}
        word="purchases"
      />
    </div>
  );
};

export default VatOnPurchases;
