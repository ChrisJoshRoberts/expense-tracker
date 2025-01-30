import axios from "axios";

const BASE_URL = "https://expense-tracker-f6499-default-rtdb.europe-west1.firebasedatabase.app";

export async function storeExpense(expenseData) {
  try {
    const response = await axios.post(
      BASE_URL + "/expenses.json",
      expenseData
    );
    const id = response.data.name
    console.log("Data stored successfully:", response.data);
    return id;
  } catch (error) {
    console.error("Error storing data:", error.response ? error.response.data : error.message);
    throw error; 
  }
}

export async function getExpenses(userId) {
  const response = await axios.get(BASE_URL + "/expenses.json")
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

export function updateExpense(id, expenseData ) {
  return axios.put(BASE_URL + `/expenses/${id}.json`, expenseData);
}

export function deleteExpense(id) {
  return axios.delete(BASE_URL + `/expenses/${id}.json`)
}

// Budget functions

export async function storeBudget(budgetData) {
  try {
    const response = await axios.post(
      BASE_URL + '/budgets.json', 
      budgetData
    )
    const id = response.data.name
    console.log('Budget stored successfully:', response.data)
    return id
  } catch {
    console.error('Error storing budget:', error.response ? error.response.data : error.message)
    throw error
  }
}

export async function getBudget(userId) {
  const response = await axios.get(BASE_URL + '/budgets.json')
  const budgets = []
  for (const key in response.data) {
    if (response.data[key].userId === userId) {
      const budgetObj = {
        id: key, 
        amount: response.data[key].amount,
        userId: response.data[key].userId,
        budgetId: response.data[key].budgetId
      }
      budgets.push(budgetObj)
    } 
  }
  return budgets
}

export function updateBudget(id, budgetData) {
  if (!id) {
    console.error('No ID provided to updateBudget');
    return;
  }

  return axios.put(BASE_URL + `/budgets/${id}.json`, budgetData)
    .then(response => {
      console.log('Firebase response:', response.data);
    })
    .catch(error => {
      console.error('Error updating budget in Firebase:', error);
    });
}
