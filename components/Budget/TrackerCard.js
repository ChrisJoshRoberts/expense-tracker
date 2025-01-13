import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ArrowBigDownDash } from 'lucide-react-native'

const TrackerCard = ({mode, title, amount}) => {
  return (
    <View style={styles.trackerCardContainer}>
    <ArrowBigDownDash size={32} style={mode === 'Expense' ? styles.rotate : ''}/>
    <View>
      <Text>{title}</Text>
      <Text>R{amount.toFixed(2)}</Text>
    </View>
  </View>
  )
}

export default TrackerCard

const styles = StyleSheet.create({
  rotate: {
    transform: [{ rotate: '180deg' }]
  },
  trackerCardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#fff',
    paddingVertical: 24,
    paddingHorizontal: 32,
    borderRadius: 10,
  }
})