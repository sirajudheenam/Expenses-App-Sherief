export default function ExpenseHeader({ newExpense, setNewExpense, handleSort }) {
    const handleNewExpense = () => {
      setNewExpense(true);
      console.log("New Expense: ", newExpense);
    };
  
    return (
      <div className="expense__header">
        <p className="expense__header--title">MY EXPENSE MANAGER</p>
        <div className="expense__header--options">
          <button className="btn--filter" onClick={() => handleSort()}>
            Filter by Date of Expense
          </button>
          <input
            type="text"
            placeholder="Search Expense by Name"
            className="search--name"
          />
          <button className="btn--create" onClick={() => handleNewExpense()}>
            +New Expense
          </button>
        </div>
      </div>
    );
  }