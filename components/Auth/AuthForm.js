import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Input from '../ManageExpense/Input'
import Button from '../ExpensesOutput/UI/Button'

const AuthForm = ({isLogin}) => {

  const logInHandler = () => {
    console.log('Login')
  }

  const signUpHandler = () => {
    console.log('Sign up')
  }

  return (
      <View>
        <Text style={styles.formHeader}>{isLogin ? 'Login': 'Sign up'}</Text>
        {!isLogin && 
          <Input 
            label={'Name'}
            textInputConfig={{
              returnKeyType: 'next'
            }}
          />
        }
        <Input
          label={'Email'} 
          textInputConfig={{
            keyboardType: 'email-address',
            returnKeyType: 'next'
          }}
        />
        <Input 
          label={'Password'}
          textInputConfig={{
            secureTextEntry: true,
            returnKeyType: 'done'
          }}
        />
        <View style={{width: '100%', alignItems: 'center'}}>
          <Button
            onPress={isLogin ? logInHandler : signUpHandler}
          >{isLogin ? 'Login' : 'Sign up'}</Button>
        </View>
      </View>
  )
}
export default AuthForm

const styles = StyleSheet.create({
  formHeader: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16
  }
})