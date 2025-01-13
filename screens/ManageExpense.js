import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/Colors'
import { Banknote, Trash2, Pencil } from 'lucide-react-native'


const ManageExpense = ({route}) => {
  const editExpenseId = route.params?.expenseId
  const isEditing = !!editExpenseId

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={styles.container}>
        <Text style={styles.title}>{isEditing ? 'Edit Expense': 'Add Expense'}</Text>
      </View>
      {isEditing && 
      <View>
        <View style={styles.editingCard}>
          <View style={styles.editBtn}>
            <Pencil size={18} color={colors.blue}/>
            <Text style={{color: colors.darkGrey}}>Edit</Text>
          </View>
          <View style={styles.iconStyle}>
            <Banknote size={32} color={colors.blue}/>
          </View>
          <Text style={styles.expenseTitle}>{route.params.title}</Text>
          <Text style={styles.exDesctiotion}>{route.params.description}</Text>
          <Text style={styles.exAmount}>-R{route.params.amount.toFixed(2)}</Text>
          <Text style={{color: colors.darkGrey}}>{route.params.date.toISOString().split('T')[0]}</Text>
        </View>
        <View style={styles.removeButton}>
            <Trash2 size={24} color={colors.error} style={{}}/>
            <Text style={{color: colors.error, fontWeight: 700}}>Remove</Text>
          </View>
      </View>
      }
    </SafeAreaView>
  )
}

export default ManageExpense

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
  container: {
    padding: 16,
    borderBottomWidth: 1,
    marginHorizontal: 16,
    borderBottomColor: '#c6c6c65c'
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    width: '100%', 
    textAlign: 'center',
    color: colors.baseDark
  },
  editingCard: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: colors.offWhite,
    margin: 16,
    borderRadius: 12,
    gap: 8
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
  }
})