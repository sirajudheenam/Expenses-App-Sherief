import { useState } from "react";
import {
  formatDateFromData,
  formatFromDatePickerToDisplay,
  dateToDisplay,

  dateIsValid
} from "../utils/dateFormat";
export default function NewExpenseForm({
  data,
  setData,
  setNewExpense,
  setEditExpense,
  dataToEdit,
}) {
  const [formExp, setFormExp] = useState({
    name: "",
    category: "",
    date: new Date("10/06/1981"),
    amt: "",
    update: "Just Now",
    create: "",
  });

  const trackExpenseChange = (e) => {
    if (e.target.name === 'date') {
      console.log(`Entered Date is ? : ${e.target.value}`);
      console.log("Entered Date Valid ? : ", dateIsValid(e.target.value));
      console.log("Date Parsed: ", Date.parse(e.target.value)); // in seconds format
    }
    setFormExp({ ...formExp, [e.target.name]: e.target.value });
  };

  const handleChangeDate = (value) => {
    // console.log("Changed Date Value: ", value);
    // console.log("Changed Date Valid?: ", dateIsValid(value));

    const formattedDate = formatFromDatePickerToDisplay(value);
    setFormExp({ ...formExp, date: formattedDate });
  };

  const changeSubmit = (e) => {
    e.preventDefault();
    setData((data) => {
      return [...data, formExp];
    });

    setNewExpense(false);
  };

  return (
    <div className="newExpense__container">
      <form className="popup__add" onSubmit={changeSubmit}>
        <p className="expense__header--title">Create New Expense</p>
        <label>Name</label>
        <input
          type="text"
          placeholder="Name the Expense"
          id="nameAdd"
          className="input--add"
          value={formExp.name}
          name="name"
          onChange={(e) => trackExpenseChange(e)}
          required
        />
        <label>Description</label>
        <input
          type="text"
          placeholder="Describe the Expense"
          id="desAdd"
          className="input--add"
          value={formExp.description}
          name="description"
          onChange={(e) => trackExpenseChange(e)}
          required
        />
        <label>Category</label>
        <select
          id="myDropdown"
          className="input--add"
          value={formExp.category}
          name="category"
          onChange={(e) => trackExpenseChange(e)}
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
          value={formExp.date}
          default="10/06/1981"
          name="date"
          onChange={(e) => trackExpenseChange(e)}
          required
        />
        <label>Expense Amount</label>
        <input
          type="text"
          placeholder="Expense Amount in INR"
          id="amtAdd"
          className="input--add"
          value={formExp.amt}
          name="amt"
          onChange={(e) => trackExpenseChange(e)}
          required
        />
        <label>Created By</label>
        <input
          type="text"
          placeholder="Created by"
          id="createAdd"
          className="input--add"
          value={formExp.create}
          name="create"
          onChange={(e) => trackExpenseChange(e)}
          required
        />
        <div className="add-btns">
          <button className="btn--cancel" onClick={() => setNewExpense(false)}>
            Cancel
          </button>
          <button className="btn--createExpense" type="submit">
            Create Expense
          </button>
        </div>
      </form>
    </div>
  );
}