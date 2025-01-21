import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import Input from './Input'
import { colors } from '../../constants/Colors'
import DropDownInput from './DropDownInput'
import Button from '../ExpensesOutput/UI/Button'

const ExpenseForm = ({onCancel, submitButtonLabel, onSubmit, title, defaultValues}) => {
const [inputs, setInputs] = useState({
  title: { 
    value: defaultValues ? defaultValues.title : '', 
    isValid: true,
  },
  amount: {
    value: defaultValues ? defaultValues.amount.toString() : '', 
    isValid: true,
  },
  description: {
    value: defaultValues ? defaultValues.description : '',
    isValid: true,
  },
  category: {
    value: defaultValues ? defaultValues.category : '',
    isValid: true,
  }
});

  const inputChangedHandler = (inputIdentifier, enteredValue) => {
    setInputs((currentInputs) => {
      return {
        ...currentInputs,
        [inputIdentifier]: {value: enteredValue || '', isValid: true},
      }
    })
  }
  const submitHandler = () => {
    const expenseData = {
      amount: +inputs.amount.value,
      title: inputs.title.value,
      description: inputs.description.value,
      category: inputs.category.value,
      date: new Date(),
    }
    
    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const titleIsValid = expenseData.title.trim().length > 0;
    const descriptionIsValid = expenseData.description.trim().length > 0;
    const categoryIsValid = typeof expenseData.category === 'string' && expenseData.category.trim().length > 0;


    if (!amountIsValid || !titleIsValid || !descriptionIsValid || !categoryIsValid) {
      //Show feedback to user
      setInputs((currentInputs) => {
        return {
          title: {value: currentInputs.title.value, isValid: titleIsValid},
          amount: {value: currentInputs.amount.value, isValid: amountIsValid},
          description: {value: currentInputs.description.value, isValid: descriptionIsValid},
          category: {value: currentInputs.category.value, isValid: categoryIsValid},
        }
      })
      return;
    }

    onSubmit(expenseData)
  }

  const formIsInvalid = !inputs.title.isValid || !inputs.amount.isValid || !inputs.description.isValid || !inputs.category.isValid

  let errorText = ''

  const findInvalidInput = () => {
    if (!inputs.title.isValid && !inputs.amount.isValid && !inputs.description.isValid && !inputs.category.isValid) {
      return errorText = 'title, amount, description, and category'
    }
    if (!inputs.title.isValid) {
      return errorText = 'title'
    }
    if (!inputs.amount.isValid) {
      return errorText = 'amount'
    }
    if (!inputs.description.isValid) {
      return errorText = 'description'
    }
    if (!inputs.category.isValid) {
      return errorText = 'category'
    }
  }

  findInvalidInput()

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{flex: 1}}>
        <Text style={styles.expenseTitle}>{title}</Text>
        <Input label={'Title'}  
          textInputConfig={{
            placeholder: 'Enter title',
            onChangeText: inputChangedHandler.bind(this, 'title'),
            value: inputs.title.value, 
          }}
          isValid={!inputs.title.isValid}
        />
        <Input 
          label={'Amount'} 
          isValid={!inputs.amount.isValid}
          textInputConfig={{
            keyboardType: 'decimal-pad',
            placeholder: 'Enter amount',
            onChangeText: inputChangedHandler.bind(this, 'amount'),
            value: inputs.amount.value,
            
          }}/>
        <DropDownInput 
          onSelectItem={inputChangedHandler.bind(this, 'category')} 
          valueDropdown={inputs.category.value}
          isValid={!inputs.category.isValid}
        />
        <Input 
          label={'Description'}
          isValid={!inputs.description.isValid} 
          textInputConfig={{
          placeholder: 'Enter description',
          onChangeText: inputChangedHandler.bind(this, 'description'),
          value: inputs.description.value,
          multiline: true,
          maxLength: 50,
        }} />
        <Text style={styles.helperText}>{`(Max 50 characters)`}</Text>
        {formIsInvalid && <Text style={styles.errorText}>{`Please enter a valid ${errorText}.`}</Text>}
          <View style={styles.buttonContainer}>
            <Button onPress={onCancel} mode='flat'>Cancel</Button>
            <Button onPress={submitHandler}>{submitButtonLabel}</Button>
          </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default ExpenseForm

const styles = StyleSheet.create({
    expenseTitle : {
      fontSize: 18,
      fontWeight: 700,
      color: colors.baseDark,
      marginBottom: 16
    },
    helperText: {
      fontSize: 12,
      color: colors.grey,
      position: 'absolute',
      bottom: 125
    },
    buttonContainer: {
      position: 'absolute',
      bottom: 0,
      flex: 1,
      alignItems: 'center',
      width: '100%'
    },
    errorText: {
      color: colors.error,
      fontSize: 12,
      fontWeight: 700,
      textAlign: 'center',
      position: 'absolute',
      bottom: 100,
    }
})