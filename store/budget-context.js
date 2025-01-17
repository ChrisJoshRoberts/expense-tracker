import { createContext, useReducer } from "react";


export const BudgetContext = createContext({
  budget: null,
  setBudget: ({amount}) => {},
  updateBudget: ({amount}) => {},
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

  function setBudget(budgetData) {
    dispatch({type: 'SET', payload: budgetData})
  }

  function updateBudget(budgetData) {
    dispatch({type: 'UPDATE', payload: budgetData})
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