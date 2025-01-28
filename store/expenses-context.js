import { createContext, useContext, useReducer } from "react"
import { AuthContext } from "./auth-context"

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({description, amount, title, date}) => {},
  setExpense: (expenses) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, {description, amount, title, date}) => {},
})

function expenseReducer(state, action) {
  switch(action.type) {
    case 'ADD' :
      return [action.payload, ...state]
    case 'SET':
      const inverted = action.payload.reverse()
      return inverted
    case 'UPDATE': 
      const updateableExpenseIndex = state.findIndex((expense) => expense.id === action.payload.id)
      const updatableExpense = state[updateableExpenseIndex]
      const updatedItem = {...updatableExpense, ...action.payload.data}
      const updatedExpenses = [...state]
      updatedExpenses[updateableExpenseIndex] = updatedItem
      return updatedExpenses
    case 'DELETE':
      return state.filter((expense) => expense.id !== action.payload)
    default: 
      return state
  }
}

function ExpensesContextProvider({children}) {
  const authCtx = useContext(AuthContext)
  const userId = authCtx.userId
  const [expenseState, dispatch] = useReducer(expenseReducer, [])

  function addExpense(expenseData) {
    const expenseWithUserId = {...expenseData, userId: userId}
    dispatch({type: 'ADD', payload: expenseWithUserId})
  }
  function setExpense(expenses) {
    const userExpense = expenses.filter((expense) => expense.userId === userId)
    dispatch({type: 'SET', payload: userExpense})
  }
  function deleteExpense(id) {
    dispatch({type: 'DELETE', payload: id})
  }
  function updateExpense(id, expenseData){
    const expenseWithUserId = {...expenseData, userId: userId}
    dispatch({type: 'UPDATE', payload: {id: id, data: expenseWithUserId}})
  }
  const value = {
    expenses: expenseState,
    addExpense: addExpense,
    setExpense: setExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense
  }
  return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>
}

export default ExpensesContextProvider