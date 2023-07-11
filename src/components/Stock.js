import React from "react";

function Stock({ stock, stockAction }) {

  return (
    <div>
      <div className="card">
        <div className="card-body" onClick={() => stockAction(stock)}>
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
