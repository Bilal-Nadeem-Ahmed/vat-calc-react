import { useState } from "react";
import VatMonthSales from "./subcomponents/vatMonthSales/index";
import DateDisplay from "../../../../components/dateDisplay";
import TotalsMessage from "../TotalsMessage";
import PrintButton from "../../../../components/dateDisplay/printButton";

const initialState = [...new Array(31)].map((i) => 0);

const VatOnSales = () => {
  const [monthOne, setMonthOne] = useState(initialState);
  const [monthTwo, setMonthTwo] = useState(initialState);
  const [monthThree, setMonthThree] = useState(initialState);
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const reducedMonth1=monthOne.reduce(reducer)
  const reducedMonth2=monthTwo.reduce(reducer)
  const reducedMonth3=monthThree.reduce(reducer)
  const totalSales = reducedMonth1+reducedMonth2+reducedMonth3

  return (
    <div className="vatonsales">
      <div className="vatonsalestables">
        <DateDisplay />
        <VatMonthSales
        key={1}
          word={"sales"}
          values={monthOne}
          updateValues={setMonthOne}
          name="month_one"
        />
          <VatMonthSales
        key={2}
          word={"sales"}
          values={monthTwo}
          updateValues={setMonthTwo}
          name="month_two"
        />
          <VatMonthSales
        key={3}
          word={"sales"}
          values={monthThree}
          updateValues={setMonthThree}
          name="month_three"
        />
      </div>
      <br />
      <TotalsMessage showMessage={true} totalSales={totalSales} word="sales" />
      <PrintButton/>
    </div>
  );
};

export default VatOnSales;
