/* eslint-disable no-alert */
/* eslint-disable radix */
const AddVat = ({ val, update }) => {
  const newVal = parseInt(val);
  const handleClick = (e) => {
    e.preventDefault();
    if (val === undefined) {
      alert('Please Enter a valid Number');
    } else {
      update(`This number with the VAT added is ${(newVal / 100) * 120}`);
    }
  };

  return (
    <button onClick={handleClick} type="button">
      Add Vat
    </button>
  );
};

export default AddVat;
