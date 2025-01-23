import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import logo from '../../assets/onboarding/logo.png'

import AuthContent from '../../components/Auth/AuthContent'
import Button from '../../components/ExpensesOutput/UI/Button'
import { colors } from '../../constants/Colors'

const LoginScreen = () => {
  return (
    <LinearGradient
            colors={['#DEE0E1', '#d0bdd8c9','#a0bececa', '#DEE0E1']}
            locations={[1, 0.2, 0.5, 1]}
            style={styles.gradientBackground}
          >
      <SafeAreaView style={styles.container}>
        <View style={styles.authCard}>
          <Image source={logo} resizeMode='contain' style={{ width: 120 }} />
          <AuthContent isLogin />
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
    backgroundColor: colors.cardBackground,
    width: '90%',
    borderRadius: 24,
  }
})