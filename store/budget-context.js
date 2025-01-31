import { createContext, useContext, useReducer } from "react"
import { AuthContext } from "./auth-context"
import { updateBudget as updateBudgetHttp } from '../util/http'

export const BudgetContext = createContext({
  budgets: [],
  addBudget: (amount) => {},
  setBudget: (amount) => {},
  updateBudget: (id, amount) => {},
  deleteBudget: (id) => {}
})

function budgetReducer(state, action) {
  switch(action.type) {
    case 'ADD' : 
      return [action.payload, ...state]
    case 'SET':
      return action.payload
    case 'UPDATE':
      const updateableBudgetIndex = state.findIndex((budget) => budget.id === action.payload.id)
      const updatableBudget = state[updateableBudgetIndex]
      const updatedItem = {...updatableBudget, ...action.payload.data}
      const updatedBudgets = [...state]
      updatedBudgets[updateableBudgetIndex] = updatedItem
      return updatedBudgets
    case 'DELETE':
      return state.filter((budget) => budget.id !== action.payload)
    default:
      return state
  }
}

function BudgetContextProvider({children}) {
  const authCtx = useContext(AuthContext)
  const userId = authCtx.userId
  const [budgetState, dispatch] = useReducer(budgetReducer, [])

  function addBudget(budgetData) {
    const budgetWithUserId = {...budgetData, userId: userId}
    dispatch({type: 'ADD', payload: budgetWithUserId})
  }
  function setBudget(budgets) {
    const userBudget = budgets.filter((budget) => budget.userId === userId)
    dispatch({type: 'SET', payload: userBudget})
  }
  function deleteBudget(id) {
    dispatch({type: 'DELETE', payload: id})
  }
  async function updateBudget(id, budgetData) {
    const budgetWithUserId = {...budgetData, userId: userId}
    await updateBudgetHttp(id, budgetWithUserId)
    dispatch({type: 'UPDATE', payload: {id: id, data: budgetWithUserId}})
  }
  const value = {
    budgets: budgetState,
    addBudget: addBudget,
    setBudget: setBudget,
    updateBudget: updateBudget,
    deleteBudget: deleteBudget
  }
  return (
    <BudgetContext.Provider value={value}>
      {children}
    </BudgetContext.Provider>
  )
}

export default BudgetContextProvider