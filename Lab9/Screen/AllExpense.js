import { ExpensesContext } from "../context/expenses-context";
import { useContext } from "react";
import ExpensesOutput from "../Components/ExpensesOutput"; 
function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);
  return (
    <ExpensesOutput
      expenses={expensesCtx.expenses}
      expensesPeriod="Total"
      fallbackText="No registered expenses found!"
    />
  );
}
export default AllExpenses;
