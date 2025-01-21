import { StyleSheet, Text, View , ActivityIndicator} from 'react-native'
import React from 'react'
import { colors } from '../../../constants/Colors'

const LoadingOverlay = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.primaryPurple} />
    </View>
  )
}

export default LoadingOverlay

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff8c'
  }
})