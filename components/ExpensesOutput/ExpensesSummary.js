import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ExpensesSummary = ({ period, expenses}) => {

  const expensesTotal = expenses.reduce((acc, expense) => acc + expense.amount, 0)

  return (
  <View style={styles.summaryContainer}>
    <View style={styles.innerSummary}>
      <Text style={styles.periodTitle}>{period}</Text>
      <Text style={styles.totalAmount}>R{expensesTotal.toFixed(2)}</Text>
    </View>
  </View>
  )
}

export default ExpensesSummary

const styles = StyleSheet.create({
  summaryContainer: {
    height: 140,
    justifyContent: 'flex-end',
    padding: 20,
  },
  periodTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  totalAmount: {
    color: '#fff',
    fontSize: 32,
    fontWeight: '700',
  },

})