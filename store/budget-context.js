import { createContext, useContext, useReducer } from "react";
import { AuthContext } from "./auth-context";


export const BudgetContext = createContext({
  budget: null,
  setBudget: (amount) => {},
  updateBudget: (amount) => {},
});

const budgetReducer = (state, action) => {
  switch(action.type) {
    case 'SET':
      return {...state , budget: action.payload.amount}
    case 'UPDATE':
      return {...state, budget: action.payload.amount}
    default:
      return state
  }
}

const BudgetContextProvider = ({children}) => {
  const [budgetState, dispatch] = useReducer(budgetReducer, {budget: 0})
  const authCtx = useContext(AuthContext)
  const userId = authCtx.userId


  function setBudget(budgetData) {
    const userBudget = budgetData.filter((budget) => budget.userId === userId)
    console.log('user budget',userBudget)
    dispatch({type: 'SET', payload: userBudget})
  }

  function updateBudget(budgetData) {
    const budgetWithUserId = {...budgetData, userId: userId}
    dispatch({type: 'UPDATE', payload: budgetWithUserId})
  }
  const value = {
    budget: budgetState.budget,
    setBudget: setBudget,
    updateBudget: updateBudget
  }
  return (
    <BudgetContext.Provider value={value}>
      {children}
    </BudgetContext.Provider>
  )
}

export default BudgetContextProvider