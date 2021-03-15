import React, { useState }      from 'react'
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput,
}                               from 'react-native'
import * as Animatable          from 'react-native-animatable'
import { FontAwesomeIcon }      from '@fortawesome/react-native-fontawesome'
import { faLock }               from '@fortawesome/free-solid-svg-icons'
import AppButton                from './assets/AppButton'

const Login = () => {
  const [data, setData] = useState({
    name: '',
    password: '',
    isValidUser: false,
    isValidPassword: false,
    nameError: false,
    passwordError: false,
  })

  const signIn = () => {
    if(data.name.length === 0){
      setData({
        ...data,
        nameError: true,
      })      
    } else {
      setData({
        ...data,
        nameError: false,
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
      
    if(data.name.length === 0 && data.password.length === 0){
      setData({
        ...data,
        passwordError: true,
        nameError: true,
      })
    } 
      
    if(data.password === 'peanutbutter'){
      alert('PASSWORD CORRECT!')
    }
  }

  const nameChange = (e) => {
    const val = e.target.value;

    if(/[^a-zA-Z0-9.]/.test(val)){
      setData({
        ...data,
        name: val,
        nameError: true,
      })
    } else {
      setData({
        ...data,
        name: val,
        nameError: false,
      })
    }
  }

  const passwordChange = (e) => {
    const val = e.target.value;

    if(/[^a-zA-Z0-9!@#$%^&*()-_+=.?]/.test(val)){
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

        <Text style={styles.label}>Name</Text>
        <View style={styles.action}>
          <FontAwesomeIcon 
            color="#009387"
            size={14}
            icon={ faLock } />
          <TextInput
            style={styles.textInput}
            placeholder="Your Name"
            autoCapitalize="none"
            onChange={nameChange}
          />
        </View>
        {
          data.nameError ?         
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
        <Text style={styles.footer_text}>Cap Gemini</Text>
        <Text style={styles.footer_text}>Julio Cornelio</Text>
        <Text style={styles.footer_text}>New York City</Text>
      </View>
    </View>
  )  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    flex: 2,
    padding: 50,
    paddingTop: 20,
  },
  text: {
    flex: 2,
  },
  label: {
    fontSize: 20
  },
  errorMsg: {
    color: 'red',
    fontSize: 12,
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
  footer_text: {
    fontSize: 18,
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