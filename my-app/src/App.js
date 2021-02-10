import './App.css';
import VatCalc from './quickVatCalculations/VatCalc';
import "xp.css/dist/98.css" ;
import ContainerForTables from './SalesAndPurchasesCalculator/ContainerForTables';

//let stylesheet= "xp.css/dist/XP.css"
function App() {
  return (
    <div className="App">
    <VatCalc/>
    <ContainerForTables/>
   </div>
  );
}

export default App;