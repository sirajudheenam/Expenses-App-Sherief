import EditExpenseForm from './EditExpenseForm';
import { formatFromDatePickerToDisplay } from '../utils/dateFormat';
import { useCallback, useEffect, useState } from 'react';
export default function ExpenseList({
  data,
  setData,
  dataToEdit,
  setDataToEdit,
  editExpense,
  setEditExpense,
  sortByNameDescending,
  sortByNameAscending,
  sortByCategoryAscending,
  sortByCategoryDescending
}) {
  const [sortedData, setSortedData] = useState(data);
  const [sortedByNameAscending, setSortedByNameAscending] = useState(true);
  const [sortedByNameDescending, setSortedByNameDescending] = useState(false);
  const [sortedByCategoryAscending, setSortedByCategoryAscending] = useState(true);
  const [sortedByCategoryDescending, setSortedByCategoryDescending] = useState(false);

  const handleEditRow = (exp) => {
    setEditExpense(true);
    setDataToEdit(exp);
  };
  const handleDeleteRow = (targetIndex) => {
    setSortedData(
      sortedData.filter((_, i) => {
        return i !== targetIndex;
      })
    );
  };

  const handleSortByName = (sortedData) => {
    const tempData = sortedByNameDescending ? sortByNameDescending(sortedData) : sortByNameAscending(sortedData);
    setSortedData(tempData);
    setSortedByNameAscending((sortByNameAscending) => !sortByNameAscending);
    setSortedByNameDescending((sortByNameDescending) => !sortByNameDescending);
  };

  const handleSortByCategory = (sortedData) => {
    const tempData = sortedByCategoryDescending ? sortByCategoryDescending(sortedData) : sortByCategoryAscending(sortedData);
    setSortedData(tempData);
    setSortedByCategoryAscending((sortByCategoryAscending) => !sortByCategoryAscending);
    setSortedByCategoryDescending((sortByCategoryDescending) => !sortByCategoryDescending);
  };

  const changeData = useCallback( () => setData(sortedData), [sortedData, setData])
  useEffect(() => changeData(), [changeData]);

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
      {data.length > 0 &&
        <div className="expense__table">
          <table>
            <thead>
              <tr>
                <td>Name
                  <button name="btnSortByName" onClick={() => handleSortByName(sortedData)}>
                    <img src="/img/sort_a_z.png" alt="sortbyNamec" className='icon-asec' />
                  </button>
                </td>
                <td>Category
                  <button name="btnSortByCategory" onClick={() => handleSortByCategory(sortedData)}>
                    <img src="/img/sort_a_z.png" alt="sortByCategory" className='icon-asec' />
                  </button>
                </td>
                <td>Date of Expense</td>
                <td>Amount</td>
                <td>Updated At</td>
                <td>Created by</td>
                <td>Controls</td>
              </tr>
            </thead>
            <tbody id="tableBody">
              {data && data.map(function (exp, i) {
                return (
                  <tr key={i}>
                    <td>{exp.name}</td>
                    <td>{exp.category}</td>
                    {/* MM-DD-YYYY to DD-MMM-YYYY */}
                    {/* // to display in the list table */}
                    <td>{formatFromDatePickerToDisplay(exp.date)}</td>
                    {/* <td>{exp.date}</td> */}
                    <td>{exp.amt}</td>
                    <td>{exp.update}</td>
                    <td>{exp.create}</td>
                    <td>
                      <div className="table--btn">
                        <img
                          src="/img/pencil.png"
                          alt="edit"
                          className="btn--edit"
                          onClick={() => handleEditRow(exp)}
                        />
                        <img
                          src="/img/delete.png"
                          alt="btn-del"
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
      }
    </>
  );
}