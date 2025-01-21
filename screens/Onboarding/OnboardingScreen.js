import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const OnboardingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image />
        <Text>Welcome</Text>
      </View>
    </SafeAreaView>
  )
}

export default OnboardingScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'red',
    justifyContent: 'center'
  }
})