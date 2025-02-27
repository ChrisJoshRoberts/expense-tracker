import { FlatList } from 'react-native'
import React from 'react'
import ExpenseItem from './ExpenseItem'


function renderExpenseItem(itemData) {
  return (
    <ExpenseItem {...itemData.item} />
  )
}

const ExpensesList = ({expenses, style}) => {
  return (
      <FlatList
        data={expenses}
        keyExtractor={item => item.id}
        renderItem={renderExpenseItem}
        contentContainerStyle={[{alignItems: 'center', paddingBottom: 180}, style ]}
      />
  )
}

export default ExpensesList
