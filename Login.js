import { StatusBar }    from 'expo-status-bar';
import React            from 'react';
import { 
  StyleSheet, 
  TouchableOpacity, 
  Text, 
  View, 
  TextInput,
  Button
}                       from 'react-native';
import * as Animatable  from 'react-native-animatable';

const Login = ({ navigation }) => 
  <View style={styles.container}>
    <View style={styles.header}>
          <Text>Welcome</Text>
    </View>
    <View
        animation="fadeInUpBig"
        style={styles.footer}
    >
        <Text style={styles.title}>Login</Text>
        <Text style={styles.text}>Sign In To Account</Text>
        <Button 
            title="Login" 
            color="blue"
            onPress={() => navigation.navigate('Login')}
            style={styles.button} />
    </View>
  </View>

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    flex: 2,
  },
  button: {
    borderRadius: 30,
    width: 100
  },
  footer: {
    flex: 1,
    width: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#009387',
    paddingHorizontal: 50,
    paddingVertical: 30
  },
});

export default Login