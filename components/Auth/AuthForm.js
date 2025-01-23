import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Input from '../ManageExpense/Input'
import Button from '../ExpensesOutput/UI/Button'

const AuthForm = ({isLogin}) => {
  return (
      <View>
        <Text style={styles.formHeader}>{isLogin ? 'Login': 'Sign up'}</Text>
        {!isLogin && 
          <Input 
            label={'Name'}
          />
        }
        <Input
          label={'Email'} 
        />
        <Input 
          label={'Password'}
          textInputConfig={{
            secureTextEntry: true
          }}
        />
        <View style={{width: '100%', alignItems: 'center'}}>
          <Button>{isLogin ? 'Login' : 'Sign up'}</Button>
        </View>
      </View>
  )
}
export default AuthForm

const styles = StyleSheet.create({
  formHeader: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16
  }
})