import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Plus } from 'lucide-react-native'
import { useNavigation } from '@react-navigation/native'

const IconButtonAdd = ({title}) => {
  const navigation = useNavigation()

  const iconBtnPressHandler = () => {
    navigation.navigate('ManageExpenses')
  }

  return (
    <Pressable 
      onPress={iconBtnPressHandler}
      style={({pressed}) => [{opacity: pressed ? 0.6 : 1}]} >
      <View style={styles.button}>
        <Plus size={24} color={'#fff'} strokeWidth={1.2}/>
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </Pressable>
  )
}

export default IconButtonAdd

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 40,
    paddingLeft: 8,
    paddingVertical: 8,
    paddingRight: 12,
    gap: 5
  },
  buttonText: {
    color: '#fff',
    fontWeight: 500
  }
})