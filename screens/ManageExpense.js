import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { colors } from '../constants/Colors'
import EditExpenseCard from '../components/EditExpenseCard'
import { ExpensesContext } from '../store/expenses-context'
import ExpenseForm from '../components/ManageExpense/ExpenseForm'


const ManageExpense = ({route, navigation}) => {
  const expensesCtx = useContext(ExpensesContext)
  const editExpenseId = route.params?.expenseId
  const isEditing = !!editExpenseId
  const [isEditingForm, setIsEditingForm] = useState(false)

  function deleteHandler() {
    expensesCtx.deleteExpense(editExpenseId)
    navigation.goBack()
  }

  function cancelHandler() {
    navigation.goBack()
  }
  function confirmHandler(expenseData) {
    if (isEditing) {
      expensesCtx.updateExpense(editExpenseId, expenseData)
    } else {
      expensesCtx.addExpense(expenseData)
    }
    navigation.goBack()
  }
  function editHandler () {
    setIsEditingForm(true)
  }
  const existingExpenseData = {
    title: route.params?.title,
    amount: route.params?.amount,
    date: route.params?.date,
    description: route.params?.description,
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={styles.container}>
        <Text style={styles.title}>{isEditing ? 'Edit Expense': 'Add Expense'}</Text>
      </View>
      {isEditing && !isEditingForm && (
        <View style={{ flex: 1 }}>
          <EditExpenseCard
            title={existingExpenseData.title}
            amount={existingExpenseData.amount}
            date={existingExpenseData.date}
            description={existingExpenseData.description}
            onPress={deleteHandler}
            onEdit={editHandler}
          />
        </View>
      )}
      {(isEditingForm || !isEditing) && (
        <View style={styles.formContainer}>
          <ExpenseForm
            title={isEditing ? 'Edit Expense' : 'New Expense'}
            submitButtonLabel={isEditing ? 'Update' : 'Add'}
            onCancel={cancelHandler}
            onSubmit={confirmHandler}
            // Pass the existing data for prepopulation
            initialValues={isEditing ? existingExpenseData : undefined}
          />
        </View>
      )}
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
  formContainer: {
    flex: 1,
    padding: 16,
  }
})