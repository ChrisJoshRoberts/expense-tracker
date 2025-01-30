import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import ExpensesSummary from '../components/ExpensesOutput/ExpensesSummary'
import { LinearGradient } from 'expo-linear-gradient';
import Trackers from '../components/Budget/Trackers';
import TransactionList from '../components/Budget/TransactionList';
import { ExpensesContext } from '../store/expenses-context';
import { BudgetContext } from '../store/budget-context';
import { AuthContext } from '../store/auth-context';
import { getBudget } from '../util/http';
const Budget = () => {
  const expensesCtx = useContext(ExpensesContext)
  const budgetCtx = useContext(BudgetContext)
  const authCtx = useContext(AuthContext)
  const userId = authCtx.userId


  useEffect(() => {
    async function fetchBudget(userId) {
      const budgets = await getBudget(userId)
      budgetCtx.setBudget(budgets)
    }
    fetchBudget(userId)
  },[])
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