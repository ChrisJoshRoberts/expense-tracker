import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'
import { colors } from '../constants/Colors'

const RecentExpenses = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ExpensesOutput expensesPeriod={'Total Spent: Last 7 Days'} />
    </SafeAreaView>
  )
}

export default RecentExpenses

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryPurple
  }
})