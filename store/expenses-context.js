import { createContext, useReducer } from "react"

const dummyExpenses = [
  {
    id: '1',
    title: 'Groceries',
    description: 'buying daily groceries',
    amount: 94.12,
    date: new Date(2025, 1, 10),
  },
  {
    id: '2',
    title: 'Rent',
    description: 'monthly rent',
    amount: 800.0,
    date: new Date(2021, 6, 1),
  },
  {
    id: '3',
    title: 'Insurance',
    description: 'monthly insurance',
    amount: 294.67,
    date: new Date(2021, 5, 20),
  },
  {
    id: '4',
    title: 'Internet',
    description: 'monthly internet',
    amount: 45.0,
    date: new Date(2021, 6, 16),
  },
  {
    id: '5',
    title: 'Electricity',
    description: 'monthly electricity',
    amount: 150.0,
    date: new Date(2021, 6, 10),
  },
  {
    id: '6',
    title: 'Water',
    description: 'monthly water',
    amount: 100.0,
    date: new Date(2021, 6, 5),
  },
  {
    id: '7',
    title: 'Car Payment',
    description: 'monthly car payment',
    amount: 350.0,
    date: new Date(2021, 6, 3),
  },
  {
    id: '8',
    title: 'Fuel',
    description: 'monthly fuel',
    amount: 200.0,
    date: new Date(2021, 6, 2),
  },
  {
    id: '9',
    title: 'Entertainment',
    description: 'monthly entertainment',
    amount: 100.0,
    date: new Date(2021, 6, 1),
  },
  {
    id: '10',
    title: 'Phone',
    description: 'monthly phone bill',
    amount: 50.0,
    date: new Date(2021, 6, 1),
  },
  {
    id: '11',
    title: 'Gym',
    description: 'monthly gym membership',
    amount: 50.0,
    date: new Date(2021, 6, 1),
  }

]

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({description, amount, title, date}) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, {description, amount, title, date}) => {},
})

function expenseReducer(state, action) {
  switch(action.type) {
    case 'ADD' :
      const id = new Date().toString() + Math.random().toString()
      return [{...action.payload, id: id}, ...state]
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
  const [expenseState, dispatch] = useReducer(expenseReducer, dummyExpenses)

  function addExpense(expenseData) {
    dispatch({type: 'ADD', payload: expenseData})
  }
  function deleteExpense(id) {
    dispatch({type: 'DELETE', payload: id})
  }
  function updateExpense(id, expenseData){
    dispatch({type: 'UPDATE', payload: {id: id, data: expenseData}})
  }
  const value = {
    expenses: expenseState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense
  }
  return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>
}

export default ExpensesContextProvider