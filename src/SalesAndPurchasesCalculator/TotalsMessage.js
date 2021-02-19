const TotalsMessage = ({ totalSales, totalPurchasesExludingVat, totalVatOnPurchases, showMessage, word }) => {
  const totalVatOnSales = ((totalSales / 120) * 20).toFixed(2);
  const styles = {
    display: showMessage,
  };
  if (word === 'sales') {
    return (
      <p style={styles}>
        The total <b>{word}</b> for this quater are <b>{totalSales.toFixed(2)}</b>. The total VAT due on <b>{word}</b>{' '}
        for this quater is <b>{totalVatOnSales}</b>
      </p>
    );
  }

  return (
    <p style={styles}>
      The total <b>{word}</b> for this quater are <b>{(totalPurchasesExludingVat + totalVatOnPurchases).toFixed(2)}</b>.
      The total VAT due on <b>{word}</b> for this quater is <b>{totalVatOnPurchases}</b>.The total <b>{word}</b> without
      Vat are <b>{totalPurchasesExludingVat}</b>
    </p>
  );
};

export default TotalsMessage;
