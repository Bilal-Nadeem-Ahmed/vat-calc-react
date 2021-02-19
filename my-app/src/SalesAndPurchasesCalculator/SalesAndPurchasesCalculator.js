/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import { useState } from 'react';
import VatOnSales from './sales/VatOnSales';
import VatOnPurchases from './purchases/VatOnPurchases';

const SalesAndPurchasesCalculator = () => {
  const [selectedTab, setSelectedTab] = useState(true);
  const [notSelectedTab, setNotSelectedTab] = useState(false);

  const handleClick = () => {
    if (selectedTab === true) {
      setSelectedTab(false);
      setNotSelectedTab(true);
    } else {
      setSelectedTab(true);
      setNotSelectedTab(false);
    }
  };

  return (
    <div className="tablecontainer">
      <div className="window">
        <div className="title-bar">
          <div className="title-bar-text">VAT On Sales & Purchases Calculator</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize" type="button" />
            <button aria-label="Maximize" type="button" />
            <button aria-label="Close" type="button" />
          </div>
        </div>
        <div className="window-body">
          <section className="tabs">
            <menu aria-label="Sample Tabs" hidden role="tablist">
              <button aria-controls="tab-a" aria-selected={selectedTab} onClick={handleClick} role="tab" type="button">
                <b>VAT on Sales</b>
              </button>
              <button
                aria-controls="tab-b"
                aria-selected={notSelectedTab}
                onClick={handleClick}
                role="tab"
                type="button"
              >
                <b>VAT on Purchases</b>
              </button>
            </menu>
            <article aria-controls="tab-a" hidden={notSelectedTab} id="tab-a" role="tabpanel" tabIndex="0">
              <VatOnSales />
            </article>
            <article aria-controls="tab-b" hidden={selectedTab} id="tab-b" role="tabpanel" tabIndex="0">
              <VatOnPurchases />
            </article>
          </section>
          <p>
            <a href="https://github.com/Bilal-Nadeem-Ahmed/vat-calc-react">GitHub Vat Calculator </a>{' '}
          </p>
          <p>
            <a href="https://github.com/botoxparty/XP.css/"> CSS Link</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SalesAndPurchasesCalculator;
