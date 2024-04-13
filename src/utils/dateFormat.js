// Format MM-DD-YYYY to DD-MMM-YYYY 
export const formatDateFromData = (dateString) => {
  const dateParts = dateString.split('-'); // Split the input date string
  const year = dateParts[2];
  const month = dateParts[0];
  const day = dateParts[1];
  // Create a Date object using the parsed year, month, and day
  const dateObject = new Date(`${year}-${month}-${day}`);
  // Options for formatting the date
  const options = {
    day: '2-digit', // Format the day as two digits (e.g., '15')
    month: 'long', // Format the month as its full name (e.g., 'March')
    year: 'numeric' // Format the year as numeric (e.g., '2024')
  };
  // Format the date using Intl.DateTimeFormat
  const formattedDate = new Intl.DateTimeFormat('en-UK', options).format(dateObject);
  return formattedDate;
};

// Format YYYY-MM-DD to DD-MMM-YYYY 
export const formatFromDatePickerToDisplay = (dateString) => {
  // const dataPickerDate = '2024-11-06'
  const dateParts = dateString.split('-'); // Split the input date string
  const day = dateParts[2];
  const year = dateParts[0];
  const month = dateParts[1];

  // Create a Date object using the parsed year, month, and day
  const dateObject = new Date(`${year}-${month}-${day}`);

  // Options for formatting the date
  const options = {
    day: '2-digit', // Format the day as two digits (e.g., '15')
    month: 'long', // Format the month as its full name (e.g., 'March')
    year: 'numeric' // Format the year as numeric (e.g., '2024')
  };

  // Format the date using Intl.DateTimeFormat
  const formattedDate = new Intl.DateTimeFormat('en-UK', options).format(dateObject);

  return formattedDate;
};

// Format DD-MMM-YYYY to YYYY-MM-DD
export const formatFromDisplayToDatePicker = (dateString) => {

  const dateParts = dateString.split('-'); // Split the input date string
  const day = dateParts[0];
  const year = dateParts[2];
  const month = dateParts[1];

  // Create a Date object using the parsed year, month, and day
  const dateObject = new Date(`${year}-${month}-${day}`);

  // Options for formatting the date
  const options = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  };

  // Format the date using Intl.DateTimeFormat
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(dateObject);

  console.log('formattedDate: ', formattedDate);

  return formattedDate;
};

export const unixTimeZero = Date.parse('01 Jan 1970 00:00:00 GMT');
export const javaScriptRelease = Date.parse('04 Dec 1995 00:12:00 GMT');

export const dateIsValid = (date) => {
  return !Number.isNaN(new Date(date).getTime());
};

// Convert from string (MM-DD-YYYY) to string(YYYY-MM-DD)
export const convertDateMMDDYYYYtoYYYYMMDD = (dateString) => {

  // Split the original date string by '-'
  const parts = dateString.split('-');

  // Reorder the components to form 'YYYY-MM-DD'
  const formattedDate = `${parts[2]}-${parts[0].padStart(2, '0')}-${parts[1].padStart(2, '0')}`;

  return formattedDate;

};