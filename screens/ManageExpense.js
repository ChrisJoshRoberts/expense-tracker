import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ManageExpense = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>ManageExpense</Text>
      </View>
    </SafeAreaView>
  )
}

export default ManageExpense

const styles = StyleSheet.create({
  container: {
    padding: 16
  }
})