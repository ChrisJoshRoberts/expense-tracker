import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AllExpenses = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>AllExpenses</Text>
    </SafeAreaView>
  )
}

export default AllExpenses

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})