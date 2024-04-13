export default function ExpenseHeader({ data, setData, newExpense, setNewExpense, sortByDateAscending, sortByDateDescending }) {
    const handleNewExpense = () => {
      setNewExpense(true);
    };
  
    const handleSortAsc = (data) => {
      setData(sortByDateAscending(data));
    }
    const handleSortDesc = (data) => {
      setData(sortByDateDescending(data));
    }
    return (
      <div className="expense__header">
        <p className="expense__header--title">MY EXPENSE MANAGER</p>
        <div className="expense__header--options">
          <button className="btn--filter" onClick={() => handleSortAsc(data)}>
            Date Asc
          </button>
          <button className="btn--filter" onClick={() => handleSortDesc(data)}>
            Date Desc
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