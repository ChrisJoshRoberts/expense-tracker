import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Swiper from 'react-native-swiper'
import { onboarding } from '../../constants'


const OnboardingScreen = () => {
  return (
    <LinearGradient
      colors={['#DEE0E1', '#d0bdd8c9','#a0bececa', '#DEE0E1']}
      locations={[0., 0.5, 0.7, 1]}
      style={styles.gradientBackground}
    >
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.skip}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
        <Swiper
          loop={false}
          dotStyle={{ backgroundColor: '#ffffff8c', borderColor: '#ffffff8c', borderWidth: 1 }}
          activeDotStyle={{ backgroundColor: '#ffffff', borderColor: '#ffffff', borderWidth: 1 }}
          paginationStyle={{ bottom: 16 }}>
            {onboarding.map((item, index) => (
              <View
                style={styles.swiperContainer}
                key={item.key}
              >
                <Text style={styles.swiperText}>{item.title}</Text>
              </View>
            ))}
          </Swiper>
      </SafeAreaView>
    </LinearGradient>
  )
}

export default OnboardingScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
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
  },
  swiperText: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
    width: '80%',
  }
})