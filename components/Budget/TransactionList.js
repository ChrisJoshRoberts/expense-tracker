import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import PillButton from '../ExpensesOutput/UI/PillButton'
import { useNavigation } from '@react-navigation/native'
import { colors } from '../../constants/Colors'
import ExpensesList from '../ExpensesOutput/ExpensesList'
import { ExpensesContext } from '../../store/expenses-context'
import { getExpenses } from '../../util/http'
import LoadingOverlay from '../ExpensesOutput/UI/LoadingOverlay'
import { AuthContext } from '../../store/auth-context'
import EmptyStateAlert from '../ExpensesOutput/UI/EmptyStateAlert'

const TransactionList = () => {
  const authCtx = useContext(AuthContext)
  const userId = authCtx.userId
  const [isFetching, setIsFetching] = useState(true)
  const navigation = useNavigation()
  const expensesCtx = useContext(ExpensesContext)

  useEffect(() => {
    async function fetchExpenses(userId) {
      setIsFetching(true)
      const expenses = await getExpenses(userId)
      expensesCtx.setExpense(expenses)
      setIsFetching(false)
    }
    fetchExpenses(userId)
  },[])

  const pressHandler = () => {
    navigation.navigate('RecentExpenses')
  }

  if (isFetching) {
    return (
      <LoadingOverlay />
    )
  }
  return (
    <View>
      <View style={styles.transactionTitleContainer}>
        <Text style={styles.transactionTitle}>Recent Expenses</Text>
        <PillButton title='See All' onPress={pressHandler} />
      </View>
        {expensesCtx.expenses.length === 0 && 
          <EmptyStateAlert text={'No Recent Expenses!'} />
        }
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