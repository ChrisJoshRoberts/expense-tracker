import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker'
import { colors } from '../../constants/Colors'
import { 
  Apple, 
  CarTaxiFront, 
  HousePlug, 
  House, FerrisWheel, 
  Hospital, 
  Shirt, 
  Landmark, 
  MonitorSmartphone, 
  Wifi, 
  CalendarSync, 
  PiggyBank, 
  ShieldQuestion } from 'lucide-react-native'

const DropDownInput = ({onSelectItem, valueDropdown, isValid}) => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(null)
  const [items, setItems] = useState([
    {label: 'Food', value: 'food', icon: () => 
      <View style={{backgroundColor: colors.primaryPurple2, borderRadius: 6, padding: 4}}> 
        <Apple size={24} color={colors.primaryPurple} />
      </View>
      , labelStyle: {color: colors.primaryPurple, fontSize: 16, fontWeight: 500}},
    {label: 'Transport', value: 'transport',icon: () => 
      <View style={{backgroundColor: colors.primaryPurple2, borderRadius: 6, padding: 4}}> 
        <CarTaxiFront size={24} color={colors.primaryPurple} />
      </View>
      , labelStyle: {color: colors.primaryPurple, fontSize: 16, fontWeight: 500}},
    {label: 'Utilities', value: 'utilities', icon: () => 
      <View style={{backgroundColor: colors.primaryPurple2, borderRadius: 6, padding: 4}}> 
        <HousePlug size={24} color={colors.primaryPurple} />
      </View>
      , labelStyle: {color: colors.primaryPurple, fontSize: 16, fontWeight: 500}},
    {label: 'Entertainment', value: 'entertainment',
      icon: () => 
        <View style={{backgroundColor: colors.primaryPurple2, borderRadius: 6, padding: 4}}> 
          <FerrisWheel size={24} color={colors.primaryPurple} />
        </View>
        , labelStyle: {color: colors.primaryPurple, fontSize: 16, fontWeight: 500}
    },
    {label: 'Insurance', value: 'insurance',
      icon: () => 
        <View style={{backgroundColor: colors.primaryPurple2, borderRadius: 6, padding: 4}}> 
          <Hospital size={24} color={colors.primaryPurple} />
        </View>
        , labelStyle: {color: colors.primaryPurple, fontSize: 16, fontWeight: 500}
    },
    {label: 'Shopping', value: 'shopping',
      icon: () => 
        <View style={{backgroundColor: colors.primaryPurple2, borderRadius: 6, padding: 4}}> 
          <Shirt size={24} color={colors.primaryPurple} />
        </View>
        , labelStyle: {color: colors.primaryPurple, fontSize: 16, fontWeight: 500}
    },
    {label: 'Rent', value: 'rent', 
      icon: () => 
        <View style={{backgroundColor: colors.primaryPurple2, borderRadius: 6, padding: 4}}> 
          <House size={24} color={colors.primaryPurple} />
        </View>
        , labelStyle: {color: colors.primaryPurple, fontSize: 16, fontWeight: 500}
    },
    {label: 'Bond/Mortgage', value: 'bond/mortgage',
      icon: () => 
        <View style={{backgroundColor: colors.primaryPurple2, borderRadius: 6, padding: 4}}> 
          <Landmark size={24} color={colors.primaryPurple} />
        </View>
        , labelStyle: {color: colors.primaryPurple, fontSize: 16, fontWeight: 500}
    },
    {label: 'Phone', value: 'phone',
      icon: () => 
        <View style={{backgroundColor: colors.primaryPurple2, borderRadius: 6, padding: 4}}> 
          <MonitorSmartphone size={24} color={colors.primaryPurple} />
        </View>
        , labelStyle: {color: colors.primaryPurple, fontSize: 16, fontWeight: 500}
    },
    {label: 'Internet', value: 'internet',
      icon: () => 
        <View style={{backgroundColor: colors.primaryPurple2, borderRadius: 6, padding: 4}}> 
          <Wifi size={24} color={colors.primaryPurple} />
        </View>
        , labelStyle: {color: colors.primaryPurple, fontSize: 16, fontWeight: 500}
    },
    {label: 'Subscriptions', value: 'subscriptions',
      icon: () => 
        <View style={{backgroundColor: colors.primaryPurple2, borderRadius: 6, padding: 4}}> 
          <CalendarSync size={24} color={colors.primaryPurple} />
        </View>
        , labelStyle: {color: colors.primaryPurple, fontSize: 16, fontWeight: 500}
    },
    {label: 'Savings/Investments', value: 'savings/investments',
      icon: () => 
        <View style={{backgroundColor: colors.primaryPurple2, borderRadius: 6, padding: 4}}> 
          <PiggyBank size={24} color={colors.primaryPurple} />
        </View>
        , labelStyle: {color: colors.primaryPurple, fontSize: 16, fontWeight: 500}
    },
    {label: 'Other', value: 'other', 
      icon: () => 
        <View style={{backgroundColor: colors.primaryPurple2, borderRadius: 6, padding: 4}}> 
          <ShieldQuestion size={24} color={colors.primaryPurple} />
        </View>
        , labelStyle: {color: colors.primaryPurple, fontSize: 16, fontWeight: 500}
    },
  ])

  useEffect(() => {
    setValue(valueDropdown)
  }, [valueDropdown])

  const handleChangeValue = (valueDropdown) => {
    setValue(valueDropdown)
    onSelectItem(valueDropdown)
    
  }

  return (
    <>
      <Text style={[styles.label, isValid && styles.labelError]}>Category</Text>
      <DropDownPicker 
        searchable={true}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={handleChangeValue}
        setItems={setItems}
        onChangeValue={onSelectItem}
        placeholder={'Select Category'}
        style={[styles.dropdown, isValid && styles.dropdownInvalid]}
        textStyle={styles.dropdownText}
        placeholderStyle={{color: colors.baseDark, opacity: 0.3}}
        arrowIconStyle={{tintColor: colors.primaryPurple,}}
        dropDownContainerStyle={{borderRadius: 12, borderWidth: 0, backgroundColor: colors.offWhite}}
        searchContainerStyle={styles.searchBox}
        searchTextInputStyle={styles.searchTextInput}
      />
    </>
  )
}

export default DropDownInput

const styles = StyleSheet.create({
  label: {
    fontSize: 12,
    fontWeight: 700,
    marginBottom: 4,
    color: colors.primaryPurple
  },
  labelError : {
    color: colors.error
  },  
  dropdown: {
    backgroundColor: colors.offWhite,
    borderRadius: 12,
    borderWidth: 0,
    marginBottom: 18,
  },
  dropdownInvalid: {
    borderColor: colors.error,
    borderWidth: 1
  },
  dropdownText: {
    fontSize: 16,
    fontWeight: 500,
    color: colors.baseDark
  },
  searchBox: {
    // TODO 
    borderWidth: 1, 
    borderRadius: 12,
    borderColor: colors.primaryPurple,
    backgroundColor: colors.offWhite,
  },
  searchTextInput: {
    // TODO
  }
})