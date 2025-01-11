import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ManageExpense = ({route}) => {
  const editExpenseId = route.params?.expenseId
  const isEditing = !!editExpenseId

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>{isEditing ? 'Edit Expense': 'Add Expense'}</Text>
      </View>
    </SafeAreaView>
  )
}

export default ManageExpense

const styles = StyleSheet.create({
  container: {
    padding: 16
  }
})