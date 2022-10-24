import { Container } from "@mui/system";
import { useState } from "react";
import { ExpenseItemCreate } from "./components/Expense/ExpenseItemCreate/ExpenseItemCreate.component";
import { Expenses } from "./components/Expense/Expenses/Expenses.component";
import { ExpenseItemModel } from "./models/ExpenseItem.model";

function App() {
  const [expenseItemList, setExpenseItemList] = useState<ExpenseItemModel[]>([]);

  const addNewExpense = (data: ExpenseItemModel) => {
    const expenses = [...expenseItemList];

    expenses.unshift(data);

    setExpenseItemList(expenses);
  };


  return (
    <Container maxWidth='lg'>
      <ExpenseItemCreate returnNewExpense={addNewExpense} />
      <Expenses expenseItemList={expenseItemList} />
    </Container>
  );
};

export default App;
