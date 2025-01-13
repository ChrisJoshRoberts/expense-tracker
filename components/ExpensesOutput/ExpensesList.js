import { FlatList } from 'react-native'
import React from 'react'
import ExpenseItem from './ExpenseItem'


function renderExpenseItem(itemData) {

  return (
    <ExpenseItem {...itemData.item} />
  )
}

const ExpensesList = ({expenses}) => {
  const revesedExpenses = expenses.reverse()
  return (
      <FlatList
        data={expenses}
        keyExtractor={item => item.id}
        renderItem={renderExpenseItem}
        contentContainerStyle={{alignItems: 'center', paddingBottom: 180}}
      />
  )
}

export default ExpensesList
