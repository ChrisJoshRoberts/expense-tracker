import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../../constants/Colors'

const Button = ({children, mode, onPress}) => {
  return (
      <Pressable
        onPress={onPress}
        style={({pressed}) => [{opacity: pressed ? 0.6 : 1}, styles.button, mode === 'flat' && styles.buttonFlat]}>
          <Text style={[styles.buttonText, mode === 'flat' && styles.buttonTextFlat]}>{children}</Text>
      </Pressable>
  )
}
export default Button

const styles = StyleSheet.create({
  button: {
    padding: 16,
    backgroundColor: colors.primaryPurple,
    borderRadius: 10,
    alignItems: 'center',
    width: '90%',
    margin: 4
  },
  buttonFlat: {
    backgroundColor: 'transparent',
    padding: 8, 
  },
  buttonText: {
    color: '#fff',
    fontWeight: 700,
    fontSize: 16
  },
  buttonTextFlat: {
    color: colors.primaryPurple
  }
})