import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Input from './Input'
import { colors } from '../../constants/Colors'
import DropDownInput from './DropDownInput'

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
      <Text style={styles.label}>Category</Text>
      <DropDownInput />
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
})