import { useState } from "react";
import VatMonth from "../VatMonth";
import DateDisplay from "../../../../components/dateDisplay";
import TotalsMessage from "../TotalsMessage";

const initialState = [...new Array(31)].map((i) => 0);

const VatOnSales = () => {
  const [monthOne, setMonthOne] = useState(initialState);

  return (
    <div className="vatonsales">
      <div className="vatonsalestables">
        {/* <DateDisplay /> */}
        <VatMonth
          word={"sales"}
          values={monthOne}
          updateValues={setMonthOne}
          // key="month_one"
          name="month_one"
        />
      </div>
      <br />
      <TotalsMessage showMessage="" totalSales={0} word="sales" />
    </div>
  );
};

export default VatOnSales;
