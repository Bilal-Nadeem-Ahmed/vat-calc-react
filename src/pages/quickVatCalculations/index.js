import { useState } from "react";

import CalculateVat from "./subcomponents/calculateVat";
import RemoveVat from "./subcomponents/removeVat";
import AddVat from "./subcomponents/addVat";

const VatCalc = () => {
  const style = {
    width: "40vw",
  };
  const [inp, setInp] = useState();
  const [Out, setOut] = useState();
  const [disp, setDisp] = useState("flex");
  let displ = { display: disp };
  const close = (e) => {
    e.preventDefault();
    setDisp("none");
  };

  return (
    <div className="vatcalc" style={displ}>
      <div className="window" style={style}>
        <div className="title-bar">
          <div className="title-bar-text">Quick VAT Calculations</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button
              onClick={(e) => {
                close(e);
              }}
              aria-label="Close"
            ></button>
          </div>
        </div>
        <div className="window-body">
          <div className="vatcal">
            <input
              id="green"
              onChange={(e) => {
                setInp(e.target.value);
              }}
              type="number"
            />
            <AddVat
              val={inp}
              update={(x) => {
                setOut(x);
              }}
            />
            <RemoveVat
              val={inp}
              update={(x) => {
                setOut(x);
              }}
            />
            <CalculateVat
              val={inp}
              update={(x) => {
                setOut(x);
              }}
            />
            <p>{Out}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VatCalc;
