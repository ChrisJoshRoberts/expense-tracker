import axios from "axios";

export async function storeExpense(expenseData) {
  console.log("storeExpense", expenseData);
  try {
    const response = await axios.post(
      "https://expense-tracker-f6499-default-rtdb.europe-west1.firebasedatabase.app/expenses.json",
      expenseData
    );
    console.log("Data stored successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error storing data:", error.response ? error.response.data : error.message);
    throw error; // Re-throw the error so the calling code can handle it
  }
}
