import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { colors } from '../../constants/Colors'

const Input = ({label, textInputConfig, isValid}) => {

  const inputStyles = [styles.input]

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.multiLine)
  }
  if (isValid) {
    inputStyles.push(styles.invalidInput)
  }
  return (
    <View style={{width: '100%'}}>
      <Text style={[styles.label, isValid && styles.invalidLabel]}>{label}</Text>
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
  },
  invalidLabel: {
    color: colors.error
  },
  invalidInput: {
    borderWidth: 1,
    borderColor: colors.error
  }
})