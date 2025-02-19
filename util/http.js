import axios from "axios";

const BASE_URL = "https://expense-tracker-f6499-default-rtdb.europe-west1.firebasedatabase.app";
const API_KEY = "YOUR_FIREBASE_API_KEY"; // Replace with your Firebase API key

async function getAuthToken() {
  const user = {
    email: "user@example.com", // Replace with the user's email
    password: "user_password", // Replace with the user's password
    returnSecureToken: true
  };

  const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`, user);
  return response.data.idToken;
}

export async function storeExpense(expenseData) {
  try {
    const token = await getAuthToken();
    const response = await axios.post(
      BASE_URL + "/expenses.json",
      expenseData,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    const id = response.data.name;
    return id;
  } catch (error) {
    console.error("Error storing data:", error.response ? error.response.data : error.message);
    throw error;
  }
}

export async function getExpenses(userId) {
  const token = await getAuthToken();
  const response = await axios.get(BASE_URL + "/expenses.json", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
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
      };
      expenses.push(expenseObj);
    }
  }
  return expenses;
}

export async function updateExpense(id, expenseData) {
  const token = await getAuthToken();
  return axios.put(BASE_URL + `/expenses/${id}.json`, expenseData, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}

export async function deleteExpense(id) {
  const token = await getAuthToken();
  return axios.delete(BASE_URL + `/expenses/${id}.json`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}

// Budget functions

export async function storeBudget(budgetData) {
  try {
    const token = await getAuthToken();
    const response = await axios.post(
      BASE_URL + "/budgets.json",
      budgetData,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
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
  const response = await axios.get(BASE_URL + "/budgets.json", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  let budgets = [];
  for (const key in response.data) {
    if (response.data[key].userId === userId) {
      budgets.push({
        id: key,
        amount: response.data[key].amount,
        userId: response.data[key].userId
      });
    }
  }
  return budgets;
}

export async function updateBudget(id, budgetData) {
  const token = await getAuthToken();
  return axios.put(BASE_URL + `/budgets/${id}.json`, budgetData, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}

export async function deleteBudget(id) {
  const token = await getAuthToken();
  return axios.delete(BASE_URL + `/budgets/${id}.json`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}