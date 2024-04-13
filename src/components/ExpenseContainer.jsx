import React, {useState} from 'react';
import ExpenseHeader from './ExpensesHeader'
import NewExpenseForm from './NewExpenseForm';
import ExpenseList from './ExpenseList';

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
          <ExpenseList
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
  