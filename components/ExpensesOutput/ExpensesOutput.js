import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ExpensesSummary from './ExpensesSummary'
import ExpensesList from './ExpensesList'
import { CircleAlert } from 'lucide-react-native'
import { colors } from '../../constants/Colors'
import EmptyStateAlert from './UI/EmptyStateAlert'


const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View>
      <ExpensesSummary period={expensesPeriod} expenses={expenses} />
      <View style={styles.listContainer}>
        {expenses.length === 0 && 
          <EmptyStateAlert />
        }
        <ExpensesList expenses={expenses} />
      </View>
    </View>
  )
}

export default ExpensesOutput

const styles = StyleSheet.create({
  listContainer: {
    height: '100%',
    backgroundColor: '#fff',
    paddingTop: 8,
    paddingBottom: 120,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  }
})