import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Input from '../ManageExpense/Input'
import Button from '../ExpensesOutput/UI/Button'

const AuthForm = ({isLogin}) => {
  return (
    <View>
      <Input
        label={'Email'} 
      />
      <Input 
        label={'Password'}
        secure
      />
      <Button>{isLogin ? 'Login' : 'Sign up'}</Button>
    </View>
  )
}
export default AuthForm

const styles = StyleSheet.create({})