import { StyleSheet, View } from 'react-native'
import React from 'react'
import ExpensesSummary from './ExpensesSummary'
import ExpensesList from './ExpensesList'

const dummyExpenses = [
  {
    id: '1',
    description: 'Groceries',
    amount: 94.12,
    date: new Date(2021, 6, 14),
  },
  {
    id: '2',
    description: 'Rent',
    amount: 800.0,
    date: new Date(2021, 6, 1),
  },
  {
    id: '3',
    description: 'Insurance',
    amount: 294.67,
    date: new Date(2021, 5, 20),
  },
  {
    id: '4',
    description: 'Internet',
    amount: 45.0,
    date: new Date(2021, 6, 16),
  },
  {
    id: '5',
    description: 'Electricity',
    amount: 98.0,
    date: new Date(2021, 6, 10),
  }
]

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View>
      <ExpensesSummary period={expensesPeriod} expenses={dummyExpenses} />
      <ExpensesList expenses={dummyExpenses}  />
    </View>
  )
}

export default ExpensesOutput

const styles = StyleSheet.create({})