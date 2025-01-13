import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import PillButton from '../ExpensesOutput/UI/PillButton'
import { useNavigation } from '@react-navigation/native'
import { colors } from '../../constants/Colors'
import ExpensesList from '../ExpensesOutput/ExpensesList'
import { ExpensesContext } from '../../store/expenses-context'

const TransactionList = () => {
  const navigation = useNavigation()
  const expensesCtx = useContext(ExpensesContext)

  const pressHandler = () => {
    navigation.navigate('RecentExpenses')
  }
  return (
    <View>
      <View style={styles.transactionTitleContainer}>
        <Text style={styles.transactionTitle}>Recent Transactions</Text>
        <PillButton title='See All' onPress={pressHandler} />
      </View>
      <ExpensesList expenses={expensesCtx.expenses} style={{paddingBottom: 324}} />
    </View>
  )
}

export default TransactionList

const styles = StyleSheet.create({
  transactionTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginVertical: 24,
    alignItems: 'center',

  },
  transactionTitle: {
    fontSize: 18,
    fontWeight: 700,
    color: colors.baseDark
  }
})