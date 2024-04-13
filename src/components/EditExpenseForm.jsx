import { convertDateMMDDYYYYtoYYYYMMDD } from '../utils/dateFormat';
import { updateExpense } from '../utils/updateExpense';
export default function EditExpenseForm({
  data,
  setData,
  setEditExpense,
  dataToEdit,
  setDataToEdit,
}) {
  const changeExpense = (e) => {
    if (e.target.name === 'date') {
      //TODO:
      setDataToEdit({ ...dataToEdit, [e.target.name]: e.target.value });
      console.log("DATE is selected", e.target.value);
    } else {
      setDataToEdit({ ...dataToEdit, [e.target.name]: e.target.value });
    }
  };

  const handleEditExpense = (e, dataToEdit) => {
    e.preventDefault();
    const updatedData = updateExpense(data, dataToEdit);
    setData(updatedData);
    setEditExpense(false);
  };

  return (
    <div className="newExpense__container">
    <button >X</button>
      <div className="popup__add">
        <p className="expense__header--title">Edit Expense: [{dataToEdit.name}] </p>
        <label>Name</label>
        <input
          type="text"
          placeholder="Name the Expense"
          id="nameAdd"
          className="input--add"
          value={dataToEdit.name}
          name="name"
          onChange={(e) => changeExpense(e)}
          required
        />
        <label>Description</label>
        <input
          type="text"
          placeholder="Describe the Expense"
          id="desAdd"
          className="input--add"
          value={dataToEdit.description}
          name="description"
          onChange={(e) => changeExpense(e)}
          required
        />
        <label>Category</label>
        <select
          id="myDropdown"
          className="input--add"
          value={dataToEdit.category}
          name="category"
          onChange={(e) => changeExpense(e)}
          required
        >
          <option value="" disabled defaultValue>
            Select Category (drop-down)
          </option>
          <option value="Health">Health</option>
          <option value="Electronics">Electronics</option>
          <option value="Travel">Travel</option>
          <option value="Education">Education</option>
          <option value="Books">Books</option>
          <option value="Others">Others</option>
        </select>
        <label>Date</label>
        <input
          type="date"
          placeholder="Date of Expense (date picker)"
          id="dateAdd"
          className="input--add"
          value={convertDateMMDDYYYYtoYYYYMMDD(dataToEdit.date)}
          name="date"
          onChange={(e) => changeExpense(e)}
          required
        />
        <label>Expense Amount</label>
        <input
          type="text"
          placeholder="Expense Amount in INR"
          id="amtAdd"
          className="input--add"
          value={dataToEdit.amt}
          name="amt"
          onChange={(e) => changeExpense(e)}
          required
        />
        <label>Create By</label>
        <input
          type="text"
          placeholder="Create by"
          id="createAdd"
          className="input--add"
          value={dataToEdit.create}
          name="create"
          onChange={(e) => changeExpense(e)}
          required
        />
        <div className="add-btns">
          <button
            className="btn--createExpense"
            onClick={(e) => handleEditExpense(e, dataToEdit)}
          >
            Update Expense
          </button>
        </div>
      </div>
    </div>
  );
}