import { useState } from "react";
import VatMonth from "../VatMonth";
import DateDisplay from "../../../../components/dateDisplay";
import TotalsMessage from "../TotalsMessage";

const initialState = [...new Array(31)].map((i) => 0);

const VatOnSales = () => {
  const [monthOne, setMonthOne] = useState(initialState);
  const [monthTwo, setMonthTwo] = useState(initialState);
  const [monthThree, setMonthThree] = useState(initialState);

  return (
    <div className="vatonsales">
      <div className="vatonsalestables">
        <DateDisplay />
        <VatMonth
        key={1}
          word={"sales"}
          values={monthOne}
          updateValues={setMonthOne}
          name="month_one"
        />
          <VatMonth
        key={2}
          word={"sales"}
          values={monthTwo}
          updateValues={setMonthTwo}
          name="month_two"
        />
          <VatMonth
        key={1}
          word={"sales"}
          values={monthThree}
          updateValues={setMonthThree}
          name="month_three"
        />
      </div>
      <br />
      <TotalsMessage showMessage="" totalSales={0} word="sales" />
    </div>
  );
};

export default VatOnSales;
