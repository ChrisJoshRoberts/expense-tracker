import { StyleSheet, Text, View , ActivityIndicator} from 'react-native'
import React from 'react'
import { colors } from '../../../constants/Colors'

const LoadingOverlay = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.primaryPurple} />
      <Text style={styles.text}>{'Loading...'}</Text>
    </View>
  )
}

export default LoadingOverlay

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }, 
  text: {
    fontSize: 16,
    fontWeight: 700,
    color: colors.primaryPurple,
    marginTop: 16
  }
})