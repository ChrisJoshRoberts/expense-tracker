import { SafeAreaView, StyleSheet} from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'
import { colors } from '../constants/Colors'
import { ExpensesContext } from '../store/expenses-context'
import { getDateMinusDays } from '../util/date'
import { getExpenses } from '../util/http'

const RecentExpenses = () => {
  // const expensesCtx = useContext(ExpensesContext)
  const [fetchedExpenses, setFetchedExpenses] = useState([])

  useEffect(() => {
    async function fetchExpenses() {
      const expenses = await getExpenses()
      setFetchedExpenses(expenses)
    }
    fetchExpenses()
  }, [])

  const recentExpenses = fetchedExpenses.filter((expense) => {
    const today = new Date()
    const date7daysAgo = getDateMinusDays(today, 7)
    return expense.date >= date7daysAgo
  })
  return (
    <SafeAreaView style={styles.container}>
      <ExpensesOutput 
        buttonTitle='Add Expense'
        expenses={recentExpenses} 
        expensesPeriod={'Total Spent: Last 7 Days'} 
        fallbackText={'No Recent Expenses!'} />
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