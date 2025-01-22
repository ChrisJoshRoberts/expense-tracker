import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Input from '../ManageExpense/Input'

const AuthForm = () => {
  return (
    <View>
      <Input
        label={'Email'} 
      />
      <Input 
        label={'Password'}
        secure
      />
    </View>
  )
}

export default AuthForm

const styles = StyleSheet.create({})