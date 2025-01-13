import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ArrowBigDownDash } from 'lucide-react-native'
import { colors } from '../../constants/Colors'

const TrackerCard = ({mode, title, amount}) => {
  return (
    <View style={styles.trackerCardContainer}>
    <View style={[styles.arrowContainer, {backgroundColor: mode === 'Expense' ? '#FF5C58' : colors.success}]}>
      <ArrowBigDownDash 
        style={mode === 'Expense' ? styles.rotate : ''}
        size={32} 
        color={'#fff'}
      />
    </View>
    <View>
      <Text style={styles.trackerCardTitle}>{title}</Text>
      <Text style={[styles.trackerCardAmount, {color: mode === 'Expense' ? "#FF5C58" : colors.success }]}>R{amount.toFixed(2)}</Text>
    </View>
  </View>
  )
}

export default TrackerCard

const styles = StyleSheet.create({
  rotate: {
    transform: [{ rotate: '180deg' }]
  },
  arrowContainer: {
    borderRadius: 10,
    padding: 2,

  },
  trackerCardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#fff',
    paddingVertical: 24,
    paddingHorizontal: 18,
    borderRadius: 20,
  },
  trackerCardTitle : {
    fontSize: 14,
    fontWeight: '700',
  },
  trackerCardAmount: {
    fontSize: 16,
    fontWeight: '700',
  }
})