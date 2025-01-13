import { StyleSheet, View } from 'react-native'
import React from 'react'
import ExpensesSummary from './ExpensesSummary'
import ExpensesList from './ExpensesList'


const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View>
      <ExpensesSummary period={expensesPeriod} expenses={dummyExpenses} />
      <View style={styles.listContainer}>
        <ExpensesList expenses={dummyExpenses} />
      </View>
    </View>
  )
}

export default ExpensesOutput

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: '#fff',
    paddingTop: 8,
    paddingBottom: 120,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  }
})