import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AuthForm from './AuthForm'

const AuthContent = ({isLogin}) => {
  return (
    <View>
      <AuthForm 
        isLogin={isLogin}
      />
    </View>
  )
}

export default AuthContent

const styles = StyleSheet.create({})