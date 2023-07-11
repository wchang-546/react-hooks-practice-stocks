import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio, sellStock }) {
  const stockPortfolio = portfolio.map((stock) => (
    <Stock key={stock.id} stock={stock} stockAction={sellStock} />
  ))

  return (
    <div>
      <h2>My Portfolio</h2>
      {stockPortfolio}
    </div>
  );
}

export default PortfolioContainer;
