import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import Input from '../ManageExpense/Input'
import { colors } from '../../constants/Colors'
import Button from '../ExpensesOutput/UI/Button'
import { ExpensesContext } from '../../store/expenses-context'
import { useNavigation } from '@react-navigation/native'

const BudgetForm = () => {
  const expensesCtx = useContext(ExpensesContext)
  const navigation = useNavigation()

  function cancelHandler() {
      navigation.goBack()
    }

  return (
    <>
      <View style={styles.budgetFormContainer}>
        <View style={{width: 300}}>
          <Text style={styles.budgetFormTitle}>
            What is your budget goal? 
          </Text>
        </View>
        <Input 
          label={'Amount'} 
          textInputConfig={{
          keyboardType: 'decimal-pad',
          plaholder: 'Enter amount',
          onChangeText: () => {},
          }}/>
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={cancelHandler} mode='flat'>Cancel</Button>
        <Button onPress={() => {alert('hello')}}>{'Add'}</Button>
      </View>
    </>
  )
}

export default BudgetForm

const styles = StyleSheet.create({
  budgetFormContainer: {
    padding: 16,
    alignItems: 'center',
  },
  budgetFormTitle: {
    fontSize: 24,
    fontWeight: '700',
    width: '100%', 
    textAlign: 'center',
    marginVertical: 16,
    color: colors.baseDark
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 24,
    flex: 1,
    alignItems: 'center',
    width: '100%'
  },
})