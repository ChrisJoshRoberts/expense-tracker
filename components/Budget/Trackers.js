import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import TrackerCard from './TrackerCard'
import { ExpensesContext } from '../../store/expenses-context'

const Trackers = ({budget}) => {
  const expensesCtx = useContext(ExpensesContext)
  const expensesTotal = expensesCtx.expenses.reduce((acc, expense) => { acc += expense.amount; return acc }, 0)


  return (
    <View style={styles.container}>
      <TrackerCard title='Budget' amount={budget}/>
      <TrackerCard mode='Expense' title='Expense' amount={expensesTotal}/>
    </View>
  )
}

export default Trackers

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,

  }
})