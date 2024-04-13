import React, {useState, useEffect} from 'react';
import ExpenseHeader from './ExpensesHeader'
import NewExpenseForm from './NewExpenseForm';
import ExpenseList from './ExpenseList';

import { 
  sortByCategoryAscending, 
  sortByCategoryDescending, 
  sortByDateAscending, 
  sortByDateDescending,
  sortByNameAscending,
  sortByNameDescending } from '../utils/sortData';

export default function ExpenseContainer({ data, setData }) {
  const [newExpense, setNewExpense] = useState(false);
  const [editExpense, setEditExpense] = useState(false);
  const [dataToEdit, setDataToEdit] = useState({});

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        setNewExpense(false)
      }
    };

    document.addEventListener('keydown', handleEscKey);

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, []); // Empty dependency array to run effect only once



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
            data={data}
            setData={setData}
            newExpense={newExpense}
            setNewExpense={setNewExpense}
            sortByDateAscending={sortByDateAscending} 
            sortByDateDescending={sortByDateDescending}
          />
          <ExpenseList
            data={data}
            setData={setData}
            dataToEdit={dataToEdit}
            setDataToEdit={setDataToEdit}
            editExpense={editExpense}
            setEditExpense={setEditExpense}
            sortByCategoryAscending={sortByCategoryAscending}
            sortByCategoryDescending={sortByCategoryDescending}
            sortByDateAscending={sortByDateAscending}
            sortByDateDescending={sortByDateDescending}
            sortByNameAscending={sortByNameAscending}
            sortByNameDescending={sortByNameDescending}

          />
        </div>
      </>
    );
  }
  