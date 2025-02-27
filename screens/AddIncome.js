import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/Colors'
import IncomeForm from '../components/Icome/IncomeForm'

const AddIncome = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.title}>{'Add Income'}</Text>
      </View>
      <IncomeForm />
    </SafeAreaView>
  )
}

export default AddIncome

const styles = StyleSheet.create({
  container: {
      padding: 16,
      borderBottomWidth: 1,
      marginHorizontal: 16,
      borderBottomColor: '#c6c6c65c'
    },
    title: {
      fontSize: 18,
      fontWeight: '700',
      width: '100%', 
      textAlign: 'center',
      color: colors.baseDark
    },
})