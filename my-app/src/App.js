import logo from './logo.svg';
import './App.css';
import VatCalc from './quickVatCalculations/VatCalc';

import "xp.css/dist/98.css";
import ContainerForTables from './ContainerForTables';

function App() {
  return (
    <div className="App">
    <VatCalc/>
    
    <ContainerForTables/>

   </div>
  );
}

export default App;