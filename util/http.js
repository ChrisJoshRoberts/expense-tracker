import axios from "axios";

export function storeExpense(expenseData) {
  console.log("storeExpense", expenseData);

  axios
    .post(
      "https://expense-tracker-f6499-default-rtdb.europe-west1.firebasedatabase.app/expenses.json",
      expenseData,
      {
        headers: {
          "Content-Type": "application/json", // Explicitly set the content type
        },
      }
    )
    .then((response) => {
      console.log("Data stored successfully:", response.data);
    })
    .catch((error) => {
      console.error(
        "Error storing data:",
        error.response ? error.response.data : error.message
      );
    });
}
