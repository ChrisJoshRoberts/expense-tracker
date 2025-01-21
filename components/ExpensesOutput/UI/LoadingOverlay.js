import { StyleSheet, Text, View , ActivityIndicator} from 'react-native'
import React from 'react'

const LoadingOverlay = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#ffffff" />
    </View>
  )
}

export default LoadingOverlay

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0d006e8c'
  }
})