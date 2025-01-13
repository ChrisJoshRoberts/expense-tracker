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
    title: 'Insurance',
    description: 'monthly insurance',
    amount: 294.67,
    date: new Date(2021, 5, 20),
  },
  {
    id: '4',
    title: 'Internet',
    description: 'monthly internet',
    amount: 45.0,
    date: new Date(2021, 6, 16),
  },
  {
    id: '5',
    title: 'Electricity',
    description: 'monthly electricity',
    amount: 150.0,
    date: new Date(2021, 6, 10),
  },
  {
    id: '6',
    title: 'Water',
    description: 'monthly water',
    amount: 100.0,
    date: new Date(2021, 6, 5),
  },
  {
    id: '7',
    title: 'Car Payment',
    description: 'monthly car payment',
    amount: 350.0,
    date: new Date(2021, 6, 3),
  },
  {
    id: '8',
    title: 'Fuel',
    description: 'monthly fuel',
    amount: 200.0,
    date: new Date(2021, 6, 2),
  },
  {
    id: '9',
    title: 'Entertainment',
    description: 'monthly entertainment',
    amount: 100.0,
    date: new Date(2021, 6, 1),
  },
  {
    id: '10',
    title: 'Phone',
    description: 'monthly phone bill',
    amount: 50.0,
    date: new Date(2021, 6, 1),
  },
  {
    id: '11',
    title: 'Gym',
    description: 'monthly gym membership',
    amount: 50.0,
    date: new Date(2021, 6, 1),
  }

]

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