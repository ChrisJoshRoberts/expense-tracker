import axios from "axios";
import { getAuth } from "firebase/auth";

const BASE_URL = "https://expense-tracker-f6499-default-rtdb.europe-west1.firebasedatabase.app";

async function getAuthToken() {
  const auth = getAuth();
  const user = await auth.currentUser;
  return user ? await user.getIdToken() : null;
}

export async function storeExpense(expenseData) {
  try {
    const token = await getAuthToken();
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
  const token = await getAuthToken();
  const response = await axios.get(`${BASE_URL}/expenses.json?auth=${token}`)
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
  const token =  await getAuthToken();
  return axios.put(`${BASE_URL}/expenses/${id}.json?auth=${token}`, expenseData);
}

export async function deleteExpense(id) {
  const token = await getAuthToken();
  return axios.delete(`${BASE_URL}/expenses/${id}.json?auth=${token}`)
}

// Budget functions

export async function storeBudget(budgetData) {
  try {
    const token = await getAuthToken();
    const response = await axios.post(
      `${BASE_URL}/budgets.json?auth=${token}`,
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
  const token = await getAuthToken();
  const response = await axios.get(`${BASE_URL}/budgets.json?auth=${token}`);
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
  const token = await getAuthToken();
  return axios.put(`${BASE_URL}/budgets/${id}.json?auth=${token}`, budgetData);
}

export async function deleteBudget(id) {
  const token = await getAuthToken();
  return axios.delete(`${BASE_URL}/budgets/${id}.json?auth=${token}`);
}