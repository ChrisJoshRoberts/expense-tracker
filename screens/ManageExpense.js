import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { colors } from '../constants/Colors'
import EditExpenseCard from '../components/EditExpenseCard'
import { ExpensesContext } from '../store/expenses-context'
import ExpenseForm from '../components/ManageExpense/ExpenseForm'
import Button from '../components/ExpensesOutput/UI/Button'
import { deleteExpense, storeExpense, updateExpense } from '../util/http'


const ManageExpense = ({route, navigation}) => {
  const expensesCtx = useContext(ExpensesContext)
  const editExpenseId = route.params?.expenseId
  const isEditing = !!editExpenseId
  const [isEditingForm, setIsEditingForm] = useState(false)

  const selectedExpense = expensesCtx.expenses.find(expense => expense.id === editExpenseId)

  async function deleteHandler() {
    expensesCtx.deleteExpense(editExpenseId)
    await deleteExpense(editExpenseId)
    navigation.goBack()
  }

  function cancelHandler() {
    navigation.goBack()
  }
  async function confirmHandler(expenseData) {
    try {
      if (isEditing) {
        expensesCtx.updateExpense(editExpenseId, expenseData);
        await updateExpense(editExpenseId, expenseData)
      } else {
        const id = await storeExpense(expenseData);
        expensesCtx.addExpense({...expenseData, id: id});
      }
      navigation.goBack();
    } catch (error) {
      // Handle the error appropriately
      console.error('Failed to save expense:', error);
      // You might want to show an error message to the user here
    }
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
          <View style={styles.buttonContainer}>
            <Button onPress={cancelHandler}>Cancel</Button>
          </View>
        </View>
      )}
      {(isEditingForm || !isEditing) && (
        <View style={styles.formContainer}>
          <ExpenseForm
            title={isEditing ? 'Edit Expense' : 'New Expense'}
            submitButtonLabel={isEditing ? 'Update' : 'Add'}
            onCancel={cancelHandler}
            onSubmit={confirmHandler}
            defaultValues={selectedExpense}
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
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 16,
    flex: 1,
    alignItems: 'center',
    width: '100%'
  },
})