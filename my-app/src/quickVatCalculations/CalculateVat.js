/* eslint-disable radix */
const CalculateVat = ({ val, update }) => {
  const newVal = parseInt(val);
  const handleClick = (e) => {
    e.preventDefault();
    if (val === undefined) {
      // eslint-disable-next-line no-alert
      alert('Please Enter a valid Number');
    } else {
      update(` This VAT on this amount is${((newVal / 120) * 20).toFixed(2)}`);
    }
  };

  return (
    <button onClick={handleClick} type="button">
      Calculate Vat
    </button>
  );
};

export default CalculateVat;
