import React                    from 'react'
import { 
  View, 
  StyleSheet
}                               from 'react-native'
import { NavigationContainer }  from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useFonts }             from 'expo-font'
import Login                    from './Screens/Login'
import Splash                   from './Screens/Splash'

const Stack = createStackNavigator();

const App = () => {
  const [loaded] = useFonts({
    Montserrat: require('./assets/fonts/Montserrat-Regular.ttf'),
  })

  if (!loaded) return null

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Montserrat', 
  }
})


export default App