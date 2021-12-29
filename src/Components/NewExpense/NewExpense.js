import NewExpenseForm from "./NewExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpensedataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData)
  };
  return (
    <div className="new-expense">
      <NewExpenseForm onSaveExpenseData={saveExpensedataHandler} />
    </div>
  );
};

export default NewExpense;
