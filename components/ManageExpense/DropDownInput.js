import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker'
import { colors } from '../../constants/Colors'
import { Apple } from 'lucide-react-native'

const DropDownInput = () => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(null)
  const [items, setItems] = useState([
    {label: 'Food', value: 'food', icon: () => <Apple size={24} />, labelStyle: {color: colors.primaryPurple, fontSize: 16, fontWeight: 500}},
    {label: 'Transport', value: 'transport'},
    {label: 'Utilities', value: 'utilities'},
    {label: 'Entertainment', value: 'entertainment'},
    {label: 'Health', value: 'health'},
    {label: 'Insurance', value: 'insurance'},
    {label: 'Education', value: 'education'},
    {label: 'Clothing', value: 'clothing'},
    {label: 'Shopping', value: 'shopping'},
    {label: 'Rent', value: 'rent'},
    {label: 'Bond/Mortgage', value: 'bond/mortgage'},
    {label: 'Phone', value: 'phone'},
    {label: 'Internet', value: 'internet'},
    {label: 'Subscriptions', value: 'subscriptions'},
    {label: 'Savings/Investments', value: 'savings/investments'},
    {label: 'Other', value: 'other'},
  ])
  return (
    <DropDownPicker 
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      onChangeValue={(value) => console.log(value)}
      placeholder={'Select Category'}
      style={styles.dropdown}
      textStyle={styles.dropdownText}
      placeholderStyle={{color: colors.baseDark, opacity: 0.3}}
      arrowIconStyle={{tintColor: colors.primaryPurple,}}
      dropDownContainerStyle={{borderRadius: 12, borderWidth: 0, backgroundColor: colors.offWhite}}
    />
  )
}

export default DropDownInput

const styles = StyleSheet.create({
  dropdown: {
    backgroundColor: colors.offWhite,
    borderRadius: 12,
    borderWidth: 0
  },
  dropdownText: {
    fontSize: 16,
    fontWeight: 500,
    color: colors.baseDark
  }
})