import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

const API = "http://localhost:3001/stocks"

function MainContainer() {
  const [portfolio, setPortfolio] = useState([])
  const [category, setCategory] = useState("")
  const [stocks, setStocks] = useState([])

  useEffect(() => {
    fetch(API)
    .then(res => res.json())
    .then((data) => {
      const updatedStocks = data.map((stocks) => (stocks))
      setStocks(updatedStocks)
    })
  }, []);
  
  const buyStock = (stockToAdd) => {
    // Take object and check if it's in our portfolio already.
    const stockInPortfolio = portfolio.find((selectedStock) => stockToAdd === selectedStock)
    // Take object and spread it into our portfolio, if it is not in our portfolio already.
    if (!stockInPortfolio) {
      setPortfolio([...portfolio, stockToAdd])
    };
  }

  const sellStock = (stockToSell) => {
    //Take ID and create a new array without the ID.
    //If ID is in portfolio, remove from state-Portfolio. 
    //Future stretch deliverable will be to assign unique ID's to bought stocks, so that Sell Stock doesn't sell all of X stock. 
    const stockToRemove = portfolio.filter((selectedStock) => (stockToSell != selectedStock))
    setPortfolio(stockToRemove)
  }

  const filterByCategory = (event) => {
    const newCategory = event.target.value
    setCategory(newCategory);
    const filteredStocks = stocks.filter((stock) => stock.type === newCategory)
      //This needs to be altered so original stocks isn't mutated. 
      //Right now it mutates the original stocks variable so different categories can't be found. 
    setStocks(filteredStocks)
  }

  return (
    <div>
      <SearchBar category={category} filterByCategory={filterByCategory}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} buyStock={buyStock}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} sellStock={sellStock}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
