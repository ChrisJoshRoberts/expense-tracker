import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Input from './Input'
import { colors } from '../../constants/Colors'
import DropDownInput from './DropDownInput'
import Button from '../ExpensesOutput/UI/Button'
import { useNavigation } from '@react-navigation/native'

const ExpenseForm = ({onCancel, submitButtonLabel, onSubmit}) => {
const navigation = useNavigation()
const [inputValue, setInputValue] = useState({
  title: '',
  amount: '',
  description: '',
  category: ''
});

  const inputChangedHandler = (inputIdentifier, enteredValue) => {
    setInputValue((currentInputValues) => {
      return {
        ...currentInputValues,
        [inputIdentifier]: enteredValue
      }
    })
  }
  const submitHandler = () => {
    const expenseData = {
      amount: +inputValue.amount,
      title: inputValue.title,
      description: inputValue.description,
      category: inputValue.category,
      date: new Date()
    }
    onSubmit(expenseData)
  }
  return (
    <View style={{flex: 1}}>
      <Text style={styles.expenseTitle}>New Expense</Text>
      <Input label={'Title'}  
        textInputConfig={{
          placeholder: 'Enter title',
          onChangeText: inputChangedHandler.bind(this, 'title'),
          value: inputValue.title
        }}
      />
      <Input 
        label={'Amount'} 
        textInputConfig={{
          keyboardType: 'decimal-pad',
          placeholder: 'Enter amount',
          onChangeText: inputChangedHandler.bind(this, 'amount'),
          value: inputValue.amount
        }}/>
      <Text style={styles.label}>Category</Text>
      <DropDownInput 
        onSelectItem={inputChangedHandler.bind(this, 'category')} 
        valueDropdown={inputValue.category}
      />
      <Input label={'Description'} textInputConfig={{
        placeholder: 'Enter description',
        onChangeText: inputChangedHandler.bind(this, 'description'),
        value: inputValue.description,
        multiline: true,
      }} />
        <View style={styles.buttonContainer}>
          <Button onPress={onCancel} mode='flat'>Cancel</Button>
          <Button onPress={submitHandler}>{submitButtonLabel}</Button>
        </View>
    </View>
  )
}

export default ExpenseForm

const styles = StyleSheet.create({
    label: {
      fontSize: 12,
      fontWeight: 700,
      marginBottom: 4,
      color: colors.primaryPurple
    },
    expenseTitle : {
      fontSize: 18,
      fontWeight: 700,
      color: colors.baseDark,
      marginBottom: 16
    },
    buttonContainer: {
      position: 'absolute',
      bottom: 0,
      flex: 1,
      alignItems: 'center',
      width: '100%'
    },

})