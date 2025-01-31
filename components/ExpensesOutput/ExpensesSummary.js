import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import IconButtonAdd from './UI/IconButtonAdd'
import { BudgetContext } from '../../store/budget-context'

const ExpensesSummary = ({ period, expenses, buttonTitle}) => {
  const budgetCtx = useContext(BudgetContext)
  const budgets = budgetCtx.budgets
  const expensesTotal = expenses.reduce((acc, expense) => acc + expense.amount, 0)

  const totalAmount = budgets.length > 0 ? budgets[0].amount - expensesTotal : 0
  
  return (
  <View style={styles.summaryContainer}>
    {budgets.length <= 0 && 
      <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'flex-end'}}>
        <View>
        <Text style={styles.periodTitle}>No Budget set</Text>
        <Text style={[{opacity: 0.3},styles.totalAmount]}>R0.00</Text>
        </View>
        <IconButtonAdd title={buttonTitle} />
      </View>
    }
    { budgets.length > 0 &&
    <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'flex-end'}}>
      <View>
        <Text style={styles.periodTitle}>{period}</Text>
        <Text style={styles.totalAmount}>R{totalAmount.toFixed(2)}</Text>
      </View>
      {
        period !== 'Budget left' &&
        <IconButtonAdd title={buttonTitle} />
      }
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