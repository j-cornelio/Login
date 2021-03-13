import { StatusBar }    from 'expo-status-bar';
import React            from 'react';
import { 
  StyleSheet, 
  TouchableOpacity, 
  Text, 
  View, 
  TextInput,
  Image,
  Button
}                       from 'react-native';
import * as Animatable  from 'react-native-animatable';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Animatable.Image
          animation="bounceIn"
          duration={1000}
          source={require('./assets/logo.png')}
          style={styles.logo}
          resizeMode="stretch"
        />
      </View>

      <Animatable.View
        animation="fadeInUpBig"
        style={styles.footer}
      >
        <Text style={styles.title}>Stay Connected</Text>
        <Text style={styles.text}>Sign In To Account</Text>
        <TouchableOpacity>
          <Button 
            title="Login" 
            color="blue"
            style={styles.button} />
        </TouchableOpacity>
        <StatusBar style="auto" />
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
  },
  logo: {
    width: 192,
    height: 185
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
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#009387',
    paddingHorizontal: 50,
    paddingVertical: 30
  },
});
