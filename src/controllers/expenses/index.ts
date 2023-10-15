//Delete after a while, it is just to test the response.
const data = {
  name: "Bread",
};

// Single Expense requests

export const createExpense = () => {
  return new Response(JSON.stringify(data));
};

export const readExpense = () => {};

export const updateExpense = () => {};

export const deleteExpense = () => {};

//Multiple Expense requets

export const createExpenses = () => {
  return new Response();
};

export const readExpenses = () => {};

export const updateExpenses = () => {};

export const deleteExpenses = () => {};
