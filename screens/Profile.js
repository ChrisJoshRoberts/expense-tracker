import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AuthContext } from '../store/auth-context'
import { colors } from '../constants/Colors'
import Button from '../components/ExpensesOutput/UI/Button'

const Profile = () => {
  const AuthCtx = useContext(AuthContext)

  const name = AuthCtx.displayName

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 40, color:colors.baseDark}}>Profile</Text>
        <Text style={{fontSize: 40, color: colors.baseDark}}>{`Hello ${name ? name : 'there.'}`}</Text>
        <Button onPress={AuthCtx.logout}>Logout</Button>
      </View>
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({})