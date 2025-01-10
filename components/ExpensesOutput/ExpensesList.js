import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Banknote } from 'lucide-react-native'
import { colors } from '../../constants/Colors'


function renderExpenseItem(itemData) {
  return (
    <View style={styles.listItem}>
      <View style={styles.iconStyle}>
        <Banknote size={40} color={colors.blue}/>
      </View>
      <View>
        <Text>{itemData.item.title}</Text>
        <Text>{itemData.item.description}</Text>
      </View>
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
      style={styles.listWrapper}
      contentContainerStyle={{alignItems: 'center'}}
    />
  )
}

export default ExpensesList

const styles = StyleSheet.create({
  iconStyle: {
    backgroundColor: colors.blue2,
    borderRadius: 8,
    padding: 4,
  },
  listWrapper: {
    width: '100%',
  },
  listItem: {
    flexDirection: 'row',
    width: '95%',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: colors.lightGrey,
    marginVertical: 5,
    borderRadius: 8
  }
})