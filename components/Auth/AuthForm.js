import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Input from '../ManageExpense/Input'
import Button from '../ExpensesOutput/UI/Button'
import { createUser, logIn } from '../../util/auth'
import { useNavigation } from '@react-navigation/native'
import LoadingOverlay from '../ExpensesOutput/UI/LoadingOverlay'
import { colors } from '../../constants/Colors'

const AuthForm = ({isLogin}) => {
  const navigation = useNavigation()
  const [isAuthenticating, setIsAuthenticating] = useState(false)
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

  const logInHandler = async (authInputs) => {
    console.log('log in')
    setIsAuthenticating(true)
    const {email, password} = authInputs
    console.log(email.value)
    await logIn(email.value, password.value)
    setIsAuthenticating(false)
    navigation.navigate('Authenticated', {
      email: email.value,
      name: authInputs.name?.value || 'Friend'
    });
  }

const signUpHandler = async (authInputs) => {
  console.log('sign up')
  setIsAuthenticating(true)
  const {name, email, password} = authInputs
  console.log(authInputs.name.value)
  await createUser(name.value, email.value, password.value)
  console.log('done')
  setIsAuthenticating(false)
  navigation.navigate('Login')
  }

  const inputChangedHandler = (inputIdentifier, enteredValue) => {
    setAuthInputs((currentInputs) => {
      return {
        ...currentInputs,
        [inputIdentifier]: {value: enteredValue},
      }
    })
  }

  if (isAuthenticating) {
    return (
      <View style={{flex: 1, paddingVertical: 24}}>
        <LoadingOverlay />
        <Text style={{color: colors.primaryPurple, fontWeight: 700}}>Signing up...</Text>
      </View>
    )
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
            value: authInputs.email.value,
            autoCapitalize: 'none'
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
            onPress={isLogin ? () => logInHandler(authInputs) : () => signUpHandler(authInputs)}
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