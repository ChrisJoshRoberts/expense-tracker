import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { ArrowBigDownDash, Plus } from 'lucide-react-native'
import { colors } from '../../constants/Colors'
import { useNavigation } from '@react-navigation/native'
import { BudgetContext } from '../../store/budget-context'

const TrackerCard = ({mode, title, amount}) => {
  const budgetCtx = useContext(BudgetContext)
  const budgets = budgetCtx.budgets
  const navigation = useNavigation()

  budgets.map(budget => console.log(budget.id))

  const pressAddHandler = () => {
    navigation.navigate('AddBudget', {
      mode: 'update',
      budgetId: budgetCtx.budgets[0].id,
    })
  }
  return (
    <View style={styles.trackerCardContainer}>
      {mode !== 'Expense' && budgetCtx.budgets.length > 0 &&
      <Pressable 
        onPress={pressAddHandler}
        style={({pressed})=> [styles.plusIcon, {opacity: pressed ? 0.6: 1}]}>
        <View style={styles.innerPlusIcon}>
          <Plus size={16} color={'#fff'}/>
          <Text style={{color: '#fff', fontWeight: 700, fontSize: 14, paddingRight: 4}}>Update</Text>
        </View>
      </Pressable>
      }
    <View style={[styles.arrowContainer, {backgroundColor: mode === 'Expense' ? '#FF5C58' : colors.success}]}>
      <ArrowBigDownDash 
        style={mode === 'Expense' ? styles.rotate : ''}
        size={32} 
        color={'#fff'}
      />
    </View>
    <View>
      <Text style={styles.trackerCardTitle}>{title}</Text>
      <Text style={[styles.trackerCardAmount, {color: mode === 'Expense' ? "#FF5C58" : colors.success }]}>
        {mode === 'Expense' ? `-R${amount.toFixed(2)}` : `R${amount.toFixed(2)}` }
      </Text>
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
    minWidth: 165,
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
  },
  plusIcon: {
    backgroundColor: colors.success,
    borderRadius: 50,
    paddingHorizontal: 8,
    paddingVertical: 4,
    position: 'absolute',
    right: '27.5%',
    bottom: -10
  },
  innerPlusIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  }
})