import { useState } from 'react';
import CalculateVat from './CalculateVat';
import RemoveVat from './RemoveVat';
import AddVat from './AddVat';

const VatCalc = () => {
  const style = {
    width: '40vw',
  };
  const [inp, setInp] = useState();
  const [Out, setOut] = useState();
  const [disp, setDisp] = useState('flex');
  const displ = { display: disp };
  const close = (e) => {
    e.preventDefault();
    setDisp('none');
  };

  return (
    <div className="vatcalc" style={displ}>
      <div className="window" style={style}>
        <div className="title-bar">
          <div className="title-bar-text">Quick VAT Calculations</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize" type="submit" />
            <button aria-label="Maximize" type="submit" />
            <button
              aria-label="Close"
              onClick={(e) => {
                close(e);
              }}
              type="submit"
            />
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
              update={(x) => {
                setOut(x);
              }}
              val={inp}
            />
            <RemoveVat
              update={(x) => {
                setOut(x);
              }}
              val={inp}
            />
            <CalculateVat
              update={(x) => {
                setOut(x);
              }}
              val={inp}
            />
            <p>{Out}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VatCalc;
