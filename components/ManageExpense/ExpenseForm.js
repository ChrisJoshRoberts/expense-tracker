import { Keyboard, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Input from './Input'

const ExpenseForm = () => {

  const amountChangedHandler = () => {
    console.log('amount changed')
  }
  return (
    <View>
      <Input label={'Title'}  />
      <Input 
        label={'Amount'} 
        textInputConfig={{
          keyboardType: 'decimal-pad',
          plaholder: 'Enter amount',
          onChangeText: amountChangedHandler,

        }}/>
      <Input 
        label={'Description'} 
        textInputConfig={{
          multiline: true,
          plaholder: 'Enter description',
        }}
      />
    </View>
  )
}

export default ExpenseForm

const styles = StyleSheet.create({})