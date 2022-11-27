import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './component/Home';
import QuizScreen from './component/Quiz';
import ResultScreen from './component/Result';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {

  const Stack = createNativeStackNavigator();
  return (
   
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" options={{ headerShown: false }}>
          {(props) => <HomeScreen {...props} extraData={"someData"}  />}
          </Stack.Screen>
          {/* <Stack.Screen name="Home" component={Home} /> */}
          <Stack.Screen name="Quiz" component={QuizScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Result" component={ResultScreen}  options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
      // ro
     

 
   
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 15,
  },
})
