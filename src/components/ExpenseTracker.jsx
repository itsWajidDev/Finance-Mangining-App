import React from 'react'

export default function ExpenseTracker({
    setAmount,
    setType,
    handleTransactions,
    transactions,
    type,
    amount
}) {


    const totalAmount = transactions.reduce(
        (acc, transactions) =>
          transactions.type == "income" ? acc + Number(transactions.amount) : acc,
        0
      );
      const totalExpense = transactions.reduce(
        (acc, transactions) =>
          transactions.type == "expense" ? acc + Number(transactions.amount) : acc,
        0
      );
    
      const balance = totalAmount - totalExpense;
    
      console.log(totalAmount);
  return (
    <div className="max-w-[800px] m-auto mt-2 bg-black border-b-gray-600 p-6 rounded-sm text-center">
        <h1 className="text-white font-bold">Finance App (Code aur Wajid)</h1>

       <div className="flex justify-center align-middle p-2  gap-2 rounded-md">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Add Amount"
            className="rounded-xl text-center"
          />
          <select
            className="rounded-xl"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>

          <button
            className="bg-green-600 p-2 rounded-lg cursor-pointer"
            onClick={handleTransactions}
          >
            Submit
          </button>
        </div>  
        <div className="flex justify-center gap-3 bg-slate-400 p-3">
          <div className="flex justify-center rounded-lg gap-4 ">
            <div className="bg-blue-600 p-2 text-green-950 rounded-md font-extrabold underline">
         
              <h3>Inome:{totalAmount}</h3> 
            </div>
            <div className="bg-blue-800 p-2 rounded-md text-yellow-400font-extrabold underline">
            
              <h3>Expense:{totalExpense}</h3>
            </div>
            <div className={`"bg-blue-400 p-2 text-cyan-100 rounded-md font-extrabold underline" ${balance >0 ? 'bg-green-500 p-3' : 'bg-red-600'}`}>
            
              <h3>Balance:{balance}</h3>
            </div>
          </div>
        </div>

        {transactions.map((data, i) => {
          return (
            <div
              key={i}
              className="flex justify-center gap-4 mt-2 bg-orange-400 max-w-[400px] m-auto"
            >
            
              <h1 className="text-cyan-50 mr-2">
             
                {i + 1}
                {")"}
                {data.amount}
              </h1>
              <h1
                className={`${
                  data.type === "income" ? "text-yellow-200" : "text-red-700"
                }`}
              >
             
                {data.type}
              </h1>
            </div>
          );
        })}
      </div> 
  )
}
