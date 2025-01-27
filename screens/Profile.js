import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AuthContext } from '../store/auth-context'
import { colors } from '../constants/Colors'

const Profile = () => {
  const AuthCtx = useContext(AuthContext)

  const name = AuthCtx.name
  return (
    <SafeAreaView>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red'}}>
        <Text style={{fontSize: 40, color:colors.baseDark}}>Profile</Text>
        <Text style={{fontSize: 40, color: colors.baseDark}}>{name}</Text>
      </View>
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({})