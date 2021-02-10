import {  useState } from 'react';
import VatOnSales from './VatOnSales'
const ContainerForTables = () => {
    
    const [selectedTab,setSelectedTab]=useState(true);
    const [notSelectedTab,setNotSelectedTab]=useState(false);      
    
    const handleClick=()=>{
        if (selectedTab===true){
            setSelectedTab(false)
            setNotSelectedTab(true) 
        } else {
            setSelectedTab(true)
            setNotSelectedTab(false)
        }
    }

return (
    <div  className="tablecontainer">
        <div className="window"  >
            <div className="title-bar">
                <div className="title-bar-text">VAT On Sales & Purchases Calculator
                </div>
                <div className="title-bar-controls">
                <button aria-label="Minimize"></button>
                <button aria-label="Maximize"></button>
                <button aria-label="Close"></button>
            </div>
            </div>
            <div className="window-body">         
                <section className="tabs" >
                    <menu role="tablist"   hidden aria-label="Sample Tabs"> 
                    <button role="tab" onClick={handleClick} aria-selected={selectedTab} aria-controls="tab-a"><b>VAT on Sales</b></button>
                    <button role="tab" onClick={handleClick} aria-selected={notSelectedTab} aria-controls="tab-b"><b>VAT on Purchases</b></button>  
                    </menu>
                    <article role="tabpanel" tabIndex="0" aria-controls="tab-a" hidden={notSelectedTab} id="tab-a">
                        <VatOnSales/>
                    </article>
                    <article role="tabpanel" tabIndex="0" aria-controls="tab-b" hidden={selectedTab} id="tab-b">
                        <h1>hehkh</h1>
                    </article>
                </section>
                <p>Put github link here</p>
            </div>
        </div>
    </div>
    );
}
 
export default ContainerForTables;