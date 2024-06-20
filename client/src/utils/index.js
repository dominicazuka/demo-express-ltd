

// Function to get error message from error object
export const getErrorMessage = (error) => {
  // console.log("error", error)
    let message = error.message;
    if (error.response) {
      message = error.response.data.message;
    }
    return message.toString();
};

//validate email
export const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  // passwordValidator.js
export const validatePassword = (password) => {
  // Regular expression for password validation
  const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  return re.test(password);
};


// Function to check if an object is empty
export const isEmpty = (obj) => {
    for (const key in obj) return false;
    return true;
};

// Function to convert a string to lowercase
export const lowerCase = (str) => {
    str = !str ? "" : str;
    return str.toString().toLowerCase();
};

// Function to generate a unique number
export const uniqueNumber = () => {
    const rand = Math.random().toString();
    const randString = rand.split(".").toString().substring(2, 7);
    return Number(randString);
};

// Function to format a number with commas
export const numberWithCommas = (num) => {
    return num?.toLocaleString('en-US') || '';
};

