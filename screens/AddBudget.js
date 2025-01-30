import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { colors } from '../constants/Colors'
import BudgetForm from '../components/Budget/BudgetForm'

const AddBudget = ({route}) => {
  const mode = route.params?.mode || 'set'
  return (
    <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.title}>{'Add Budget'}</Text>
      </View>
      <BudgetForm mode={mode} />
    </SafeAreaView>
  )
}

export default AddBudget

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