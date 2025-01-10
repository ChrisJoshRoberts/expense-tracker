import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ExpensesSummary = ({ period, expenses}) => {

  const expensesTotal = expenses.reduce((acc, expense) => acc + expense.amount, 0)

  return (
  <View>
    <Text>{period}</Text>
    <Text>R{expensesTotal.toFixed(2)}</Text>
  </View>
  )
}

export default ExpensesSummary

const styles = StyleSheet.create({})