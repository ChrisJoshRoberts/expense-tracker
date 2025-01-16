import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/Colors'
import { Banknote, Pen, Trash2 } from 'lucide-react-native'

const EditExpenseCard = ({title, amount, date, description, onPress, onEdit}) => {
  const parsedDate = new Date(date)
  return (
    <View>
      <View style={styles.editingCard}>
        <Pressable
          onPress={onEdit} 
          style={({pressed}) => [{opacity: pressed ? 0.5 : 1}, styles.editBtn]}>
          <Pen  size={18} fill={colors.primaryPurple} color={colors.primaryPurple}/>
          <Text style={{color: colors.primaryPurple}}>Edit</Text>
        </Pressable>
        <View style={styles.iconStyle}>
          <Banknote size={32} color={colors.blue}/>
        </View>
        <Text style={styles.exAmount}>-R{amount.toFixed(2)}</Text>
        <Text style={styles.expenseTitle}>{title}</Text>
        <Text style={styles.exDesctiotion}>{description}</Text>
        <Text style={{color: colors.darkGrey}}>{parsedDate.toLocaleDateString()}</Text>
      </View>
      <View>
        <Pressable onPress={onPress} style={({pressed}) => [{opacity: pressed ? 0.6 : 1}, styles.removeButton]}>
          <Trash2 size={24} color={colors.error}/>
          <Text style={{color: colors.error, fontWeight: 700}}>Remove</Text>
        </Pressable>
        </View>
    </View>
  )
}

export default EditExpenseCard

const styles = StyleSheet.create({
  editBtn: {
    position: 'absolute',
    top: 8,
    right: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  editingCard: {
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: colors.offWhite,
    margin: 16,
    borderRadius: 12,
    gap: 8,
  },
    removeButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 5,
    },
    iconStyle: {
      backgroundColor: colors.blue2,
      borderRadius: 8,
      padding: 4,
    },
    expenseTitle: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    exDesctiotion: {
      fontSize: 14,
      color: colors.darkGrey
    },
    exAmount: {
      color: colors.error,
      fontWeight: 700,
      fontSize: 32
    }
})