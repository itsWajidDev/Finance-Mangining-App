import React from 'react';

export default function ExpenseTracker({
  setAmount,
  setType,
  handleTransactions,
  transactions,
  type,
  amount,
}) {
  const totalAmount = transactions.reduce(
    (acc, transactions) =>
      transactions.type === 'income' ? acc + Number(transactions.amount) : acc,
    0
  );
  const totalExpense = transactions.reduce(
    (acc, transactions) =>
      transactions.type === 'expense' ? acc + Number(transactions.amount) : acc,
    0
  );

  const balance = totalAmount - totalExpense;

  return (
    <div className="max-w-[800px] mx-auto mt-4 bg-gray-900 p-8 rounded-lg shadow-lg text-center">
      <h1 className="text-white font-bold text-2xl mb-4">
        Finance App (Code aur Wajid)
      </h1>

      {/* Input Section */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 p-4 bg-gray-800 rounded-lg">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Add Amount"
          className="w-full sm:w-1/3 p-2 rounded-lg text-center bg-gray-700 text-white focus:outline-none"
        />
        <select
          className="w-full sm:w-1/4 p-2 rounded-lg bg-gray-700 text-white focus:outline-none"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <button
          className="w-full sm:w-1/5 bg-green-600 p-2 rounded-lg text-white hover:bg-green-700 transition-colors duration-200"
          onClick={handleTransactions}
        >
          Submit
        </button>
      </div>

      {/* Display Totals */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 bg-gray-700 p-4 rounded-lg text-white">
        <div className="bg-blue-600 p-4 rounded-md">
          <h3 className="font-bold">Income</h3>
          <p className="text-xl font-extrabold">${totalAmount}</p>
        </div>
        <div className="bg-blue-800 p-4 rounded-md">
          <h3 className="font-bold">Expense</h3>
          <p className="text-xl font-extrabold">${totalExpense}</p>
        </div>
        <div
          className={`p-4 rounded-md font-extrabold ${
            balance > 0 ? 'bg-green-600' : 'bg-red-600'
          }`}
        >
          <h3 className="font-bold">Balance</h3>
          <p className="text-xl">${balance}</p>
        </div>
      </div>

      {/* Transaction List */}
      <div className="mt-6 space-y-4">
        {transactions.map((data, i) => {
          return (
            <div
              key={i}
              className="flex justify-between p-4 bg-orange-400 rounded-md shadow-md text-white"
            >
              <span className="font-bold">{i + 1}.</span>
              <span className="text-lg font-bold">{data.amount}</span>
              <span
                className={`font-bold ${
                  data.type === 'income' ? 'text-white' : 'text-red-700'
                }`}
              >
                {data.type}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
