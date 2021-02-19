import { useState } from 'react';

const TableRows = ({ desc, word, addtoarr }) => {
  const [val, setVal] = useState(0);
  const [vatVal, setVatVal] = useState(0);

  const handleClick = (e) => {
    e.target.value = '';
    setTimeout(() => {
      // eslint-disable-next-line no-unused-expressions
      e.target.value === '' ? (e.target.value = 0) : 0;
    }, 2500);
  };

  const handleChange = (e) => {
    setVal(e.target.value);
  };

  const handleChangeVat = (e) => {
    setVatVal(e.target.value);
  };

  const VatOnPurchasesInput = () => (
    <input
      className={`${desc}vat-input`}
      defaultValue={((vatVal / 100) * 20).toFixed(2)}
      min={1}
      onChange={(e) => {
        e.preventDefault();
        addtoarr(e.target.val);
      }}
      onClick={(e) => handleClick(e)}
      type="number"
    />
  );

  if (word === 'sales') {
    return (
      <tr>
        <td>
          <input
            className={`${desc}-input`}
            defaultValue={0}
            min={1}
            onChange={(e) => handleChange(e)}
            onClick={(e) => handleClick(e)}
            type="number"
          />
        </td>
        <td>{((val / 120) * 20).toFixed(2)}</td>
      </tr>
    );
  }

  return (
    <tr>
      <td>
        <input
          className={`${desc}-input`}
          defaultValue={0}
          min={1}
          onChange={(e) => handleChangeVat(e)}
          onClick={(e) => handleClick(e)}
          type="number"
        />
      </td>
      <td>
        <VatOnPurchasesInput />
      </td>
    </tr>
  );
};

export default TableRows;
