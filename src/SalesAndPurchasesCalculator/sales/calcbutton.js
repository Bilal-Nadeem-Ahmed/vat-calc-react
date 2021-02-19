/* eslint-disable radix */
/* eslint-disable no-plusplus */
const CalcButton = ({
  setSalesTotalsMonth1,
  setSalesTotalsMonth2,
  setSalesTotalsMonth3,
  setShowMessage,
  monthClasses,
}) => {
  const monthOneInput = document.getElementsByClassName(`${monthClasses[0]}-input`);
  const monthTwoInput = document.getElementsByClassName(`${monthClasses[1]}-input`);
  const monthThreeInput = document.getElementsByClassName(`${monthClasses[1]}-input`);

  const newArray = Array(31);
  const newArrayTwo = Array(31);
  const newArrayThree = Array(31);
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  const handleClick = (e) => {
    e.preventDefault();

    for (let i = 0; i < newArray.length; i++) {
      newArray[i] = parseInt(monthOneInput[i].value);
      newArrayTwo[i] = parseInt(monthTwoInput[i].value);
      newArrayThree[i] = parseInt(monthThreeInput[i].value);
    }
    setShowMessage('block');
    setSalesTotalsMonth1(newArray.reduce(reducer));
    setSalesTotalsMonth2(newArrayTwo.reduce(reducer));
    setSalesTotalsMonth3(newArrayThree.reduce(reducer));
  };
  function printDiv() {
    const printContents = document.querySelector('.tablecontainer').innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
  }

  return (
    <div>
      <button onClick={handleClick} type="button">
        Calculate
      </button>
      <button onClick={printDiv} type="button">
        Print
      </button>
    </div>
  );
};

export default CalcButton;
