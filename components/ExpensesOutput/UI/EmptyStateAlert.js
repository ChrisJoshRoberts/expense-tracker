import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CircleAlert } from 'lucide-react-native'
import { colors } from '../../../constants/Colors'

const EmptyStateAlert = ({text}) => {
  return (
  <View style={styles.emptyStateContainer}>
    <CircleAlert size={24} color={colors.grey}/>
    <Text style={styles.emptyStateText}>{text}</Text>
  </View>
  )
}

export default EmptyStateAlert

const styles = StyleSheet.create({
  emptyStateContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 140,
    opacity: 0.7
  },
  emptyStateText: {
    color: colors.grey,
    fontSize: 16,
    fontWeight: 700,
    marginTop: 4
  }
})