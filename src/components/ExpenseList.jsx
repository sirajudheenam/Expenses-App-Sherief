import EditExpenseForm from './EditExpenseForm';
import { formatFromDatePickerToDisplay } from '../utils/dateFormat';
import { useEffect, useState } from 'react';

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
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  const handleEditRow = (exp) => {
    setEditExpense(true);
    setDataToEdit(exp);
  };

  const handleDeleteRow = (targetIndex) => {
    setSortedData(sortedData.filter((_, i) => i !== targetIndex));
  };

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }

    const sorted = key === 'name'
      ? (direction === 'ascending' ? sortByNameAscending(sortedData) : sortByNameDescending(sortedData))
      : (direction === 'ascending' ? sortByCategoryAscending(sortedData) : sortByCategoryDescending(sortedData));

    setSortedData(sorted);
    setSortConfig({ key, direction });
  };

  useEffect(() => {
    setData(sortedData);
  }, [sortedData, setData]);

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
      {data.length > 0 && (
        <div className="expense__table">
          <table>
            <thead>
              <tr>
                <th>
                  Name
                  <button name="btnSortByName" onClick={() => handleSort('name')}>
                    <img src="/img/sort_a_z.png" alt="sortbyNamec" className='icon-asec' />
                  </button>
                </th>
                <th>
                  Category
                  <button name="btnSortByCategory" onClick={() => handleSort('category')}>
                    <img src="/img/sort_a_z.png" alt="sortByCategory" className='icon-asec' />
                  </button>
                </th>
                <th>Date of Expense</th>
                <th>Amount</th>
                <th>Updated At</th>
                <th>Created by</th>
                <th>Controls</th>
              </tr>
            </thead>
            <tbody id="tableBody">
              {sortedData.map((exp, i) => (
                <tr key={i}>
                  <td>{exp.name}</td>
                  <td>{exp.category}</td>
                  <td>{formatFromDatePickerToDisplay(exp.date)}</td>
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
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
