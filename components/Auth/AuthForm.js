import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Input from '../ManageExpense/Input'
import Button from '../ExpensesOutput/UI/Button'
import { createUser } from '../../util/auth'
import { useNavigation } from '@react-navigation/native'

const AuthForm = ({isLogin}) => {
  const navigation = useNavigation()
  const [authInputs, setAuthInputs] = useState({
    name: {
      value: ''
    },
    email: {
      value: ''
    },
    password: {
      value: ''
    }
  })

  const logInHandler = () => {
    console.log('Login')
  }

const signUpHandler = async (authInputs) => {
  console.log('sign up')
  const {name, email, password} = authInputs
  console.log(authInputs.name.value)
  await createUser(name.value, email.value, password.value)
  console.log('done')
  navigation.navigate('Authenticated')
  }

  const inputChangedHandler = (inputIdentifier, enteredValue) => {
    setAuthInputs((currentInputs) => {
      return {
        ...currentInputs,
        [inputIdentifier]: {value: enteredValue},
      }
    })
  }
  return (
      <View>
        <Text style={styles.formHeader}>{isLogin ? 'Login': 'Sign up'}</Text>
        {!isLogin && 
          <Input 
            label={'Name'}
            textInputConfig={{
              returnKeyType: 'next',
              placeholder: 'Enter name',
              onChangeText: inputChangedHandler.bind(this, 'name'),
              value: authInputs.name.value
            }}
          />
        }
        <Input
          label={'Email'} 
          textInputConfig={{
            keyboardType: 'email-address',
            returnKeyType: 'next',
            placeholder: 'Enter email',
            onChangeText: inputChangedHandler.bind(this, 'email'),
            value: authInputs.email.value
          }}
        />
        <Input 
          label={'Password'}
          textInputConfig={{
            secureTextEntry: true,
            returnKeyType: 'done',
            placeholder: 'Enter password',
            onChangeText: inputChangedHandler.bind(this, 'password'),
            value: authInputs.password.value
          }}
        />
        <View style={{width: '100%', alignItems: 'center'}}>
          <Button
            onPress={isLogin ? logInHandler : () => signUpHandler(authInputs)}
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