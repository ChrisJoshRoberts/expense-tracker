import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Banknote } from 'lucide-react-native'
import { colors } from '../../constants/Colors'

const ExpenseItem = ({title, description, date, amount}) => {
  const formattedDate = date.toISOString().split('T')[0]
  return (
    <Pressable>
      <View style={styles.listItem}>
        <View style={styles.innerWrapper}>
          <View style={styles.iconStyle}>
            <Banknote size={40} color={colors.blue}/>
          </View>
          <View>
            <Text style={styles.expenseTitle}>{title}</Text>
            <Text style={styles.exDesctiotion}>{description}</Text>
          </View>
        </View>
        <View style={{alignItems: 'flex-end', gap: 5}}>
          <Text style={{fontWeight: 700, color: colors.error}}>-R{amount.toFixed(2)}</Text>
          <Text style={{color: colors.darkGrey}}>{formattedDate}</Text>
        </View>
      </View>
    </Pressable>
  )
}

export default ExpenseItem

const styles = StyleSheet.create({
    iconStyle: {
      backgroundColor: colors.blue2,
      borderRadius: 8,
      padding: 4,
    },
    innerWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10
    },
    listItem: {
      flexDirection: 'row',
      width: '95%',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      backgroundColor: colors.offWhite,
      marginVertical: 5,
      borderRadius: 8
    },
    expenseTitle: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    exDesctiotion: {
      fontSize: 14,
      color: colors.darkGrey
    }
})