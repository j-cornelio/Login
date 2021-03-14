import React               from 'react';
import { 
  Button, 
  View, 
  Text,
  StyleSheet,
}                           from 'react-native';
import * as Animatable      from 'react-native-animatable';

const Splash = ({ navigation }) => 
    <View style={styles.container}>
        <View style={styles.header}>
            <Animatable.Image
                animation="bounceIn"
                duration={1000}
                source={require('./assets/logo.png')}
                style={styles.logo}
                resizeMode="stretch"
            />
            <Animatable.View
                animation="fadeInUpBig"
                style={styles.footer}
            >
                <Text style={styles.title}>Stay Connected</Text>
                <Text style={styles.text}>Sign In To Account</Text>
                <Button 
                    title="Login" 
                    color="blue"
                    onPress={() => navigation.navigate('Login')}
                    style={styles.button} />
            </Animatable.View>
        </View>
    </View>

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 26,
      color: '#fff',
      marginBottom: 10
    },
    text: {
      fontSize: 18,
      color: '#fff',
      marginBottom: 10
    },
    button: {
      borderRadius: 30,
      width: 100
    },
    logo: {
      width: 192,
      height: 185
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

export default Splash