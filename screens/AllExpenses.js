import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'
import { colors } from '../constants/Colors'
import { ExpensesContext } from '../store/expenses-context'
import { AuthContext } from '../store/auth-context'


const AllExpenses = () => {
  const expensesCtx = useContext(ExpensesContext)
  expensesCtx.expenses.map(expense => console.log(expense.userId))
  const userId = useContext(AuthContext).userId
  const userExpenses = expensesCtx.expenses.filter(expense => expense.userId === userId)
  console.log(userExpenses)
  return (
    <SafeAreaView style={styles.container}>
      <ExpensesOutput 
        buttonTitle={'Add Expense'}
        expenses={userExpenses} 
        expensesPeriod={'All Expenses'} 
        fallbackText={'No Expenses Added!'} />
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