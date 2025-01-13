import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import ExpensesSummary from '../components/ExpensesOutput/ExpensesSummary'
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import Trackers from '../components/Budget/Trackers';
import { ExpensesContext } from '../store/expenses-context';

const Budget = () => {
  const expensesCtx = useContext(ExpensesContext)
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <LinearGradient 
      colors={['#5720ef', '#ead8f800']}
      style={styles.background}
      ></LinearGradient>
      <ExpensesSummary period={'Budget'} expenses={[]} />
      <Trackers />
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
    height: 600
  },
})