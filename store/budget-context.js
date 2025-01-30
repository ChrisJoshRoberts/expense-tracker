import { createContext, useContext, useReducer } from "react";
import { AuthContext } from "./auth-context";
import { updateBudget as updateBudgetHttps } from "../util/http";


export const BudgetContext = createContext({
  budget: null,
  budgetId: null,
  setBudget: ({amount, budgetId}) => {},
  updateBudget: ({amount, budgetId}) => {},
});

const budgetReducer = (state, action) => {
  switch(action.type) {
    case 'SET':
      return {...state , budget: action.payload.amount, budgetId: action.payload.budgetId}
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
    if (!Array.isArray(budgetData)) {
      budgetData = [budgetData]
    }
    const userBudget = budgetData.find((budget) => budget.userId === userId)
    if (userBudget) {
      dispatch({type: 'SET', payload: {amount: userBudget.amount, budgetId: userBudget.budgetId}})
    }
  }

  async function updateBudget(id, budgetData) {
    if (!id) {
      console.error('Budget ID is undefined. Cannot update budget.');
      return;
    }
  
    const budgetWithUserId = { ...budgetData, userId: userId }; // Add userId to data
    try {
      await updateBudgetHttps(id, budgetWithUserId); // Use correct ID
      dispatch({ type: 'UPDATE', payload: { amount: budgetWithUserId.amount } }); // Update local state
      console.log('Budget updated successfully with ID:', id);
    } catch (error) {
      console.error('Failed to update budget:', error);
    }
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