import axios from "axios";

const BASE_URL = "https://expense-tracker-f6499-default-rtdb.europe-west1.firebasedatabase.app";

export async function storeExpense(expenseData) {
  try {
    const response = await axios.post(
      `${BASE_URL}/expenses.json?auth=${token}`,
      expenseData
    );
    const id = response.data.name
    return id;
  } catch (error) {
    console.error("Error storing data:", error.response ? error.response.data : error.message);
    throw error; 
  }
}

export async function getExpenses(userId) {
  const response = await axios.get(`${BASE_URL}/expenses.json`)
  const expenses = [];
  for (const key in response.data) {
    if (response.data[key].userId === userId) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      title: response.data[key].title,
      description: response.data[key].description,
      date: new Date(response.data[key].date),
      category: response.data[key].category,
      userId: response.data[key].userId
    }
    expenses.push(expenseObj);
  }
}
  return expenses;
}

export async function updateExpense(id, expenseData ) {
  return axios.put(`${BASE_URL}/expenses/${id}.json`, expenseData);
}

export async function deleteExpense(id) {
  return axios.delete(`${BASE_URL}/expenses/${id}.json`)
}

// Budget functions

export async function storeBudget(budgetData) {
  try {

    const response = await axios.post(
      `${BASE_URL}/budgets.json`,
      budgetData
    );
    const id = response.data.name;
    return id;
  } catch (error) {
    console.error("Error storing data:", error.response ? error.response.data : error.message);
    throw error;
  }
}

export async function getBudget(userId) {
  const response = await axios.get(`${BASE_URL}/budgets.json`);
  let budgets = [];
  for (const key in response.data) {
    if (response.data[key].userId === userId) {
      budgets.push({
        id: key,
        amount: response.data[key].amount,
        userId: response.data[key].userId
      }) 
    }
  }
  return budgets;
}

export async function updateBudget(id, budgetData) {
  return axios.put(`${BASE_URL}/budgets/${id}.json`, budgetData);
}

export async function deleteBudget(id) {
  return axios.delete(`${BASE_URL}/budgets/${id}.json`);
}