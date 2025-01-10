import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'


function renderExpenseItem(itemData) {
  return (
    <View>
      <Text>{itemData.item.description}</Text>
      <Text>R{itemData.item.amount.toFixed(2)}</Text>
    </View>
  )
}

const ExpensesList = ({expenses}) => {
  return (
    <FlatList
      data={expenses}
      keyExtractor={item => item.id}
      renderItem={renderExpenseItem}
    />
  )
}

export default ExpensesList

const styles = StyleSheet.create({})