import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Swiper from 'react-native-swiper'
import { onboarding } from '../../constants'
import Button from '../../components/ExpensesOutput/UI/Button'
import { colors } from '../../constants/Colors'
import logo from '../../assets/onboarding/logo.png'


const OnboardingScreen = ({navigation}) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const islastSlide = activeIndex === onboarding.length - 1
  return (
    <LinearGradient
      colors={['#DEE0E1', '#d0bdd8c9','#a0bececa', '#DEE0E1']}
      locations={[0., 0.5, 0.7, 1]}
      style={styles.gradientBackground}
    >
      <SafeAreaView style={styles.container}>
        <TouchableOpacity 
          style={styles.skip}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
        <Image source={logo} resizeMode='contain' style={{width: 120}} />
        <Swiper
          loop={false}
          dotStyle={{ backgroundColor: '#ffffff8c', borderColor: '#ffffff8c', borderWidth: 1 }}
          activeDotStyle={{ backgroundColor: colors.primaryPurple, borderColor: colors.primaryPurple, borderWidth: 1 }}
          paginationStyle={{ bottom: 16 }}
          onIndexChanged={(index) => setActiveIndex(index)}
        >
            {onboarding.map((item, index) => (
              <View
                key={index}
                style={styles.swiperContainer}
              >
                <Image source={item.image} style={{width: 200, height: 200}} />
                <Text style={styles.swiperText}>{item.title}</Text>
                <Text style={styles.swiperDescription}>{item.description}</Text>
              </View>
            ))}
          </Swiper>
          {islastSlide && <Button onPress={() => navigation.navigate('Login')}>Let's Go</Button>}
      </SafeAreaView>
    </LinearGradient>
  )
}

export default OnboardingScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16
  },
  gradientBackground: {
    flex: 1,
  },
  skip: {
    width: '100%',
    alignItems: 'flex-end',
    padding: 16
  },
  skipText: {
    color: '#0000009e',
    backgroundColor: '#ffffff8c',
    padding: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5
  },
  swiperContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff99',
    marginHorizontal: 16,
    marginBottom: 48,
    borderRadius: 32,
  },
  swiperText: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '700',
    color: '#211d4ed1',
    width: '80%',
  },
  swiperDescription: {
    textAlign: 'center',
    fontSize: 16,
    color: '#09003268',
    width: '80%',
    paddingTop: 16
  }
})