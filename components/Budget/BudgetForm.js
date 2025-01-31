import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Input from '../ManageExpense/Input'
import { colors } from '../../constants/Colors'
import Button from '../ExpensesOutput/UI/Button'
import { useNavigation } from '@react-navigation/native'
import { BudgetContext } from '../../store/budget-context'
import { storeBudget } from '../../util/http'
import { AuthContext } from '../../store/auth-context'
import 'react-native-get-random-values'

const BudgetForm = ({mode, budgetId}) => {
  const [inputValue, setInputValue] = useState({
    amount: ''
  })
  const budgetCtx = useContext(BudgetContext)
  const authCtx = useContext(AuthContext)
  const userId = authCtx.userId
  const navigation = useNavigation()

  function cancelHandler() {
      navigation.goBack()
    }

    const inputChangedHandler = (enteredValue) => {
      setInputValue((currentInputValues) => {
        return {
          ...currentInputValues,
          amount: enteredValue
        }
      })
    }

    async function addBudgetHandler() {
      console.log('adding budget')
      const budgetData = {
        amount: +inputValue.amount,
        userId: userId,
      }
      const id = await storeBudget(budgetData)
      const budgetWithId = {...budgetData, id: id}
      console.log('adding this budget: ', budgetWithId)
      budgetCtx.addBudget(budgetWithId)
      navigation.goBack()
    }

    async function updateBudgetHandler() {
      
      console.log('updating budget')
      const budgetData = {
        amount: +inputValue.amount,
        userId: userId,
      }
      console.log('updating this budget: ' , budgetId , 'with this data: ', budgetData)
      budgetCtx.updateBudget(budgetId, budgetData)
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
          onChangeText: (enteredValue) => inputChangedHandler(enteredValue),
          returnKeyType: 'done',
          }}/>
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={cancelHandler} mode='flat'>Cancel</Button>
        <Button onPress={mode === 'update'? updateBudgetHandler : addBudgetHandler}>{mode === 'update' ? 'Update': 'Add'}</Button>
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