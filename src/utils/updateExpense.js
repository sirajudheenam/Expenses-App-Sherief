
// Update Expense data
// This function updates data upon submitting Edit Form
export const updateExpense = (array, dataToEdit) => {
    const index = array.findIndex((obj) => obj.id === dataToEdit.id);
    if (index === -1) {
      return array;
    }
    const updateddata = [
      ...array.slice(0, index),
      dataToEdit,
      ...array.slice(index + 1),
    ];
    return updateddata;
  }