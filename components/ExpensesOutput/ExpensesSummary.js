import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import IconButtonAdd from './UI/IconButtonAdd'
import { BudgetContext } from '../../store/budget-context'

const ExpensesSummary = ({ period, expenses, buttonTitle}) => {
  const budgetCtx = useContext(BudgetContext)
  const budget = budgetCtx.budget
  const expensesTotal = expenses.reduce((acc, expense) => acc + expense.amount, 0)

  const testBudget = budget - expensesTotal

  let totalAmount = expensesTotal

  if (period === 'Budget left') {
    totalAmount = testBudget
  }

  return (
  <View style={styles.summaryContainer}>
    {budget <= 0 && 
      <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'flex-end'}}>
        <View>
        <Text style={styles.periodTitle}>No Budget set</Text>
        <Text style={styles.totalAmount}>R0.00</Text>
        </View>
        <IconButtonAdd title={buttonTitle} />
      </View>
    }
    { budget > 0 &&
      <View style={styles.innerSummary}>
        <Text style={styles.periodTitle}>{period}</Text>
        <Text style={styles.totalAmount}>R{totalAmount.toFixed(2)}</Text>
      </View>
    }
  </View>
  )
}

export default ExpensesSummary

const styles = StyleSheet.create({
  summaryContainer: {
    height: 140,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: 20,
    flexDirection: 'row',
  },
  periodTitle: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
  },
  totalAmount: {
    color: '#fff',
    fontSize: 32,
    fontWeight: '700',
  },

})