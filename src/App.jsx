import { useState } from "react";
import ExpenseTracker from "./components/ExpenseTracker";

function App() {
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("income");
  const [transactions, setTransaction] = useState([]);

  const handleTransactions = () => {
    console.log("amount", amount);
    console.log("type", type);

    setTransaction([...transactions, { amount, type }]);
    setAmount("");
  };

 

  return (
    <>
   
      <ExpenseTracker setAmount={setAmount}  handleTransactions={handleTransactions} setType={setType} transactions={transactions} type={type} amount={amount}/>

    </>
  );
}

export default App;
