import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import ExpensesSummary from '../components/ExpensesOutput/ExpensesSummary'
import { LinearGradient } from 'expo-linear-gradient';
import Trackers from '../components/Budget/Trackers';
import TransactionList from '../components/Budget/TransactionList';
import { ExpensesContext } from '../store/expenses-context';
import { BudgetContext } from '../store/budget-context';

const Budget = () => {
  const [isfetching, setIsfetching] = useState(true)
  const expensesCtx = useContext(ExpensesContext)
  const budgetCtx = useContext(BudgetContext)
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <LinearGradient 
      colors={['#5720ef', '#ead8f800']}
      style={styles.background}
      ></LinearGradient>
      <ExpensesSummary period={'Budget left'} expenses={expensesCtx.expenses} buttonTitle={'Set Budget'}/>
      <Trackers budget={budgetCtx.budget} />
      {/* 
      TODO ADD Filters Component
      */}
      <TransactionList />
    </SafeAreaView>
  )
}

export default Budget

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300
  },
})