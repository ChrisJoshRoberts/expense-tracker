import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import logo from '../../assets/onboarding/logo.png'
import AuthContent from '../../components/Auth/AuthContent'
import { colors } from '../../constants/Colors'

const LoginScreen = ({navigation}) => {
  return (
    <LinearGradient
            colors={['#DEE0E1', '#d0bdd8c9','#a0bececa', '#DEE0E1']}
            locations={[1, 0.2, 0.5, 1]}
            style={styles.gradientBackground}
          >
      <SafeAreaView style={styles.container}>
        <View style={styles.authCard}>
          <View style={{width: '100%', alignItems: 'center'}}>
            <Image source={logo} resizeMode='contain' style={{ width: 100,height: 50}} />
          </View>
          <AuthContent isLogin />
        </View>
        <View style={styles.helperTextContainer}>
          <Text style={styles.helperText}>Don't have an account?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.replace('SignUp')
            }}
          >
            <Text style={styles.linkText}>Sign Up</Text>
          </TouchableOpacity>
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
  },
  helperTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    gap: 8
  },
  helperText: {
    color: colors.baseDark,
    fontSize: 16,
    opacity: 0.4
  },
  linkText: {
    color: colors.primaryPurple,
    fontWeight: '700'
  }
})