import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { colors } from '../../constants/Colors'

const Input = ({label, textInputConfig}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput {...textInputConfig}  style={styles.input}/>
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  label: {
    fontSize: 12,
    fontWeight: 700,
    marginBottom: 4,
    color: colors.primaryPurple
  },
  input: {
    height: 40,
    borderRadius: 4,
    padding: 8,
    marginBottom: 20,
    borderRadius: 12,
    fontSize: 16,
    color: colors.baseDark,
    fontWeight: 700,
    backgroundColor: colors.offWhite
  }
})