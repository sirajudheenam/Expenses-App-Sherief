import React, { useState } from "react";

function ExpenseHeader({ newExpense, setNewExpense, handleSort }) {
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

function NewExpenseForm({
  data,
  setData,
  setNewExpense,
  setEditExpense,
  dataToEdit,
}) {
  const [formExp, setFormExp] = useState({
    name: "",
    category: "",
    date: new Date().toLocaleDateString(),
    amt: "",
    update: "Just Now",
    create: "",
  });

  const changeExpense = (e) => {
    setFormExp({ ...formExp, [e.target.name]: e.target.value });
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
          onChange={changeExpense}
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
          onChange={changeExpense}
          required
        />
        <label>Category</label>
        <select
          id="myDropdown"
          className="input--add"
          value={formExp.category}
          name="category"
          onChange={changeExpense}
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
          name="date"
          onChange={changeExpense}
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
          onChange={changeExpense}
          required
        />
        <label>Create By</label>
        <input
          type="text"
          placeholder="Create by"
          id="createAdd"
          className="input--add"
          value={formExp.create}
          name="create"
          onChange={changeExpense}
          required
        />
        <div className="add-btns">
          <button className="btn--cancle" onClick={() => setNewExpense(false)}>
            Cancel
          </button>
          <button className="btn--crtExp" type="submit">
            Create Expense
          </button>
        </div>
      </form>
    </div>
  );
}

function EditExpenseForm({
  data,
  setData,
  setEditExpense,
  dataToEdit,
  setDataToEdit,
}) {
  const changeExpense = (e) => {
    console.log(`Changed Item is (${e.target.name}):  ${e.target.value}`);
    setDataToEdit({ ...dataToEdit, [e.target.name]: e.target.value });
    console.log("dataToEdit: " + dataToEdit);
  };

  function updateObjectInData(array, dataToEdit) {
    const index = array.findIndex((obj) => obj.id === dataToEdit.id);

    if (index === -1) {
      return array;
    }
    console.log("Index: " + index);

    const updateddata = [
      ...array.slice(0, index),
      dataToEdit,
      ...array.slice(index + 1),
    ];

    console.log("Updated data: ", updateddata);
    return updateddata;
  }

  const handleEditExpense = (e, dataToEdit) => {
    console.log("dataToEdit: 1", dataToEdit);
    e.preventDefault();

    const updatedData = updateObjectInData(data, dataToEdit);
    setData(updatedData);
    console.log("dataToEdit : 2", dataToEdit);
    console.log("data : 2", data);
    setEditExpense(false);
  };

  return (
    <div className="newExpense__container">
      <div className="popup__add">
        <p className="expense__header--title">Create New Expense</p>
        <label>Name</label>
        <input
          type="text"
          placeholder="Name the Expense"
          id="nameAdd"
          className="input--add"
          value={dataToEdit.name}
          name="name"
          onChange={changeExpense}
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
          onChange={changeExpense}
          required
        />
        <label>Category</label>
        <select
          id="myDropdown"
          className="input--add"
          value={dataToEdit.category}
          name="category"
          onChange={changeExpense}
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
          value={dataToEdit.date}
          name="date"
          onChange={changeExpense}
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
          onChange={changeExpense}
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
          onChange={changeExpense}
          required
        />
        <div className="add-btns">
          <button
            className="btn--crtExp"
            onClick={(e) => handleEditExpense(e, dataToEdit)}
          >
            Update Expense
          </button>
        </div>
      </div>
    </div>
  );
}

function Table({
  data,
  setData,
  dataToEdit,
  setDataToEdit,
  editExpense,
  setEditExpense,
}) {
  const handleEditRow = (exp) => {
    setEditExpense(true);
    setDataToEdit(exp);
  };
  const handleDeleteRow = (targetIndex) => {
    setData(
      data.filter((_, i) => {
        return i !== targetIndex;
      })
    );
  };

  return (
    <>
      {editExpense && (
        <EditExpenseForm
          data={data}
          setData={setData}
          setEditExpense={setEditExpense}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
      )}
      <div className="expense__table">
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Category</td>
              <td>Date of Expense</td>
              <td>Amount</td>
              <td>Updated At</td>
              <td>Created by</td>
              <td>Btns</td>
            </tr>
          </thead>
          <tbody id="tableBody">
            {data.map(function (exp, i) {
              return (
                <tr key={i}>
                  <td>{exp.name}</td>
                  <td>{exp.category}</td>
                  <td>{exp.date}</td>
                  <td>{exp.amt}</td>
                  <td>{exp.update}</td>
                  <td>{exp.create}</td>
                  <td>
                    <div className="table--btn">
                      <img
                        src="./img/pencil.png"
                        alt="edit"
                        className="btn--edit"
                        onClick={() => handleEditRow(exp)}
                      />
                      <img
                        src="./img/delete.png"
                        alt="-del"
                        className="btn--del"
                        onClick={() => handleDeleteRow(i)}
                      />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default function ExpenseContainer({ data, setData }) {
  const [newExpense, setNewExpense] = useState(false);
  const [editExpense, setEditExpense] = useState(false);
  const [dataToEdit, setDataToEdit] = useState({});

  const handleSort = () => {
  
    const parseDate = (dateStr) => {
      return new Date(dateStr);
    };

 
    const sortByDateAscending = (data) => {
      return data.slice().sort((a, b) => {
        const dateA = parseDate(a.date);
        const dateB = parseDate(b.date);
        return dateA - dateB;
      });
    };

    setData((data) => {
      return sortByDateAscending(data);
    });
  };

  return (
    <>
      {newExpense && (
        <NewExpenseForm
          data={data}
          setData={setData}
          newExpense={newExpense}
          setNewExpense={setNewExpense}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
      )}
      <div className="expense__container">
        <ExpenseHeader
          newExpense={newExpense}
          setNewExpense={setNewExpense}
          handleSort={handleSort}
        />
        <Table
          data={data}
          setData={setData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
          editExpense={editExpense}
          setEditExpense={setEditExpense}
        />
      </div>
    </>
  );
}
