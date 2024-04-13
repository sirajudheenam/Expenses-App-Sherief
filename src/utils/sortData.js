export function sortByNameAscending(arr) {
  try {
    if (!arr) {
      return null;
    }
    // Use the sort() method with a custom comparator function
    arr.sort((a, b) => {
      // Convert names to lowercase for case-insensitive sorting
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      // Compare names and return comparison result
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0; // Names are equal
    });
  } catch(e) {
    console.log(e);
  } 
  return arr;
  
   
  }
  
export function sortByNameDescending(arr) {
  try { 
    if (!arr) {
      return null;
    }
    // Use the sort() method with a custom comparator function
    arr && arr.sort((a, b) => {
      // Convert names to lowercase for case-insensitive sorting
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
  
      // Compare names in reverse order for descending sort
      if (nameA > nameB) return -1;
      if (nameA < nameB) return 1;
      return 0; // Names are equal
    });
  } catch(e) {
    console.log(e);
  }
  return arr;
}

export function sortByCategoryAscending(arr) {
  try {
    if (!arr) {
      return null;
    }
    // Use the sort() method with a custom comparator function
    arr.sort((a, b) => {
      // Convert names to lowercase for case-insensitive sorting
      const categoryA = a.category.toLowerCase();
      const categoryB = b.category.toLowerCase();
      // Compare names and return comparison result
      if (categoryA < categoryB) return -1;
      if (categoryA > categoryB) return 1;
      return 0; // Names are equal
    });
  } catch(e) {
    console.log(e);
  } 
  return arr;
  
   
  }
  
export function sortByCategoryDescending(arr) {
  try { 
    if (!arr) {
      return null;
    }
    // Use the sort() method with a custom comparator function
    arr && arr.sort((a, b) => {
      // Convert names to lowercase for case-insensitive sorting
      const categoryA = a.category.toLowerCase();
      const categoryB = b.category.toLowerCase();
  
      // Compare names in reverse order for descending sort
      if (categoryA > categoryB) return -1;
      if (categoryA < categoryB) return 1;
      return 0; // Names are equal
    });
  } catch(e) {
    console.log(e);
  }
  return arr;
}
