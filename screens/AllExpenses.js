import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'

const AllExpenses = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ExpensesOutput expensesPeriod={'All Expenses'} />
    </SafeAreaView>
  )
}

export default AllExpenses

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})