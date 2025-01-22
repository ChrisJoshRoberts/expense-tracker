import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

import AuthContent from '../../components/Auth/AuthContent'
import Button from '../../components/ExpensesOutput/UI/Button'

const LoginScreen = () => {
  return (
    <LinearGradient
            colors={['#DEE0E1', '#d0bdd8c9','#a0bececa', '#DEE0E1']}
            locations={[1, 0.2, 0.5, 1]}
            style={styles.gradientBackground}
          >
      <SafeAreaView style={styles.container}>
        <View style={styles.authCard}>
          <Text style={{paddingVertical: 16}}>{'Login'}</Text>
          <AuthContent />
          <Button></Button>
        </View>
      </SafeAreaView>
    </LinearGradient>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16
  },
  authCard: {
    padding: 16,
    backgroundColor: '#ffffff67',
    width: '90%',
    borderRadius: 24,
  }
})