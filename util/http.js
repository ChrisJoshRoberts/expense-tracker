import axios from "axios";

const BASE_URL = "https://expense-tracker-f6499-default-rtdb.europe-west1.firebasedatabase.app";

export async function storeExpense(expenseData) {
  try {
    const response = await axios.post(
      BASE_URL + "/expenses.json",
      expenseData
    );
    console.log("Data stored successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error storing data:", error.response ? error.response.data : error.message);
    throw error; // Re-throw the error so the calling code can handle it
  }
}

export async function getExpenses() {
  const response = await axios.get(BASE_URL + "/expenses.json")

  const expenses = [];
  console.log(response.data);
  for (const key in response.data) {
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
  return expenses;
}