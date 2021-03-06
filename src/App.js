import "./App.css";
import VatCalc from "./pages/quickVatCalculations";
import "xp.css/dist/98.css";
import SalesAndPurchasesCalculator from "./pages/salesAndPurchasesCalculator";

//let stylesheet= "xp.css/dist/XP.css"
function App() {
  return (
    <div className="App">
      <VatCalc />
      <SalesAndPurchasesCalculator />
    </div>
  );
}

export default App;
