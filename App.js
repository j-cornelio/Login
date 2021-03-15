import React                    from 'react'
import { 
  View, 
  StyleSheet
}                               from 'react-native'
import { NavigationContainer }  from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login                    from './Login'
import Splash                   from './Splash'

const Stack = createStackNavigator();

const App = () => 
  <View style={styles.container}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  </View>

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})


export default App