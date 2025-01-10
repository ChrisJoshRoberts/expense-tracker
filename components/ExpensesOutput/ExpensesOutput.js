import { StyleSheet, View } from 'react-native'
import React from 'react'
import ExpensesSummary from './ExpensesSummary'
import ExpensesList from './ExpensesList'

const dummyExpenses = [
  {
    id: '1',
    title: 'Groceries',
    description: 'buying daily groceries',
    amount: 94.12,
    date: new Date(2021, 6, 14),
  },
  {
    id: '2',
    title: 'Rent',
    description: 'monthly rent',
    amount: 800.0,
    date: new Date(2021, 6, 1),
  },
  {
    id: '3',
    tite: 'Insurance',
    description: 'monthly insurance',
    amount: 294.67,
    date: new Date(2021, 5, 20),
  },
  {
    id: '4',
    tile: 'Internet',
    description: 'monthly internet',
    amount: 45.0,
    date: new Date(2021, 6, 16),
  },
  {
    id: '5',
    title: 'Electricity',
    description: 'Monthly Electricity',
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