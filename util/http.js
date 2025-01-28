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
  console.log(userId, 'USER ID HERE')
  for (const key in response.data) {
    if (response.data[key].userId !== userId) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      title: response.data[key].title,
      description: response.data[key].description,
      date: new Date(response.data[key].date),
      category: response.data[key].category,
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