/* eslint-disable radix */
const RemoveVat = ({ val, update }) => {
  const newVal = parseInt(val);
  const handleClick = (e) => {
    e.preventDefault();
    if (val === undefined) {
      // eslint-disable-next-line no-alert
      alert('Please Enter a valid Number');
    } else {
      update(`This number with the VAT removed is ${((newVal / 120) * 100).toFixed(2)}`);
    }
  };

  return (
    <button onClick={handleClick} type="button">
      Remove Vat
    </button>
  );
};

export default RemoveVat;
