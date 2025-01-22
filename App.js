import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import AllExpenses from './screens/AllExpenses';
import { StyleSheet, View } from 'react-native';
import ManageExpense from './screens/ManageExpense';
import RecentExpenses from './screens/RecentExpenses';
import { colors } from './constants/Colors';
import { HandCoins,  WalletCards, ChartPie } from 'lucide-react-native';
import ExpensesContextProvider from './store/expenses-context';
import Budget from './screens/Budget';
import AddBudget from './screens/AddBudget';
import BudgetContextProvider from './store/budget-context';
import LoginScreen from './screens/Auth/LoginScreen';
import SignUpScreen from './screens/Auth/SignUpScreen';
import OnboardingScreen from './screens/Onboarding/OnboardingScreen';


const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

function ExpensesOverview() {
  return (
    <Tab.Navigator 
    initialRouteName='Budget'
    screenOptions={{
      headerShown: false,
      tabBarStyle: styles.tabBar,
      tabBarActiveTintColor: colors.primaryPurple,
      tabBarInactiveTintColor: colors.grey,
      tabBarShowLabel: false,
      tabBarItemStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
      }
    }}>
      <Tab.Screen name="Budget" component={Budget} options={{
        tabBarIcon: ({size, color}) => (
          <ChartPie  size={32} color={color} />
        )
      }} />
      <Tab.Screen name="RecentExpenses" component={RecentExpenses} options={{
        tabBarIcon: ({size, color}) => (
          <HandCoins size={32} color={color} />
        )
      }} />
      <Tab.Screen name="AllExpenses" component={AllExpenses} options={{
        tabBarIcon: ({size, color}) => (
          <WalletCards  size={32} color={color} />
        )
      }} />
    </Tab.Navigator>
  )
}
function OnboardingStack() {
  return (
    <>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
    </>
  )
}
function AuthStack() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack.Navigator initialRouteName='Login' screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </>
  )
}

function AuthenticatedStack() {
  return (
    <>
    <StatusBar style="light" />
      <BudgetContextProvider>
        <ExpensesContextProvider>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="ExpensesOverview" component={ExpensesOverview} options={{
                headerShown: false
              }}/>
              <Stack.Screen name="ManageExpenses" component={ManageExpense}
                options={{
                  headerShown: false,
                  presentation: 'modal',
                }}
              />
              <Stack.Screen name="AddBudget" component={AddBudget} 
                options={{
                  headerShown: false,
                  presentation: 'modal',
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </ExpensesContextProvider>
      </BudgetContextProvider>
    </>
  )
}
export default function App() {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    borderTopWidth: 0,
    borderRadius: 10,
    height: '10%',
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowColor: colors.baseDark,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5
  },
})
