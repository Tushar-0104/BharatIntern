// Sample data for Market Watch and Positions
const marketWatchData = [
    { symbol: 'ABC', lastPrice: 100, change: 2, changePercentage: 2.00 },
    { symbol: 'DEF', lastPrice: 200, change: -1, changePercentage: -0.50 },
    { symbol: 'GHI', lastPrice: 150, change: 5, changePercentage: 3.33 },
  ];
  
  const positionsData = [
    { symbol: 'ABC', avgPrice: 95, quantity: 100, currValue: 10000, profitLoss: 500 },
    { symbol: 'DEF', avgPrice: 205, quantity: 50, currValue: 10000, profitLoss: -250 },
  ];
  
  // Function to populate Market Watch table
  function populateMarketWatchTable() {
    const tableBody = document.querySelector('#market-watch-table tbody');
  
    marketWatchData.forEach((item) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${item.symbol}</td>
        <td>${item.lastPrice}</td>
        <td>${item.change}</td>
        <td>${item.changePercentage}%</td>
      `;
      tableBody.appendChild(row);
    });
  }
  
  // Function to populate Positions table
  function populatePositionsTable() {
    const tableBody = document.querySelector('#positions-table tbody');
  
    positionsData.forEach((item) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${item.symbol}</td>
        <td>${item.avgPrice}</td>
        <td>${item.quantity}</td>
        <td>${item.currValue}</td>
        <td>${item.profitLoss}</td>
      `;
      tableBody.appendChild(row);
    });
  }
  
  // Call the functions to populate the tables
  populateMarketWatchTable();
  populatePositionsTable();
  