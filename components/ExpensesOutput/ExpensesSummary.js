import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import IconButtonAdd from './UI/IconButtonAdd'

const ExpensesSummary = ({ period, expenses, buttonTitle}) => {

  const expensesTotal = expenses.reduce((acc, expense) => acc + expense.amount, 0)

  const testBudget = 50000 - expensesTotal

  let totalAmount = expensesTotal

  if (period === 'Monthly Budget') {
    totalAmount = testBudget
  }


  return (
  <View style={styles.summaryContainer}>
    <View style={styles.innerSummary}>
      <Text style={styles.periodTitle}>{period}</Text>
      <Text style={styles.totalAmount}>R{totalAmount.toFixed(2)}</Text>
    </View>
    <IconButtonAdd title={buttonTitle} />
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