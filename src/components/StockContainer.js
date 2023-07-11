import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, buyStock }) {

  const stockComponent = stocks.map((stock) => (
      <Stock key={stock.id} stock={stock} stockAction={buyStock}/> 
  ))
  
  return (
    <div>
      <h2>Stocks</h2>
      {stockComponent}
    </div>
  );
}

export default StockContainer;
