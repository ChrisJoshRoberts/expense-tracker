import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'

const RecentExpenses = () => {
  return (
    <SafeAreaView>
      <ExpensesOutput expensesPeriod={'Last 7 Days'} />
    </SafeAreaView>
  )
}

export default RecentExpenses

const styles = StyleSheet.create({})