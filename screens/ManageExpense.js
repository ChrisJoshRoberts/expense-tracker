import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/Colors'
import EditExpenseCard from '../components/EditExpenseCard'
import Button from '../components/ExpensesOutput/UI/Button'


const ManageExpense = ({route, navigation}) => {
  const editExpenseId = route.params?.expenseId
  const isEditing = !!editExpenseId

  function deleteHandler() {
    navigation.goBack()
  }

  function cancelHandler() {
    navigation.goBack()
  }
  function confirmHandler() {
    navigation.goBack()
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={styles.container}>
        <Text style={styles.title}>{isEditing ? 'Edit Expense': 'Add Expense'}</Text>
      </View>
      {isEditing && 
        <View style={{flex: 1}}>
          <EditExpenseCard 
            title={route.params.title} 
            amount={route.params.amount} 
            date={route.params.date} 
            description={route.params.description}
            onPress={deleteHandler}
          />
        </View>
      }
        <View style={styles.buttonContainer}>
            <Button onPress={cancelHandler} mode='flat'>Cancel</Button>
            <Button onPress={confirmHandler}>{isEditing ? 'Update': 'Add'}</Button>
          </View>
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
  buttonContainer: {
    position: 'absolute',
    bottom: 24,
    flex: 1,
    alignItems: 'center',
    width: '100%'
  }

})