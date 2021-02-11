import './App.css';
import VatCalc from './quickVatCalculations/VatCalc';
import "xp.css/dist/98.css" ;
import SalesAndPurchasesCalculator from './SalesAndPurchasesCalculator/SalesAndPurchasesCalculator';

//let stylesheet= "xp.css/dist/XP.css"
function App() {
  return (
    <div className="App">
    <VatCalc/>
    <SalesAndPurchasesCalculator/>
   </div>
  );
}

export default App;