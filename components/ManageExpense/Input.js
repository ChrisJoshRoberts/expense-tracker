import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { colors } from '../../constants/Colors'

const Input = ({label, textInputConfig}) => {

  const inputStyles = [styles.input]

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.multiLine)
  }
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={inputStyles} {...textInputConfig}  />
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
    height: 48,
    borderRadius: 4,
    padding: 8,
    marginBottom: 20,
    borderRadius: 12,
    fontSize: 16,
    color: colors.baseDark,
    fontWeight: 700,
    backgroundColor: colors.offWhite
  }, 
  multiLine: {
    minHeight: 100,
    textAlignVertical: 'top',
    fontSize: 16,
    fontWeight: 400
  }
})