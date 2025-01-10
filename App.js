import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import AllExpenses from './screens/AllExpenses';
import { StyleSheet } from 'react-native';
import ManageExpense from './screens/ManageExpense';
import RecentExpenses from './screens/RecentExpenses';

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

function ExpensesOverview() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="RecentExpenses" component={RecentExpenses} />
      <Tab.Screen name="AllExpenses" component={AllExpenses} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <>
    <StatusBar style="auto" />
    <NavigationContainer style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name="ManageExpenses" component={ManageExpense} />
        <Stack.Screen name="ExpensesOverview" component={ExpensesOverview} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
