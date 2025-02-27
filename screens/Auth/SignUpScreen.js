import { 
  Image, 
  KeyboardAvoidingView, 
  Platform, 
  SafeAreaView, 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import AuthContent from '../../components/Auth/AuthContent'
import { colors } from '../../constants/Colors'
import logo from '../../assets/onboarding/logo.png'

const SignUpScreen = ({navigation}) => {
  return (
    <LinearGradient
      style={styles.gradientBackground}
      colors={['#DEE0E1', '#d0bdd8c9','#a0bececa', '#DEE0E1']}
      locations={[1, 0.2, 0.5, 1]}
    >
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyboardAvoidingView}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
        >
          <View style={styles.authCard}>
            <View style={{width: '100%', alignItems: 'center'}}>
              <Image source={logo} resizeMode='contain' style={{ width: 100,height: 50}} />
            </View>
            <AuthContent />
          </View>
          <View style={styles.helperTextContainer}>
            <Text style={styles.helperText}>Already have an account? </Text>
              <TouchableOpacity
                onPress={() => navigation.replace('Login')}
              >
                <Text style={styles.linkText}>Login</Text>
              </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1,
  },
  keyboardAvoidingView: {
    flex: 1, 
    width: '100%', 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  authCard: {
    padding: 16,
    backgroundColor: colors.cardBackground,
    width: '90%',
    borderRadius: 24,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16
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