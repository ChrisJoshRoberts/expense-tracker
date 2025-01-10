import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Banknote } from 'lucide-react-native'
import { colors } from '../../constants/Colors'


function renderExpenseItem(itemData) {
  const formattedDate = itemData.item.date.toISOString().split('T')[0]

  return (
    <View style={styles.listItem}>
      <View style={styles.innerWrapper}>
        <View style={styles.iconStyle}>
          <Banknote size={40} color={colors.blue}/>
        </View>
        <View>
          <Text style={styles.expenseTitle}>{itemData.item.title}</Text>
          <Text style={styles.exDesctiotion}>{itemData.item.description}</Text>
        </View>
      </View>
      <View style={{alignItems: 'flex-end', gap: 5}}>
        <Text style={{fontWeight: 700, color: colors.error}}>-R{itemData.item.amount.toFixed(2)}</Text>
        <Text style={{color: colors.darkGrey}}>{formattedDate}</Text>
      </View>
    </View>
  )
}

const ExpensesList = ({expenses}) => {
  const revesedExpenses = expenses.reverse()
  return (
      <FlatList
        data={expenses}
        keyExtractor={item => item.id}
        renderItem={renderExpenseItem}
        style={styles.listWrapper}
        contentContainerStyle={{alignItems: 'center', paddingBottom: 180}}
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
  innerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  listItem: {
    flexDirection: 'row',
    width: '95%',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: colors.offWhite,
    marginVertical: 5,
    borderRadius: 8
  },
  expenseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  exDesctiotion: {
    fontSize: 14,
    color: colors.darkGrey
  }
})