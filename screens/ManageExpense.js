import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/Colors'
import EditExpenseCard from '../components/EditExpenseCard'


const ManageExpense = ({route}) => {
  const editExpenseId = route.params?.expenseId
  const isEditing = !!editExpenseId

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={styles.container}>
        <Text style={styles.title}>{isEditing ? 'Edit Expense': 'Add Expense'}</Text>
      </View>
      {isEditing && 
        <EditExpenseCard 
          title={route.params.title} 
          amount={route.params.amount} 
          date={route.params.date} 
          description={route.params.description}
        />
      }
    </SafeAreaView>
  )
}

export default ManageExpense

const styles = StyleSheet.create({

  container: {
    padding: 16,
    borderBottomWidth: 1,
    marginHorizontal: 16,
    borderBottomColor: '#c6c6c65c'
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    width: '100%', 
    textAlign: 'center',
    color: colors.baseDark
  },

})