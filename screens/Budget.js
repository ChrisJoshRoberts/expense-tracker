import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import ExpensesSummary from '../components/ExpensesOutput/ExpensesSummary'
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import Trackers from '../components/Budget/Trackers';
import { ExpensesContext } from '../store/expenses-context';
import TransactionList from '../components/Budget/TransactionList';

const Budget = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <LinearGradient 
      colors={['#5720ef', '#ead8f800']}
      style={styles.background}
      ></LinearGradient>
      <ExpensesSummary period={'Budget'} expenses={[]} buttonTitle={'Add Budget'}/>
      <Trackers />
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