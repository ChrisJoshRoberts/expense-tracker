import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'
import { colors } from '../constants/Colors'
import { ExpensesContext } from '../store/expenses-context'


const AllExpenses = () => {
  const expensesCtx = useContext(ExpensesContext)
  return (
    <SafeAreaView style={styles.container}>
      <ExpensesOutput expenses={expensesCtx.expenses} expensesPeriod={'All Expenses'} />
    </SafeAreaView>
  )
}

export default AllExpenses

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue
  }
})