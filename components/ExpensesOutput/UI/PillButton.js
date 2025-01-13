import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../../constants/Colors'

const PillButton = ({title, onPress}) => {
  return (
    <Pressable
      onPress={onPress}
    >
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonTitle}>{title}</Text>
      </View>
    </Pressable>
  )
}

export default PillButton

const styles = StyleSheet.create({
  buttonTitle: {
    color: colors.primaryPurple,
  },
  buttonContainer: {
    backgroundColor: colors.primaryPurple3,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  }
})