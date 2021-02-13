import { useState } from "react";
import TableRows from "./TableRows";
import TableRowsPurchases from "./TableRows";

const Input = ({ value, onChange }) => (
  <input value={value} onChange={onChange} key={Math.random()} />
);

const VatMonth = ({ word, values, updateValues, name }) => {
  const [totals, setTotals] = useState(values);

  const obj = [];
  const addToArray = (a) => {
    obj.push(a);
  };

  const Title = () => {
    if (word === "Purchases") {
      return (
        <tr>
          <th> {word} excl Vat</th>
          <th> Vat On {word}</th>
        </tr>
      );
    }

    return (
      <tr>
        <th> Total {word}</th>
        <th> Vat On {word}</th>
      </tr>
    );
  };

  const handleChange = (e, index) => {
    e.preventDefault();
    const inputValue = e.target.value;

    const newValues = [...values];
    newValues[index] = Number(inputValue);

    console.log(newValues);
    setTotals(newValues);
  };

  return (
    <div>
      <h3>{name}</h3>
      <table>
        <thead>
          <Title />
        </thead>
        <tbody>
          {totals.map((value, index) => {
            return (
              <tr key={`${value}-${index}`}>
                <td>
                  <Input
                    value={value}
                    onChange={(v) => handleChange(v, index)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default VatMonth;
