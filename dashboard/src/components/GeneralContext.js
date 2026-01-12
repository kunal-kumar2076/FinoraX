import React , { useState } from 'react';

import BuyActionWindow from './BuyActionWindow';
import SellActionWindow from './SellActionWindow';

// React context allows to share data/functions across entire component tree without passing props manually at every level
const GeneralContext = React.createContext ({
    openBuyWindow: (uid) => {},
    closeBuyWindow: () => {},
    // foe sell Action 
    openSellWindow : (uid) => {},
    closeSellWindow : () => {},
});

export const GeneralContextProvider = (props) => {
    // tracks wheteher the buy modal/window is open
    const [isBuyWindowOpen,setIsBuyWindowOpen] = useState(false); // window is hidden initially
    // stores the id of the stock with id 
    const [selectedBuyStockUID, setSelectedBuyStockUID] = useState("");

    const [isSellWindowOpen,setIsSellWindowOpen] = useState(false);
    const [selectedSellStockUID, setSelectedSellStockUID] = useState("");
    
    
    const handleOpenBuyWindow = (uid) => {
        setIsBuyWindowOpen(true); // open the buy window
        setSelectedBuyStockUID(uid); // stores which stock user wnats to buy
    };

    const handleCloseBuyWindow = () => {
        setIsBuyWindowOpen(false);
        setSelectedSellStockUID("");
    };
     
    // for sell action
    const handleOpenSellWindow = (uid) => {
        setIsSellWindowOpen(true); // open the buy window
        setSelectedSellStockUID(uid); // stores which stock user wnats to buy
    };

    const handleCloseSellWindow = () => {
        setIsSellWindowOpen(false);
        setSelectedSellStockUID("");
    };

    return(
        // this is the context provider for app it exposes functions and controls the buy window modal
        <GeneralContext.Provider
          value={{
            openBuyWindow: handleOpenBuyWindow,
            closeBuyWindow: handleCloseBuyWindow,
            openSellWindow: handleOpenSellWindow,
            closeSellWindow: handleCloseSellWindow,
          }}
        >
            {props.children}
            {isBuyWindowOpen && <BuyActionWindow uid={selectedBuyStockUID}/>}
            {isSellWindowOpen && <SellActionWindow uid={selectedSellStockUID}/>}
        </GeneralContext.Provider>
    );
};

export default GeneralContext;
