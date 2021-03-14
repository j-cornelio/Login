import { StatusBar }            from 'expo-status-bar'
import React, { useState }      from 'react'
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput,
  TouchableOpacity
}                               from 'react-native'
import * as Animatable          from 'react-native-animatable'
import { FontAwesomeIcon }      from '@fortawesome/react-native-fontawesome'
import { faLock }               from '@fortawesome/free-solid-svg-icons'

const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
)

const Login = ({ navigation }) => {
  const [data, setData] = useState({
    email: '',
    password: '',
    isValidUser: false,
    isValidPassword: false,
    emailError: false,
    passwordError: false,
  })

  const signIn = () => {
    console.log('data ,', data)
    
    if(data.email.length === 0){
      setData({
        ...data,
        emailError: true,
      })      
    } else {
      setData({
        ...data,
        emailError: false,
      })
    }
      
    if(data.password.length === 0){
      setData({
        ...data,
        passwordError: true,
      })
    } else {
      setData({
        ...data,
        passwordError: false,
     })
  }
      
    if(data.email.length === 0 && data.password.length === 0){
      console.log('BOTH error - ', data.password.length === 0)
      setData({
        ...data,
        passwordError: true,
        emailError: true,
      })
    } 
      

    if(data.password === 'peanutbutter'){
      alert('YEEEEEEh!')
    }
  }

  const emailChange = (e) => {
      const val = e.target.value;

    if(/[^a-zA-Z0-9.]/.test(val)){
      setData({
        ...data,
        email: val,
        emailError: true,
      })
    } else {
      setData({
        ...data,
        email: val,
        emailError: false,
      })
    }
  }

  const passwordChange = (e) => {
    const val = e.target.value;

    if(/[^a-zA-Z0-9]/.test(val)){
      setData({
        ...data,
        password: val,
        passwordError: true,
      })
    } else {
      setData({
        ...data,
        password: e.target.value,
        isValidPassword: true,
        passwordError: false,
      })
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>

        <Text style={styles.label}>Email</Text>
        <View style={styles.action}>
          <FontAwesomeIcon 
            color="#009387"
            size={14}
            icon={ faLock } />
          <TextInput
            style={styles.textInput}
            placeholder="Your Email"
            autoCapitalize="none"
            onChange={emailChange}
          />
        </View>
        {
          data.emailError ?         
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>Please enter correct Username</Text>
            </Animatable.View> : null
        }
  
        <Text style={[styles.label, {marginTop: 35}]}>Password</Text>
        <View style={styles.action}>
          <FontAwesomeIcon 
            color="#009387"
            size={14}
            icon={ faLock } />
          <TextInput
            style={styles.textInput}
            placeholder="Your Password"
            secureTextEntry={true}
            autoCapitalize="none"
            onChange={passwordChange}
          />
        </View>
        {
          data.passwordError ?
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>Please enter correct Password</Text>
            </Animatable.View> : null
        }

        <View style={styles.screenContainer}>
          <AppButton title="Sign In" onPress={signIn} size="sm" backgroundColor="#007bff" />
        </View>
      </View>

      <View animation="fadeInUpBig" style={styles.footer}>
        <Text style={styles.title}>Julio Cornelio</Text>
      </View>
    </View>
  )  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: 'white'
  },
  header: {
    flex: 2,
  },
  text: {
    flex: 2,
  },
  label: {
    fontSize: 20
  },
  errorMsg: {
    color: 'red',
    fontSize: 10
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'green',
    paddingBottom: 5
  },
  textInput: {
    flex: 1,
    marginTop: 0,
    marginLeft: 10,
    color: '#05375a',
    borderWidth: 0,
    borderStyle: 'solid',
    borderColor: '#eee'
  },
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 16
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
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